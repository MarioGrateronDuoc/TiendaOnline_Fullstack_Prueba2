import { useState, useEffect } from "react";

interface Oferta {
  id: number;
  titulo: string;
  descripcion: string;
  descuento: number; // porcentaje
  activo: boolean;
}

export default function AdminOfertas() {
  const [ofertas, setOfertas] = useState<Oferta[]>([]);
  const [nuevaOferta, setNuevaOferta] = useState<Oferta>({
    id: 0,
    titulo: "",
    descripcion: "",
    descuento: 0,
    activo: true,
  });

  // 🔹 Cargar ofertas desde localStorage
  useEffect(() => {
    const data = localStorage.getItem("ofertas");
    if (data) setOfertas(JSON.parse(data));
  }, []);

  // 🔹 Guardar cambios
  const guardarCambios = (lista: Oferta[]) => {
    setOfertas(lista);
    localStorage.setItem("ofertas", JSON.stringify(lista));
  };

  // 🔹 Agregar nueva oferta
  const agregarOferta = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nuevaOferta.titulo.trim() || nuevaOferta.descuento <= 0) {
      alert("⚠️ Debes ingresar un título y un descuento válido.");
      return;
    }

    const nueva = { ...nuevaOferta, id: Date.now() };
    const listaActualizada = [...ofertas, nueva];
    guardarCambios(listaActualizada);

    setNuevaOferta({ id: 0, titulo: "", descripcion: "", descuento: 0, activo: true });
    alert("✅ Oferta agregada con éxito.");
  };

  // 🔹 Cambiar estado (activar/desactivar)
  const toggleEstado = (id: number) => {
    const actualizadas = ofertas.map((o) =>
      o.id === id ? { ...o, activo: !o.activo } : o
    );
    guardarCambios(actualizadas);
  };

  // 🔹 Eliminar oferta
  const eliminarOferta = (id: number) => {
    if (confirm("¿Seguro que deseas eliminar esta oferta?")) {
      const filtradas = ofertas.filter((o) => o.id !== id);
      guardarCambios(filtradas);
    }
  };

  return (
    <div className="container py-4">

      <h2 className="fw-bold mb-4 text-center">Gestión de Ofertas</h2>

      {/* Formulario de nueva oferta */}
      <div className="card shadow-sm mb-4">
        <div className="card-body">
          <h5 className="fw-semibold mb-3">Agregar Nueva Oferta</h5>
          <form onSubmit={agregarOferta} className="row g-3">
            <div className="col-md-4">
              <input
                type="text"
                className="form-control"
                placeholder="Título"
                value={nuevaOferta.titulo}
                onChange={(e) =>
                  setNuevaOferta({ ...nuevaOferta, titulo: e.target.value })
                }
                required
              />
            </div>

            <div className="col-md-4">
              <input
                type="number"
                className="form-control"
                placeholder="% Descuento"
                value={nuevaOferta.descuento}
                onChange={(e) =>
                  setNuevaOferta({
                    ...nuevaOferta,
                    descuento: parseFloat(e.target.value),
                  })
                }
                min={1}
                max={100}
                required
              />
            </div>

            <div className="col-md-4">
              <button type="submit" className="btn btn-primary w-100">
                <i className="bi bi-plus-circle me-2"></i>
                Agregar Oferta
              </button>
            </div>

            <div className="col-12">
              <textarea
                className="form-control"
                placeholder="Descripción opcional..."
                value={nuevaOferta.descripcion}
                onChange={(e) =>
                  setNuevaOferta({ ...nuevaOferta, descripcion: e.target.value })
                }
                rows={2}
              ></textarea>
            </div>
          </form>
        </div>
      </div>

      {/* Lista de ofertas */}
      <div className="card shadow-sm">
        <div className="card-body">
          <h5 className="fw-semibold mb-3">Ofertas Actuales</h5>
          <div className="table-responsive">
            <table className="table align-middle table-striped">
              <thead>
                <tr>
                  <th>Título</th>
                  <th>Descripción</th>
                  <th>Descuento</th>
                  <th>Estado</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {ofertas.length > 0 ? (
                  ofertas.map((oferta) => (
                    <tr key={oferta.id}>
                      <td>{oferta.titulo}</td>
                      <td>{oferta.descripcion || "—"}</td>
                      <td>{oferta.descuento}%</td>
                      <td>
                        <span
                          className={`badge ${
                            oferta.activo ? "bg-success" : "bg-secondary"
                          }`}
                        >
                          {oferta.activo ? "Activa" : "Inactiva"}
                        </span>
                      </td>
                      <td>
                        <button
                          className="btn btn-sm btn-warning me-2"
                          onClick={() => toggleEstado(oferta.id)}
                        >
                          <i className="bi bi-toggle2-on me-1"></i>
                          {oferta.activo ? "Desactivar" : "Activar"}
                        </button>
                        <button
                          className="btn btn-sm btn-danger"
                          onClick={() => eliminarOferta(oferta.id)}
                        >
                          <i className="bi bi-trash me-1"></i>
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="text-center text-muted">
                      No hay ofertas registradas.
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
