import React, {useState} from "react";
import "./styles/Carrito.css"

export default function CarritoCompras({ carrito, setCarrito }) {
    const vaciarCarrito = () => {
        setCarrito([]);
    };
    

    const total = carrito.reduce((sum, item) => sum + Number(item.precio), 0);

    return (
        <div className="carrito-container" 
            >
        <h2>Carrito de Compras</h2>
        {carrito.length === 0 ? (
            <p>El carrito está vacío</p>
        ) : (
            <>
            {carrito.map((item) => (
                <div className='carrito-item'  key={item.id}>
                {item.nombre} - ${Number(item.precio).toFixed(3)}
                </div>
            ))}

            <div>
                <hr />
                <h2>Total: ${Number(total).toFixed(3)}</h2>
            </div>

            <button id="boton-pagar" >
                Pagar
            </button>

            <button id="boton-vaciar" onClick={vaciarCarrito}>
                Vaciar
            </button>
            </>
        )}
        </div>
    );
    }