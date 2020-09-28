import React, { memo, useState, useEffect, useRef, useCallback } from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { Slider, message } from "antd"
import { PlaybarWrapper, Operator, PlayInfo, Control } from './style'

import { getSongDetailAction, changeSequenceAction, changeCurrentSong, changeCurLyricIndexAction } from '../store/actionCreator'

import { getSizeImage, formatMinuteSecond, getPlaySong } from '@/utils/format-utils.js'

export default memo(function AppPlayerBar() {
  const [currentTime, setCurrentTime] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isChanging, setIsChanging] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const dispatch = useDispatch();

  const { currentSong, sequence, lyricList, curLyricIndex } = useSelector(state => ({
    currentSong: state.getIn(["player", "currentSong"]),
    sequence: state.getIn(["player", "sequence"]),
    lyricList: state.getIn(["player", "lyricList"]),
    curLyricIndex: state.getIn(["player", "curLyricIndex"]),
  }), shallowEqual)


  const audioRef = useRef();
  useEffect(() => {
    dispatch(getSongDetailAction(467952048))
  }, [dispatch]);
  useEffect(() => {
    audioRef.current.src = getPlaySong(currentSong.id);
    audioRef.current.play().then(res => {
      setIsPlaying(true)
    }).catch(err => {
      setIsPlaying(false)
    })
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
    const _currentTime = e.target.currentTime;
    if (!isChanging) {
      setCurrentTime(_currentTime * 1000)
      setProgress(_currentTime * 1000 / duration * 100)
    }

    //获取当前时间歌词的位置
    let i = 0;
    for (; i < lyricList.length; i++) {
      let lyricItem = lyricList[i];
      if (_currentTime * 1000 < lyricItem.time) {
        break;
      }
    }

    //优化性能，不会评分调用changeCurLyricIndexAction，只有index发生改变的时候才调用
    if (curLyricIndex !== i - 1) {
      dispatch(changeCurLyricIndexAction(i - 1))
      console.log(lyricList[i - 1])
      const content = lyricList[i - 1] && lyricList[i - 1].content;
      message.open({
        content,
        duration: 0,
        key: "lyric",
        className: "lyric-class"
      })
    }
  }

  const handleChange = useCallback((value) => {
    setIsChanging(true)
    setProgress(value);
    setCurrentTime(value / 100 * duration);
  }, [duration])


  const handleAfterChange = useCallback((value) => {
    audioRef.current.currentTime = value / 100 * duration / 1000;
    setProgress(value);
    setIsChanging(false);
    if (!isPlaying) PlayMusic();
  }, [PlayMusic, duration, isPlaying]);


  const changeSequence = () => {
    sequence === 2 ? dispatch(changeSequenceAction(0)) : dispatch(changeSequenceAction(sequence + 1));
  }


  const changeMusic = (tag) => {
    dispatch(changeCurrentSong(tag))
  }

  const handleMusicEnd = () => {
    //单曲循环
    if (sequence === 2) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    } else {
      dispatch(changeCurrentSong(1))
    }
  }

  return (
    <PlaybarWrapper className="sprite_player">
      <div className="content wrap-v2">
        <Control isPlaying={isPlaying}>
          <button className="sprite_player prev" onClick={e => changeMusic(-1)}></button>
          <button className="sprite_player play" onClick={() => PlayMusic()}></button>
          <button className="sprite_player next" onClick={e => changeMusic(1)}></button>
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
        <Operator sequence={sequence}>
          <div className="left">
            <button className="sprite_player btn favor"></button>
            <button className="sprite_player btn share"></button>
          </div>
          <div className="right sprite_player">
            <button className="sprite_player btn volume"></button>
            <button className="sprite_player btn loop" onClick={() => changeSequence()}></button>
            <button className="sprite_player btn playlist"></button>
          </div>
        </Operator>
      </div>
      <audio ref={audioRef} onTimeUpdate={UpdateTime} onEnded={handleMusicEnd} />
    </PlaybarWrapper>
  )
})
