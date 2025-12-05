import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuthContext } from '../context/AuthContext';
import "./styles/iniciarSesion.css"
import "./styles/Productos.css"
import { toast } from "react-toastify";


export default function IniciarSesion() {
    const navigate = useNavigate();
    const ubicacion = useLocation();
    const { iniciarSesion } = useAuthContext();

    const { isAuthenticated, setIsAuthenticated, setUsuario } = useAuthContext();

    const [formulario, setFormulario] = useState({ nombre: "", mail: "" });

    const manejarEnvio = (e) => {
        e.preventDefault();
        if (formulario.nombre === "admin" && formulario.mail === "1234@admin") {
            

            localStorage.setItem("authEmail", formulario.mail);
            iniciarSesion("admin", formulario.mail);
            navigate("/dashboard");
    }else if (
        formulario.nombre &&
        formulario.mail &&
        formulario.nombre !== "admin"
    ) {
    localStorage.setItem("authEmail", formulario.mail);
    iniciarSesion(formulario.nombre, formulario.mail);

            
            
            if (ubicacion.state?.carrito) {
        navigate("/pagar", { state: { carrito: ubicacion.state.carrito } });
        } else {
        navigate("/Productos/todos");
        }
    } else {
        toast.error(
        "Credenciales de administrador incorrectas. Usa: admin / 1234@admin"
        );
    }
    };

    return (
        <div>
            <h1>Inicia sesión para continuar</h1>
            <form className="formContainer" onSubmit={manejarEnvio}>
                <p htmlFor="nombre">Nombre completo</p>
                <input
                    className="formField"
                    type="text"
                    name="nombre"
                    
                    value={formulario.nombre}
                    onChange={(e) =>
                        setFormulario({ ...formulario, nombre: e.target.value })
                    }
                    required
                />
                <p htmlFor="mail">E-Mail</p>
                <input
                    className="formField"
                    type="email"
                    name="mail"
                    value={formulario.mail}
                    onChange={(e) =>
                        setFormulario({ ...formulario, mail: e.target.value })
                    }
                    required
                />
                <div id="botonera">
                <button id="boton-pagar" type="submit">Iniciar Sesión</button>
                <strong> </strong>
                <button id="boton-vaciar" type="button" onClick={() => navigate("/Productos/todos")}>
                    Cancelar
                </button>
                </div>
            </form>
        </div>
    );
}
