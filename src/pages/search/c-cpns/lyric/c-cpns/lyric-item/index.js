import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import { LyricsWarpper } from './style'
import LyricDetail from '../lyric-detail'

import { formatMinuteSecond, highLight } from '@/utils/format-utils'
import { useDispatch, useSelector, shallowEqual } from "react-redux"
import { getSongDetailAction } from '@/pages/player/store/actionCreator'

export default memo(function LyricItem(props) {
  const { item } = props;
  const dispatch = useDispatch();

  const playMusic = (id) => {
    dispatch(getSongDetailAction(id));
  }
  const { keywords } = useSelector(state => ({
    keywords: state.getIn(["search", "keywords"])
  }), shallowEqual);

  return (
    <LyricsWarpper>
      <div className="item">
        <div className="songName"><span className="table play" onClick={() => playMusic(item.id)}></span><span dangerouslySetInnerHTML={{ __html: highLight(item.name, keywords) }}></span></div>
        <div className="singerName"><span dangerouslySetInnerHTML={{ __html: highLight(item.artists ? item.artists[0].name : "未知歌手", keywords) }}></span></div>
        <div className="albumName"><NavLink to={"album?id=" + (item.album && item.album.id)} dangerouslySetInnerHTML={{ __html: highLight(item.album ? item.album.name : "未知专辑", keywords) }}></NavLink></div>
        <div className="time">{formatMinuteSecond(item.duration)}</div>
      </div>
      <div className="lyric">
        <LyricDetail lyrics={item.lyrics} />
      </div>
    </LyricsWarpper>
  )
})
