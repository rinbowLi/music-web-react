import React, { memo } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { Provider } from 'react-redux'

import routes from './router'
import store from './store'

import AppHeader from 'components/app-header'
import AppFooter from 'components/app-footer'
import AppPlayerBar from './pages/player/app-player-bar';


export default memo(function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppHeader />
        {renderRoutes(routes)}
        <AppFooter />
        <AppPlayerBar/>
      </BrowserRouter>
    </Provider>
  )
})
