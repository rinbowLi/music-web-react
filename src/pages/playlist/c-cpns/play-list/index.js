import React, { memo } from 'react'
import { NavLink } from "react-router-dom"
import { PlaylistWrapper } from './style'
import { useDispatch } from "react-redux"
import { getSongDetailAction } from '@/pages/player/store/actionCreator'

import { formatMinuteSecond } from '@/utils/format-utils'

export default memo(function Playlist({ playlistDetail }) {
  const list = playlistDetail.playlist;

  const dispatch = useDispatch();

  const playMusic = (id) => {
    dispatch(getSongDetailAction(id));
  }

  return (
    <PlaylistWrapper>
      <div className="head">
        <div className="left">
          <span className="title">歌曲列表</span>
          <span className="count">{list && list.trackCount}首歌</span>
        </div>
        <div className="right">
          播放：<span>{list && list.playCount}</span>次
        </div>
      </div>
      <div className="list">
        <div className="list-header">
          <div className="w1 sprite_table"></div>
          <div className="w2 sprite_table">歌曲标题</div>
          <div className="w3 sprite_table">时长</div>
          <div className="w4 sprite_table">歌手</div>
          <div className="w5 sprite_table">专辑</div>
        </div>
        <div className="list-main">
          {
            list && list.tracks.map((item, index) => {
              return (<div className="list-item" key={item.id}>
                <div className="w1 code">{index + 1}<i className="sprite_table play" title="播放" onClick={() => playMusic(item.id)}></i></div>
                <div className="w2 text-nowrap"><NavLink to={"/song?id=" + item.id}>{item.name}</NavLink></div>
                <div className="w3 text-nowrap time">{formatMinuteSecond(item.dt)}</div>
                <div className="w4 text-nowrap">{item.ar.map(item => item.name).join("/")}</div>
                <div className="w5 text-nowrap"><NavLink to={"/album?id=" + item.al.id}>{item.al.name}</NavLink></div>
              </div>)
            })
          }
        </div>
      </div>
    </PlaylistWrapper>
  )
})
