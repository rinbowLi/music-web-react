import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { RankingWrapper } from './style'

import ThemeReaderRcm from '@/components/theme-header-rcm'

import { getTopListAction } from '../../store/actionCreators'

import TopRanking from '@/components/top-ranking'

export default memo(function Ranking() {

  const dispatch = useDispatch();

  const { upRanking, newRanking, originRanking } = useSelector((state) => ({
    upRanking: state.get("recommend").get("upRanking"),
    newRanking: state.get("recommend").get("newRanking"),
    originRanking: state.get("recommend").get("originRanking"),
  }), shallowEqual)

  useEffect(() => {
    dispatch(getTopListAction(0))
    dispatch(getTopListAction(2))
    dispatch(getTopListAction(3))
  }, [dispatch])

  return (
    <RankingWrapper>
      <ThemeReaderRcm title="榜单" link={"/discover/ranking"} />
      <div className="tops">
        <TopRanking info={upRanking} />
        <TopRanking info={newRanking} />
        <TopRanking info={originRanking} />
      </div>

    </RankingWrapper>
  )
})
