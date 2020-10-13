import React, { memo } from 'react'

import VideoCover from './c-cpns/video-cover'
import { VideoCoverWarpper } from './style'

export default memo(function Video(props) {
  const { result } = props;
  return (
    <VideoCoverWarpper>
      {
        result && result.map((item, index) => {
          return (<VideoCover key={item.vid || item.id} info={item} />)
        })
      }
      {(!result || result.length === 0) && <div> 暂无搜索结果</div>}
    </VideoCoverWarpper>
  )
})
