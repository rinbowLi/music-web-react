import React, { memo } from 'react'

import { SongsWarpper } from './style'

import { formatMinuteSecond } from '@/utils/format-utils'
import { useDispatch } from "react-redux"
import { getSongDetailAction } from '@/pages/player/store/actionCreator'

export default memo(function Songs(props) {
  const { result } = props;
  const dispatch = useDispatch();

  const playMusic = (id) => {
    dispatch(getSongDetailAction(id));
  }

  return (
    <SongsWarpper>
      {
        result && result.map((item, index) => {
          return (<div key={item.id} className="item">
            <div className="songName"><span className="table play"  onClick={() => playMusic(item.id)}></span>{item.name}</div>
            <div className="singerName">{item.artists ? item.artists[0].name : "未知歌手"}</div>
            <div className="albumName">{item.album ? item.album.name : "未知专辑"}</div>
            <div className="time">{formatMinuteSecond(item.duration)}</div>
          </div>)
        })
      }
      {(!result || result.length === 0) && <div> 暂无搜索结果</div>}
    </SongsWarpper >
  )
})
