import React, { memo } from 'react'
import { NavLink } from "react-router-dom";

import { SongsWarpper } from './style'

import { formatMinuteSecond, highLight } from '@/utils/format-utils'
import { useDispatch, useSelector, shallowEqual } from "react-redux"
import { getSongDetailAction } from '@/pages/player/store/actionCreator'

export default memo(function Songs(props) {
  const { result } = props;
  const dispatch = useDispatch();

  const { keywords } = useSelector(state => ({
    keywords: state.getIn(["search", "keywords"])
  }), shallowEqual);

  const playMusic = (id) => {
    dispatch(getSongDetailAction(id));
  }

  return (
    <SongsWarpper>
      {
        result && result.map((item, index) => {
          return (<div key={item.id} className="item">
            <div className="songName"><span className="table play" onClick={() => playMusic(item.id)}></span><NavLink to={"/song?id=" + item.id}><span dangerouslySetInnerHTML={{ __html: highLight(item.name, keywords) }}></span></NavLink></div>
            <div className="singerName"><span dangerouslySetInnerHTML={{ __html: highLight(item.artists ? item.artists[0].name : "未知歌手", keywords) }}></span></div>
            <div className="albumName"><NavLink to={"/album?id=" + item.album.id} dangerouslySetInnerHTML={{ __html: highLight(item.album ? item.album.name : "未知专辑", keywords) }}></NavLink></div>
            <div className="time">{formatMinuteSecond(item.duration)}</div>
          </div>)
        })
      }
      {(!result || result.length === 0) && <div> 暂无搜索结果</div>}
    </SongsWarpper >
  )
})
