import { getSongDetail } from '@/services/player'
import * as constants from './constants'

export const getSongDetailAction = (ids) => {
  return dispatch => {
    getSongDetail(ids).then(res => {
      dispatch(changeCurrentSongAction(res.songs[0]))
    })
  }
}

const changeCurrentSongAction =(currentSong) => ({
  type: constants.CHANGE_CURRENT_SONG,
  currentSong
})