import React, { memo } from 'react';

import { getSizeImage } from '@/utils/format-utils';

import { useDispatch } from "react-redux"
import { getAlbumDetail } from "../../services/play-list"
import { getSongDetailAction, changeCurrentPlayListAction } from '../../pages/player/store/actionCreator'

import { AlbumWrapper } from './style';

export default memo(function AlbumCover(props) {
  // state and props
  const { info, size = 130, width = 153, bgp = "-845px" } = props;
  const dispatch = useDispatch();

  const getAndPlayList = (id) => {
    getAlbumDetail(id).then(res => {
      dispatch(changeCurrentPlayListAction(res.songs));
      dispatch(getSongDetailAction(res.songs[0].id));
    })
  }

  return (
    <AlbumWrapper size={size} width={width} bgp={bgp}>
      <div className="album-image">
        <img src={getSizeImage(info.picUrl, size)} alt="" />
        <a href="/todo" className="cover image_cover">{info.name}</a>
        <i className="sprite_icon play" title="播放" onClick={() => getAndPlayList(info.id)}></i>
      </div>
      <div className="album-info">
        <div className="name text-nowrap">{info.name}</div>
        <div className="artist text-nowrap">{info.artist.name}</div>
      </div>
    </AlbumWrapper>
  )
})
