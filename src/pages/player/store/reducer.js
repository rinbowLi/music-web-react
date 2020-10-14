import { Map } from 'immutable'
import * as  actionTypes from './constants'

const defaultState = Map({
  playList: [],
  currentSongIndex: 0,
  currentSong: {},
  sequence: 0, //0-循环播放 1-随机播放 2-单曲播放
  lyricList:[],
  curLyricIndex:0,
  isshowPanel:false,
  isShowVolume:false
});

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_CURRENT_SONG:
      return state.set("currentSong", action.currentSong)
    case actionTypes.CHANGE_PLAY_LIST:
      return state.set("playList", action.playList)
    case actionTypes.CHANGE_CURRENT_SONG_INDEX:
      return state.set("currentSongIndex", action.currentSongIndex)
    case actionTypes.CHANGE_SEQUENCE:
      return state.set("sequence", action.sequence)
    case actionTypes.CHANGE_LYRIC_LIST:
      return state.set("lyricList", action.lyricList)
    case actionTypes.CHANGE_CURRENT_LYRIC_INDEX:
      return state.set("curLyricIndex", action.curLyricIndex)
    case actionTypes.CHANGE_IS_SHOW_PANEL:
      return state.set("isshowPanel", action.isshowPanel)
    case actionTypes.CHANGE_IS_SHOW_VOLUME:
      return state.set("isShowVolume", action.isShowVolume)
    default:
      return state;
  }
}