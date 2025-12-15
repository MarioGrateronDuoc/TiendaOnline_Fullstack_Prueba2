import { useEffect, useState } from "react";
import {
  getAllUsers,
  deleteUser,
  updateUserRol,
  createUserAsAdmin
} from "../../helpers/userService";

interface Usuario {
  id: number;
  nombre: string;
  email: string;
  rol: string;
}

export default function AdminUsuarios() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rol, setRol] = useState<"USER" | "ADMIN">("USER");

  useEffect(() => {
    cargarUsuarios();
  }, []);

  const cargarUsuarios = async () => {
    const data = await getAllUsers();
    setUsuarios(data);
  };

  const crearUsuario = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const nuevo = await createUserAsAdmin({
        nombre,
        email,
        password,
        rol
      });

      setUsuarios([...usuarios, nuevo]);
      setNombre("");
      setEmail("");
      setPassword("");
      setRol("USER");
    } catch {
      alert("❌ Error al crear usuario");
    }
  };

  const eliminarUsuario = async (id: number) => {
    if (!confirm("¿Eliminar usuario?")) return;
    await deleteUser(id);
    setUsuarios(usuarios.filter(u => u.id !== id));
  };

  const cambiarRol = async (usuario: Usuario) => {
    const nuevoRol = usuario.rol === "ADMIN" ? "USER" : "ADMIN";
    const actualizado = await updateUserRol(usuario.id, nuevoRol);

    setUsuarios(
      usuarios.map(u => u.id === usuario.id ? actualizado : u)
    );
  };

  return (
    <div className="container py-4">
      <h2 className="fw-bold mb-4 text-center">Gestión de Usuarios</h2>

      {/* FORMULARIO CREAR USUARIO */}
      <div className="card shadow-sm mb-4">
        <div className="card-body">
          <h5 className="fw-semibold mb-3">Crear Usuario</h5>

          <form onSubmit={crearUsuario} className="row g-3">
            <div className="col-md-3">
              <input
                className="form-control"
                placeholder="Nombre"
                value={nombre}
                onChange={e => setNombre(e.target.value)}
                required
              />
            </div>

            <div className="col-md-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="col-md-3">
              <input
                type="password"
                className="form-control"
                placeholder="Contraseña"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="col-md-2">
              <select
                className="form-select"
                value={rol}
                onChange={e => setRol(e.target.value as "USER" | "ADMIN")}
              >
                <option value="USER">Usuario</option>
                <option value="ADMIN">Administrador</option>
              </select>
            </div>

            <div className="col-md-1">
              <button className="btn btn-success w-100">
                Crear
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* TABLA USUARIOS */}
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
                  <th>Acciones</th>
                </tr>
              </thead>

              <tbody>
                {usuarios.map(u => (
                  <tr key={u.id}>
                    <td>{u.id}</td>
                    <td>{u.nombre}</td>
                    <td>{u.email}</td>
                    <td>
                      <span className={`badge ${u.rol === "ADMIN" ? "bg-primary" : "bg-secondary"}`}>
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
                ))}
              </tbody>

            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
