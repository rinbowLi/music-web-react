import React, { memo, useEffect, useState } from 'react'
import { NavLink } from "react-router-dom"
import { MvRightWrapper } from './style'
import RightDownLoad from '@/components/right-download'

import { getSimiMv } from "@/services/mv"
import { getHeightAndWidthImage, getCount, formatMinuteSecond } from "@/utils/format-utils"


export default memo(function MvRight({ mvDetail }) {
  const [mvlist, setmvlist] = useState([])

  useEffect(() => {
    mvDetail.id && getSimiMv(mvDetail.id).then(res => {
      setmvlist(res.mvs)
    })

  }, [mvDetail.id])

  return (
    <MvRightWrapper>
      <div className="title">mv简介</div>
      <div className="list">
        <p>发布时间：{mvDetail.publishTime}</p>
        <p>播放次数：{getCount(mvDetail.playCount)}</p>
        <p className="desc">{mvDetail.desc}</p>
      </div>
      <div className="title">相关推荐</div>
      <div className="mv-list">
        {
          mvlist && mvlist.map(item => {
            return (<div className="item" key={item.id}>
              <NavLink to={"/mv?id=" + item.id} className="left">
                <img src={getHeightAndWidthImage(item.cover, 96, 54)} alt={item.name} />
                <p className="sprite_mask"><span className="sprite_icon3"></span>{getCount(item.playCount)}</p>
              </NavLink>
              <div className="right">
                <p className="text-nowrap mv-name"><NavLink to={"/mv?id=" + item.id}>{item.name}</NavLink></p>
                <p className="time">{formatMinuteSecond(item.duration)}</p>
                <p className="owner">by <NavLink to={"/singer?id=" + item.artists[0].id}>{item.artistName}</NavLink></p>
              </div>
            </div>)
          })
        }
      </div>
      <RightDownLoad />
    </MvRightWrapper>
  )
})
