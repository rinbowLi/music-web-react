import React, { memo } from 'react'
import { DjradioCoverWarpper } from './style'
import { useSelector, shallowEqual } from "react-redux"

import { getHeightAndWidthImage, highLight } from '@/utils/format-utils';

export default memo(function VideoCover(props) {

  const { keywords } = useSelector(state => ({
    keywords: state.getIn(["search", "keywords"])
  }), shallowEqual);

  const { info } = props;
  return (
    <DjradioCoverWarpper>
      <div className="cover">
        <img src={getHeightAndWidthImage(info.picUrl, 150, 150)} alt={info.title} />
      </div>
      <div className="bottom">
        <div className="title text-nowrap"> <span dangerouslySetInnerHTML={{ __html: highLight(info.name, keywords) }}></span></div>
        <div className="by text-nowrap">by&nbsp;<span dangerouslySetInnerHTML={{ __html: highLight(info.dj ? info.dj.nickname : "未知来源", keywords) }}></span></div>
      </div>
    </DjradioCoverWarpper>
  )
})
