import React, { memo } from 'react'
import { UserListenRankingWrapper } from './style'

export default memo(function UserListenRanking({ userInfo, curType, setcurType }) {
  return (
    <UserListenRankingWrapper>
      <div className="title">
        <div className="left">
          听歌排行<span>累积听歌{userInfo.listenSongs}首</span>
        </div>
        <div className="right">
          <span className={curType === 0 ? "last-week active" : "last-week"} onClick={() => setcurType(0)}>最近一周</span>
          <i></i>
          <span className={curType === 1 ? "alltime active" : "alltime"} onClick={() => setcurType(1)}>所有时间</span>
        </div>
      </div>
      <div className="list">
        {
          
        }
      </div>
    </UserListenRankingWrapper>
  )
})
