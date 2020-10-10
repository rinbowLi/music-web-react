import React, { memo } from 'react'

import { SongsWarpper } from './style'

import SingersCover from '@/components/singers-cover'

export default memo(function Artist(props) {
  const { result } = props;
  console.log(result)
  return (
    <SongsWarpper>
      {
        result && result.map((item, index) => {
          return (<SingersCover info={item} />)
        })
      }
      {(!result || result.length === 0) && <div> 暂无搜索结果</div>}
    </SongsWarpper >
  )
})
