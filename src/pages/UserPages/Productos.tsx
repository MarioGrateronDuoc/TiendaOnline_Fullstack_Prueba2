import React, { useState } from "react";
import { getProductos } from "../../data/data";
import ProductoCard from "../../components/ProductoCard";

export default function Productos() {
  const [busqueda, setBusqueda] = useState("");
  const [categoria, setCategoria] = useState("Todos");

  // Obtenemos todos los productos
  const productos = getProductos();

  // Obtenemos las categorías únicas
  const categorias = ["Todos", ...new Set(productos.map((p) => p.categoria))];

  // Filtramos según búsqueda y categoría
  const productosFiltrados = productos.filter((p) => {
    const coincideBusqueda = p.nombre.toLowerCase().includes(busqueda.toLowerCase());
    const coincideCategoria = categoria === "Todos" || p.categoria === categoria;
    return coincideBusqueda && coincideCategoria;
  });

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Productos Disponibles</h2>

      {/* Barra de filtros */}
      <div className="row mb-4">
        <div className="col-md-6 mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Buscar producto..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
      </div>

      <div className="row">
        {productosFiltrados.length > 0 ? (
          productosFiltrados.map((p) => (
            <ProductoCard key={`producto-${p.id}`} producto={p} />
          ))
        ) : (
          <p className="text-center">No se encontraron productos.</p>
        )}
      </div>

      </div>

      {/* Lista de productos */}
      <div className="row">
        {productosFiltrados.length > 0 ? (
        productosFiltrados.map((p) => (
          <ProductoCard key={`producto-${p.id}`} producto={p} />
        ))) : (
          <p className="text-center">No se encontraron productos.</p>
        )}
      </div>
      
    </div>
  );
}
