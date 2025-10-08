import React, {useState, useEffect} from "react";
import { Link, } from "react-router-dom";
import CarritoCompras from "./Carrito";


function Header() {
    const [menuVisible, setMenuVisible] = useState(false);
    const MostrarMenuHamburguesa = () => {
        setMenuVisible(!menuVisible)
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 950 && menuVisible) {
                setMenuVisible(false);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [menuVisible]);


    return(
    <>
        <header>
        <div className="logo-container">
            <button 
                class="btn_hamburguesa" 
                id="btn-hamburguesa" 
                aria-label="Menu" 
                onClick={MostrarMenuHamburguesa}>
                    <i class="fa-solid fa-bars"></i>
            </button>
            <img  className="logo-icon" src="https://i.ibb.co/277Mkxrw/logo.webp" alt="logo de un dragon y un martillo"></img>
            <Link to="/" className="logo-text">La Forja del Dragon</Link>
        </div>
        <div className="nav-container">
                <Link to="Productos/todos" className="nav-item">Productos</Link>
                <Link to="Productos/impresiones" className="nav-item">Impresiones</Link>
                <Link to="Productos/dados" className="nav-item">Dados</Link>
                <Link to="Productos/remeras" className="nav-item">Remeras</Link>
                <Link to="Contacto" className="nav-item">Contacto</Link>
        </div>
        <div className="carrito_header">
                <button className="btn_carrito" id="boton-carrito" aria-label="carrito"><a className="redesicon"target="_blank"><i className="fa-solid fa-cart-shopping"></i></a></button>
                
        </div>
        </header>
        <div className="nav-container-hamburguesa"
            style={{ display: menuVisible ? "flex" : "none" }}
        >
                <Link to="/" className="nav-item-h">Inicio</Link>
                <Link to="Productos/todos" className="nav-item-h">Productos</Link>
                <Link to="Productos/impresiones" className="nav-item-h">Impresiones</Link>
                <Link to="Productos/dados" className="nav-item-h">Dados</Link>
                <Link to="Productos/remeras" className="nav-item-h">Remeras</Link>
                <Link to="Contacto" className="nav-item-h">Contacto</Link>
        </div>
        
    </>
    );

    
}
export  default Header




