import * as actionType from './constants'
import {Map} from 'immutable'

const defaultState = Map({
  topBanners: []
})

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionType.CHANGE_TOP_BANNERS:
      return state.set("topBanners",action.topBanners)
    default:
      return state
  }
}

export default reducer;