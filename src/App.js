import React, { memo } from 'react'

import AppHeader from 'components/app-header'
import AppFooter from 'components/app-footer'

export default memo(function App() {
  return (
    <div>
      <AppHeader />
      App
      <AppFooter />
    </div>
  )
})
