import React from 'react'
import ReactDOM from 'react-dom/client'
import { TemaProvider } from './contexts/tema'
import './index.css'
import App from './App'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TemaProvider>
        <App />
    </TemaProvider>
  </React.StrictMode>
);
