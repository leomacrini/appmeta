import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import Memoria from './servicios/Memoria.jsx';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Memoria>
      <BrowserRouter>
        <App></App>
      </BrowserRouter>
    </Memoria>
  </StrictMode>
);
