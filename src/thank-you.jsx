import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ThankYou from './components/ThankYou.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThankYou />
  </StrictMode>,
)
