import React, { memo } from 'react'

import { SongDetailWarpper } from './style'
import { getSizeImage, formatYearMonthDay } from '@/utils/format-utils'


import SongOperationBar from './c-cpns/song-operation-bar';


export default memo(function PlaylistInfo({ playlistDetail }) {

  return (
    <SongDetailWarpper>
      <div className="cover-img">
        <div className="cover">
          <img className="song-img" src={getSizeImage(playlistDetail.playlist && playlistDetail.playlist.coverImgUrl, 200)} alt={playlistDetail.playlist && playlistDetail.playlist.name} />
          <span className="mask sprite_covor"></span>
        </div>
      </div>
      <div className="song-detail">
        <div className="top">
          <div className="head">
            <i className="simple-song sprite_icon2"></i>
            <span className="song-name">{playlistDetail.playlist && playlistDetail.playlist.name}</span>
          </div>
          <div className="singer-name">
            <div className="img"><img src={getSizeImage(playlistDetail.playlist && playlistDetail.playlist.creator.avatarUrl, 40)} alt="" /></div>
            <span>{(playlistDetail.playlist && playlistDetail.playlist.creator.nickname) || "未知歌手"}</span>
            <div className="createtime">{formatYearMonthDay(playlistDetail.playlist && playlistDetail.playlist.createTime)}创建</div>
          </div>
          <SongOperationBar favorTitle="收藏"
            shareTitle="分享"
            downloadTitle="下载"
            commentTitle={`(${(playlistDetail.playlist && playlistDetail.playlist.commentCount) || 0})`}
            id={playlistDetail.playlist && playlistDetail.playlist.id} />
          <div className="tags">
            <span className="tag-txt">标签：</span>
            {
              playlistDetail.playlist && playlistDetail.playlist.tags.map(item => {
                return (<span className="sprite_button tag-item" key={item}><i className="sprite_button">{item}</i></span>)
              })
            }
          </div>
          <div className="desc">
            介绍：{playlistDetail.playlist && playlistDetail.playlist.description}
          </div>
        </div>
      </div>
    </SongDetailWarpper>
  )
})
