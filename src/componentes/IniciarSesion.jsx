import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAppContext } from '../context/AppContext';


export default function IniciarSesion() {
    const navigate = useNavigate();
    const ubicacion = useLocation();

    const { isAuthenticated, setIsAuthenticated, setUsuario } = useAppContext();

    const [formulario, setFormulario] = useState({ usuario: "", mail: "" });

    const manejarEnvio = (e) => {
        e.preventDefault();
        if (formulario.usuario && formulario.mail) {
            setIsAuthenticated(true);
            setUsuario(formulario);
            console.log(formulario);
            console.log(isAuthenticated);
            
            
            navigate("/pagar", { state: { carrito: ubicacion.state.carrito } });
            
        } else {
            alert("Completa todos los datos");
        }
    };

    return (
        <div>
            <h1>Inicia sesión para continuar</h1>
            <form onSubmit={manejarEnvio}>
                <input
                    type="text"
                    placeholder="Nombre completo"
                    value={formulario.usuario}
                    onChange={(e) =>
                        setFormulario({ ...formulario, usuario: e.target.value })
                    }
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={formulario.mail}
                    onChange={(e) =>
                        setFormulario({ ...formulario, mail: e.target.value })
                    }
                    required
                />
                <button type="submit">Iniciar Sesión</button>
                <strong> </strong>
                <button type="button" onClick={() => navigate("/productos")}>
                    Cancelar
                </button>
            </form>
        </div>
    );
}
