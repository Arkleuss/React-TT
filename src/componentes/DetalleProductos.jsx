import { Link, useParams, useLocation } from "react-router-dom";
import { useAppContext } from "../context/AppContext";  
import "./styles/DetalleProductos.css";


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
    <div className="container">
      <h2>Detalles del Producto {id}</h2>
      <div className="producto">
        <div className="imagen">
          <img src={producto.imagen} alt={producto.nombre}  />
        </div>
        <div className="info">
          <ul style={{textAlign: "left", }}>
              <li key={producto.id}>
                  <h2>{producto.nombre}</h2>
                  
                  <p>Precio: ${producto.precio}</p>
                  
              </li>
              <hr />
              <div className="botonera">
              <button id="boton-pagar" marcador="1"  onClick={() => agregarAlCarrito(producto)}>Agregar al Carrito</button>
              <Link to={`/Productos/todos`}><button id="boton-vaciar" >Volver</button></Link>
              </div>
          </ul>
        </div>  
      </div>
    </div>
    </>
  );
}; export default ProductoDetalle;