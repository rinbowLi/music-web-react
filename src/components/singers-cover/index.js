import React, { memo } from 'react';

import { getSizeImage } from "@/utils/format-utils";

import { SingersCoverWrapper } from './style';

export default memo(function SingersCover(props) {
  const { info } = props;

  return (
    <SingersCoverWrapper title={info.name} right={"24px"}>
      <div className="cover-top">
        <img src={getSizeImage(info.picUrl||"http://p3.music.126.net/VnZiScyynLG7atLIZ2YPkw==/18686200114669622.jpg", 130)} alt="" />
        <div className="cover sprite_covor">
        </div>
      </div>
      <div className="cover-bottom text-nowrap">
        {info.name}
      </div>
    </SingersCoverWrapper>
  )
})
