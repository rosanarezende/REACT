import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from './contexts/theme'
import './index.css'
import MyRoutes from './routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <MyRoutes />
    </ThemeProvider>
  </React.StrictMode>,
)
