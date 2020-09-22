import React, { memo } from 'react'

import { PlayerWrapper, PlayerLeft, PlayerRight } from './style'

export default memo(function Player() {
  return (
    <PlayerWrapper>
      <div className="content wrap-v2">
        <PlayerLeft>
          <div>PlayerInfo</div>
          <div>commentInfo</div>
        </PlayerLeft>
        <PlayerRight>
          <div>simiplaylist</div>
          <div>simisongs</div>
          <div>DownLoad</div>
        </PlayerRight>
      </div>
    </PlayerWrapper>
  )
})
