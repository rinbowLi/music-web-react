import React, { memo } from 'react';
import { NavLink } from 'react-router-dom'

import { getCount, getSizeImage } from "@/utils/format-utils";
import { useDispatch } from "react-redux"

import { getPlayListDetail } from "@/services/play-list"
import { getSongDetailAction, changeCurrentPlayListAction } from '@/pages/player/store/actionCreator'

import { SongsCoverWrapper } from './style';

export default memo(function SongsCover(props) {
  const { info } = props;
  const dispatch = useDispatch();

  const getAndPlayList = (id, e) => {
    e.stopPropagation();
    e.preventDefault();
    getPlayListDetail(id).then(res => {
      dispatch(changeCurrentPlayListAction(res.playlist.tracks));
      dispatch(getSongDetailAction(res.playlist.tracks[0].id));
    })
  }

  return (
    <SongsCoverWrapper title={info.name} >
      <NavLink className="cover-top" to={"/playlist?id=" + info.id}>
        <img src={getSizeImage(info.picUrl, 140)} alt="" />
        <div className="cover sprite_covor">
          <div className="info sprite_covor" onClick={(e) => getAndPlayList(info.id, e)}>
            <span>
              <i className="sprite_icon erji"></i>
              {getCount(info.playCount)}
            </span>
            <i className="sprite_icon play" title="播放"></i>
          </div>
        </div>
      </NavLink>
      <NavLink className="cover-bottom text-nowrap" to={"/playlist?id=" + info.id}>
        {info.name}
      </NavLink>
      <div className="cover-source text-nowrap">
        by {info.copywriter || info.creator.nickname}
      </div>
    </SongsCoverWrapper>
  )
})
