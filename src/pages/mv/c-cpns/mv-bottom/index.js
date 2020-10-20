import React, { memo } from 'react'
import { MvBottomWrapper } from './style'
import Comment from '@/components/comment'
import { getMvComment } from "@/services/mv"


export default memo(function MvBottom({ mvDetail }) {
  return (
    <MvBottomWrapper>
      <Comment id={mvDetail.id} fn={getMvComment} />
    </MvBottomWrapper>
  )
})
