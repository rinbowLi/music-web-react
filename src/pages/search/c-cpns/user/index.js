import React, { memo } from 'react'

import { UsersWarpper } from './style'

import { getSizeImage } from '@/utils/format-utils'

export default memo(function User(props) {
  const { result } = props;

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
                  {item.nickname}{item.authStatus === 1 && <span className="icon2 band"></span>}
                  <span className={item.gender === 1 ? "sprite_icon2 male" : "sprite_icon2 female"}></span>
                </div>
                <div className="sign text-nowrap">{item.signature}</div>
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
