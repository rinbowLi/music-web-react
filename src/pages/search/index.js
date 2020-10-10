import React, { memo, useState } from 'react'
import { SearchWrapper } from './style'
import Songs from './c-cpns/song'
import Ablum from './c-cpns/ablum'
import Artist from './c-cpns/artists'
import Djradio from './c-cpns/djradio'
import User from './c-cpns/user'
import Lyric from './c-cpns/lyric'
import SongList from './c-cpns/songList'
import Video from './c-cpns/video'

import { searchTypeData } from '@/utils/handle-data'
import { search } from '@/services/search'

export default memo(function Search() {
  const [curIndex, setCurIndex] = useState(0);
  const [keywords, setKeywords] = useState("");
  const [result, setResult] = useState([]);

  const searchResult = (index) => {
    let _curIndex = index || curIndex;
    const type = searchTypeData[_curIndex].id;
    if (!keywords) return;
    search({ type, keywords }).then(res => {
      setCurIndex(_curIndex);
      //根据curIndex渲染对应的组件
      switch (_curIndex) {
        case 0:
          setResult(res.result.songs);
          break;
        case 1:
          setResult(res.result.artists);
          break;
        case 2:
          setResult(res.result.albums);
          break;
        case 3:
          setResult(res.result.videos);
          break;
        case 4:
          setResult(res.result.songs);
          break;
        case 5:
          setResult(res.result.playlists);
          break;
        case 6:
          setResult(res.result.djRadios);
          break;
        case 7:
          setResult(res.result.userprofiles);
          break;
        default:
          setResult(res.result.songs);
          break;
      }
    })
  }

  const handleClick = (index) => {
    setCurIndex(index);
    searchResult(index)
  }

  return (
    <SearchWrapper className="wrap-v2">
      <div className="g-wrap n-srch">
        <div className="searchInput sprite">
          <input type="text" value={keywords} onChange={e => setKeywords(e.currentTarget.value)} /><button className="btn sprite" onClick={() => searchResult()}></button>
        </div>
        <div id="m-search">
          <div className="snote" style={{ visibility: !keywords ? "hidden" : "visible" }}>搜索“{keywords}”，找到 <span className="count">{result.length}</span> 个用户</div>
          <ul className="tabs tab" data-xname="">
            {
              searchTypeData.map((item, index) => {
                return (<li key={item.id} className={curIndex === index ? "active tab" : "tab"} onClick={() => handleClick(index)}>
                  {item.title}
                </li>)
              })
            }
          </ul>
          <div className="search-result">
            {curIndex === 0 && <Songs result={result} />}
            {curIndex === 1 && <Artist result={result} />}
            {curIndex === 2 && <Ablum result={result} />}
            {curIndex === 3 && <Video result={result} />}
            {curIndex === 4 && <Lyric result={result} />}
            {curIndex === 5 && <SongList result={result} />}
            {curIndex === 6 && <Djradio result={result} />}
            {curIndex === 7 && <User result={result} />}
          </div>
        </div>
      </div>
    </SearchWrapper>
  )
})
