import { Link } from 'react-router';
import estilos from './Vinculo.module.css';

function Vinculo ({Icono, texto, to}){
    return (
        <Link to={to} className={estilos.vinculo} >
        
           <Icono className={estilos.logo} />
            {texto && <span className={estilos.texto}>{texto}</span>}
        </Link>
    );
}
export default Vinculo;