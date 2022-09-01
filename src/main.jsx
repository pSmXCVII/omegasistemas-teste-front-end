import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Header from './components/Header'
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Router>
      <App />
    </Router>
  </React.StrictMode>
)
