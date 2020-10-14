import React, { memo } from 'react';

import { OperationBarWrapper } from './style';
import { useDispatch } from "react-redux"
import { getPlayListDetail } from "@/services/play-list"
import { getSongDetailAction, changeCurrentPlayListAction } from '@/pages/player/store/actionCreator'

export default memo(function SongOperationBar(props) {
  const { favorTitle, shareTitle, downloadTitle, commentTitle, id } = props;
  const dispatch = useDispatch();

  const getAndPlayList = (id) => {
    getPlayListDetail(id).then(res => {
      dispatch(changeCurrentPlayListAction(res.playlist.tracks));
      dispatch(getSongDetailAction(res.playlist.tracks[0].id));
    })
  }

  return (
    <OperationBarWrapper>
      <span className="play">
        <button onClick={() => getAndPlayList(id)} className="play-icon sprite_button">
          <span className="play sprite_button">
            <i className="sprite_button"></i>
            <span>播放</span>
          </span>
        </button>
        <button className="add-icon sprite_button">+</button>
      </span>
      <button className="item sprite_button">
        <i className="icon favor-icon sprite_button">{favorTitle}</i>
      </button>
      <button className="item sprite_button">
        <i className="icon share-icon sprite_button">{shareTitle}</i>
      </button>
      <button className="item sprite_button">
        <i className="icon download-icon sprite_button">{downloadTitle}</i>
      </button>
      <button className="item sprite_button">
        <i className="icon comment-icon sprite_button">{commentTitle}</i>
      </button>
    </OperationBarWrapper>
  )
})
