import  LogoSVG  from '../../img/logo.svg?react';
import PerfilSVG from '../../img/perfil.svg?react';
import estilos from './Encabezado.module.css';
import Vinculo from './Vinculo.jsx';


function Encabezado() {

  return (
     
      <header className={estilos.encabezado}>
       <div className={estilos.contenedor}>
        <LogoSVG className={estilos.logo}/>
    <a className={estilos.titulo} href="">MetasApp</a>
       </div>
       <nav>
        <Vinculo to="/perfil"  Icono={PerfilSVG}/>
    
       </nav>
      </header>
    
  )
}

export default Encabezado