import React, { memo } from 'react';

import RadioCategory from './c-cpns/radio-category';
import RadioRecommend from './c-cpns/radio-recommend';
import RadioRanking from './c-cpns/radio-ranking';
import {
  DjRadioWrapper
} from "./style";

export default memo(function Djradio() {
  return (
    <DjRadioWrapper className="wrap-v2">
      <RadioCategory />
      <RadioRecommend />
      <RadioRanking />
    </DjRadioWrapper>
  )
})
