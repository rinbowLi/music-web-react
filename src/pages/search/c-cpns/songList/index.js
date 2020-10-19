import React, { memo } from 'react'
import { NavLink } from "react-router-dom"

import { SongListWarpper } from './style'

import { getCount, getSizeImage, highLight } from '@/utils/format-utils'
import { useDispatch, useSelector, shallowEqual } from "react-redux"
import { getSongDetailAction, changeCurrentPlayListAction } from '@/pages/player/store/actionCreator'
import { getPlaylistDetail } from "@/services/play-list"

export default memo(function SongList(props) {
  const { result } = props;
  const dispatch = useDispatch();

  const { keywords } = useSelector(state => ({
    keywords: state.getIn(["search", "keywords"])
  }), shallowEqual);


  const getAndPlayList = (id) => {
    getPlaylistDetail(id).then(res => {
      dispatch(changeCurrentPlayListAction(res.playlist.tracks));
      dispatch(getSongDetailAction(res.playlist.tracks[0].id));
    })
  }

  return (
    <SongListWarpper>
      {
        result && result.map((item, index) => {
          return (<div key={item.id} className="item">
            <div className="songName"><span className="table play" onClick={() => getAndPlayList(item.id)} ></span>
              <div className="img-box"><img src={getSizeImage(item.coverImgUrl, 50)} alt={item.name} /></div>
              <NavLink to={"/playlist?id=" + item.id} dangerouslySetInnerHTML={{ __html: highLight(item.name, keywords) }}></NavLink></div>
            <div className="singerName"><span>{item.trackCount}首</span>by <NavLink to={"/user?id=" + (item.creator && item.creator.userId)} dangerouslySetInnerHTML={{ __html: highLight(item.creator ? item.creator.nickname : "未知歌手", keywords) }}></NavLink></div>
            <div className="albumName">收藏：{item.bookCount}</div>
            <div className="time">收听：{getCount(item.playCount)}</div>
          </div>)
        })
      }
      {(!result || result.length === 0) && <div> 暂无搜索结果</div>}
    </SongListWarpper>
  )
})
