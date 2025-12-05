import {  createContext, useContext, useState, useEffect } from "react";
import { Navigate, useLocation } from 'react-router-dom';
import { toast } from "react-toastify";


export const AppContext = createContext();

export function AppProvider ({children}) {

    const [carrito, setCarrito] = useState([]);
    const [carritoVisible, setCarritoVisible] = useState(false);
    const [cargaCompleta, setCargaCompleta] = useState(false);

    
    useEffect(() => {
            const carritoGuardado = localStorage.getItem("carrito"); 
            if (carritoGuardado) {
            setCarrito(JSON.parse(carritoGuardado));
            }
            setCargaCompleta(true); // Marca que la carga inicial ha terminado
    }, []);       

    
    // cada vez que carrito cambie, guardarlo en localStorage
    useEffect(() => {
            if (cargaCompleta) { // Solo guarda en localStorage si la carga inicial ha terminado
            localStorage.setItem("carrito", JSON.stringify(carrito));
            }
    }, [carrito, cargaCompleta]);

    const agregarAlCarrito = (producto) => {
    setCarrito(prevCarrito => {
        const productoExistente = prevCarrito.find(item => item.id === producto.id);
        
        if (productoExistente) {
        return prevCarrito.map(item =>
            item.id === producto.id
            ? { ...item, cant: (item.cant || 1) + 1 }
            : item

            
        );
        } else {
        return [...prevCarrito, { ...producto, cant: 1 }];
        
        }
        
    });
    toast.success(`${producto.nombre} agregado al carrito: `);
    }
    
    
    

    
    const vaciarCarrito = () => {
        setCarrito([]);
    };
    const eliminarDelCarrito = (idProducto) => {
        setCarrito(carrito.filter(item => item.id !== idProducto));
    };
    
    const total = carrito.reduce((sum, item) => {
        const cant = item.cant || 1;
        return sum + (Number(item.precio) * cant);
    }, 0);
    
    //

    const value = {


        carrito,
        setCarrito,
        carritoVisible,
        setCarritoVisible,
        agregarAlCarrito,
        vaciarCarrito,
        eliminarDelCarrito,
        total

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

