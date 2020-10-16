import React, { memo, useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { getRelatedPlaylist } from '@/services/play-list'

import { RecommendPlaylistWrapper } from './style'
import { getSizeImage } from '@/utils/format-utils'


export default memo(function RecommendPlaylist({ id }) {

  const [playlist, setplaylist] = useState([])
  useEffect(() => {
    getRelatedPlaylist(id).then(res => {
      setplaylist(res.playlists)
    })
  }, [id]);

  return (
    <RecommendPlaylistWrapper>
      <div className="title">推荐歌单</div>
      <div className="list">
        {
          playlist.map(item => {
            return (<div className="list-item" key={item.id}>
              <div className="left">
                <img src={getSizeImage(item.coverImgUrl, 50)} alt={item.name} />
              </div>
              <div className="right">
                <NavLink to={"/playlist?id=" + item.id} className="playlist-name text-nowrap">{item.name}</NavLink>
                <div className="owner-name">{item.creator && item.creator.nickname}</div>
              </div>
            </div>)
          })
        }
      </div>
    </RecommendPlaylistWrapper>
  )
})
