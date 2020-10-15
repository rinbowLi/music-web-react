import React, { memo } from 'react'
import { UserListenRankingWrapper } from './style'
import SongsCover from '../songs-cover'

export default memo(function UserListenRanking({ userInfo, type, playlist }) {
  return (
    <UserListenRankingWrapper>
      <div className="title">
        <div className="left">
          {userInfo.profile && userInfo.profile.nickname}{type === 0 ? "创建" : "收藏"}的歌单 （{playlist.length}）
        </div>
      </div>
      <div className="list">
        {
          playlist.map((item) => {
            return (<SongsCover type={type} key={item.id} info={item} />)
          })
        }
      </div>
    </UserListenRankingWrapper>
  )
})
