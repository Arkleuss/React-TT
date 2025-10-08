
import React from "react";
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import CarritoCompras from "./Carrito";
import "./styles/Productos.css"

function Layout({ children }) {
    return (
    <div id="tarjeta">
        
        <main>{children}</main>
        
    </div>
    );
}


function ListaProductos({ agregarAlCarrito, categoria }) {
    const [productos, setProductos] = useState([]);
    const [error, setError] = useState(null);
    
    useEffect (() => {
        fetch("https://68d9b97290a75154f0db05e8.mockapi.io/api/productos")
        .then((respuesta)=> respuesta.json())
        .then((datos)=> setProductos(datos))
        .catch((error)=>console.error("Error", error));
    }, []);
    
    const productosFiltrados = categoria === "todos"
        ? productos
        : productos.filter(p => p.categoria === categoria);


    return (
    <div className="row">
        {productosFiltrados.map((producto) => (
            <div className="col" key={producto.id}>
                <div className="card">
                    <img  className= "card-img-top" src={producto.imagen} alt=" " />
                    <div className="card-body">
                        <h5 className="card-title">{producto.nombre}</h5>
                        <p className="card-text">$ {producto.precio}</p>
                        <button className="btn-producto" marcador="1"  onClick={() => agregarAlCarrito(producto)}>Comprar</button>
                    </div>
                </div>
            </div>
        ))}
    </div>
    )
}

function Productos() {
    const [carrito, setCarrito] = useState([]);
    const { categoria = "todos" } = useParams();

    const agregarAlCarrito = (producto) => {
        setCarrito([...carrito, producto]);
    };

    return (
        <Layout>
        <ListaProductos agregarAlCarrito={agregarAlCarrito} categoria={categoria}/>
        <CarritoCompras carrito={carrito} setCarrito={setCarrito} />
        </Layout>
    );
} export default Productos;