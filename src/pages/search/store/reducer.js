import * as actionType from './constants'
import { Map } from 'immutable'

const defaultState = Map({
  keywords: "",
  curIndex: 0,
  searchResult: [],
  searchSuggest:{}
})

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionType.CHANGE_KEYWORDS:
      return state.set("keywords", action.keywords)
    case actionType.CHANGE_CURINDEX:
      return state.set("curIndex", action.curIndex)
    case actionType.CHANGE_SEARCHRESULT:
      return state.set("searchResult", action.searchResult)
    case actionType.CHANGE_SEARCHSUGGEST:
      return state.set("searchSuggest", action.searchSuggest)
    default:
      return state
  }
}

export default reducer;