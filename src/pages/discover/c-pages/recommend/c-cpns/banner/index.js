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

  const handleLink = (item) => {
    const { targetId, targetType, url } = item
    //1--单曲，1004--mv,10--专辑，3000-其他
    if (targetType === 1) {
      return (<NavLink className="banner-item" to={"/song?id=" + targetId} key={item.imageUrl}>
        <img className="image" src={item.imageUrl} alt={item.typeTitle} />
      </NavLink>);
    }
    else if (targetType === 10) {
      return (<NavLink className="banner-item" to={"/album?id=" + targetId} key={item.imageUrl}>
        <img className="image" src={item.imageUrl} alt={item.typeTitle} />
      </NavLink>);
    }
    else if (targetType === 3000) {
      return (<a className="banner-item" href={url} target="_blank" rel="noopener noreferrer" key={item.imageUrl}>
        <img className="image" src={item.imageUrl} alt={item.typeTitle} />
      </a>);
    }
    return (<NavLink className="banner-item" to={"/"} key={item.imageUrl}>
      <img className="image" src={item.imageUrl} alt={item.typeTitle} />
    </NavLink>);
  }


  const bgImage = topBanners[currentIndex] && (topBanners[currentIndex].imageUrl + "?imageView&blur=40x20");

  return (
    <BannerWrapper bgImage={bgImage}>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel effect="fade" autoplay ref={bannerRef} beforeChange={bannerChange}>
            {
              topBanners.map(item => (
                handleLink(item)
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
