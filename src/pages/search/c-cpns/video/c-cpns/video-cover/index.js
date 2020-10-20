import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import { VideoCoverWarpper } from './style'


import { getHeightAndWidthImage, formatMinuteSecond, getCount, highLight } from '@/utils/format-utils';
import { useSelector, shallowEqual } from "react-redux"


export default memo(function VideoCover(props) {
  const { info } = props;
  console.log(info)

  const { keywords } = useSelector(state => ({
    keywords: state.getIn(["search", "keywords"])
  }), shallowEqual);

  return (
    <VideoCoverWarpper>
      <NavLink to={`${info.type === 1 ? "/video?id=" + info.vid : "/mv?id=" + info.vid}`} className="cover">
        <img src={getHeightAndWidthImage(info.coverUrl, 159, 90)} alt={info.title} />
        <div className="playCount"><span className="icon2 video"></span>{getCount(info.playTime)}</div>
        <div className="time">{formatMinuteSecond(info.durationms)}</div>
      </NavLink>
      <div className="bottom">
        <div className="title text-nowrap"><NavLink to={`${info.type === 1 ? "/video?id=" + info.vid : "/mv?id=" + info.vid}`} dangerouslySetInnerHTML={{ __html: highLight(info.title || "", keywords) }}></NavLink></div>
        <NavLink to={(info.type === 0 ? "/singer?id=" : "/user?id=") + (info.creator && info.creator[0].userId)} className="by text-nowrap">by&nbsp;<span dangerouslySetInnerHTML={{ __html: highLight(info.creator && info.creator[0] ? info.creator[0].userName : "未知来源", keywords) }}></span></NavLink>
      </div>
    </VideoCoverWarpper>
  )
})
