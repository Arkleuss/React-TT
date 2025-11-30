import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const BASE_URL = 'https://68d9b97290a75154f0db05e8.mockapi.io/api/productos';

function EliminarProducto() {
    const location = useLocation();
    const navigate = useNavigate();
    const producto = location.state?.producto;
    
    const [cargando, setCargando] = useState(false);

    // Función para eliminar producto
    const eliminarProducto = async () => {
        if (!producto) return;

        setCargando(true);
        try {
            // Usar el id tal y como viene (string es válido), pero codificarlo por seguridad
            const id = encodeURIComponent(producto.id);
            const url = `${BASE_URL}/${id}`;

            console.log('Intentando DELETE a:', url);

            const respuesta = await fetch(url, {
                method: 'DELETE',
                headers: { 'Accept': 'application/json' }
            });
            
            if (!respuesta.ok) {
                // Intentar leer cuerpo de error para más contexto
                let detalle = '';
                try {
                    const json = await respuesta.json();
                    detalle = JSON.stringify(json);
                } catch (e) {
                    detalle = await respuesta.text().catch(() => '');
                }
                throw new Error(`Error ${respuesta.status} al eliminar el producto. Detalle: ${detalle}`);
            }

            // Opcional: leer respuesta (el recurso eliminado)
            const data = await respuesta.json();
            console.log('Eliminado:', data);

            alert('Producto eliminado correctamente.');
            
            // Navegar a la lista de productos (ruta existente) — uso mayúscula para coincidir con rutas en el proyecto
            navigate('/Productos/todos');
        } catch (error) {
            console.error(error);
            alert('Hubo un problema al eliminar el producto. Revisa la consola y Network.');
        } finally {
            setCargando(false);
        }
    };

    const manejarEliminar = () => {
        const confirmar = window.confirm(
        `¿Estás seguro de que deseas eliminar el producto "${producto?.nombre}"?\n\nEsta acción no se puede deshacer.`
        );
    
        if (confirmar) {
        eliminarProducto();
        }
    };

    if (!producto) {
        return <div style={{ padding: 20 }}>Producto no especificado.</div>;
    }

    return (
        <div style={{ maxWidth: '500px', margin: '40px auto', padding: '20px', textAlign: 'center' }}>
        <h2 style={{ color: '#dc3545', marginBottom: '20px' }}>Eliminar Producto</h2>
        
        <div style={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '20px',
            marginBottom: '30px',
            backgroundColor: 'rgba(34, 34, 34, 0.8)'
        }}>
            <h3 style={{ color: '#dc3545' }}>¿Estás seguro de que deseas eliminar este producto?</h3>
        
            <div style={{ textAlign: 'left', margin: '20px 0' }}>
            <p><strong>Nombre:</strong> {producto.nombre}</p>
            <p><strong>Precio:</strong> ${producto.precio}</p>
            <p><strong>Categoría:</strong> {producto.categoria || 'Sin categoría'}</p>
            <p><strong>Descripción:</strong> {producto.descripcion}</p>
            {producto.imagen && (
                <img
                src={producto.imagen}
                alt="Producto a eliminar"
                style={{ maxWidth: '200px', marginTop: '10px' }}
                />
            )}
            </div>

            <p style={{ color: '#666', fontStyle: 'italic' }}>
            Esta acción no se puede deshacer. El producto será eliminado permanentemente.
            </p>
        </div>

        <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
            <button
            onClick={manejarEliminar}
            disabled={cargando}
            style={{
                padding: '12px 24px',
                backgroundColor: cargando ? '#ccc' : '#dc3545',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: cargando ? 'not-allowed' : 'pointer',
                fontSize: '16px'
            }}
            >
            {cargando ? 'Eliminando...' : 'Sí, Eliminar'}
            </button>
        
            <button
            onClick={() => navigate('/Productos/todos')}
            disabled={cargando}
            style={{
                padding: '12px 24px',
                backgroundColor: cargando ? '#ccc' : '#6c757d',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: cargando ? 'not-allowed' : 'pointer',
                fontSize: '16px'
            }}
            >
            Cancelar
            </button>
        </div>
        </div>
    );
} 
export default EliminarProducto;
