import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css';
import App from './App.jsx'
import {BrowserRouter as Rotas} from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <Rotas>
      <App />
    </Rotas>
     
    
  </StrictMode>,
)
