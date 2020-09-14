import React, { memo } from 'react'

import TopBanners from './c-cpns/banner'
import HotRecommend from './c-cpns/hot-recommend'
import NewAblum from './c-cpns/new-album'
import Ranking from './c-cpns/ranking'

import {RecommendWrapper,Content,RecommendLeft,RecommendRight} from './style'



function Recommend(props) {
  return (
    <RecommendWrapper>
      <TopBanners/>
      <Content className="wrap-v2">
        <RecommendLeft>
          <HotRecommend/>
          <NewAblum/>
          <Ranking/>
        </RecommendLeft>
        <RecommendRight></RecommendRight>
      </Content>
    </RecommendWrapper>
  )
}

export default memo(Recommend)

// function Recommend(props) {
//   const { getBanners ,topBanners} = props;
//   useEffect(() => {
//     getBanners();
//   }, [getBanners]);

//   return (
//     <div>
//       Recommend:{topBanners.length}
//     </div>
//   )
// }

// const mapStateToProps = state => ({
//   topBanners: state.recommend.topBanners
// })

// const mapDispatchToProps = dispatch => ({
//   getBanners: () => {
//     dispatch(getTopbannerAction())
//   }
// })

// export default connect(mapStateToProps, mapDispatchToProps)(memo(Recommend))
