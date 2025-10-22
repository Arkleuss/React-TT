import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import Header from './componentes/Header'
import Main from './componentes/Main'
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


function App() {
  
  

  return (
  <AppProvider>
      
        <Header/>
        <main>
        <Routes>
          <Route path="/" element={ <Main />} />
          {/* <Route path="Gallery" element={ <Gallery /> } /> */}
          <Route path='Productos/:categoria' element={<Productos/>}/>
          <Route path="Contacto" element={ <Contacto /> } />
          <Route path='/productos/:id' element={<ProductoDetalle />} />
          <Route path='/productos/:categoria/:id' element={<ProductoDetalle />} />
          <Route path="/iniciar-sesion" element={<IniciarSesion />
          }
          />
          <Route path="/pagar" element={ /*<RutaProtegida>*/
              <Pagar  />
            /*</RutaProtegida>*/
          }
          />
        </Routes>
        </main>
        <Footer />
      
    </AppProvider>
  );
}

export default App
