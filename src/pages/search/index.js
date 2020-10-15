import React, { memo, useEffect, useRef, useState, useCallback } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import { parse, stringify } from 'query-string'
import { SearchWrapper } from './style'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Songs from './c-cpns/song'
import Ablum from './c-cpns/ablum'
import Artist from './c-cpns/artists'
import Djradio from './c-cpns/djradio'
import User from './c-cpns/user'
import Lyric from './c-cpns/lyric'
import SongList from './c-cpns/songList'
import Video from './c-cpns/video'

import { searchTypeData } from '@/utils/handle-data'
import { highLight } from '@/utils/format-utils'

import { getSearchResultAction, changeCurIndexAction, getSearchSuggestAction, changeKeywordsAction } from './store/actionCreators'

export default memo(function Search() {

  const [showSuggest, setShowSuggest] = useState(false)
  const [_type, setType] = useState(1);
  const [keyword, setkeyword] = useState("");
  const inputRef = useRef();
  const dispatch = useDispatch();
  const history = useHistory();
  let location = useLocation().search;

  const getSearchResult = useCallback((index) => {
    const keywords = inputRef.current.value;
    dispatch(getSearchResultAction(index, keywords))
  }, [dispatch])


  //获取url上的参数
  useEffect(() => {
    const { type, keyword } = parse(location);
    setType(type);
    setkeyword(keyword)
    dispatch(changeKeywordsAction(keyword));
    inputRef.current.value = keyword;
    switch (Number(type)) {
      case 1:
        dispatch(changeCurIndexAction(0))
        getSearchResult(0);
        break;
      case 100:
        dispatch(changeCurIndexAction(1))
        getSearchResult(1);
        break;
      case 10:
        dispatch(changeCurIndexAction(2))
        getSearchResult(2);
        break;
      case 1014:
        dispatch(changeCurIndexAction(3))
        getSearchResult(3);
        break;
      case 1006:
        dispatch(changeCurIndexAction(4))
        getSearchResult(4);
        break;
      case 1000:
        dispatch(changeCurIndexAction(5))
        getSearchResult(5);
        break;
      case 1009:
        dispatch(changeCurIndexAction(6))
        getSearchResult(6);
        break;
      case 1002:
        dispatch(changeCurIndexAction(7))
        getSearchResult(7);
        break;
      default:
        dispatch(changeCurIndexAction(0))
        getSearchResult(0);
        break;
    }
  }, [dispatch, getSearchResult, location, _type])

  const { curIndex, keywords, searchResult, searchSuggest } = useSelector(state => ({
    curIndex: state.getIn(["search", "curIndex"]),
    keywords: state.getIn(["search", "keywords"]),
    searchResult: state.getIn(["search", "searchResult"]),
    searchSuggest: state.getIn(["search", "searchSuggest"])
  }), shallowEqual);

  const changeTypebyIndex = (index) => {
    switch (index) {
      case 0:
        setType(1)
        setURLSearch(keyword, 1)
        break;
      case 1:
        setType(100)
        setURLSearch(keyword, 100)
        break;
      case 2:
        setType(10)
        setURLSearch(keyword, 10)
        break;
      case 3:
        setType(1014)
        setURLSearch(keyword, 1014)
        break;
      case 4:
        setType(1006)
        setURLSearch(keyword, 1006)
        break;
      case 5:
        setType(1000)
        setURLSearch(keyword, 1000)
        break;
      case 6:
        setType(1009)
        setURLSearch(keyword, 1009)
        break;
      case 7:
        setType(1002)
        setURLSearch(keyword, 1002)
        break;
      default:
        setType(1)
        setURLSearch(keyword, 1)
        break;
    }
  }


  const setURLSearch = (_keyword, type) => {
    let urlSearch = stringify({ type, keyword: _keyword });
    history.push("/search?" + urlSearch)
  }

  const handleClick = (index) => {
    dispatch(changeCurIndexAction(index))
    changeTypebyIndex(index)
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

  const getSearchSuggest = () => {
    //异步判断是否显示提示框
    new Promise((resolve, reject) => {
      const value = inputRef.current.value;
      if (value) {
        dispatch(getSearchSuggestAction(inputRef.current.value));
        dispatch(changeKeywordsAction(inputRef.current.value));
        resolve(1)
      } else {
        reject(0)
      }
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

  const handleBlur = () => {
    setTimeout(() => {
      setShowSuggest(false)
    }, 100)
  }

  return (
    <SearchWrapper className="wrap-v2">
      <div className="g-wrap n-srch">
        <div className="searchInput sprite">
          <input type="text" ref={inputRef} onChange={e => getSearchSuggest()} onBlur={e => handleBlur()} onFocus={() => isShowSuggest()} /><button className="btn sprite" onClick={() => getSearchResult()}></button>
          <div className="suggest-box" style={{ display: showSuggest ? "block" : "none" }}>
            <div className="user-suggest">
              <span>搜“{inputRef.current ? inputRef.current.value : ""}”相关用户</span>
            </div>
            <div className="other-suggest">
              <div className="singer list" style={{ display: searchSuggest && searchSuggest.artists && searchSuggest.artists.length > 0 ? "flex" : "none" }}>
                <div className="left"><span className="sprite_icon2 singer"></span>歌手</div>
                <div className="right">
                  {
                    searchSuggest && searchSuggest.artists && searchSuggest.artists.map(item => {
                      return (<div className="list-item text-nowrap" key={item.id}><span dangerouslySetInnerHTML={{ __html: highLight(item.name, keywords) }}></span></div>)
                    })
                  }
                </div>
              </div>
              <div className="song list" style={{ display: searchSuggest && searchSuggest.songs && searchSuggest.songs.length > 0 ? "flex" : "none" }}>
                <div className="left"><span className="sprite_icon2 song"></span>单曲</div>
                <div className="right">
                  {
                    searchSuggest && searchSuggest.songs && searchSuggest.songs.map(item => {
                      return (<NavLink to={"/song?id=" + item.id} className="list-item text-nowrap" key={item.id}><span dangerouslySetInnerHTML={{ __html: highLight(item.name + "-" + (item.artists.length > 0 && item.artists[0].name), keywords) }}></span></NavLink>)
                    })
                  }
                </div>
              </div>
              <div className="album list" style={{ display: searchSuggest && searchSuggest.albums && searchSuggest.albums.length > 0 ? "flex" : "none" }}>
                <div className="left"><span className="sprite_icon2 album"></span>专辑</div>
                <div className="right">
                  {
                    searchSuggest && searchSuggest.albums && searchSuggest.albums.map(item => {
                      return (<NavLink to={"/album?id=" + item.id} className="list-item text-nowrap" key={item.id}><span dangerouslySetInnerHTML={{ __html: highLight(item.name + "-" + item.artist && item.artist.name, keywords) }}></span></NavLink>)
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
