import React, { memo, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import classnames from "classnames";
import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

import { headerLinks } from '@/common/local-data'
import { discoverRoute } from '@/utils/handle-data'
import { highLight } from '@/utils/format-utils'

import { HeaderWarpper, HeaderLeft, HeaderRight } from './style'


import { getSearchSuggestAction } from '@/pages/search/store/actionCreators'

export default memo(function MyAppHeader() {
  const [keywords, setKeywords] = useState("")
  const [showSuggest, setShowSuggest] = useState(false)

  const dispatch = useDispatch();
  const location = useLocation().pathname;
  console.log(location)



  const { searchSuggest } = useSelector(state => ({
    searchSuggest: state.getIn(["search", "searchSuggest"])
  }), shallowEqual);

  const getSearchSuggest = (e) => {
    //异步判断是否显示提示框
    new Promise((resolve, reject) => {
      dispatch(getSearchSuggestAction(e.currentTarget.value));
      setKeywords(e.currentTarget.value)
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

  //动态匹配路由信息，展示当前路由的小红色三角形
  const isActive = (link, index) => {
    if (location.indexOf(link) > -1) return "active";
    if (index === 0 && discoverRoute.some(item => location.indexOf(item) > -1)) {
      return "active"
    }
    return ""
  }

  const handleBlur = () => {
    setTimeout(() => {
      setShowSuggest(false)
    }, 100)
  }


  const showSelectedItem = (item, index) => {
    if (index < 3) {
      return <NavLink to={item.link} exact className={isActive(item.link, index)}>
        {item.title}
        <i className="sprite_01 icon"></i>
      </NavLink>
    } else {
      return <a href={item.link} target="_blank" rel="noopener noreferrer">{item.title}</a>
    }
  }

  return (
    <HeaderWarpper>
      <div className="content wrap-v1">
        <HeaderLeft>
          <a href="/" className="logo sprite_01">网易云音乐</a>
          <div className="select-list">
            {
              headerLinks.map((item, index) => {
                return <div className={classnames("select-item")} key={item.title}>{showSelectedItem(item, index)}</div>
              })
            }
          </div>
        </HeaderLeft>
        <HeaderRight>
          <Input className="search" placeholder="音乐/视频/电台/用户" prefix={<SearchOutlined />} value={keywords} onChange={e => getSearchSuggest(e)} onBlur={e => handleBlur()} onFocus={() => isShowSuggest()} />
          <div className="suggest-box" style={{ display: showSuggest ? "block" : "none" }}>
            <div className="user-suggest">
              <NavLink to={`/search?keyword=${keywords}&type=1002`}>搜“{keywords}”相关用户</NavLink>
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
          <div className="center">创作者中心</div>
          <div >登录</div>
        </HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWarpper>
  )
})
