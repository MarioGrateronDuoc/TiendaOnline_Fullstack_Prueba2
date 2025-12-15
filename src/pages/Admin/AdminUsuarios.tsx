import { useEffect, useState } from "react";
import {
  getAllUsers,
  deleteUser,
  updateUserRol
} from "../../helpers/userService";

interface Usuario {
  id: number;
  nombre: string;
  email: string;
  rol: string;
}

export default function AdminUsuarios() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    cargarUsuarios();
  }, []);

  const cargarUsuarios = async () => {
    try {
      const data = await getAllUsers();
      setUsuarios(data);
    } catch (error) {
      console.error(error);
      alert("❌ Error al cargar usuarios (¿token vencido o sin permisos?)");
    } finally {
      setLoading(false);
    }
  };

  const eliminarUsuario = async (id: number) => {
    const confirmar = confirm("¿Seguro que deseas eliminar este usuario?");
    if (!confirmar) return;

    try {
      await deleteUser(id);
      setUsuarios(usuarios.filter(u => u.id !== id));
    } catch (error) {
      console.error(error);
      alert("❌ Error al eliminar usuario");
    }
  };

  const cambiarRol = async (usuario: Usuario) => {
    const nuevoRol = usuario.rol === "ADMIN" ? "USER" : "ADMIN";

    try {
      const actualizado = await updateUserRol(usuario.id, nuevoRol);
      setUsuarios(
        usuarios.map(u =>
          u.id === usuario.id ? actualizado : u
        )
      );
    } catch (error) {
      console.error(error);
      alert("❌ Error al cambiar rol");
    }
  };

  return (
    <div className="container py-4">
      <h2 className="fw-bold mb-4 text-center">Gestión de Usuarios</h2>

      <div className="card shadow-sm">
        <div className="card-body">

          <h5 className="fw-semibold mb-3">Usuarios Registrados</h5>

          {loading ? (
            <p className="text-center text-muted">Cargando usuarios...</p>
          ) : (
            <div className="table-responsive">
              <table className="table table-striped align-middle">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Email</th>
                    <th>Rol</th>
                    <th>Acciones</th>
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
                              u.rol === "ADMIN"
                                ? "bg-primary"
                                : "bg-secondary"
                            }`}
                          >
                            {u.rol}
                          </span>
                        </td>
                        <td>
                          <button
                            className="btn btn-sm btn-warning me-2"
                            onClick={() => cambiarRol(u)}
                          >
                            Cambiar Rol
                          </button>

                          <button
                            className="btn btn-sm btn-danger"
                            onClick={() => eliminarUsuario(u.id)}
                          >
                            Eliminar
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={5} className="text-center text-muted">
                        No hay usuarios registrados.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}