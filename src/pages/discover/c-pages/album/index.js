import React, { memo } from 'react';

import HotAlbum from './c-cpns/hot-album';
import TopAlbum from './c-cpns/top-album';
import {
  AblumWrapper
} from './style';

export default memo(function Album() {
  return (
    <AblumWrapper className="wrap-v2">
      <HotAlbum/>
      <TopAlbum/>
    </AblumWrapper>
  )
})
