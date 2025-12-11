import { useState, useEffect } from "react";
import { getAllUsers } from "../../helpers/userService";

interface Usuario {
  id: number;
  nombre: string;
  email: string;
  rol: string;
}

export default function AdminUsuarios() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);

  useEffect(() => {
    cargarUsuarios();
  }, []);

  const cargarUsuarios = async () => {
    try {
      const data = await getAllUsers();
      setUsuarios(data);
    } catch (err) {
      console.error(err);
      alert("❌ Error al cargar usuarios desde el servidor.");
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
                  <th>ID</th>
                  <th>Nombre</th>
                  <th>Email</th>
                  <th>Rol</th>
                </tr>
              </thead>

              <tbody>
                {usuarios.length > 0 ? (
                  usuarios.map((u) => (
                    <tr key={u.id}>
                      <td>{u.id}</td>
                      <td>{u.nombre}</td>
                      <td>{u.email}</td>
                      <td>
                        <span
                          className={`badge ${
                            u.rol === "ADMIN" ? "bg-primary" : "bg-secondary"
                          }`}
                        >
                          {u.rol}
                        </span>
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
