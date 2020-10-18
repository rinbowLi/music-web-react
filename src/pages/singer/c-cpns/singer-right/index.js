import React, { memo, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { SingerRightWarpper } from "./style";
import { getTopArtists } from "@/services/singer";
import { getHeightAndWidthImage } from "@/utils/format-utils";

import RightDownload from "@/components/right-download";

export default memo(function SingerRight() {
  const [singerData, setsingerData] = useState([]);
  useEffect(() => {
    getTopArtists().then((res) => {
      setsingerData(res.artists);
    });
  }, []);
  return (
    <SingerRightWarpper>
      <div className="title">推荐歌单</div>
      <div className="singer-list">
        {singerData.map((item) => {
          return (
            <NavLink
              className="singer-item"
              to={"/singer?id=" + item.id}
              key={item.id}
            >
              <img
                src={getHeightAndWidthImage(item.picUrl, 50, 50)}
                alt={item.name}
              />
              <div className="text-nowrap">{item.name}</div>
            </NavLink>
          );
        })}
      </div>
      <RightDownload />
    </SingerRightWarpper>
  );
});
