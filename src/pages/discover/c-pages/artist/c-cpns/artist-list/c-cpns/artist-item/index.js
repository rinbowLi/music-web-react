import React, { memo } from 'react';
import {NavLink} from "react-router-dom"

import { getSizeImage } from '@/utils/format-utils';

import { ItemWrapper } from './style';

export default memo(function ArtistItemV1(props) {
  const { info, index } = props;

  return (
    <ItemWrapper>
      {
        index < 10 && (
          <NavLink to={"/singer?id="+info.id} className="image">
            <img src={getSizeImage(info.img1v1Url, 130)} alt="" />
          </NavLink>
        )
      }
      <div className="info">
        <NavLink to={"/singer?id="+info.id} className="name">{info.name}</NavLink>
        <i className="sprite_icon2 icon"></i>
      </div>
    </ItemWrapper>
  )
})
