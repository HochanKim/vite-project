import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' // 라우터 추가 (npm install react-router-dom)
import './style/index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)