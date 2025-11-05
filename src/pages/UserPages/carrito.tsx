import React, { useEffect, useState } from "react";
import type { Producto } from "../../data/data";

import { getFromStorage, saveToStorage, removeFromStorage } from "../../helpers/storage";

export default function Carrito() {
  // 🔹 Estado local para guardar los productos del carrito
  const [carrito, setCarrito] = useState<Producto[]>([]);

  // 🔹 useEffect: se ejecuta una sola vez al cargar la página
  useEffect(() => {
    const items = getFromStorage<Producto[]>("carrito") || [];
    setCarrito(items);
  }, []);

  // 🔹 Eliminar un producto por ID
const eliminarProducto = (id: number) => {
  const actualizado = carrito.filter((p) => p.id !== id);
  setCarrito(actualizado);
  saveToStorage("carrito", actualizado);
  window.dispatchEvent(new Event("carrito-actualizado")); // <-- aquí
};

  // 🔹 Vaciar todo el carrito
  const vaciarCarrito = () => {
    setCarrito([]);
    removeFromStorage("carrito");
    window.dispatchEvent(new Event("carrito-actualizado"));
  };

  // 🔹 Calcular el total
  const total = carrito.reduce((sum, p) => sum + p.precio, 0);

  // 🔹 Render del componente
  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">🛒 Carrito de Compras</h2>

      {carrito.length === 0 ? (
        <p className="text-center">Tu carrito está vacío.</p>
      ) : (
        <>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Producto</th>
                <th>Precio</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {carrito.map((p) => (
                <tr key={p.id}>
                  <td>{p.nombre}</td>
                  <td>${p.precio.toLocaleString("es-CL")}</td>
                  <td>
                    <button
                      onClick={() => eliminarProducto(p.id)}
                      className="btn btn-sm btn-danger"
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="d-flex justify-content-between align-items-center mt-3">
            <h5>Total: ${total.toLocaleString("es-CL")}</h5>
            <button onClick={vaciarCarrito} className="btn btn-outline-danger">
              Vaciar carrito
            </button>
          </div>
        </>
      )}
    </div>
  );
}
