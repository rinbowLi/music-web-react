import React, { memo } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

import routes from './router'

import AppHeader from 'components/app-header'
import AppFooter from 'components/app-footer'


export default memo(function App() {
  return (
    <BrowserRouter>
      <AppHeader />
      {renderRoutes(routes)}
      <AppFooter />
    </BrowserRouter>
  )
})
