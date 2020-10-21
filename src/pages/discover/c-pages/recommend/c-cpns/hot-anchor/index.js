import React, { memo } from 'react';
import { NavLink } from 'react-router-dom'

import {
  hotRadios
} from "@/services/local-data";

import ThemeHeaderSmall from '@/components/theme-header-small';
import {
  HotRadioWrapper
} from './style';

export default memo(function HotRadio() {
  return (
    <HotRadioWrapper>
      <ThemeHeaderSmall title="热门主播" />
      <div className="radio-list">
        {
          hotRadios.map((item, index) => {
            return (
              <div className="item" key={item.picUrl}>
                <NavLink to={item.url} className="image">
                  <img src={item.picUrl} alt="" />
                </NavLink>
                <div className="info">
                  <NavLink to={item.url} className="name">{item.name}</NavLink>
                  <div className="position text-nowrap">{item.position}</div>
                </div>
              </div>
            )
          })
        }
      </div>
    </HotRadioWrapper>
  )
})
