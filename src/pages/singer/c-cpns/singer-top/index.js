import React, { memo } from "react";
import { SingerTopWarpper } from "./style";
import { getHeightAndWidthImage } from "@/utils/format-utils";

export default memo(function SingerTop({ headerData, curIndex, setcurIndex }) {
  const handleClick = (index) => {
    setcurIndex(index);
  };
  return (
    <SingerTopWarpper>
      <div className="header">
        <h2>{headerData.name}</h2>
        <h3>{headerData.alias && headerData.alias.join(";")}</h3>
      </div>
      <div className="img-box">
        <div className="ban_mask img"></div>
        <img
          src={getHeightAndWidthImage(headerData.picUrl, 640, 300)}
          alt={headerData.name}
        />
        <button className="sub sprite_icon">收藏</button>
      </div>
      <div className="tabs tab">
        <div
          className={curIndex === 0 ? "tab active" : ""}
          onClick={() => handleClick(0)}
        >
          <span className="tab">热门作品</span>
        </div>
        <div
          className={curIndex === 1 ? "tab active" : ""}
          onClick={() => handleClick(1)}
        >
          <span className="tab">所有专辑</span>
        </div>
        <div
          className={curIndex === 2 ? "tab active" : ""}
          onClick={() => handleClick(2)}
        >
          <span className="tab">相关MV</span>
        </div>
        <div
          className={curIndex === 3 ? "tab active" : ""}
          onClick={() => handleClick(3)}
        >
          <span className="tab">艺人介绍</span>
        </div>
      </div>
    </SingerTopWarpper>
  );
});
