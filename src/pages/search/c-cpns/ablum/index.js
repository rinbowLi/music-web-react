import React, { memo } from 'react'
import AlbumCover from './c-cpns/album-cover'
import { AlbumsWarpper } from './style'


export default memo(function Album(props) {
  const { result } = props;
  return (
    <AlbumsWarpper>
      {
        result && result.map((item) => {
          return (
            <AlbumCover key={item.id} info={item} size={130} width={153} bgp="-845px"/>
          )
        })
      }
      {(!result || result.length === 0) && <div> 暂无搜索结果</div>}
    </AlbumsWarpper>
  )
})
