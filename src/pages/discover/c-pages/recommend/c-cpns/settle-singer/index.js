import React, { useEffect, memo } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { NavLink } from 'react-router-dom'

import {
  getSettleSingers
} from "../../store/actionCreators";
import {
  getSizeImage
} from "@/utils/format-utils";

import ThemeHeaderSmall from '@/components/theme-header-small';
import {
  SetterSongerWrapper
} from "./style";

export default memo(function SettleSinger() {
  // redux
  const dispatch = useDispatch();
  const state = useSelector((state) => ({
    settleSings: state.getIn(["recommend", "settleSings"])
  }), shallowEqual);

  // hooks
  useEffect(() => {
    dispatch(getSettleSingers());
  }, [dispatch])

  return (
    <SetterSongerWrapper>
      <ThemeHeaderSmall title="入驻歌手" more="查看全部>" />
      <div className="singer-list">
        {
          state.settleSings.map((item, index) => {
            return (
              <NavLink to={"/singer?id=" + item.id} key={item.id} className="item">
                <img src={getSizeImage(item.img1v1Url, 62)} alt="" />
                <div className="info">
                  <div className="title">{item.alias.join("") || item.name}</div>
                  <div className="name">{item.name}</div>
                </div>
              </NavLink>
            )
          })
        }
      </div>
      <div className="apply-for">
        <a href="https://music.163.com/nmusician/web/index#/" target="_blank" rel="noopener noreferrer">申请成为网易音乐人</a>
      </div>
    </SetterSongerWrapper>
  )
})
