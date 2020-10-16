import React, { memo } from 'react'
import { UserHeaderWrapper } from './style'
import { getSizeImage } from '@/utils/format-utils'

export default memo(function UserHeader({ userInfo }) {
  return (
    <UserHeaderWrapper>
      <div className="left">
        <img src={getSizeImage(userInfo.profile && userInfo.profile.avatarUrl, 188)} alt={userInfo.profile && userInfo.profile.nickname} />
      </div>
      <div className="right">
        <div className="username-box">
          <div className="username">{userInfo.profile && userInfo.profile.nickname}</div>
          <div className="level-and-sex">
            <span className="sprite_icon3 level"><span>{userInfo.level}</span><i className="sprite_icon3"></i></span>
            <span className={userInfo.profile &&userInfo.profile.gender===1?"sprite_icon2 male":"sprite_icon2 female"}></span>
          </div>
          <div className="button-box">
            <button className="sprite_button2 mail">发私信</button>
            <button className="sprite_button2 follow">关 注</button>
          </div>
        </div>
        <div className="userdata">
          <div className="data1">
            <strong>{userInfo.profile && userInfo.profile.eventCount}</strong>
            <span>动态</span>
          </div>
          <div className="data2">
            <strong>{userInfo.profile && userInfo.profile.follows}</strong>
            <span>关注</span>
          </div>
          <div className="data3">
            <strong>{userInfo.profile && userInfo.profile.followeds}</strong>
            <span>粉丝</span>
          </div>
        </div>
        <div className="user-desc">
          个人介绍：{userInfo.profile && userInfo.profile.signature}
        </div>
        <div className="user-info">
          社交网络：{
            userInfo.bindings && userInfo.bindings.map(item => {
              return ((item.type === 2 && item.url) && <a href={item.url} target="_blank" title="新浪微博" rel="noopener noreferrer"><i className="sprite_logo weibo"></i></a>)
            })
          }
        </div>
      </div>
    </UserHeaderWrapper>
  )
})
