import React, {useState} from "react";
import "./styles/Carrito.css"
import { useAppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";


export default function CarritoCompras() {
    
    const {carrito, setCarrito, vaciarCarrito, eliminarDelCarrito, carritoVisible, setCarritoVisible } = useAppContext();

    const total = carrito.reduce((sum, item) => sum + Number(item.precio), 0);

    const navigate = useNavigate();

    const irAPagar = () => {
    navigate("/pagar", { state: { carrito } });
    };

    return (
        <div className="carrito-container" 
        style={{ display: carritoVisible ? "block" : "none" }}
            >
        <h2>Carrito de Compras</h2>
        {carrito.length === 0 ? (
            <p>El carrito está vacío</p>
        ) : (
            <>
            {carrito.map((item) => {
                item.cant = item.cant ? item.cant : 1;
                return (
                    <div className='carrito-item'  key={item.id}>
                    {item.nombre} - ${Number(item.precio).toFixed(3)} - Cant.: x{item.cant}
                    <button id="boton-vaciar" onClick={() => eliminarDelCarrito(item.id)}>x</button>
                    </div>
                );
            })}

            <div>
                <hr />
                <h2>Total: ${Number(total).toFixed(3)}</h2>
            </div>

            <button id="boton-pagar" onClick={irAPagar}>
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