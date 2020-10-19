import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'

import { SongDetailWarpper } from './style'
import { getSizeImage, formatYearMonthDay } from '@/utils/format-utils'


import SongOperationBar from './c-cpns/song-operation-bar';


export default memo(function PlaylistInfo({ playlistDetail }) {

  const album = playlistDetail.album;

  return (
    <SongDetailWarpper>
      <div className="cover-img">
        <div className="cover">
          <img className="song-img" src={getSizeImage(album && album.picUrl, 177)} alt={album && album.name} />
          <span className="mask sprite_covor"></span>
        </div>
      </div>
      <div className="song-detail">
        <div className="top">
          <div className="head">
            <i className="simple-song sprite_icon2"></i>
            <span className="song-name">{album && album.name}</span>
          </div>
          <div className="singer-name">
            <div className="name">歌手：<NavLink to={"/singer?id=" + (album && album.artist.id)}>{(album && album.artist.name) || "未知歌手"}</NavLink></div>
            <div className="createtime">发行时间：{formatYearMonthDay(album && album.publishTime)}</div>
          </div>
          <SongOperationBar favorTitle="收藏"
            shareTitle={`(${(album && album.info.shareCount) || 0})`}
            downloadTitle="下载"
            commentTitle={`(${(album && album.info.commentCount) || 0})`}
            id={album && album.id} />
        </div>
      </div>
      <div className="desc">
        <p>专辑介绍：</p>
        <div>{album && album.description}</div>
      </div>
    </SongDetailWarpper>
  )
})
