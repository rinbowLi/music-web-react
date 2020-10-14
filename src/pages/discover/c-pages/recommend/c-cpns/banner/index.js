import React, { memo, useEffect, useRef, useState, useCallback } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Carousel } from 'antd'

import { getTopbannerAction } from '../../store/actionCreators'

import { BannerWrapper, BannerLeft, BannerRight, BannerControl } from './style'

export default memo(function TopBanner() {

  const [currentIndex, setcurrentIndex] = useState(0);

  //组件个redux关联：获取数据和进行操作
  //shallowEqual浅层比较，可以优化性能
  const { topBanners } = useSelector(state => ({
    topBanners: state.get("recommend").get("topBanners")
  }), shallowEqual)
  const dispatch = useDispatch();

  const bannerRef = useRef();

  //发送网络请求
  useEffect(() => {
    dispatch(getTopbannerAction())
  }, [dispatch]);

  const bannerChange = useCallback((form, to) => {
    setcurrentIndex(to)
  }, [])

  const handleLink = (id, type) => {
    if (type === 1) {
      return "/song?id=" + id;
    }
    else if (type === 10) {
      return "/album?id=" + id;
    }
    return "/";
  }


  const bgImage = topBanners[currentIndex] && (topBanners[currentIndex].imageUrl + "?imageView&blur=40x20");

  return (
    <BannerWrapper bgImage={bgImage}>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel effect="fade" autoplay ref={bannerRef} beforeChange={bannerChange}>
            {
              topBanners.map(item => (
                <NavLink className="banner-item" to={handleLink(item.targetId, item.targetType)} key={item.imageUrl}>
                  <img className="image" src={item.imageUrl} alt={item.typeTitle} />
                </NavLink>
              ))
            }
          </Carousel>
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl>
          <button className="btn left" onClick={() => bannerRef.current.prev()}></button>
          <button className="btn right" onClick={() => bannerRef.current.next()}></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  )
})
