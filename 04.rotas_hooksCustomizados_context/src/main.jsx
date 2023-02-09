import React from 'react'
import ReactDOM from 'react-dom/client'
import { TemaProvider } from './contexts/tema'
import './index.css'
import MyRoutes from './routes'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TemaProvider>
        <MyRoutes />
    </TemaProvider>
  </React.StrictMode>
);
