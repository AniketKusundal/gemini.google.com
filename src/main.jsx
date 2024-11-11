import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ContextProvider from '/React JS Project/Gemini_Clone/src/Context/context.jsx'

createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <App/>
  </ContextProvider>
)
