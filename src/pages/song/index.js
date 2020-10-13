import React, { memo, useEffect, useState } from 'react'
import { useLocation, NavLink } from 'react-router-dom'
import { parse } from 'query-string'

import { dicoverMenu } from "@/common/local-data";
import { getSongsComment } from '@/services/songs'


import { SongWrapper, SongLeft, SongRight, SongBoxWrapper, TopMenu } from './style'
import SongDetail from './c-cpns/song-detail'
import SongComment from './c-cpns/song-comment'
import IncludePlayList from './c-cpns/include-playlist'
import SimilarSongs from './c-cpns/similar-songs'
import RightDownload from '@/components/right-download'


export default memo(function Song() {
  const [songComment, setsongComment] = useState({})
  const location = parse(useLocation().search);

  useEffect(() => {
    getSongsComment(location.id).then(res => {
      setsongComment(res)
    })
  }, [location.id])

  return (
    <SongBoxWrapper>
      <div className="top">
        <TopMenu className="wrap-v1">
          {
            dicoverMenu.map((item, index) => {
              return (
                <div className="item" key={item.title}>
                  <NavLink to={item.link}>{item.title}</NavLink>
                </div>
              )
            })
          }
        </TopMenu>
      </div>
      <SongWrapper className="wrap-v2">
        <SongLeft>
          <SongDetail id={location.id} total={songComment.total} />
          <SongComment id={location.id} comment ={songComment} />
        </SongLeft>
        <SongRight>
          <IncludePlayList id={location.id} />
          <SimilarSongs id={location.id} />
          <RightDownload id={location.id} />
        </SongRight>

      </SongWrapper>
    </SongBoxWrapper>

  )
})
