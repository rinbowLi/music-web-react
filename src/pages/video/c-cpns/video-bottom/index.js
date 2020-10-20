import React, { memo } from 'react'
import { VideoBottomWrapper } from './style'
import Comment from '@/components/comment'
import { getVideoComment } from "@/services/video"


export default memo(function VideoBottom({ videoDetail }) {
  return (
    <VideoBottomWrapper>
      <Comment id={videoDetail.vid} fn={getVideoComment} />
    </VideoBottomWrapper>
  )
})
