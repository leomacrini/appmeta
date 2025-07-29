import estilos from './Meta.module.css';
import { Link } from "react-router";

function Meta ({id, icono, detalles, periodo, eventos, completado, meta}) {
    
    const porcentaje = meta > 0 ? Math.min((completado / meta) * 100, 100) : 0;
    return (
      <Link to={`/lista/${id}`} className={estilos.meta + " tarjeta"}>
        <div className="flex items-center">
          <div className={estilos.icono}>{icono}</div>
          <p className="text-xl ml-5 mr-10">
            {eventos}
            <sub className=" text-xs text-gray-500 ml-1">/ {periodo}</sub>
          </p>
          <p>{detalles}</p>
        </div>
        <div className="flex">
          <div className="relative m-2 mx-5">
            <p className="text-center">
              {completado} de {meta}
            </p>
            <div className={estilos.barra1}>
              <div
                className={estilos.barra2}
                style={{ width: `${porcentaje}%` }}
              ></div>
            </div>
          </div>
          <button className="boton boton--gris">Completado</button>
        </div>
      </Link>
    );
}

export default Meta ;