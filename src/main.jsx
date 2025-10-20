
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AppProvider } from "./context/AppContext";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <AppProvider>
      <Router>
        <App />
      </Router>
    </AppProvider>
  
);
