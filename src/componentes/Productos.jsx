
import React from "react";
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import CarritoCompras from "./Carrito";
import "./styles/Productos.css"
import "./styles/Carrito.css"
import {useAppContext} from "../context/AppContext"
import { useAuthContext } from '../context/AuthContext';
import SEO from "./SEO";




function Layout({ children }) {
    
    return (
    <div id="tarjeta">
        
        <main>{children}</main>
        
    </div>
    );
}

function navCategorias() {
    
    return (
        <nav className="nav-categorias">
            <Link  to="/Productos/todos" className="nav-item">Todos</Link>
            <Link  to="/Productos/impresiones" className="nav-item">Impresiones</Link>
            <Link  to="/Productos/dados" className="nav-item">Dados</Link>
            <Link  to="/Productos/remeras" className="nav-item">Remeras</Link>
        </nav>

        )
    }

function ListaProductos({categoria,  }) {
    const {esAdmin} = useAuthContext();
    const [productos, setProductos] = useState([]);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const {carrito, agregarAlCarrito} = useAppContext();

    
    
    const manejarEliminar = (producto) => {
        // Navegar a la página de confirmación de eliminación
        
        navigate('/eliminar-producto', { state: { producto } });
    };

    const manejarEditar = (producto) => {
        // Navegar al formulario de edición
        
        navigate('/formulario-producto', { state: { producto } });
    }; 

    useEffect (() => {
        fetch("https://68d9b97290a75154f0db05e8.mockapi.io/api/productos")
        .then((respuesta)=> respuesta.json())
        .then((datos)=> setProductos(datos))
        .catch((error)=>console.error("Error", error));
        setError("Hubo un problema al cargar los productos.");
    }, []);

    
    
    const productosFiltrados = categoria === "todos"
        ? productos
        : productos.filter(p => p.categoria === categoria);

    
    return (
    <div className="row">
        {productosFiltrados.map((producto) => (
            <div className="col" key={producto.id}>
                <div className="card">
                    <img  className= "card-img-top" src={producto.imagen} alt={`${producto.nombre}`} />
                    <div className="card-body">
                        <h5 className="card-title">{producto.nombre}</h5>
                        <p className="card-text">$ {producto.precio}</p>
                        <Link to={`/productos/${producto.categoria || 'todos'}/${producto.id}`} state={{producto}}>
                        <button className="btn-producto">Detalles</button>
                        </Link>
                        <button className="btn-producto" marcador="1"  onClick={() => agregarAlCarrito(producto)}>Comprar</button>
                        {/* Botones de admin */}
                        {esAdmin ? (    
                        <>         
                            <button
                                onClick={() => manejarEditar(producto)}
                                id="boton-pagar"
                            >
                                Editar
                            </button>
                            <button
                                onClick={() => manejarEliminar(producto)}
                                id="boton-vaciar"
                            >
                                Eliminar
                            </button>
                        </>  
                        ): null}
                    </div>
                </div>
            </div>
        ))}
    </div>
    )
}

function Productos() {
    const { categoria = "todos" } = useParams();
    const {carrito, agregarAlCarrito, setCarrito} = useAppContext();
    
    return (
        <>
            <SEO />
            <Layout>
            {navCategorias()}
            <ListaProductos agregarAlCarrito={agregarAlCarrito} categoria={categoria}/>
            </Layout>
        </>
    );
} export default Productos;