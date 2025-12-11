import React, { useState, useEffect } from "react";
import { fetchProductos } from "../../helpers/productService";
import ProductoCard from "../../components/ProductoCard";

export default function Productos() {
  const [productos, setProductos] = useState<any[]>([]);
  const [busqueda, setBusqueda] = useState("");
  const [categoria, setCategoria] = useState("Todos");
  const [loading, setLoading] = useState(true);

  // 🔹 Cargar productos del backend
  useEffect(() => {
    cargarProductos();
  }, []);

  const cargarProductos = async () => {
    try {
      const data = await fetchProductos();
      setProductos(data);
    } catch (err) {
      console.error("Error cargando productos:", err);
      alert("❌ No se pudieron cargar los productos");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <p className="text-center mt-5">Cargando productos...</p>;
  }

  // 🔹 Categorías únicas desde backend
  const categorias = ["Todos", ...new Set(productos.map((p) => p.categoria))];

  // 🔹 Filtro de búsqueda + categoría
  const productosFiltrados = productos.filter((p) => {
    const coincideBusqueda = p.nombre.toLowerCase().includes(busqueda.toLowerCase());
    const coincideCategoria = categoria === "Todos" || p.categoria === categoria;
    return coincideBusqueda && coincideCategoria;
  });

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Productos Disponibles</h2>

      {/* Filtros */}
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

        <div className="col-md-6 mb-2">
          <select
            className="form-select"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          >
            {categorias.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Lista de productos */}
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
  );
}
