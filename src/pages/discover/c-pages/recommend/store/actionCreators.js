import * as constants from './constants'

import {getTopBanner} from '@/services/recommend'

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