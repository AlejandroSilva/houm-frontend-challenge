import React from 'react'
import ReactDOM from 'react-dom/client'

import { Layout } from './components/Layout'
import { Characters } from './components/Characters'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Layout>
      <Characters />
    </Layout>
  </React.StrictMode>
)
