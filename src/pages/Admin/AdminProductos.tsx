import { useState, useEffect } from "react";
import {
  fetchProductos,
  crearProducto,
  actualizarProducto,
  eliminarProducto as eliminarProductoBackend,
} from "../../helpers/productService";

interface Producto {
  id?: number;
  nombre: string;
  precio: number;
  categoria: string;
  descripcion: string;
  imagen: string;
}

export default function AdminProductos() {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [nuevoProducto, setNuevoProducto] = useState<Producto>({
    nombre: "",
    precio: 0,
    categoria: "",
    descripcion: "",
    imagen: "",
  });

  const [editando, setEditando] = useState<Producto | null>(null);

  useEffect(() => {
    cargarProductos();
  }, []);

  const cargarProductos = async () => {
    try {
      const data = await fetchProductos();
      setProductos(data);
    } catch (error) {
      console.error("Error cargando productos:", error);
    }
  };

  // ---------------- CREAR ----------------
  const agregarProducto = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!nuevoProducto.nombre || nuevoProducto.precio <= 0) {
      alert("⚠️ Ingresa un nombre y precio válido.");
      return;
    }

    try {
      await crearProducto(nuevoProducto);
      alert("✅ Producto agregado con éxito");

      setNuevoProducto({
        nombre: "",
        precio: 0,
        categoria: "",
        descripcion: "",
        imagen: "",
      });

      cargarProductos();
    } catch (err) {
      alert("❌ No se pudo agregar el producto");
      console.error(err);
    }
  };

  // ---------------- EDITAR ----------------
  const guardarEdicion = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editando || !editando.id) return;

    try {
      await actualizarProducto(editando.id, editando);
      alert("✅ Producto actualizado correctamente");
      setEditando(null);
      cargarProductos();
    } catch (error) {
      alert("❌ Error al actualizar producto");
      console.error(error);
    }
  };

  // ---------------- ELIMINAR ----------------
  const eliminarProducto = async (id: number) => {
    if (!confirm("¿Seguro que deseas eliminar este producto?")) return;

    try {
      await eliminarProductoBackend(id);
      alert("🗑 Producto eliminado");
      cargarProductos();
    } catch (error) {
      alert("❌ Error al eliminar producto");
    }
  };

  return (
    <div className="container py-4">
      <h2 className="fw-bold mb-4 text-center">Gestión de Productos</h2>

      {/* FORMULARIO */}
      <div className="card shadow-sm mb-4">
        <div className="card-body">
          <h5 className="fw-semibold mb-3">
            {editando ? "Editar Producto" : "Agregar Nuevo Producto"}
          </h5>

          <form onSubmit={editando ? guardarEdicion : agregarProducto} className="row g-3">

            {/* Nombre */}
            <div className="col-md-3">
              <input
                type="text"
                className="form-control"
                placeholder="Nombre"
                value={editando ? editando.nombre : nuevoProducto.nombre}
                onChange={(e) =>
                  editando
                    ? setEditando({ ...editando, nombre: e.target.value })
                    : setNuevoProducto({ ...nuevoProducto, nombre: e.target.value })
                }
                required
              />
            </div>

            {/* Precio */}
            <div className="col-md-2">
              <input
                type="number"
                className="form-control"
                placeholder="Precio"
                value={editando ? editando.precio : nuevoProducto.precio}
                onChange={(e) =>
                  editando
                    ? setEditando({ ...editando, precio: parseFloat(e.target.value) })
                    : setNuevoProducto({ ...nuevoProducto, precio: parseFloat(e.target.value) })
                }
                required
              />
            </div>

            {/* Categoría */}
            <div className="col-md-3">
              <input
                type="text"
                className="form-control"
                placeholder="Categoría"
                value={editando ? editando.categoria : nuevoProducto.categoria}
                onChange={(e) =>
                  editando
                    ? setEditando({ ...editando, categoria: e.target.value })
                    : setNuevoProducto({ ...nuevoProducto, categoria: e.target.value })
                }
              />
            </div>

            {/* Imagen */}
            <div className="col-md-3">
              <input
                type="text"
                className="form-control"
                placeholder="URL de imagen"
                value={editando ? editando.imagen : nuevoProducto.imagen}
                onChange={(e) =>
                  editando
                    ? setEditando({ ...editando, imagen: e.target.value })
                    : setNuevoProducto({ ...nuevoProducto, imagen: e.target.value })
                }
              />
            </div>

            {/* Descripción */}
            <div className="col-md-12">
              <textarea
                className="form-control"
                placeholder="Descripción"
                rows={2}
                value={editando ? editando.descripcion : nuevoProducto.descripcion}
                onChange={(e) =>
                  editando
                    ? setEditando({ ...editando, descripcion: e.target.value })
                    : setNuevoProducto({ ...nuevoProducto, descripcion: e.target.value })
                }
              ></textarea>
            </div>

            {/* Botón */}
            <div className="col-md-1 d-grid">
              <button type="submit" className="btn btn-primary">
                {editando ? "Guardar" : "Agregar"}
              </button>
            </div>

          </form>
        </div>
      </div>

      {/* TABLA */}
      <div className="card shadow-sm">
        <div className="card-body">
          <h5 className="fw-semibold mb-3">Productos Registrados</h5>

          <div className="table-responsive">
            <table className="table align-middle table-striped">
              <thead>
                <tr>
                  <th>Imagen</th>
                  <th>Nombre</th>
                  <th>Categoría</th>
                  <th>Precio</th>
                  <th>Acciones</th>
                </tr>
              </thead>

              <tbody>
                {productos.length > 0 ? (
                  productos.map((p) => (
                    <tr key={p.id}>
                      <td>
                        <img
                          src={p.imagen}
                          width="70"
                          height="70"
                          style={{ objectFit: "contain" }}
                        />
                      </td>

                      <td>{p.nombre}</td>
                      <td>{p.categoria}</td>
                      <td>${p.precio.toLocaleString("es-CL")}</td>

                      <td>
                        <button
                          className="btn btn-sm btn-warning me-2"
                          onClick={() => setEditando(p)}
                        >
                          Editar
                        </button>

                        <button
                          className="btn btn-sm btn-danger"
                          onClick={() => eliminarProducto(p.id!)}
                        >
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="text-center text-muted">
                      No hay productos registrados.
                    </td>
                  </tr>
                )}
              </tbody>

            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
