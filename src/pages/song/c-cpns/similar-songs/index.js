import React, { memo, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SimilarSongsWrapper } from "./style";
import { getSimiSong } from "@/services/songs";
import { getSongDetailAction } from "@/pages/player/store/actionCreator";

export default memo(function SimilarSongs({ id }) {
  const [playList, setplayList] = useState([]);
  useEffect(() => {
    getSimiSong(id).then((res) => {
      setplayList(res.songs);
    });
  }, [id]);

  const dispatch = useDispatch();

  const playMusic = (id) => {
    dispatch(getSongDetailAction(id));
  };

  return (
    <SimilarSongsWrapper>
      <div className="title">相似歌曲</div>
      <div className="list">
        {playList.map((item) => {
          return (
            <div className="list-item" key={item.id}>
              <div className="left">
                <NavLink
                  to={"/song?id=" + item.id}
                  className="song-name text-nowrap"
                >
                  {item.name}
                </NavLink>
                <div className="singer-name">
                  {item.artists && item.artists[0].name}
                </div>
              </div>
              <div className="right">
                <span
                  className="sprite_icon3 play"
                  onClick={() => playMusic(item.id)}
                  title="播放"
                ></span>
                <span className="sprite_icon3 add"></span>
              </div>
            </div>
          );
        })}
      </div>
    </SimilarSongsWrapper>
  );
});
