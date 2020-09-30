import React, { memo } from 'react';

import { getCount, getSizeImage } from "@/utils/format-utils";
import { useDispatch } from "react-redux"

import { getPlayListDetail } from "../../services/play-list"
import { getSongDetailAction, changeCurrentPlayListAction } from '../../pages/player/store/actionCreator'

import { SongsCoverWrapper } from './style';

export default memo(function HYSongsCover(props) {
  const { info } = props;
  const dispatch = useDispatch();

  const getAndPlayList = (id) => {
    getPlayListDetail(id).then(res => {
      dispatch(changeCurrentPlayListAction(res.playlist.tracks));
      dispatch(getSongDetailAction(res.playlist.tracks[0].id));
    })
  }

  return (
    <SongsCoverWrapper title={info.name}>
      <div className="cover-top">
        <img src={getSizeImage(info.picUrl, 140)} alt="" />
        <div className="cover sprite_covor">
          <div className="info sprite_covor" onClick={() => getAndPlayList(info.id)}>
            <span>
              <i className="sprite_icon erji"></i>
              {getCount(info.playCount)}
            </span>
            <i className="sprite_icon play" title="播放"></i>
          </div>
        </div>
      </div>
      <div className="cover-bottom text-nowrap">
        {info.name}
      </div>
      <div className="cover-source text-nowrap">
        by {info.copywriter || info.creator.nickname}
      </div>
    </SongsCoverWrapper>
  )
})
