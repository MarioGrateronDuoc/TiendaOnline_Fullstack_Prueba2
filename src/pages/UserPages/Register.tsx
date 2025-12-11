import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../helpers/userService"; 

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    nombre: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("❌ Las contraseñas no coinciden");
      return;
    }

    const nuevoUsuario = {
      nombre: form.nombre,
      email: form.email,
      password: form.password,
      rol: "USER",
    };

    try {
      await registerUser(nuevoUsuario);
      alert("✅ Registro exitoso. Ahora inicia sesión.");
      navigate("/login");
    } catch (err) {
      alert("❌ Error al registrar usuario.");
      console.error(err);
    }
  };

  return (
    <section className="bg-light py-5">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-6">
            <div className="card shadow border-0 p-5">
              <h2 className="text-center mb-4 fw-bold text-success">
                Crear Cuenta
              </h2>

              <form onSubmit={handleRegister}>

                <div className="mb-3">
                  <label htmlFor="nombre" className="form-label fw-semibold">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    id="nombre"
                    className="form-control"
                    placeholder="Tu nombre completo"
                    value={form.nombre}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label fw-semibold">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control"
                    placeholder="ejemplo@correo.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label fw-semibold">
                    Contraseña
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="form-control"
                    placeholder="Ingresa tu contraseña"
                    value={form.password}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="confirmPassword"
                    className="form-label fw-semibold"
                  >
                    Confirmar Contraseña
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    className="form-control"
                    placeholder="Repite tu contraseña"
                    value={form.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-success w-100 py-2 fw-semibold"
                >
                  <i className="bi bi-person-plus me-2"></i> Registrarse
                </button>
              </form>

              <p className="text-center mt-4 mb-0 text-muted">
                ¿Ya tienes cuenta?{" "}
                <Link to="/login" className="text-success fw-semibold">
                  Inicia sesión
                </Link>
              </p>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
