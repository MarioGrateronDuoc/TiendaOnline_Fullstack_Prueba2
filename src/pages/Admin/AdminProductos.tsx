import { useState, useEffect } from "react";
import { getProductos } from "../../data/data";

interface Producto {
  id: number;
  nombre: string;
  precio: number;
  categoria: string;
  imagen: string;
}

export default function AdminProductos() {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [nuevoProducto, setNuevoProducto] = useState<Producto>({
    id: 0,
    nombre: "",
    precio: 0,
    categoria: "",
    imagen: "",
  });
  const [editando, setEditando] = useState<Producto | null>(null);

  // 🔹 Cargar productos (desde localStorage o data.ts)
  useEffect(() => {
    const dataLocal = localStorage.getItem("productos");
    if (dataLocal) {
      setProductos(JSON.parse(dataLocal));
    } else {
      const iniciales = getProductos();
      setProductos(iniciales);
      localStorage.setItem("productos", JSON.stringify(iniciales));
    }
  }, []);

  // 🔹 Guardar cambios globales
  const guardarProductos = (lista: Producto[]) => {
    setProductos(lista);
    localStorage.setItem("productos", JSON.stringify(lista));
  };

  // 🔹 Agregar nuevo producto
  const agregarProducto = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nuevoProducto.nombre.trim() || nuevoProducto.precio <= 0) {
      alert("⚠️ Ingresa un nombre y precio válido.");
      return;
    }

    const nuevo: Producto = {
      ...nuevoProducto,
      id: Date.now(),
    };

    const listaActualizada = [...productos, nuevo];
    guardarProductos(listaActualizada);

    setNuevoProducto({ id: 0, nombre: "", precio: 0, categoria: "", imagen: "" });
    alert("✅ Producto agregado con éxito.");
  };

  // 🔹 Eliminar producto
  const eliminarProducto = (id: number) => {
    if (confirm("¿Seguro que deseas eliminar este producto?")) {
      const filtrados = productos.filter((p) => p.id !== id);
      guardarProductos(filtrados);
    }
  };

  // 🔹 Activar modo edición
  const editarProducto = (producto: Producto) => {
    setEditando({ ...producto });
  };

  // 🔹 Guardar edición
  const guardarEdicion = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editando) return;

    const actualizados = productos.map((p) =>
      p.id === editando.id ? editando : p
    );

    guardarProductos(actualizados);
    setEditando(null);
    alert("✅ Producto actualizado correctamente.");
  };

  return (
    <div className="container py-4">

      <h2 className="fw-bold mb-4 text-center">Gestión de Productos</h2>

      {/* Formulario agregar o editar */}
      <div className="card shadow-sm mb-4">
        <div className="card-body">
          <h5 className="fw-semibold mb-3">
            {editando ? "Editar Producto" : "Agregar Nuevo Producto"}
          </h5>
          <form onSubmit={editando ? guardarEdicion : agregarProducto} className="row g-3">
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

            <div className="col-md-1 d-grid">
              <button type="submit" className="btn btn-primary">
                {editando ? (
                  <>
                    <i className="bi bi-save me-1"></i> Guardar
                  </>
                ) : (
                  <>
                    <i className="bi bi-plus-circle me-1"></i> Agregar
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Tabla de productos */}
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
                          alt={p.nombre}
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
                          onClick={() => editarProducto(p)}
                        >
                          <i className="bi bi-pencil"></i> Editar
                        </button>
                        <button
                          className="btn btn-sm btn-danger"
                          onClick={() => eliminarProducto(p.id)}
                        >
                          <i className="bi bi-trash"></i> Eliminar
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
