import React, { memo } from 'react';
import { useSelector, shallowEqual } from "react-redux";
import { NavLink } from 'react-router-dom'


import {
  CategoryWrapper
} from "./style";

export default memo(function SongsCategory({ setShowCategory }) {
  // redux
  const { category } = useSelector(state => ({
    category: state.getIn(["songs", "category"])
  }), shallowEqual);

  return (
    <CategoryWrapper>
      <div className="arrow sprite_icon"></div>
      <div className="all">
        <NavLink to="/discover/songs" onClick={() => setShowCategory(false)} className="link">全部风格</NavLink>
      </div>
      <div className="category">
        {
          category.map((item, index) => {
            return (
              <dl key={item.name} className={"item" + index}>
                <dt>
                  <i className="icon sprite_icon2"></i>
                  <span>{item.name}</span>
                </dt>
                <dd>
                  {
                    item.subs.map(sItem => {
                      return (
                        <div className="item" key={sItem.name}>
                          <NavLink to={"/discover/songs?cat=" + sItem.name} onClick={() => setShowCategory(false)} className="link" >{sItem.name}</NavLink>
                          <span className="divider">|</span>
                        </div>
                      )
                    })
                  }
                </dd>
              </dl>
            )
          })
        }
      </div>
    </CategoryWrapper>
  )
})
