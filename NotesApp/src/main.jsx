import React from 'react'
import ReactDOM from 'react-dom/client'
import App, { AppSemContext } from './App'
import './index.css'
import { NoteProvider } from './contexts/NoteContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NoteProvider>
      <App />
    </NoteProvider>
  </React.StrictMode>,
)
