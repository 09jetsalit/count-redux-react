import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { counterStore } from './store.js'
import { Provider } from 'react-redux'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={counterStore}>
    <App />
  </Provider>,
)
