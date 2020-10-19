import React, { memo } from 'react';
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom"

import {
  getSizeImage,
  formatMinuteSecond
} from "@/utils/format-utils.js"

import ThemeHeaderSong from '@/components/theme-header-song';
import { getSongDetailAction } from '@/pages/player/store';
import {
  RankingListWrapper
} from './style';

export default memo(function RankingList() {
  const dispatch = useDispatch();

  const state = useSelector(state => ({
    playList: state.getIn(["ranking", "playList"])
  }), shallowEqual);
  const tracks = state.playList.tracks || [];

  const playMusic = (item) => {
    dispatch(getSongDetailAction(item.id));
  }

  return (
    <RankingListWrapper>
      <ThemeHeaderSong />
      <div className="play-list">
        <table>
          <thead>
            <tr className="header">
              <th className="ranking"></th>
              <th className="title">标题</th>
              <th className="duration">时长</th>
              <th className="singer">歌手</th>
            </tr>
          </thead>
          <tbody>
            {
              tracks.map((item, index) => {
                return (
                  <tr className="" key={item.id}>
                    <td>
                      <div className="rank-num">
                        <span className="num">{index + 1}</span>
                        <span className="new sprite_icon2"></span>
                      </div>
                    </td>
                    <td>
                      <div className="song-name">
                        {
                          index < 3 ?
                            (<img src={getSizeImage(item.al.picUrl, 50)} alt="" />) : null
                        }
                        <span className="play sprite_table" title="播放" onClick={e => playMusic(item)}></span>
                        <NavLink to={"/song?id=" + item.id} className="name">{item.name}</NavLink>
                      </div>
                    </td>
                    <td>{formatMinuteSecond(item.dt)}</td>
                    <td><NavLink to={"/singer?id=" + item.ar[0].id}>{item.ar[0].name}</NavLink></td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </RankingListWrapper>
  )
})

