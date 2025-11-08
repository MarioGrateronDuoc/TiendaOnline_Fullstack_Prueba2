import { useState, useEffect } from "react";
import { obtenerUsuarios } from "../../helpers/authService";

interface Usuario {
  nombre: string;
  email: string;
  password: string;
  rol: string;
}

export default function AdminUsuarios() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);

  // 🔹 Cargar usuarios desde localStorage
  useEffect(() => {
    const lista = obtenerUsuarios();
    setUsuarios(lista);
  }, []);

  // 🔹 Guardar cambios
  const guardarCambios = (usuariosActualizados: Usuario[]) => {
    setUsuarios(usuariosActualizados);
    localStorage.setItem("usuarios", JSON.stringify(usuariosActualizados));
  };

  // 🔹 Cambiar rol del usuario
  const cambiarRol = (email: string) => {
    const actualizados = usuarios.map((u) =>
      u.email === email
        ? { ...u, rol: u.rol === "admin" ? "cliente" : "admin" }
        : u
    );
    guardarCambios(actualizados);
  };

  // 🔹 Eliminar usuario
  const eliminarUsuario = (email: string) => {
    if (confirm("¿Seguro que deseas eliminar este usuario?")) {
      const filtrados = usuarios.filter((u) => u.email !== email);
      guardarCambios(filtrados);
    }
  };

  return (
    <div className="container py-4">
      <h2 className="fw-bold mb-4 text-center">Gestión de Usuarios</h2>

      <div className="card shadow-sm">
        <div className="card-body">
          <h5 className="fw-semibold mb-3">Usuarios Registrados</h5>
          <div className="table-responsive">
            <table className="table table-striped align-middle">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Email</th>
                  <th>Rol</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {usuarios.length > 0 ? (
                  usuarios.map((u) => (
                    <tr key={u.email}>
                      <td>{u.nombre}</td>
                      <td>{u.email}</td>
                      <td>
                        <span
                          className={`badge ${
                            u.rol === "admin" ? "bg-primary" : "bg-secondary"
                          }`}
                        >
                          {u.rol}
                        </span>
                      </td>
                      <td>
                        <button
                          className="btn btn-sm btn-warning me-2"
                          onClick={() => cambiarRol(u.email)}
                        >
                          <i className="bi bi-arrow-repeat me-1"></i>
                          Cambiar Rol
                        </button>
                        <button
                          className="btn btn-sm btn-danger"
                          onClick={() => eliminarUsuario(u.email)}
                        >
                          <i className="bi bi-trash me-1"></i>
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4} className="text-center text-muted">
                      No hay usuarios registrados.
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
