import React from 'react'
import 'styled-components/macro'
import { NavBar, Layout } from 'components'
import AppRoutes from 'routes'

function App() {
  return (
    <Layout id="layout">
      <NavBar />
      <AppRoutes />
    </Layout>
  )
}

export default App
