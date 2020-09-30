import { getSongDetail, getLyric } from '@/services/player'
import * as constants from './constants'
import { parseLyric } from '@/utils/parse-lyric'

export const getSongDetailAction = (ids) => {
  return (dispatch, getState) => {
    //1、先判断是否含有当前歌曲
    const playList = getState().getIn(["player", "playList"]);
    const songIndex = playList.findIndex(item => item.id === ids);
    let song = null;
    //如果存在的话那就只要改变当前index就好
    if (songIndex !== -1) {
      console.log(songIndex)
      dispatch(changeCurrentSongIndexAction(songIndex));
      dispatch(changeCurrentSongAction(playList[songIndex]))
      //3.获取歌词
      dispatch(getLyricAction(playList[songIndex].id))

    } else {
      //不存在的话
      //请求歌曲数据
      getSongDetail(ids).then(res => {
        //获取歌曲
        song = res.songs && res.songs[0];
        if (!song) return;
        const newPlayList = [...playList];
        newPlayList.unshift(song);
        //改变当前index,song,playList
        dispatch(changeCurrentPlayListAction(newPlayList));
        dispatch(changeCurrentSongIndexAction(0));
        dispatch(changeCurrentSongAction(song))
        //3.获取歌词
        dispatch(getLyricAction(song.id))
      })
    }



  }
}

const changeCurrentSongAction = (currentSong) => ({
  type: constants.CHANGE_CURRENT_SONG,
  currentSong
})

export const changeCurrentSong = (tag) => {
  return (dispatch, getState) => {
    //获取播放模式
    const sequence = getState().getIn(["player", "sequence"]);
    let curSongIndex = getState().getIn(["player", "currentSongIndex"]);
    let playList = getState().getIn(["player", "playList"]);
    switch (sequence) {
      case 1: //随机播放
        let randomIndex = Math.floor(Math.random() * playList.length);
        while (randomIndex === curSongIndex) {
          randomIndex = Math.floor(Math.random() * playList.length)
        }
        curSongIndex = randomIndex
        break;
      default: //顺序播放（单曲循环)
        curSongIndex += tag;
        if (curSongIndex >= playList.length) curSongIndex = 0;
        if (curSongIndex < 0) curSongIndex = playList.length - 1;
    }
    const currentSong = playList[curSongIndex];
    dispatch(changeCurrentSongAction(currentSong));
    dispatch(changeCurrentSongIndexAction(curSongIndex))
    dispatch(getLyricAction(currentSong.id))
  }
}


const changeCurrentSongIndexAction = (currentSongIndex) => ({
  type: constants.CHANGE_CURRENT_SONG_INDEX,
  currentSongIndex
})


export const changeCurrentPlayListAction = (playList) => ({
  type: constants.CHANGE_PLAY_LIST,
  playList
})


export const changeSequenceAction = (sequence) => ({
  type: constants.CHANGE_SEQUENCE,
  sequence
})

export const getLyricAction = (id) => {
  return dispatch => {
    getLyric(id).then(res => {
      if(res.lrc){
        const lyricList = parseLyric(res.lrc.lyric)
        dispatch(changeLyricAction(lyricList))
      }
    })
  }
}

export const changeLyricAction = (lyricList) => ({
  type: constants.CHANGE_LYRIC_LIST,
  lyricList
})


export const changeCurLyricIndexAction = (curLyricIndex) => ({
  type: constants.CHANGE_CURRENT_LYRIC_INDEX,
  curLyricIndex
})