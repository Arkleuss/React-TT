import {  createContext, useContext, useState, useEffect } from "react";
import { Navigate, useLocation } from 'react-router-dom';



export const AuthContext = createContext();

export function AuthProvider ({children}) {
    const [usuario, setUsuario] = useState({usuario: "", mail: ""});
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem("authToken");
        const emailGuardado = localStorage.getItem("authEmail");
        if (token) {
            const username = token.replace("fake-token-", "");
            setUsuario({
                nombre: username,
                mail: emailGuardado || "",
            });
        }
        setCargando(false);
    }, []);


      // Función para iniciar sesión
    const iniciarSesion = (username, emailIngresado) => {
        const token = `fake-token-${username}`;
        localStorage.setItem("authToken", token);
        localStorage.setItem("authEmail", emailIngresado);

        
        setUsuario({
        nombre: username,
        mail: emailIngresado || "",
        });
    };

    const cerrarSesion = () => {
        localStorage.removeItem("authToken");
        localStorage.removeItem("authEmail");
        setUsuario(null);
    };



    const value = {
        //autenticacion
        usuario,
        iniciarSesion,
        cerrarSesion,
        isAuthenticated: !!usuario, // ← Propiedad computada
        esAdmin: usuario?.nombre === 'admin'&& (usuario?.mail === '1234@admin'),
        cargando, 

        

    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>

    );

}

export function useAuthContext() {
        const   context =useContext(AuthContext);
        if(!context) {
            throw new Error("useAuthContext debe usarse dentro de AuthProvider");

        }
        return context;

    }
