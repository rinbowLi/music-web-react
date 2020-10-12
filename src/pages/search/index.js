import React, { memo, useRef, useState } from 'react'
import { SearchWrapper } from './style'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import Songs from './c-cpns/song'
import Ablum from './c-cpns/ablum'
import Artist from './c-cpns/artists'
import Djradio from './c-cpns/djradio'
import User from './c-cpns/user'
import Lyric from './c-cpns/lyric'
import SongList from './c-cpns/songList'
import Video from './c-cpns/video'

import { searchTypeData } from '@/utils/handle-data'
import _ from 'lodash'

import { getSearchResultAction, changeCurIndexAction, getSearchSuggestAction } from './store/actionCreators'

export default memo(function Search() {

  const [showSuggest, setShowSuggest] = useState(false)
  const inputRef = useRef();
  const dispatch = useDispatch();

  const { curIndex, keywords, searchResult, searchSuggest } = useSelector(state => ({
    curIndex: state.getIn(["search", "curIndex"]),
    keywords: state.getIn(["search", "keywords"]),
    searchResult: state.getIn(["search", "searchResult"]),
    searchSuggest: state.getIn(["search", "searchSuggest"])
  }), shallowEqual);

  const getSearchResult = (index) => {
    const keywords = inputRef.current.value;
    dispatch(getSearchResultAction(index, keywords))

  }

  const handleClick = (index) => {
    dispatch(changeCurIndexAction(index))
    getSearchResult(index)
  }

  const searchResultTips = () => {
    if (!searchResult) return;
    switch (curIndex) {
      case 0:
        return `首单曲`
      case 1:
        return `个歌手`
      case 2:
        return `张专辑`
      case 3:
        return `个视频`
      case 4:
        return `个歌词`
      case 5:
        return `个歌单`
      case 6:
        return `个节目`
      case 7:
        return `个用户`
      default:
        return `首单曲`
    }
  }

  //防抖
  function debounce(fn, wait, data) {
    var timeout = null;
    var that = this;
    return function () {
      clearTimeout(timeout);
      timeout = setTimeout(function () {
        fn.call(that, data);
      }, wait);
    };
  }

  const getSearchSuggest = () => {
    //异步判断是否显示提示框
    new Promise((resolve, reject) => {
      dispatch(getSearchSuggestAction(inputRef.current.value));
      resolve(1)
    }).then(() => {
      if (Object.keys(searchSuggest).length > 0) {
        setShowSuggest(true)
      } else {
        setShowSuggest(false)
      }
    }).catch(() => {
      setShowSuggest(false)
    })
  }

  const isShowSuggest = () => {
    if (Object.keys(searchSuggest).length > 0) {
      setShowSuggest(true)
    } else {
      setShowSuggest(false)
    }
  }

  return (
    <SearchWrapper className="wrap-v2">
      <div className="g-wrap n-srch">
        <div className="searchInput sprite">
          <input type="text" ref={inputRef} onChange={e => getSearchSuggest()} onBlur={e => setShowSuggest(false)} onFocus={() => isShowSuggest()} /><button className="btn sprite" onClick={() => getSearchResult()}></button>
          <div className="suggest-box" style={{ display: showSuggest ? "block" : "none" }}>
            <div className="user-suggest">
              <span>搜“{inputRef.current ? inputRef.current.value : ""}”相关用户 ></span>
            </div>
            <div className="other-suggest">
              <div className="singer list" style={{ display: searchSuggest && searchSuggest.artists && searchSuggest.artists.length > 0 ? "flex" : "none" }}>
                <div className="left"><span className="sprite_icon2 singer"></span>歌手</div>
                <div className="right">
                  {
                    searchSuggest && searchSuggest.artists && searchSuggest.artists.map(item => {
                      return (<div className="list-item text-nowrap" key={item.id}>{item.name}</div>)
                    })
                  }
                </div>
              </div>
              <div className="song list" style={{ display: searchSuggest && searchSuggest.songs && searchSuggest.songs.length > 0 ? "flex" : "none" }}>
                <div className="left"><span className="sprite_icon2 song"></span>单曲</div>
                <div className="right">
                  {
                    searchSuggest && searchSuggest.songs && searchSuggest.songs.map(item => {
                      return (<div className="list-item text-nowrap" key={item.id}>{item.name} - {item.artists.length > 0 && item.artists[0].name}</div>)
                    })
                  }
                </div>
              </div>
              <div className="album list" style={{ display: searchSuggest && searchSuggest.albums && searchSuggest.albums.length > 0 ? "flex" : "none" }}>
                <div className="left"><span className="sprite_icon2 album"></span>专辑</div>
                <div className="right">
                  {
                    searchSuggest && searchSuggest.albums && searchSuggest.albums.map(item => {
                      return (<div className="list-item text-nowrap" key={item.id}>{item.name} - {item.artist && item.artist.name}</div>)
                    })
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="m-search">
          <div className="snote" style={{ visibility: !keywords ? "hidden" : "visible" }}>搜索“{keywords}”，找到 <span className="count">{searchResult ? searchResult.length : 0}</span> {searchResultTips()}</div>
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
            {curIndex === 0 && <Songs result={searchResult} />}
            {curIndex === 1 && <Artist result={searchResult} />}
            {curIndex === 2 && <Ablum result={searchResult} />}
            {curIndex === 3 && <Video result={searchResult} />}
            {curIndex === 4 && <Lyric result={searchResult} />}
            {curIndex === 5 && <SongList result={searchResult} />}
            {curIndex === 6 && <Djradio result={searchResult} />}
            {curIndex === 7 && <User result={searchResult} />}
          </div>
        </div>
      </div>
    </SearchWrapper>
  )
})
