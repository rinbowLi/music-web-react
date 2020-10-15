import React, { memo, useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { parse } from 'query-string'
import { UserWrapper } from './style'
import { getUserDetail, getPlaylist } from '@/services/user'

import UserHeader from "./c-cpns/user-header";
// import UserListenRanking from "./c-cpns/user-listen-ranking";
import UserLikePlaylist from "./c-cpns/user-like-playlist";

export default memo(function User() {
  const [userInfo, setuserInfo] = useState({})
  const [playlist, setplaylist] = useState([])
  // const [curType, setcurType] = useState(0)     //当前类型 0--最近一周 1--所有时间
  const id = Number(parse(useLocation().search).id);
  useEffect(() => {
    getUserDetail(id).then(res => {
      setuserInfo(res)
    })
  }, [id])

  useEffect(() => {
    getPlaylist(id).then(res => {
      setplaylist(res.playlist)
    })
  }, [id])
  return (
    <UserWrapper className="wrap-v2">
      <UserHeader userInfo={userInfo} />
      {/* 没有接口，下面的写不了了 */}
      {/* <UserListenRanking userInfo={userInfo} curType={curType} setcurType={setcurType} /> */}
      <UserLikePlaylist userInfo={userInfo} type={0} playlist={playlist.filter(item => item.creator.userId === id)} />
      <UserLikePlaylist userInfo={userInfo} type={1} playlist={playlist.filter(item => item.creator.userId !== id)} />
    </UserWrapper>
  )
})
