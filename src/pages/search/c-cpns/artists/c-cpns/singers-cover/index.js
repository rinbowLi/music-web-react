import React, { memo } from 'react';
import { NavLink } from 'react-router-dom'

import { getSizeImage, highLight } from "@/utils/format-utils";
import { useSelector, shallowEqual } from "react-redux"

import { SingersCoverWrapper } from './style';

export default memo(function SingersCover(props) {
  const { info } = props;

  const { keywords } = useSelector(state => ({
    keywords: state.getIn(["search", "keywords"])
  }), shallowEqual);

  return (
    <SingersCoverWrapper title={info.name} right={"24px"}>
      <NavLink to={"/singer?id=" + info.id}>
        <div className="cover-top">
          <img src={getSizeImage(info.picUrl || "http://p3.music.126.net/VnZiScyynLG7atLIZ2YPkw==/18686200114669622.jpg", 130)} alt="" />
          <div className="cover sprite_covor">
          </div>
        </div>
        <div className="cover-bottom text-nowrap">
          <span dangerouslySetInnerHTML={{ __html: highLight(info.name, keywords) }}></span>
        </div>
      </NavLink>
    </SingersCoverWrapper>
  )
})
