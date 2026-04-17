import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const savedTheme = localStorage.getItem("diffraview-theme");
if (savedTheme !== "light") {
  document.documentElement.classList.add("dark");
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
