import React, { memo, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  SingerBoxWarpper,
  SingerWarpper,
  SingerLeftWrapper,
  SingerRightWrapper,
  TopMenu,
} from "./style";
import { dicoverMenu } from "@/common/local-data";
import { getSingerSongs } from "@/services/singer";

import SingerTop from "./c-cpns/singer-top";
import SingerBottom from "./c-cpns/singer-bottom";
import SingerRight from "./c-cpns/singer-right";

export default memo(function Singer() {
  const [headerData, setheaderData] = useState({});
  const [curIndex, setcurIndex] = useState(0);

  useEffect(() => {
    getSingerSongs(3684).then((res) => {
      console.log(res);
      setheaderData(res.artist);
    });
  }, [curIndex]);
  return (
    <SingerBoxWarpper>
      <div className="top">
        <TopMenu className="wrap-v1">
          {dicoverMenu.map((item, index) => {
            return (
              <div className="item" key={item.title}>
                <NavLink to={item.link}>{item.title}</NavLink>
              </div>
            );
          })}
        </TopMenu>
      </div>
      <SingerWarpper className="wrap-v2">
        <SingerLeftWrapper>
          <SingerTop
            headerData={headerData}
            curIndex={curIndex}
            setcurIndex={setcurIndex}
          />
          <SingerBottom curIndex={curIndex} />
        </SingerLeftWrapper>
        <SingerRightWrapper>
          <SingerRight />
        </SingerRightWrapper>
      </SingerWarpper>
    </SingerBoxWarpper>
  );
});
