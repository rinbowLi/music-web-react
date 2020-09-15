import * as constants from './constants'

import {getTopBanner,getHotReommend} from '@/services/recommend'

export const changeTopBannerAction=(res)=>({
  type:constants.CHANGE_TOP_BANNERS,
  topBanners:res.banners
})

export const getTopbannerAction =()=>{
  return dispatch =>{
    getTopBanner().then(res=>{
      console.log(res)
      dispatch(changeTopBannerAction(res))
    })
  }
}


export const getHotRecommendsAction =()=>{
  return dispatch =>{
    getHotReommend().then(res=>{
      console.log(res)
      dispatch(changeHotRecommendsAction(res))
    })
  }
}

export const changeHotRecommendsAction=(res)=>({
  type:constants.CHANGE_HOT_RECOMMEND,
  hotRecommends:res.result
})