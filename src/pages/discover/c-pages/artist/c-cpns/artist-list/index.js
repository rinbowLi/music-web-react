import React, { memo } from 'react';
import { useSelector, shallowEqual } from 'react-redux';


import ThemeHeaderNormal from '@/components/theme-header-normal';
import AlphaList from './c-cpns/alpha-list';
import ArtistItem from './c-cpns/artist-item';
import {
  ArtistListWrapper
} from './style';

export default memo(function ArtistList() {
  // redux hooks
  const { currentType, artistList } = useSelector(state => ({
    currentType: state.getIn(["artist", "currentType"]),
    artistList: state.getIn(["artist", "artistList"])
  }), shallowEqual);

  return (
    <ArtistListWrapper>
      <ThemeHeaderNormal title={currentType.name} />
      <AlphaList/>
      <div className="artist-list">
        {
          artistList.map((item, index) => {
            return <ArtistItem key={item.id} index={index} info={item}/>
          })
        }
      </div>
    </ArtistListWrapper>
  )
})
