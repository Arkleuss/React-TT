import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import Header from './componentes/Header'
import Main from './componentes/Main'
import Gallery from './componentes/gallery'
import Footer from './componentes/footer'
import Contacto from './componentes/Contacto';
import Productos from "./componentes/Productos"
import './App.css'
import "./index.css"



function App() {
  
  

  return (
    <>  
      <Header/>
      <main>
        <Routes>
        <Route path="/" element={ <Main />} />
        <Route path="Gallery" element={ <Gallery /> } />
        <Route path='Productos/:categoria' element={<Productos/>}/>
        <Route path="Contacto" element={ <Contacto /> } />
      </Routes>
      </main>
      <Footer />

    </>
  );
}

export default App
