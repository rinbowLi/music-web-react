import React, { memo, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

import { DiscoverWrapper, TopMenu } from './style'
import request from '@/services/request'

import { dicoverMenu } from '@/common/local-data'


export default memo(function Discover(props) {
  useEffect(() => {
    request({
      url: "/banner"
    }).then(console.log)
  })
  return (
    <DiscoverWrapper>
      <div className="top">
        <TopMenu className="wrap-v1">
          {
            dicoverMenu.map((item, index) => {
              return (<div className="item" key={item.title}>
                <NavLink to={item.link}>{item.title}</NavLink>
              </div>)
            })
          }
        </TopMenu>
        {renderRoutes(props.route.routes)}
      </div>
    </DiscoverWrapper>
  )
})
