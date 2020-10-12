import React, { memo } from 'react'
import { DjradioCoverWarpper } from './style'


import { getHeightAndWidthImage } from '@/utils/format-utils';

export default memo(function VideoCover(props) {
  const { info } = props;
  return (
    <DjradioCoverWarpper>
      <div className="cover">
        <img src={getHeightAndWidthImage(info.picUrl, 150, 150)} alt={info.title} />
      </div>
      <div className="bottom">
        <div className="title text-nowrap"> {info.name} </div>
        <div className="by text-nowrap">by&nbsp;{info.dj ? info.dj.nickname : "未知来源"} </div>
      </div>
    </DjradioCoverWarpper>
  )
})
