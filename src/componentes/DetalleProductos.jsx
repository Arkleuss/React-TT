import { Link, useParams, useLocation } from "react-router-dom";
import { useAppContext } from "../context/AppContext";  



const ProductoDetalle = () => {

    const {carrito, agregarAlCarrito, setCarrito} = useAppContext();
 
    const { id } = useParams();
    const location = useLocation();
    const producto = location.state?.producto;
 
if (!producto) {
    return (
      <div>
        <p>No se pudo cargar el producto</p>
        <Link to="/Productos/todos">
          <button>Volver a Productos</button>
        </Link>
      </div>
    );
  }
 
  return(
    <>
    <h2>Detalles del Producto {id}</h2>
    <ul style={{textAlign: "left", }}>
        <li key={producto.id}>
            <h2>{producto.nombre}</h2>
            <br />
            <img src={producto.imagen} alt={producto.nombre} width="30%" />
            <p>Precio: ${producto.precio}</p>
            
        </li>
        <hr />
        <button id="boton-pagar" marcador="1"  onClick={() => agregarAlCarrito(producto)}>Comprar</button>
        <Link to={`/Productos/todos`}><button id="boton-vaciar" >Volver</button></Link>
    </ul>
    </>
  );
}; export default ProductoDetalle;