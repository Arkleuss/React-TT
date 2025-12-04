import React from 'react'
import "./styles/Contacto.css";
import { useAuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';


export default function Contacto() {
    const { usuario, cerrarSesion } = useAuthContext();

    return (
        
        <div className="container">
                    <form  className='formulario'
                        action="https://formspree.io/f/xzzrwrqa"
                        method="POST"
                        >
                        {usuario ? 
                        <>  
                            <p><strong>Sesión iniciada como: </strong> </p> 
                            <input 
                            name='nombre' 
                            type="nombre" 
                            className="form-field" 
                            id="nombre"
                            defaultValue={usuario.nombre} 
                            readOnly={true}
                            style={{ textAlign: "center" }}
                            />
                            
                            <p><strong>E-mail: </strong> </p>
                            <input 
                            type="email" 
                            name="email" 
                            className="form-field" 
                            id="email" 
                            defaultValue={usuario.mail}
                            readOnly={true}
                            style={{ textAlign: "center" }}
                            />
                            <br />
                            <button className="btn-contacto" id="boton-vaciar" onClick={cerrarSesion}>Cerrar sesion</button>
                        </>
                        : 
                        <button id='boton-pagar'>
                            <Link to="/iniciar-sesion">Iniciar sesión</Link>
                        </button>
                        
                    }
                        
                        <label htmlFor="asunto"><p>Asunto:</p></label>
                        <select name="asunto" id="asunto">
                            <option value="consulta-general">Consulta General</option>
                            <option value="pedido-especial">Pedido Especial</option>
                            <option value="reclamo">Reclamo</option>
                        </select>

                        <label htmlFor="message"><p>Consulta o pedido:</p></label>
                        <textarea 
                        name="message" 
                        className="form-field" 
                        id="message"
                        rows="4"
                        maxLength="200"
                        /><br/>  
                        

                        
                        <p className="center-content">
                            <button type="submit" className="btn-contacto" id="boton-pagar">Enviar</button>
                        </p>
                        
                    </form>
        </div>
    )
}

