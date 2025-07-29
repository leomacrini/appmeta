import { useContext} from "react";
import { Contexto } from "../../servicios/Memoria.jsx";
import Meta from "./Meta";
import { Outlet } from "react-router";


  
function Lista() {

  const [estado ] = useContext(Contexto);
  


    return ( 
          <div className="w-full flex flex-col gap-2 px-4 py-2">
           {estado.orden.map(id =>
        <Meta key={id} {...estado.objetos[id]} />
      )} 
      <Outlet />
     </div>
    
  );
}

export default Lista;