import estilos from "./Detalles.module.css";
import { useEffect, useState, useContext } from 'react';
import { Contexto } from "../../servicios/Memoria.jsx";
import {  useNavigate, useParams } from "react-router";
import { crearMeta } from "../../servicios/Pedidos.jsx";
function Detalles() {
    const {id} = useParams();

    const [formulario, setFormulario] = useState({
        detalles:"",
        eventos: "0",
        periodo: "semana",  
        icono: "🏃‍♂️",
        meta:"53",
        plazo:"2030-01-01",
        completado: "0"
    });

    const [estado, enviar] = useContext(Contexto);

    

    const {detalles, eventos, periodo, icono, meta, plazo, completado} = formulario;

    const onChange = (event, prop) => {
        setFormulario(estado => ({
            ...estado, [prop]: event.target.value
        }));
       
    };
    const metaMemoria = estado.objetos[id];
    const navegar = useNavigate();
    useEffect(() => {
      
      if (!id) return;
      if (!metaMemoria) {
        return navegar('/404');}
        setFormulario(metaMemoria); 
    }, [id, metaMemoria, navegar]);

    const crear = async () => {
      const nuevaMeta = await crearMeta();
  
    enviar({ tipo: 'crear', meta: nuevaMeta });
    navegar('/lista');
  };

      const actualizar = () => {
  enviar({ tipo: 'actualizar', meta: formulario });
  navegar('/lista');
  };
   const cancelar = () => {
    
    navegar('/lista');
   };

   const eliminar = () => {
    
    enviar({ tipo: 'eliminar', id });
    navegar('/lista');
    };


    const frencuencia = ["dia", "semana", "mes", "año"];
    const iconos = ["💻", "🏃‍♂️", "📚", "✈️", "💵"]
    return ( 

    <div className="min-h-screen bg-[#e0e0e0] px-4 py-8">
      <form className={estilos.formulario}>
        
        <div>
          <label className={estilos.etiqueta}>Describe tu Meta</label>
        </div>
          <input className={estilos.campo} placeholder="Ejemplo 52 caminatas" value={detalles} onChange={e => onChange(e, 'detalles')}/>

        
          <div>
          <label className={estilos.etiqueta}>¿Con qué frecuencia deseas cumplir tu meta?
            <span>(ej. 1 vez a la semana)</span>
            <div className="flex mb-6">
             <input type="number" className={`${estilos.campo} mb-2`} value={eventos} onChange={e => onChange(e, 'eventos')} />
          <select className={estilos.campo}  value={periodo} onChange={e => onChange(e, 'periodo') }>
            {frencuencia.map((opcion) => (
              <option key={opcion} value={opcion}>{opcion}</option>
            ))}
          </select>
          </div>
          </label>
         
        </div>
         
    

        <div>
          <label className={estilos.etiqueta}>¿Cuántas veces deseas completar esta meta?</label>
          <input type="number" className={estilos.campo} value={meta} onChange={e => onChange(e, 'meta') } />
        </div>

        <div>
          <label className={estilos.etiqueta}>¿Tienes una fecha límite?</label>
          <input type="date" className={estilos.campo} value={plazo} onChange={e => onChange(e, 'plazo') } />
        </div>

        <div>
          <label className={estilos.etiqueta}>¿Cuántas veces has completado ya esta meta?</label>
          <input type="number" className={estilos.campo} value={completado} onChange={e => onChange(e, 'completado') } />
        </div>

        <div>
          <label className={estilos.etiqueta}>Escoge el icono para la meta</label>
          <select className={estilos.campo} value={icono} onChange={e => onChange(e, 'icono') }>
            {iconos.map((icono) => (
              <option key={icono} value={icono}>{icono}</option>
            ))}
          </select>
        </div>

        <div className={estilos.botones}>
          {!id && <button className={estilos.botonCrear} onClick={crear}>Crear</button>}
          {id && <button className={estilos.botonCrear} onClick={actualizar}>Actualizar</button>}
          <button className={estilos.botonCancelar} onClick={cancelar} >Cancelar</button>
          {id && <button className={estilos.botonCancelar} onClick={eliminar}>Eliminar</button>}
        </div>
      </form>
    </div>
  );
};



export default Detalles;