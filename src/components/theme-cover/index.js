import React, { memo } from 'react';
import { useDispatch } from 'react-redux'
import { NavLink } from "react-router-dom"

import { getPlayListDetail } from "@/services/play-list"
import { getSongDetailAction, changeCurrentPlayListAction } from '@/pages/player/store/actionCreator'
import {
  getSizeImage,
  getCount
} from "@/utils/format-utils";

import {
  ThemeCoverWrapper
} from "./style";

export default memo(function ThemeCover(props) {
  const { info, right } = props;

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
    <ThemeCoverWrapper right={right}>
      <NavLink className="cover-top" to={"/playlist?id=" + info.id}>
        <img src={getSizeImage(info.picUrl || info.coverImgUrl, 140)} alt="" />
        <div className="cover sprite_covor">
          <div className="info sprite_covor">
            <span>
              <i className="sprite_icon erji"></i>
              {getCount(info.playCount)}
            </span>
            <i className="sprite_icon play" title="播放" onClick={e => getAndPlayList(info.id, e)}></i>
          </div>
        </div>
      </NavLink>
      <NavLink to={"/playlist?id=" + info.id} className="cover-bottom text-nowrap">
        {info.name}
      </NavLink>
      <span className="cover-source">
        by  <NavLink to={"/user?id=" + (info.creator && info.creator.userId)}>{info.copywriter || info.creator.nickname}</NavLink>
      </span>
    </ThemeCoverWrapper>
  )
})
