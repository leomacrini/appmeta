import { useContext, useEffect } from 'react'
import './index.css'
import { Routes, Route, } from 'react-router';
import Layout from './componentes/compartidos/Layout.jsx';
import Lista from "./componentes/lista/Lista.jsx";
import Detalles from "./componentes/nueva/Detalles.jsx";
import NoEncontrado from './componentes/compartidos/NoEncontrado.jsx';
import Modal from './componentes/compartidos/Modal.jsx';

import { Contexto } from './servicios/Memoria.jsx';
import {  pedirMetas } from './servicios/Pedidos.jsx';


function App() {
  const [, enviar] = useContext(Contexto);
useEffect( () => {
    (async function () {
      const metas = await pedirMetas();
      enviar({ tipo: "colocar", metas });
    })();
  }, []);


  return (
    
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Lista />} />
        <Route path="/lista" element={<Lista/>} >
        <Route path= "/lista/:id" element={
          <Modal>
            <Detalles />
          </Modal>} />
        </Route>
        <Route path="/nueva" element={<Detalles/>} />
      </Route>
      <Route path="*" element={<NoEncontrado/>}></Route>
    </Routes>
      
    
  );
}

export default App
