import { createContext, useContext, useState } from "react";



export const AppContext = createContext();

export function AppProvider ({children}) {
    // const de autenticacion 

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [usuario, setUsuario] = useState({usuario: "", mail: ""});

    const cerrarSesion = () => {
        setIsAuthenticated(false);
        setUsuario({usuario: "", mail: ""});
        vaciarCarrito();
    };

    // const de carrito 
    const [carrito, setCarrito] = useState([]);
    const [carritoVisible, setCarritoVisible] = useState(false);

    const agregarAlCarrito = (producto) => {
        if (!carrito.find(item => item.id === producto.id)) {
            setCarrito([...carrito, producto]);
        }else { 
            carrito.forEach(item => {
                if (item.id === producto.id) {
                    item.cant += 1;
                    item.precio = (item.precio * item.cant).toFixed(2);
                }
            });
            setCarrito([...carrito]);
        }
    };
    const vaciarCarrito = () => {
        setCarrito([]);
    };
    const eliminarDelCarrito = (idProducto) => {
        setCarrito(carrito.filter(item => item.id !== idProducto));
    };
    

    //

    const value = {
        //autenticacion
        isAuthenticated,
        setIsAuthenticated,
        usuario,
        setUsuario,
        cerrarSesion,

        //carrito
        carrito,
        setCarrito,
        carritoVisible,
        setCarritoVisible,
        agregarAlCarrito,
        vaciarCarrito,
        eliminarDelCarrito,

    }
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>

    );

}

export function useAppContext() {
        const   context =useContext(AppContext);
        if(!context) {
            throw new Error("useAppContext debe usarse dentro de AppProvider");

        }
        return context;

    }

