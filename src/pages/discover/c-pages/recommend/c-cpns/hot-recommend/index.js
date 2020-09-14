import React, { memo } from 'react'
import {HotRecommendWrapper} from './style'

import ThemeReaderRcm from '@/components/theme-header-rcm'

export default memo(function HotRecommend() {
  return (
    <HotRecommendWrapper>
      <ThemeReaderRcm title="热门推荐" keywords={["华语","流行","摇滚","民谣","电子"]}/>
    </HotRecommendWrapper>
  )
})
