import { useNavigate } from "react-router-dom";
import { useAuthContext } from '../context/AuthContext';
import { useAppContext } from "../context/AppContext";
import { toast } from "react-toastify";


export default function Pagar() {
    const {carrito, total, vaciarCarrito, eliminarDelCarrito } = useAppContext();
    const { usuario, cerrarSesion } = useAuthContext();
    const navigate = useNavigate();

    const tokenActual = localStorage.getItem('authToken');


    // Función para finalizar compra
    const comprar = () => {
        toast.success("¡Compra realizada con éxito!");
        vaciarCarrito(); // Limpiar carrito después de comprar
        navigate("/Productos/todos");
    };

    return (
        <div>
            {/* Info del usuario */}
            <div>
                <h1>{usuario.nombre}</h1>
                <p>Email: {usuario.mail}</p>
                
                <button id="boton-vaciar"  onClick={cerrarSesion}>Cerrar sesión</button>
                <hr />
            </div>

            {/* Carrito */}
            <div>
                <h1>Tu compra:</h1>

                {carrito.length > 0 ? (
                    <>
                        {carrito.map((producto) => (
                            <div className='carrito-item'  key={producto.id}>
                                <img src={producto.imagen} alt={producto.nombre} width="150" height="150" />
                                <h1>{producto.nombre}</h1>
                                <h2>Cant.: {producto.cant}</h2>
                                <strong>${producto.precio}</strong>
                                <button id="boton-vaciar" onClick={() => eliminarDelCarrito(producto.id)}>x</button>
                
                            </div>
                        ))}
                        <h3>Total a pagar: ${total}</h3>
                    </>
                ) : (
                    <p>No hay productos en el carrito</p>
                )}
            </div>

            <div>
                {carrito.length > 0 && (
                    <button id="boton-pagar" onClick={comprar}>Confirmar y Pagar</button>
                )}
                <button id="boton-vaciar" onClick={() => navigate("/Productos/todos")}>
                    {carrito.length > 0 ? "Seguir Comprando" : "Volver a Productos"}
                </button>
            </div>
        </div>
    );
}