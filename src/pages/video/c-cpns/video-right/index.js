import React, { memo, useEffect, useState } from 'react'
import { NavLink } from "react-router-dom"
import { VideoRightWrapper } from './style'
import RightDownLoad from '@/components/right-download'

import { getRelatedAllvideo } from "@/services/video"
import { getHeightAndWidthImage, getCount, formatMinuteSecond, formatYearMonthDay } from "@/utils/format-utils"


export default memo(function VideoRight({ videoDetail }) {
  const [videolist, setvideolist] = useState([])

  useEffect(() => {
    videoDetail.vid && getRelatedAllvideo(videoDetail.vid).then(res => {
      console.log(res)
      setvideolist(res.data)
    })

  }, [videoDetail.vid])

  return (
    <VideoRightWrapper>
      <div className="title">video简介</div>
      <div className="list">
        <p>发布时间：{formatYearMonthDay(videoDetail.publishTime)}</p>
        <p>播放次数：{getCount(videoDetail.playTime)}</p>
      </div>
      <div className="title">相关推荐</div>
      <div className="video-list">
        {
          videolist && videolist.map(item => {
            return (<div className="item" key={item.vid}>
              <NavLink to={"/video?id=" + item.vid} className="left">
                <img src={getHeightAndWidthImage(item.coverUrl, 96, 54)} alt={item.title} />
                <p className="sprite_mask"><span className="sprite_icon3"></span>{getCount(item.playTime)}</p>
              </NavLink>
              <div className="right">
                <p className="text-nowrap video-name"><NavLink to={"/video?id=" + item.vid}>{item.title}</NavLink></p>
                <p className="time">{formatMinuteSecond(item.durationms)}</p>
                <p className="owner text-nowrap">by <NavLink to={"/user?id=" + (item.creator && item.creator[0].userId)}>{item.creator && item.creator[0].userName}</NavLink></p>
              </div>
            </div>)
          })
        }
      </div>
      <RightDownLoad />
    </VideoRightWrapper>
  )
})
