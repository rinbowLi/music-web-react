import React, { memo } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import classNames from "classnames";

import { formatMinuteSecond } from "@/utils/format-utils";
import { getSongDetailAction } from "@/pages/player/store";

import { PlayListWrapper } from "./style";

export default memo(function PlayList() {
  const { playList, currentSongIndex } = useSelector(
    (state) => ({
      playList: state.getIn(["player", "playList"]),
      currentSongIndex: state.getIn(["player", "currentSongIndex"]),
    }),
    shallowEqual
  );

  const dispatch = useDispatch();

  const playMusic = (id) => {
    dispatch(getSongDetailAction(id));
  };

  return (
    <PlayListWrapper>
      {playList.map((item, index) => {
        return (
          <div
            key={item.id}
            onClick={() => playMusic(item.id)}
            className={classNames("play-item", {
              active: currentSongIndex === index,
            })}
          >
            <div className="left text-nowrap">{item.name}</div>
            <div className="right">
              <span className="singer text-nowrap">{item.ar[0].name}</span>
              <span className="duration">{formatMinuteSecond(item.dt)}</span>
              <span className="sprite_playlist link"></span>
            </div>
          </div>
        );
      })}
    </PlayListWrapper>
  );
});
