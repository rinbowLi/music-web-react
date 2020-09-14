import React, { memo } from 'react'
import {RankingWrapper} from './style'

import ThemeReaderRcm from '@/components/theme-header-rcm'

export default memo(function Ranking() {
  return (
    <RankingWrapper>
      <ThemeReaderRcm title="榜单"/>
    </RankingWrapper>
  )
})
