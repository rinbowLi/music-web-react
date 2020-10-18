import React, { memo } from "react";
import { NavLink } from "react-router-dom"
import { useDispatch } from "react-redux"
import { getSongDetailAction } from '@/pages/player/store/actionCreator'
import { HotWorksWarpper } from "./style";

import { formatMinuteSecond } from '@/utils/format-utils'


export default memo(function HotWorks({ data }) {
  const list = data.hotSongs;
  const dispatch =useDispatch();

  const playMusic = (id) => {
    dispatch(getSongDetailAction(id));
  }
  return (
    <HotWorksWarpper>
      <div className="button-box">
        <div className="left">
          <span className="play sprite_button">
            <i className="sprite_button">
              <em className="sprite_button"></em>播放
            </i>
          </span>
          <span className="addto sprite_button"></span>
          <span className="fav sprite_button">
            <i className="sprite_button">收藏热门50</i>
          </span>
        </div>
        <div className="right">
          <div className="botton-list">
            <div className="btn-hot sprite_button">
              <i className="sprite_button">
                <em>热门单曲</em>
                <em className="arrow icon3"></em>
              </i>
            </div>
            <div className="list">
              <div className="hot-song"> 热门单曲</div>
              <div className="lyric-song">作词作品</div>
              <div className="tune-song">作曲作品</div>
            </div>
          </div>
        </div>
      </div>
      <div className="song-list">
        {list &&
          list.map((item, index) => {
            return (
              <div className="list-item" key={item.id}>
                <div className="w1 code">
                  {index + 1}
                  <i
                    className="sprite_table play"
                    title="播放"
                    onClick={() => playMusic(item.id)}
                  ></i>
                </div>
                <div className="w2 text-nowrap">
                  <NavLink to={"/song?id=" + item.id}>{item.name}</NavLink>
                </div>
                <div className="w3 text-nowrap time">
                  {formatMinuteSecond(item.dt)}
                </div>
                <div className="w4 text-nowrap">
                  <NavLink to={"/album?id=" + (item.al && item.al.id)}>
                    {item.al && item.al.name}
                  </NavLink>
                </div>
              </div>
            );
          })}
      </div>
    </HotWorksWarpper>
  );
});
