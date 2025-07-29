import { useParams } from "react-router";
function Modal({children}) {
    const {id} = useParams();
    return ( 
        <div  className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
            <div className="w-1/2 bg-white rounded-2xl shadow-lg p-6 relative animate-fade-in">
            {children}
            </div>
            </div>
             );
}

export default Modal;