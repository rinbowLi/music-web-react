import React, { memo } from 'react'
import {AlbumWrapper} from './style'

import ThemeReaderRcm from '@/components/theme-header-rcm'

export default memo(function NewAlbum() {
  return (
    <AlbumWrapper>
      <ThemeReaderRcm title="新碟上架"/>
    </AlbumWrapper>
  )
})
