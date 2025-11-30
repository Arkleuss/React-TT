import React, {useState, useEffect, useContext} from "react";
import { Link, } from "react-router-dom";
import CarritoCompras from "./Carrito";
import { useAppContext } from "../context/AppContext";
import { useAuthContext } from "../context/AuthContext";


function Header() {

    const {carrito, setCarrito, carritoVisible, setCarritoVisible} = useAppContext()
    const {usuario, cerrarSesion, isAuthenticated, esAdmin } = useAuthContext()
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

    const MostrarCarrito = () => {
        setCarritoVisible(!carritoVisible)
    };
    

    return(
    <>
        <header>
        <div className="logo-container">
            <button 
                className="btn_hamburguesa" 
                id="btn-hamburguesa" 
                aria-label="Menu" 
                onClick={MostrarMenuHamburguesa}>
                    <i className="fa-solid fa-bars"></i>
            </button>
            <img  className="logo-icon" src="https://i.ibb.co/277Mkxrw/logo.webp" alt="logo de un dragon y un martillo"></img>
            <Link to="/" className="logo-text">La Forja del Dragon</Link>
        </div>
        <div className="nav-container">
                <Link  to="Productos/todos" className="nav-item">Productos</Link>
                <Link  to="Contacto" className="nav-item">Contacto</Link>
                {usuario && esAdmin ? (
                    <Link to="dashboard" className="nav-item" id="navDashboard">Dashboard</Link>
                ) : null}
                
        </div>
        <div className="nav-container2">
        <div id="navUser">
            {isAuthenticated ? (
                <div className="header-usuario" id="navUser">
                    <label>Hola, {usuario.nombre}!</label>
                    <button id="boton-vaciar" className="btnCerrarSesion" style={{fontSize: "0.8rem", inlineSize: "auto"}} onClick={cerrarSesion}>Cerrar sesión</button>
                </div>
            ) : (
                <div className="header-usuario">
                    <Link to="/iniciar-sesion">Iniciar Sesión</Link>
                </div>
            )}
        </div>
        
        <div className="carrito_header">
                <button className="btn_carrito" 
                id="boton-carrito" 
                aria-label="carrito" 
                onClick={MostrarCarrito}>
                    <span className="redesicon"target="_blank">
                        <i className="fa-solid fa-cart-shopping"></i>
                    </span>
                </button>
                
        </div>
        </div>
        </header>
        <div className="nav-container-hamburguesa"
            style={{ display: menuVisible ? "flex" : "none" }}
        >
                <div className="navUserHamburguesa">
                    {isAuthenticated ? (
                        <div className="header-usuario" >
                            <label>Hola, {usuario.nombre}!</label>
                            <button id="boton-vaciar" className="btnCerrarSesion" style={{fontSize: "0.8rem", inlineSize: "auto"}} onClick={cerrarSesion}>Cerrar sesión</button>
                        </div>
                    ) : (
                        <div className="header-usuario">
                            <Link to="/iniciar-sesion">Iniciar Sesión</Link>
                        </div>
                    )}
                    <hr />
                </div>
                <Link to="/" className="nav-item-h">Inicio</Link>
                <Link to="Productos/todos" className="nav-item-h">Productos</Link>
                <Link to="Productos/impresiones" className="nav-item-h">Impresiones</Link>
                <Link to="Productos/dados" className="nav-item-h">Dados</Link>
                <Link to="Productos/remeras" className="nav-item-h">Remeras</Link>
                <Link to="Contacto" className="nav-item-h">Contacto</Link>
        </div>
        <CarritoCompras carrito={carrito} setCarrito={setCarrito} />
    </>
    );

    
}
export  default Header




