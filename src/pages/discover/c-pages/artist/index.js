import React, { memo } from 'react';

import ArtistCategory from './c-cpns/artist-category';
import ArtistList from './c-cpns/artist-list';
import { ArtistWrapper } from './style';

export default memo(function Artist() {
  return (
    <ArtistWrapper>
      <div className="content wrap-v2">
        <ArtistCategory/>
        <ArtistList/>
      </div>
    </ArtistWrapper>
  )
})
