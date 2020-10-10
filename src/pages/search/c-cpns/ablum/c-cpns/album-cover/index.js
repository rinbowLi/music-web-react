import React, { memo } from 'react';

import { getSizeImage } from '@/utils/format-utils';

import { AlbumWrapper } from './style';

export default memo(function AlbumCover(props) {
  // state and props
  const { info, size = 130, width = 153, bgp = "-845px" } = props;

  return (
    <AlbumWrapper size={size} width={width} bgp={bgp}>
      <div className="album-image">
        <img src={getSizeImage(info.picUrl, size)} alt="" />
        <a href="/todo" className="cover image_cover">{info.name}</a>
        <i className="sprite_icon play" title="播放"></i>
      </div>
      <div className="album-info">
        <div className="name text-nowrap">{info.name}</div>
        <div className="artist text-nowrap">{info.artist ? info.artist.name : "未知歌手"}</div>
      </div>
    </AlbumWrapper>
  )
})
