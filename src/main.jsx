import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import TagManager from 'react-gtm-module'

import './index.css'
import App from './App.jsx'

TagManager.initialize({
  gtmId: import.meta.env.VITE_GTM_ID,
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)