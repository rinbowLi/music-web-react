import * as constants from './constants'

import { getTopBanner, getHotReommend, getAlbum, getTopList } from '@/services/recommend'

export const changeTopBannerAction = (res) => ({
  type: constants.CHANGE_TOP_BANNERS,
  topBanners: res.banners
})

export const getTopbannerAction = () => {
  return dispatch => {
    getTopBanner().then(res => {
      dispatch(changeTopBannerAction(res))
    })
  }
}


export const getHotRecommendsAction = () => {
  return dispatch => {
    getHotReommend().then(res => {
      dispatch(changeHotRecommendsAction(res))
    })
  }
}

export const changeHotRecommendsAction = (res) => ({
  type: constants.CHANGE_HOT_RECOMMEND,
  hotRecommends: res.result
})

export const getAlbumsAction = () => {
  return dispatch => {
    getAlbum(10).then(res => {
      dispatch(changeAlbumsAction(res))
    })
  }
}

export const changeAlbumsAction = (res) => ({
  type: constants.CHANGE_NEW_ALBUM,
  newAlbum: res.albums
})


export const getTopListAction = (idx) => {
  return dispatch => {
    getTopList(idx).then(res => {
      console.log(res)
      switch (idx) {
        case 0:
          dispatch(changeUpRankingAction(res))
          break;
        case 2:
          dispatch(changeNewRankingAction(res))
          break;
        case 3:
          dispatch(changeOriginRakingAction(res))
          break;
        default:
          console.log(res)
      }

    })
  }
}

export const changeUpRankingAction = (res) => ({
  type: constants.CHANGE_UP_RANKING,
  upRanking: res.playlist
})

export const changeNewRankingAction = (res) => ({
  type: constants.CHANGE_NEW_RANKING,
  newRanking: res.playlist
})

export const changeOriginRakingAction = (res) => ({
  type: constants.CHANGE_ORIGIN_RANKING,
  originRanking: res.playlist
})