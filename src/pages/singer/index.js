import React, { memo, useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { parse } from 'query-string'
import {
  SingerBoxWarpper,
  SingerWarpper,
  SingerLeftWrapper,
  SingerRightWrapper,
  TopMenu,
} from "./style";
import { dicoverMenu } from "@/common/local-data";
import { getSingerAlbum } from "@/services/singer";

import SingerTop from "./c-cpns/singer-top";
import SingerBottom from "./c-cpns/singer-bottom";
import SingerRight from "./c-cpns/singer-right";

export default memo(function Singer() {
  const [headerData, setheaderData] = useState({});
  const [curIndex, setcurIndex] = useState(0);
  const id = parse(useLocation().search).id;

  useEffect(() => {
    getSingerAlbum(id).then((res) => {
      setheaderData(res.artist);
    });
  }, [id, curIndex, setheaderData]);

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
          <SingerBottom id={id} curIndex={curIndex} headerData={headerData} />
        </SingerLeftWrapper>
        <SingerRightWrapper>
          <SingerRight />
        </SingerRightWrapper>
      </SingerWarpper>
    </SingerBoxWarpper>
  );
});
