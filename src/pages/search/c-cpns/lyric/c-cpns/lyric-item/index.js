import React, { memo } from 'react'
import { LyricsWarpper } from './style'
import LyricDetail from '../lyric-detail'

import { formatMinuteSecond } from '@/utils/format-utils'
import { useDispatch } from "react-redux"
import { getSongDetailAction } from '@/pages/player/store/actionCreator'

export default memo(function LyricItem(props) {
  const { item } = props;
  const dispatch = useDispatch();
  console.log(item)
  const playMusic = (id) => {
    dispatch(getSongDetailAction(id));
  }
  return (
    <LyricsWarpper>
      <div className="item">
        <div className="songName"><span className="table play" onClick={() => playMusic(item.id)}></span>{item.name}</div>
        <div className="singerName">{item.artists ? item.artists[0].name : "未知歌手"}</div>
        <div className="albumName">{item.album ? item.album.name : "未知专辑"}</div>
        <div className="time">{formatMinuteSecond(item.duration)}</div>
      </div>
      <div className="lyric">
        <LyricDetail lyrics={item.lyrics} />
      </div>
    </LyricsWarpper>
  )
})
