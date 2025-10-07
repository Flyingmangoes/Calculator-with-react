import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './component/App.jsx'
import '../src/css/global.css'

const rootElement = document.getElementById('calculators-wrapper')

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
