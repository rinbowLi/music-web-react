import React, { memo, useEffect, useState } from 'react'
import { SongDetailWarpper } from './style'
import { getLyric } from '@/services/player'
import { parseLyricAnd_N } from '@/utils/parse-lyric'
import { nthIndexOf, getSizeImage } from '@/utils/format-utils'
import { getSongsDetail } from '@/services/songs'


import SongOperationBar from '@/components/song-operation-bar';


export default memo(function SongDetail(props) {
  //第一二段歌词
  const [lyric1, setlyric1] = useState("")
  const [lyric2, setlyric2] = useState("")
  const [isShowMore, setIsShowMore] = useState(false)
  const [curSong, setcurSong] = useState({})

  //解析query
  useEffect(() => {
    getSongsDetail(props.id).then(res => {
      console.log(res)
      setcurSong(res.songs[0])
    })

  }, [props.id])

  useEffect(() => {
    getLyric(1382596189).then(res => {
      if (res.lrc) {
        const lyricList = parseLyricAnd_N(res.lrc.lyric)
        const index = nthIndexOf(lyricList, "<br />", 13);
        setlyric1(lyricList.slice(0, index));
        //<br /> 字符串的长度为6，所以index+6
        setlyric2(lyricList.slice(index + 6));

      }
    })
  }, [])

  return (
    <SongDetailWarpper>
      <div className="cover-img">
        <div className="cover">
          <img className="song-img" src={getSizeImage(curSong.al && curSong.al.picUrl, 130)} alt={curSong.name} />
          <span className="mask sprite_covor"></span>
        </div>
      </div>
      <div className="song-detail">
        <div className="top">
          <div className="head">
            <i className="simple-song sprite_icon2"></i>
            <span className="song-name">{curSong.name}</span>
          </div>
          <div className="singer-name">
            歌手：<span>{(curSong.ar && curSong.ar[0].name) || "未知歌手"}</span>
          </div>
          <div className="album-name">
            所属专辑：<span>{curSong.al && curSong.al.name}</span>
          </div>
          <SongOperationBar favorTitle="收藏"
            shareTitle="分享"
            downloadTitle="下载"
            commentTitle={`(${props.total || 0})`}
            id={111} />
          <div className="lyric">
            <div className="lyric1" dangerouslySetInnerHTML={{ __html: lyric1 }}>
            </div>
            <div className="lyric2" dangerouslySetInnerHTML={{ __html: lyric2 }} style={{ display: isShowMore ? "block" : "none" }}>
            </div>
            <div className="click" onClick={() => setIsShowMore(!isShowMore)}>{isShowMore ? "收起" : "展开"}<span className="sprite_icon2 down"></span></div>
          </div>
        </div>
      </div>
    </SongDetailWarpper>
  )
})
