import React, { memo, useState, useEffect, useRef, useCallback } from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { Slider } from "antd"
import { PlaybarWrapper, Operator, PlayInfo, Control } from './style'

import { getSongDetailAction } from '../store/actionCreator'

import { getSizeImage, formatMinuteSecond, getPlaySong } from '@/utils/format-utils.js'

export default memo(function AppPlayerBar() {
  const [currentTime, setCurrentTime] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isChanging, setIsChanging] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const dispatch = useDispatch();

  const { currentSong } = useSelector(state => ({
    currentSong: state.getIn(["player", "currentSong"])
  }), shallowEqual)


  const audioRef = useRef();
  useEffect(() => {
    dispatch(getSongDetailAction(467952048))
  }, [dispatch]);
  useEffect(() => {
    audioRef.current.src = getPlaySong(currentSong.id)
  }, [currentSong])

  const picUrl = (currentSong.al && currentSong.al.picUrl) || "";
  const singerName = (currentSong.ar && currentSong.ar[0].name) || "未知歌手";
  const duration = currentSong.dt || 0;
  const showDuration = formatMinuteSecond(duration);

  const PlayMusic = useCallback(() => {
    isPlaying ? audioRef.current.pause() : audioRef.current.play()
    setIsPlaying(!isPlaying)
  }, [isPlaying])

  const UpdateTime = (e) => {
    if (!isChanging) {
      setCurrentTime(e.target.currentTime * 1000)
      setProgress(e.target.currentTime * 1000 / duration * 100)
    }
  }

  const handleChange = useCallback((value) => {
    setIsChanging(true)
    setProgress(value);
    setCurrentTime(value / 100 * duration);
  }, [duration])


  const handleAfterChange = useCallback((value) => {
    console.log(value)
    audioRef.current.currentTime = value / 100 * duration / 1000;
    setProgress(value);
    setIsChanging(false);
    if (!isPlaying) PlayMusic();
  }, [PlayMusic, duration, isPlaying])

  return (
    <PlaybarWrapper className="sprite_player">
      <div className="content wrap-v2">
        <Control isPlaying={isPlaying}>
          <button className="sprite_player prev"></button>
          <button className="sprite_player play" onClick={() => PlayMusic()}></button>
          <button className="sprite_player next"></button>
        </Control>
        <PlayInfo>
          <div className="image">
            <NavLink to="/discover/player">
              <img src={getSizeImage(picUrl, 35)} alt="" />
            </NavLink>
          </div>
          <div className="info">
            <div className="song">
              <NavLink to="/discover/player"><span className="song-name">{currentSong.name}</span></NavLink>
              <a href="#/" className="singer-name">{singerName}</a>
            </div>
            <div className="progress">
              <Slider value={progress} onChange={handleChange} onAfterChange={handleAfterChange} tooltipVisible={false} />
              <div className="time">
                <span className="now-time">{formatMinuteSecond(currentTime)}</span>
                <span className="divider">/</span>
                <span className="duration">{showDuration}</span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator>
          <div className="left">
            <button className="sprite_player btn favor"></button>
            <button className="sprite_player btn share"></button>
          </div>
          <div className="right sprite_player">
            <button className="sprite_player btn volume"></button>
            <button className="sprite_player btn loop"></button>
            <button className="sprite_player btn playlist"></button>
          </div>
        </Operator>
      </div>
      <audio ref={audioRef} onTimeUpdate={UpdateTime} />
    </PlaybarWrapper>
  )
})
