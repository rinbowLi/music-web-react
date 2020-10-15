import React, { memo } from 'react'

import { SongsWarpper } from './style'
import LyricItem from './c-cpns/lyric-item'



export default memo(function Lyric(props) {
  const { result } = props;
  console.log(result)

  return (
    <SongsWarpper>
      {
        result && result.map((item, index) => {
          return (<LyricItem key={item.id} item={item} />)
        })
      }
      {(!result || result.length === 0) && <div> 暂无搜索结果</div>}
    </SongsWarpper >
  )
})
