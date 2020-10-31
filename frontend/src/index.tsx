import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { GlobalStyle } from './assets/globalStyles'
import { ThemeProvider } from './context/ThemeContext'
import { App } from './components/App'

render(
  <React.StrictMode>
    <ThemeProvider>
      <Router>
        <App />
        <GlobalStyle />
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
