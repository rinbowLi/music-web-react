import * as actionType from './constants'
import {Map} from 'immutable'

const defaultState = Map({
  topBanners: [],
  hotRecommends:[],
  newAlbum:[],
  upRanking:{},
  newRanking:{},
  originRanking:{},
})

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionType.CHANGE_TOP_BANNERS:
      return state.set("topBanners",action.topBanners)
    case actionType.CHANGE_HOT_RECOMMEND:
      return state.set("hotRecommends",action.hotRecommends)
    case actionType.CHANGE_NEW_ALBUM:
      return state.set("newAlbum",action.newAlbum)
    case actionType.CHANGE_UP_RANKING:
      return state.set("upRanking",action.upRanking)
    case actionType.CHANGE_NEW_RANKING:
      return state.set("newRanking",action.newRanking)
    case actionType.CHANGE_ORIGIN_RANKING:
      return state.set("originRanking",action.originRanking)
    default:
      return state
  }
}

export default reducer;