import React, { memo } from 'react';
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types';

import { HeaderWrapper } from './style';

const ThemeHeaderRCM = memo(function (props) {
  const { title, keywords, link } = props;

  return (
    <HeaderWrapper className="sprite_02">
      <div className="left">
        <h3 className="title">{title}</h3>
        <div className="keyword">
          {
            keywords.map((item, index) => {
              return (
                <div className="item" key={item}>
                  <NavLink to={"/discover/songs?cat=" + item} href="todo">{item}</NavLink>
                  <span className="divider">|</span>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className="right">
        <NavLink to={link}>更多</NavLink>
        <i className="icon sprite_02"></i>
      </div>
    </HeaderWrapper>
  )
})

ThemeHeaderRCM.propTypes = {
  title: PropTypes.string.isRequired,
  keywords: PropTypes.array
}

ThemeHeaderRCM.defaultProps = {
  keywords: []
}

export default ThemeHeaderRCM;
