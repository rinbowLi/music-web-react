import React, { memo, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { VideoTopWrapper } from './style'

import { getVideoUrl, getVideoDetailInfo } from "@/services/video"
import { getHeightAndWidthImage, getCount } from "@/utils/format-utils"


export default memo(function VideoTop({ videoDetail }) {
  const [videoUrlDetail, setvideoUrlDetail] = useState({})
  const [videoInfo, setvideoInfo] = useState({})

  useEffect(() => {
    videoDetail.vid && getVideoUrl(videoDetail.vid).then(res => {
      setvideoUrlDetail(res)
    })
  }, [videoDetail.vid])

  useEffect(() => {
    videoDetail.vid && getVideoDetailInfo(videoDetail.vid).then(res => {
      setvideoInfo(res)
    })
  }, [videoDetail.vid])
  return (
    <VideoTopWrapper>
      {
        Object.keys(videoDetail).length > 0 && <div className="video">
          <div className="head">
            <div className="title text-nowrap">
              <h2 className="text-nowrap">{videoDetail.title}</h2>
              by <NavLink to={'/user?id=' + (videoDetail.creator && videoDetail.creator.userId)}>{videoDetail.creator && videoDetail.creator.nickname}</NavLink>
            </div>
          </div>
          <video className="video" src={videoUrlDetail && videoUrlDetail.urls && videoUrlDetail.urls[0].url} poster={getHeightAndWidthImage(videoDetail.coverUrl, 640, 360)} controls autoPlay />
          <div className="btn-box">
            <div className="like sprite_button">
              <i className="sprite_button"><em className="sprite_button"></em>({getCount(videoInfo.likedCount)})</i>
            </div>
            <div className="add sprite_button">
              <i className="sprite_button">({getCount(videoInfo.commentCount)})</i>
            </div>
            <div className="share sprite_button">
              <i className="sprite_button"><em className="sprite_button"></em>({getCount(videoInfo.shareCount)})</i>
            </div>
          </div>
        </div>
      }

    </VideoTopWrapper>
  )
})
