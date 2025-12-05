import React from 'react';
import {Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react'
import Header from './componentes/Header'
import CarrouselMain from './componentes/CarrouselMain'
import Footer from './componentes/Footer'
import Contacto from './componentes/Contacto';
import Productos from "./componentes/Productos"
import ProductoDetalle from './componentes/DetalleProductos'
import Pagar from "./componentes/Pagar";
import RutaProtegida from "./componentes/RutaProtegida";
import IniciarSesion from "./componentes/IniciarSesion";
import { AppProvider } from './context/AppContext'
import './App.css'
import "./index.css"
import { useAppContext } from './context/AppContext';
import { AuthProvider } from './context/AuthContext';
import { ProductsProvider } from "./context/ProductContext";
import FormProducto from './componentes/FormProducto';  
import Dashboard from './componentes/Dashboard';
import EliminarProducto from './componentes/EliminarProducto';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 
import SEO from './componentes/SEO';


function App() {
  
  return (
    <div>
      <AuthProvider>
        <AppProvider>
          <ProductsProvider>
            
              <Header/>
              <main>
                
                <ToastContainer 
                  position='bottom-right'
                  autoClose={3000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  toastStyle={{
                    backgroundColor: '#333',
                    color: '#fff',
                    boxShadow:  "6px 6px 6px rgba(245, 157, 157, 0.442)"

                  }}
                  
                />
                
              <Routes>
                
                <Route path="/" element={ <CarrouselMain />} />
                {/* <Route path="Gallery" element={ <Gallery /> } /> */}
                <Route path='Productos/:categoria' element={<Productos/>}/>
                <Route path="Contacto" element={ <Contacto /> } />
                <Route path='/productos/:id' element={<ProductoDetalle />} />
                <Route path='/productos/:categoria/:id' element={<ProductoDetalle />} />
                <Route path="/iniciar-sesion" element={<IniciarSesion />}/>
                <Route path="/pagar" element={<RutaProtegida><Pagar /></RutaProtegida>}/>
                
                {/* RUTA PROTEGIDA - para Admins */}
              <Route path="/dashboard" element={<RutaProtegida soloAdmin={true}><Dashboard /></RutaProtegida>}/>

              { /*Ruta para formulario Agrega/Editar*/
              <Route
                path="/formulario-producto"
                element={
                  <RutaProtegida >
                    <FormProducto />
                  </RutaProtegida>
                }
              />
              
                }
              {/* Ruta para ELIMINAR producto */
              <Route
                path="/eliminar-producto"
                element={
                  <RutaProtegida>
                    <EliminarProducto />
                  </RutaProtegida>
                }
              />
                }
              {/* Redirección por defecto */}
              <Route path="*" element={<Navigate to="/" replace />} />

              </Routes>
              </main>
              <Footer />
            </ProductsProvider>
        </AppProvider>
      </AuthProvider>
    </div>
  );
}

export default App
