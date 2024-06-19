// src/index.js (or wherever AuthProvider is used)
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {AuthProvider} from './context/AuthContext' // Import correctly

ReactDOM.render(
  <AuthProvider>
    <App />
  </AuthProvider>,
  document.getElementById('root'),
)
