import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { getAlbumsAction } from '../../store/actionCreators'

import { Carousel } from 'antd'
import ThemeReaderRcm from '@/components/theme-header-rcm'
import AlbumCover from '@/components/album-cover'
import { AlbumWrapper } from './style'
import { useRef } from 'react'

export default memo(function NewAlbum() {

  const dispatch = useDispatch();
  const { newAlbum } = useSelector((state) => ({
    newAlbum: state.get("recommend").get("newAlbum")
  }), shallowEqual)


  const pageRef = useRef();

  useEffect(() => {
    dispatch(getAlbumsAction())
  }, [dispatch])


  return (
    <AlbumWrapper>
      <ThemeReaderRcm title="新碟上架" link={"/discover/album"} />
      <div className="content">
        <button className="arrow arrow-left sprite_02" onClick={e => pageRef.current.prev()}></button>
        <div className="album">
          <Carousel dots={false} ref={pageRef}>
            {
              [0, 1].map((item) => {
                return (
                  <div key={item} className="page">
                    {
                      newAlbum.slice(item * 5, (item + 1) * 5).map((iten) => {
                        return (
                          <AlbumCover key={iten.id} info={iten} size={100} width={118} bgp="-570px">

                          </AlbumCover>
                        )
                      })

                    }
                  </div>
                )
              })
              // newAlbum.map((item) => {
              //   return <Carousel key={item.id}>{item.name}</Carousel>
              // })
            }
          </Carousel>
        </div>

        <button className="arrow arrow-right sprite_02" onClick={e => pageRef.current.next()}></button>
      </div>

    </AlbumWrapper>
  )
})
