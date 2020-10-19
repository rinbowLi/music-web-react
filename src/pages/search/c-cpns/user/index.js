import React, { memo } from 'react'
import { NavLink } from 'react-router-dom';
import { useSelector, shallowEqual } from "react-redux"
import { UsersWarpper } from './style'

import { getSizeImage, highLight } from '@/utils/format-utils'

export default memo(function User(props) {
  const { result } = props;

  const { keywords } = useSelector(state => ({
    keywords: state.getIn(["search", "keywords"])
  }), shallowEqual);

  return (
    <UsersWarpper>
      {
        result && result.map((item, index) => {
          return (<div key={item.id} className="item">
            <div className="songName">
              <div className="left">
                <img src={getSizeImage(item.avatarUrl, 50)} alt={item.nickname} />
                <div className="sprite_covor mask"></div>
              </div>
              <div className="right text-nowrap">
                <div className="name">
                  <NavLink to={"/user?id=" + item.userId} dangerouslySetInnerHTML={{ __html: highLight(item.nickname, keywords) }}></NavLink>{item.authStatus === 1 && <span className="icon2 band"></span>}
                  <span className={item.gender === 1 ? "sprite_icon2 male" : "sprite_icon2 female"}></span>
                </div>
                <div className="sign text-nowrap"><span dangerouslySetInnerHTML={{ __html: highLight(item.signature, keywords) }}></span></div>
              </div>
            </div>
            <div className="singerName sprite_button2">关注</div>
            <div className="albumName">歌单：1</div>
            <div className="time">粉丝：1234</div>
          </div>)
        })
      }
      {(!result || result.length === 0) && <div> 暂无搜索结果</div>}
    </UsersWarpper >
  )
})
