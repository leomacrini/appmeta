import { useReducer } from 'react';
import {createContext} from 'react';


/*const memoria = localStorage.getItem("metas");*/
const estadoInicial ={
    orden : [],
    objetos :{}
}

/*memoria ? JSON.parse(memoria) : {
    orden : [],
    objetos :{}
};*/

function reductor(estado, accion) {
    switch (accion.tipo) {
        case "colocar":{
            const metas = accion.metas;
            const nuevoEstado = {
                orden : metas.map(meta => meta.id),
                objetos : metas.reduce((objeto, meta) => ({...objeto, [meta.id]: meta}), {}) 
            };
           /* localStorage.setItem("metas", JSON.stringify(nuevoEstado));*/
            return nuevoEstado; 
        };
        case "crear":{
            const id = accion.meta.id; /* String(Math.random());//*/
            const nuevoEstado = {
                orden : [...estado.orden, id ],
                objetos : {
                    ...estado.objetos,[id]: accion.meta
                }
            };
           /* localStorage.setItem("metas", JSON.stringify(nuevoEstado));*/
            return nuevoEstado; 
        };
        case "actualizar":{
            const id = accion.meta.id;
            estado.objetos[id] = {
                ... estado.objetos[id],
                ...accion.meta
            };
               const nuevoEstado = {...estado };
             /*  localStorage.setItem("metas", JSON.stringify(nuevoEstado));*/
               return nuevoEstado; 
            };
            
            

        case "eliminar":{
            const id = accion.id;
            const nuevoEstado = {
                orden : estado.orden.filter(metaId => metaId !== id),
                objetos : {...estado.objetos}
            };
            delete nuevoEstado.objetos[id];
            /*localStorage.setItem("metas", JSON.stringify(nuevoEstado));*/
            return nuevoEstado; 
        };
        
        default:
            throw new Error(`Acción desconocida: ${accion.tipo}`);
        };   
        
};    
    
   /* reductor(estadoInicial, {tipo: "colocar", metas: listaMock});*/

    export const Contexto = createContext(null);

function Memoria({children}) {

    const [estado, enviar ] = useReducer(reductor, estadoInicial);
    return (
       <Contexto.Provider value={[estado, enviar]}>{children}
       </Contexto.Provider>
    );

}

export default Memoria;