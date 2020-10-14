import React, { memo, useEffect, useState } from 'react'
import { useLocation, NavLink } from 'react-router-dom'
import { parse } from 'query-string'

import { dicoverMenu } from "@/common/local-data";
import { getAlbumDetail } from '@/services/album'

import PlayInfo from './c-cpns/playlist-info'
import PlayList from "./c-cpns/play-list"
import PlayListComment from './c-cpns/playlist-comment'
import RecommendPlaylist from './c-cpns/recommend-playlist'
import RightDownload from '@/components/right-download';

import { PlaylistWrapper, PlaylistLeft, PlaylistRight, PlaylistBoxWrapper, TopMenu } from './style'


export default memo(function Playlist() {
  const [playlistDetail, setplaylistDetail] = useState({})
  const location = parse(useLocation().search);

  useEffect(() => {
    getAlbumDetail(location.id).then(res => {
      setplaylistDetail(res);
    })
  }, [location.id])

  return (
    <PlaylistBoxWrapper>
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
      <PlaylistWrapper className="wrap-v2">
        <PlaylistLeft>
          <PlayInfo playlistDetail={playlistDetail} />
          <PlayList playlistDetail={playlistDetail} />
          <PlayListComment id={location.id} />
        </PlaylistLeft>
        <PlaylistRight>
          <RecommendPlaylist id={playlistDetail.album && playlistDetail.album.artist.id} albumId={location.id} />
          <RightDownload />
        </PlaylistRight>

      </PlaylistWrapper>
    </PlaylistBoxWrapper>

  )
})
