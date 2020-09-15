import * as actionType from './constants'
import {Map} from 'immutable'

const defaultState = Map({
  topBanners: [],
  hotRecommends:[]
})

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionType.CHANGE_TOP_BANNERS:
      return state.set("topBanners",action.topBanners)
    case actionType.CHANGE_HOT_RECOMMEND:
      return state.set("hotRecommends",action.hotRecommends)
    default:
      return state
  }
}

export default reducer;