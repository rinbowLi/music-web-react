import React, { memo } from "react";
import { NavLink, useHistory } from "react-router-dom";

import { getSizeImage } from "@/utils/format-utils";

import { useDispatch } from "react-redux";
import { getAlbumDetail } from "../../services/play-list";
import {
  getSongDetailAction,
  changeCurrentPlayListAction,
} from "../../pages/player/store/actionCreator";

import { AlbumWrapper } from "./style";

export default memo(function AlbumCover(props) {
  // state and props
  const { info, size = 130, width = 153, bgp = "-845px" } = props;
  const dispatch = useDispatch();
  const history = useHistory();

  const getAndPlayList = (id, e) => {
    e.stopPropagation();
    e.preventDefault();
    getAlbumDetail(id).then((res) => {
      dispatch(changeCurrentPlayListAction(res.songs));
      dispatch(getSongDetailAction(res.songs[0].id));
    });
  };

  const linkto = (id) => {
    history.push("/album?id=" + id);
  };

  return (
    <AlbumWrapper size={size} width={width} bgp={bgp}>
      <NavLink className="album-image" to={"/album?id=" + info.id}>
        <img src={getSizeImage(info.picUrl, size)} alt="" />
        <div onClick={() => linkto(info.id)} className="cover image_cover">
          {info.name}
        </div>
        <i
          className="sprite_icon play"
          title="播放"
          onClick={(e) => getAndPlayList(info.id, e)}
        ></i>
      </NavLink>
      <div className="album-info">
        <NavLink className="name text-nowrap" to={"/album?id=" + info.id}>{info.name}</NavLink>
        <NavLink className="artist text-nowrap" to={"/singer?id=" + info.artist.id}>{info.artist.name}</NavLink>
      </div>
    </AlbumWrapper>
  );
});
