import React, { memo, useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { getArtistAlbum } from '@/services/album'

import { RecommendPlaylistWrapper } from './style'
import { getSizeImage, formatYearMonthDay } from '@/utils/format-utils'


export default memo(function RecommendPlaylist({ id, albumId }) {

  const [playlist, setplaylist] = useState([])
  useEffect(() => {
    getArtistAlbum(id).then(res => {
      setplaylist(res.hotAlbums)
    })
  }, [id]);

  return (
    <RecommendPlaylistWrapper>
      <div className="title">Ta的其他热门专辑</div>
      <div className="list">
        {
          playlist && playlist.slice(0, 5).map(item => {
            return (<div className="list-item" key={item.id}>
              <div className="left">
                <img src={getSizeImage(item.picUrl, 50)} alt={item.name} />
              </div>
              <div className="right">
                <NavLink to={"/album?id=" + item.id} className="playlist-name text-nowrap">{item.name}</NavLink>
                <div className="owner-name">{formatYearMonthDay(item.publishTime)}</div>
              </div>
            </div>)
          })
        }
      </div>
    </RecommendPlaylistWrapper>
  )
})
