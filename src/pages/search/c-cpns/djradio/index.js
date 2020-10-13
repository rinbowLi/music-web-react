import React, { memo } from 'react'

import DjradioCover from './c-cpns/djradio-cover'
import { DjradioCoverWarpper } from './style'

export default memo(function Djradio(props) {
  const { result } = props;
  return (
    <DjradioCoverWarpper>
      <h2>主播电台</h2>
      <div className="djRadios">
        {
          result && result.slice(0,10).map((item, index) => {
            return (<DjradioCover key={item.id} info={item} />)
          })
        }
        {(!result || result.length === 0) && <div> 暂无搜索结果</div>}
      </div>
    </DjradioCoverWarpper>

  )
})
