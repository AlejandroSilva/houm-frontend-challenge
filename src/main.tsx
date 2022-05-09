import React from 'react'
import ReactDOM from 'react-dom/client'

import { Layout } from './components/Layout'
import { Villagers } from './components/Villagers'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Layout>
      <Villagers />
    </Layout>
  </React.StrictMode>
)
