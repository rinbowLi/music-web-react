import React, { memo } from 'react'
import { VideoCoverWarpper } from './style'


import { getHeightAndWidthImage, formatMinuteSecond, getCount } from '@/utils/format-utils';

export default memo(function VideoCover(props) {
  const { info } = props;
  return (
    <VideoCoverWarpper>
      <div className="cover">
        <img src={getHeightAndWidthImage(info.coverUrl, 159, 90)} alt={info.title} />
        <div className="playCount"><span className="icon2 video"></span>{getCount(info.playTime)}</div>
        <div className="time">{formatMinuteSecond(info.durationms)}</div>
      </div>
      <div className="bottom">
        <div className="title text-nowrap"> {info.title} </div>
        <div className="by text-nowrap">by&nbsp;{info.creator ? info.creator.userName : "未知来源"} </div>
      </div>
    </VideoCoverWarpper>
  )
})
