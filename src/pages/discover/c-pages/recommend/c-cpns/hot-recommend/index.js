import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { HotRecommendWrapper } from './style'

import ThemeReaderRcm from '@/components/theme-header-rcm'
import SongsCover from '@/components/songs-cover'

import { getHotRecommendsAction } from '../../store/actionCreators'

export default memo(function HotRecommend() {

  //组件个redux关联：获取数据和进行操作
  //shallowEqual浅层比较，可以优化性能
  const { hotRecommends } = useSelector(state => ({
    hotRecommends: state.get("recommend").get("hotRecommends")
  }), shallowEqual)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHotRecommendsAction())
  }, [dispatch]);

  // console.log(hotRecommends)
  return (
    <HotRecommendWrapper>
      <ThemeReaderRcm title="热门推荐" keywords={["华语", "流行", "摇滚", "民谣", "电子"]} />
      <div className="recommend-list">
        {
          hotRecommends.map((item) => {
            return (<SongsCover key={item.id} info={item} />)
          })
        }
      </div>
    </HotRecommendWrapper>
  )
})
