import React, { memo, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { parse } from 'query-string'

import { VideoWrapper, VideoLeftWrapper, VideoRightWrapper } from './style'
import VideoTop from './c-cpns/video-top'
import VideoBottom from './c-cpns/video-bottom'
import VideoRight from './c-cpns/video-right'

import { getVideoDetail } from "@/services/video"

export default memo(function MV() {
  const [videoDetail, setvideoDetail] = useState({})
  const { id } = parse(useLocation().search);
  useEffect(() => {
    getVideoDetail(id).then(res => {
      setvideoDetail(res.data)
    })
  })
  return (
    <VideoWrapper className="wrap-v2">
      <VideoLeftWrapper>
        <VideoTop videoDetail={videoDetail} />
        <VideoBottom videoDetail={videoDetail} />
      </VideoLeftWrapper>
      <VideoRightWrapper>
        <VideoRight videoDetail={videoDetail} />
      </VideoRightWrapper>
    </VideoWrapper>
  )
})
