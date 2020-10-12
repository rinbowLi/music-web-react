import * as constants from './constants'

import { search, searchSuggest } from '@/services/search'
import { searchTypeData } from '@/utils/handle-data'


export const changeKeywordsAction = (keywords) => ({
  type: constants.CHANGE_KEYWORDS,
  keywords: keywords
})

export const changeCurIndexAction = (curIndex) => ({
  type: constants.CHANGE_CURINDEX,
  curIndex: curIndex
})

export const changeSearchResultAction = (searchResult) => ({
  type: constants.CHANGE_SEARCHRESULT,
  searchResult: searchResult
})


export const changeSearchSuggestAction = (searchSuggest) => ({
  type: constants.CHANGE_SEARCHSUGGEST,
  searchSuggest: searchSuggest
})

export const getSearchResultAction = (index, keywords) => {
  return (dispatch, getState) => {
    const curIndex = getState().getIn(["search", "curIndex"]);
    let _curIndex = index === void 0 ? curIndex : index;
    const type = searchTypeData[_curIndex].id;
    if (!keywords) return;
    dispatch(changeCurIndexAction(_curIndex));
    dispatch(changeKeywordsAction(keywords));
    search({ type, keywords }).then(res => {
      //根据curIndex渲染对应的组件
      switch (_curIndex) {
        case 0:
          dispatch(changeSearchResultAction(res.result.songs));
          break;
        case 1:
          dispatch(changeSearchResultAction(res.result.artists));
          break;
        case 2:
          dispatch(changeSearchResultAction(res.result.albums));
          break;
        case 3:
          dispatch(changeSearchResultAction(res.result.videos));
          break;
        case 4:
          dispatch(changeSearchResultAction(res.result.songs));
          break;
        case 5:
          dispatch(changeSearchResultAction(res.result.playlists));
          break;
        case 6:
          dispatch(changeSearchResultAction(res.result.djRadios));
          break;
        case 7:
          dispatch(changeSearchResultAction(res.result.userprofiles));
          break;
        default:
          dispatch(changeSearchResultAction(res.result.songs));
          break;
      }
    })
  }
}

export const getSearchSuggestAction = (keywords) => {
  return dispatch => {
    searchSuggest(keywords).then(res => {
      dispatch(changeSearchSuggestAction(res.result || {}))
    })
  }
}

