import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import ConverterContextProvider from './contexts/ConverterContext'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <ConverterContextProvider>
      <App />
    </ConverterContextProvider>
  </React.StrictMode>,
)
