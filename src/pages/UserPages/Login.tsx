import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { iniciarSesion, obtenerUsuarioActual } from "../../helpers/authService";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const success = iniciarSesion(email, password);

    if (success) {
      const user = obtenerUsuarioActual();
      alert(`✅ Bienvenido, ${user?.nombre}`);

      // 🔄 Actualiza el NavBar
      window.dispatchEvent(new Event("storage"));

      // 🚀 Redirige según el rol
      if (user?.rol === "admin") {
        navigate("/admin");
      } else {
        navigate("/");
      }
    } else {
      alert("❌ Credenciales incorrectas o usuario no registrado.");
    }
  };

  return (
    <section className="bg-light py-5">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-6">
            <div className="card shadow border-0 p-5">
              <h2 className="text-center mb-4 fw-bold text-primary">
                Iniciar Sesión
              </h2>

              <form onSubmit={handleLogin}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label fw-semibold">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    placeholder="ejemplo@correo.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label fw-semibold">
                    Contraseña
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    placeholder="Ingresa tu contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-100 py-2 fw-semibold"
                >
                  <i className="bi bi-box-arrow-in-right me-2"></i> Entrar
                </button>
              </form>

              <p className="text-center mt-4 mb-0 text-muted">
                ¿No tienes cuenta?{" "}
                <Link to="/register" className="text-primary fw-semibold">
                  Regístrate aquí
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
