import React, { memo } from 'react'

import { SongsWarpper } from './style'

import SingersCover from './c-cpns/singers-cover'

export default memo(function Artist(props) {
  const { result } = props;
  return (
    <SongsWarpper>
      {
        result && result.map((item, index) => {
          return (<SingersCover info={item} key={item.id} />)
        })
      }
      {(!result || result.length === 0) && <div> 暂无搜索结果</div>}
    </SongsWarpper >
  )
})
