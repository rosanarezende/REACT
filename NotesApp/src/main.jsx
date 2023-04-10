import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { NoteProvider } from './contexts/NoteContext'

import App from './App'
import AppWithContext from './AppWithContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NoteProvider>
      <AppWithContext />
    </NoteProvider>
  </React.StrictMode>,
)
