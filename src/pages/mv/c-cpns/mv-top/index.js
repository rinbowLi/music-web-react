import React, { memo, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { MvTopWrapper } from './style'

import { getMvUrl, getMvDetailInfo } from "@/services/mv"
import { getHeightAndWidthImage, getCount } from "@/utils/format-utils"


export default memo(function MvTop({ mvDetail }) {
  const [mvUrlDetail, setmvUrlDetail] = useState({})
  const [mvInfo, setmvInfo] = useState({})
  useEffect(() => {
    mvDetail.id && getMvUrl(mvDetail.id).then(res => {
      setmvUrlDetail(res.data)
    })
  }, [mvDetail.id])

  useEffect(() => {
    mvDetail.id && getMvDetailInfo(mvDetail.id).then(res => {
      setmvInfo(res)
    })
  }, [mvDetail.id])
  return (
    <MvTopWrapper>
      {
        mvDetail && <div className="mv">
          <div className="head">
            <div className="title text-nowrap">
              <h2 className="text-nowrap"><i className="mv-icon sprite_icon3"></i>{mvDetail.name}</h2>
              <NavLink to={'/singer?id=' + mvDetail.artistId}>{mvDetail.artistName}</NavLink>
            </div>
          </div>
          <video className="mv-video" src={mvUrlDetail.url} poster={getHeightAndWidthImage(mvDetail.cover, 640, 360)} controls autoPlay />
          <div className="btn-box">
            <div className="like sprite_button">
              <i className="sprite_button"><em className="sprite_button"></em>({getCount(mvInfo.likedCount)})</i>
            </div>
            <div className="add sprite_button">
              <i className="sprite_button">({getCount(mvInfo.commentCount)})</i>
            </div>
            <div className="share sprite_button">
              <i className="sprite_button"><em className="sprite_button"></em>({getCount(mvInfo.shareCount)})</i>
            </div>
          </div>
        </div>
      }

    </MvTopWrapper>
  )
})
