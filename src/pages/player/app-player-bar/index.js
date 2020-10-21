import React, { memo, useState, useEffect, useRef, useCallback } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { Slider, message } from "antd"
import { PlaybarWrapper, Operator, PlayInfo, Control } from './style'

import AppPlayPanel from '../app-player-panel'

import { getSongDetailAction, changeSequenceAction, changeCurrentSong, changeCurLyricIndexAction, changeIsshowPanelAction, changeIsShowVolumeAction } from '../store/actionCreator'

import { getSizeImage, formatMinuteSecond, getPlaySong } from '@/utils/format-utils.js'

export default memo(function AppPlayerBar() {
  const [currentTime, setCurrentTime] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isChanging, setIsChanging] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLocking, setIsLocking] = useState(false);
  const [volume, setVolume] = useState(0.8);
  const [playbarWrapperBottom, setPlaybarWrapperBottom] = useState({ bottom: "-45px" });

  const dispatch = useDispatch();
  const history = useHistory();

  const { currentSong, sequence, lyricList, playList, curLyricIndex, isShowVolume, isshowPanel } = useSelector(state => ({
    currentSong: state.getIn(["player", "currentSong"]),
    sequence: state.getIn(["player", "sequence"]),
    lyricList: state.getIn(["player", "lyricList"]),
    playList: state.getIn(["player", "playList"]),
    curLyricIndex: state.getIn(["player", "curLyricIndex"]),
    isShowVolume: state.getIn(["player", "isShowVolume"]),
    isshowPanel: state.getIn(["player", "isshowPanel"]),
  }), shallowEqual)


  const audioRef = useRef();
  useEffect(() => {
    dispatch(getSongDetailAction(currentSong.id))
  }, [dispatch, currentSong]);
  useEffect(() => {
    if (currentSong.id) audioRef.current.src = getPlaySong(currentSong.id);
    audioRef.current.play().then(res => {
      setIsPlaying(true)
    }).catch(err => {
      if (Object.keys(currentSong).length) message.error('当前歌曲无版权或音源不可用，请切换下一首歌曲', 5);
      setIsPlaying(false)
    })
  }, [currentSong])

  const picUrl = (currentSong.al && currentSong.al.picUrl) || "";
  const singerName = (currentSong.ar && currentSong.ar[0].name) || "";
  const singerId = (currentSong.ar && currentSong.ar[0].id) || "";
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
    //因为有了歌词面板展示，所以这里不展示了
    if (curLyricIndex !== i - 1) {
      dispatch(changeCurLyricIndexAction(i - 1))
      // const content = lyricList[i - 1] && lyricList[i - 1].content;
      // if (content) {
      //   message.open({
      //     content,
      //     duration: 0,
      //     key: "lyric",
      //     className: "lyric-class"
      //   })
      // }
    }
  }

  const handleChange = useCallback((value) => {
    setIsChanging(true)
    setProgress(value);
    setCurrentTime(value / 100 * duration);
  }, [duration])


  const handleVolumeChange = useCallback((value) => {
    audioRef.current.volume = value / 100;
    setVolume(value / 100)
  }, [])


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
    setProgress(0);
    //单曲循环
    if (sequence === 2) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    } else {
      dispatch(changeCurrentSong(1))
    }
  }

  const setPlaybarWrapperStyle = (flag) => {
    if (isLocking || flag) {
      setPlaybarWrapperBottom({ bottom: "0" })
    } else {
      setPlaybarWrapperBottom({ bottom: "-45px" })
    }
  }

  const handleClick = (flag, e) => {
    if (!flag) {
      e.stopPropagation();
      e.preventDefault();
      return;
    }
    dispatch(changeIsShowVolumeAction(false));
    dispatch(changeIsshowPanelAction(false));
  }

  const linkto = (id) => {
    history.push("/song?id=" + id)
  }

  return (
    <PlaybarWrapper
      className="sprite_player"
      style={playbarWrapperBottom}
      onMouseOver={() => setPlaybarWrapperStyle(true)}
      onMouseOut={() => setPlaybarWrapperStyle(false)}
      onClick={() => handleClick(true)}>
      <div className="content wrap-v2" onClick={(e) => handleClick(false, e)}>
        <Control isPlaying={isPlaying}>
          <button className="sprite_player prev" onClick={e => changeMusic(-1)} title="上一首"></button>
          <button className="sprite_player play" onClick={() => PlayMusic()} title="播放/暂停"></button>
          <button className="sprite_player next" onClick={e => changeMusic(1)} title="下一首"></button>
        </Control>
        <PlayInfo>
          <NavLink to={"/song?id=" + currentSong.id} className="image">
            <img src={picUrl ? getSizeImage(picUrl, 35) : require('@/assets/img/default_album.jpg')} className={picUrl ? "" : "default_album"} alt="" />
            <div onClick={() => linkto(currentSong.id)} className={picUrl ? "" : "sprite_player placeholderImg"}>
            </div>
          </NavLink>
          <div className="info">
            <div className="song">
              <NavLink to={"/song?id=" + currentSong.id}><span className="song-name">{currentSong.name}</span></NavLink>
              <NavLink to={"/singer?id=" + singerId} className="singer-name">{singerName}</NavLink>
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
            <button className="sprite_player btn favor" title="收藏"></button>
            <button className="sprite_player btn share" title="分享"></button>
          </div>
          <div className="right sprite_player">
            <div className="volume-slider" style={{ display: isShowVolume ? "block" : "none" }}>
              <div className="bg sprite_player"></div>
              <Slider tooltipVisible={false} value={volume * 100} onChange={handleVolumeChange} vertical />
            </div>
            <button className="sprite_player btn volume" onClick={() => dispatch(changeIsShowVolumeAction(!isShowVolume))}></button>
            <button className="sprite_player btn loop" onClick={() => changeSequence()} title={sequence === 0 ? "循环" : (sequence === 1 ? "随机" : "单曲循环")}></button>
            <button className="sprite_player btn playlist" title="播放列表" onClick={() => dispatch(changeIsshowPanelAction(!isshowPanel))}>{playList.length}</button>
          </div>
        </Operator>
      </div>
      <audio ref={audioRef} onTimeUpdate={UpdateTime} onEnded={handleMusicEnd} />
      <div className="updn">
        <div className="updown sprite_player">
          <span onClick={() => setIsLocking(!isLocking)} className={isLocking ? "btn sprite_player lock" : "btn sprite_player unlock"}></span>
        </div>
      </div>
      <div
        className="hand"
        onMouseOver={() => setPlaybarWrapperStyle(true)}
        onMouseOut={() => setPlaybarWrapperStyle(false)}></div>
      {isshowPanel && <AppPlayPanel onClick={(e) => handleClick(false, e)} />}
    </PlaybarWrapper>
  )
})
