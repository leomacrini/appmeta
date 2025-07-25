import Encabezado from "./encabezado";
import Principal from "./Principal";
import Pie from "./Pie";
import { Outlet } from "react-router";


function Layout() {
  return (
    <>
    <Encabezado />
    <Principal>
        <Outlet></Outlet>
    </Principal>
    <Pie />
    </>
  );
}

export default Layout