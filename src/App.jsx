import { useState } from 'react'
import './index.css'
import { Routes, Route } from 'react-router';
import Layout from './componentes/compartidos/Layout.jsx';
import Lista from "./componentes/lista/Lista.jsx";
import Detalles from "./componentes/nueva/Detalles.jsx";
import NoEncontrado from './componentes/compartidos/NoEncontrado.jsx';

function App() {

  return (
    
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Lista />} />
        <Route path="/lista" element={<Lista/>} />
        <Route path="/nueva" element={<Detalles/>} />
      </Route>
      <Route path="*" element={<NoEncontrado/>}></Route>
    </Routes>
      
    
  );
}

export default App
