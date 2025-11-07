import React, { useEffect, useState } from "react";
import { cartService, type CarritoItem } from "../../helpers/cartservice";

export default function Carrito() {
  const [carrito, setCarrito] = useState<CarritoItem[]>([]);

  // Suscribirse a cambios del carrito
  useEffect(() => {
    // Cargar carrito inicial
    setCarrito(cartService.obtener());
    
    // Suscribirse a cambios futuros
    const unsuscribe = cartService.suscribir(() => {
      setCarrito([...cartService.obtener()]);
    });
    
    return unsuscribe;
  }, []);

  // 🔹 Actualizar cantidad
  const actualizarCantidad = (id: number, nuevaCantidad: number) => {
    cartService.actualizarCantidad(id, nuevaCantidad);
  };

  // 🔹 Eliminar producto
  const eliminarProducto = (id: number) => {
    cartService.eliminar(id);
  };

  // 🔹 Vaciar carrito
  const vaciarCarrito = () => {
    cartService.vaciar();
  };

  // 🔹 Calcular totales
  const totalProductos = cartService.cantidadTotal();
  const totalPrecio = cartService.totalPrecio();

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-lg-8">
          <h2 className="mb-4">🛒 Carrito de Compras</h2>

          {carrito.length === 0 ? (
            <div className="text-center py-5">
              <div className="mb-3">
                <i className="bi bi-cart-x display-1 text-muted"></i>
              </div>
              <h4 className="text-muted">Tu carrito está vacío</h4>
              <p className="text-muted">Agrega algunos productos para comenzar</p>
              <a href="/productos" className="btn btn-primary mt-3">
                Ir a Productos
              </a>
            </div>
          ) : (
            <>
              {carrito.map((item) => (
                <div key={item.id} className="card mb-3">
                  <div className="card-body">
                    <div className="row align-items-center">
                      <div className="col-md-2">
                        <img 
                          src={item.imagen} 
                          alt={item.nombre}
                          className="img-fluid rounded"
                          style={{maxHeight: '80px', objectFit: 'cover'}}
                        />
                      </div>
                      
                      <div className="col-md-4">
                        <h6 className="mb-1">{item.nombre}</h6>
                        <small className="text-muted">{item.categoria}</small>
                      </div>
                      
                      <div className="col-md-2">
                        <strong>${item.precio.toLocaleString("es-CL")}</strong>
                      </div>
                      
                      <div className="col-md-2">
                        <div className="input-group input-group-sm">
                          <button 
                            className="btn btn-outline-secondary"
                            onClick={() => actualizarCantidad(item.id, item.cantidad - 1)}
                          >
                            -
                          </button>
                          <input 
                            type="number" 
                            className="form-control text-center"
                            value={item.cantidad}
                            onChange={(e) => actualizarCantidad(item.id, parseInt(e.target.value) || 1)}
                            min="1"
                          />
                          <button 
                            className="btn btn-outline-secondary"
                            onClick={() => actualizarCantidad(item.id, item.cantidad + 1)}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      
                      <div className="col-md-2">
                        <strong>${(item.precio * item.cantidad).toLocaleString("es-CL")}</strong>
                      </div>
                      
                      <div className="col-md-1">
                        <button
                          onClick={() => eliminarProducto(item.id)}
                          className="btn btn-sm btn-outline-danger"
                          title="Eliminar producto"
                        >
                          <i className="bi bi-trash"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Botón vaciar carrito */}
              <div className="d-flex justify-content-end mb-4">
                <button onClick={vaciarCarrito} className="btn btn-outline-danger">
                  <i className="bi bi-trash me-2"></i>
                  Vaciar Carrito
                </button>
              </div>
            </>
          )}
        </div>

        {/* Resumen del pedido */}
        {carrito.length > 0 && (
          <div className="col-lg-4">
            <div className="card sticky-top" style={{top: '20px'}}>
              <div className="card-header bg-primary text-white">
                <h5 className="mb-0">Resumen del Pedido</h5>
              </div>
              <div className="card-body">
                <div className="d-flex justify-content-between mb-2">
                  <span>Productos ({totalProductos}):</span>
                  <span>${totalPrecio.toLocaleString("es-CL")}</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span>Envío:</span>
                  <span className="text-success">Gratis</span>
                </div>
                <hr />
                <div className="d-flex justify-content-between mb-3">
                  <strong>Total:</strong>
                  <strong className="h5">${totalPrecio.toLocaleString("es-CL")}</strong>
                </div>
                
                <button className="btn btn-success w-100 mb-2">
                  <i className="bi bi-credit-card me-2"></i>
                  Proceder al Pago
                </button>
                
                <button className="btn btn-outline-primary w-100">
                  <i className="bi bi-arrow-left me-2"></i>
                  Seguir Comprando
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}