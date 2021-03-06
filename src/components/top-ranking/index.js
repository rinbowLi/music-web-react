import React, { memo } from 'react';
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux';

import { getSizeImage } from '@/utils/format-utils';
import { getPlayListDetail } from "../../services/play-list"
import { getSongDetailAction } from '@/pages/player/store';
import { changeCurrentPlayListAction } from '../../pages/player/store/actionCreator'

import { TopRankingWrapper } from './style';

export default memo(function TopRanking(props) {
  // props and state
  const { info } = props;
  const tracks = (info && info.tracks) || [];

  // redux hooks
  const dispatch = useDispatch();

  // other handle
  const playMusic = (item) => {
    dispatch(getSongDetailAction(item.id));
  }

  const getAndPlayList = (id) => {
    getPlayListDetail(id).then(res => {
      dispatch(changeCurrentPlayListAction(res.playlist.tracks));
      dispatch(getSongDetailAction(res.playlist.tracks[0].id));
    })
  }

  return (
    <TopRankingWrapper>
      {
        info && <div>
          <div className="header">
            <div className="image">
              <img src={getSizeImage(info && info.coverImgUrl)} alt="" />
              <NavLink to={"/discover/ranking?id=" + info.id} className="image_cover">ranking</NavLink>
            </div>
            <div className="info">
              <NavLink to={"/discover/ranking?id=" + info.id}>{info.name}</NavLink>
              <div>
                <button className="btn play sprite_02" title="播放" onClick={() => getAndPlayList(info.id)}></button>
                <button className="btn favor sprite_02"></button>
              </div>
            </div>
          </div>
          <div className="list">
            {
              tracks.slice(0, 10).map((item, index) => {
                return (
                  <div key={item.id} className="list-item">
                    <div className="rank">{index + 1}</div>
                    <div className="info">
                      <NavLink className="name text-nowrap" to={"/song?id=" + item.id} title={item.name}>{item.name}</NavLink>
                      <div className="operate">
                        <button className="btn sprite_02 play"
                          onClick={e => playMusic(item)}
                        ></button>
                        <button className="btn sprite_icon2 addto"></button>
                        <button className="btn sprite_02 favor"></button>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
          <div className="footer">
            <NavLink to={"/discover/ranking?id=" + info.id}>查看全部 &gt;</NavLink>
          </div>
        </div>
      }

    </TopRankingWrapper>
  )
})
