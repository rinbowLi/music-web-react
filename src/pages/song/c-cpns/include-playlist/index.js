import React, { memo } from "react";
import { NavLink } from "react-router-dom";

import { IncludePlayListWarpper } from "./style";
import { getRandomArrayElements } from "@/utils/handle-data";
import { getSizeImage } from "@/utils/format-utils";

export default memo(function IncludePlayList() {
  return (
    <IncludePlayListWarpper>
      <div className="title">包含这首歌的歌单</div>
      <div className="list">
        {getRandomArrayElements(3).map((item) => {
          return (
            <div className="list-item" key={item.id}>
              <div className="left">
                <img src={getSizeImage(item.picUrl, 50)} alt={item.title} />
              </div>
              <div className="right">
                <NavLink
                  to={"/playlist?id=" + item.id}
                  className="playlist-name text-nowrap"
                >
                  {item.title}
                </NavLink>
                <div className="owner-name text-nowrap">
                  by <NavLink to={"/user?id=" + item.ownerId}>{item.owner}</NavLink>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </IncludePlayListWarpper>
  );
});
