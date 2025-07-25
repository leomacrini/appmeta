import estilos from "./Detalles.module.css";
import { useEffect, useState } from 'react';
function Detalles() {
    const [formulario, setFormulario] = useState({
        detalles:"",
        eventos: "0",
        periodo: "semana",  
        icono: "🏃‍♂️",
        meta:"53",
        plazo:"2030-01-01",
        completado: "0"
    });
    const {detalles, eventos, periodo, icono, meta, plazo, completado} = formulario;

    const onChange = (event, prop) => {
        setFormulario(estado => ({
            ...estado, [prop]: event.target.value
        }));
       
    };
    useEffect(() => {
        //console.log("Formulario actualizado:", formulario);
    }, [formulario]);

    const crear = async () => {
        console.log("Formulario enviado:", formulario);
         }

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
          <select className={estilos.campo} value={periodo} onChange={e => onChange(e, 'periodo') }>
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
          <button className={estilos.botonCrear} onClick={crear}>Crear</button>
          <button className={estilos.botonCancelar}>Cancelar</button>
        </div>
      </form>
    </div>
  );
}


export default Detalles;