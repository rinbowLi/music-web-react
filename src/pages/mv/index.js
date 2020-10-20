import React, { memo, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { parse } from 'query-string'

import { MvWrapper, MvLeftWrapper, MvRightWrapper } from './style'
import MvTop from './c-cpns/mv-top'
import MvBottom from './c-cpns/mv-bottom'
import MvRight from './c-cpns/mv-right'

import { getMvDetail } from "@/services/mv"

export default memo(function MV() {
  const [mvDetail, setmvDetail] = useState({})
  const id = parse(useLocation().search).id;
  useEffect(() => {
    getMvDetail(id).then(res => {
      setmvDetail(res.data)
    })
  })
  return (
    <MvWrapper className="wrap-v2">
      <MvLeftWrapper>
        <MvTop mvDetail={mvDetail} />
        <MvBottom mvDetail={mvDetail} />
      </MvLeftWrapper>
      <MvRightWrapper>
        <MvRight  mvDetail={mvDetail} />
      </MvRightWrapper>
    </MvWrapper>
  )
})
