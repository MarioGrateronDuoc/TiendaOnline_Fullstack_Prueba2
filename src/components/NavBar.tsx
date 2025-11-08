import { Link, useNavigate } from "react-router-dom";
import { cartService } from "../helpers/cartservice";
import { useState, useEffect } from "react";
import { obtenerUsuarioActual as obtenerUsuario, cerrarSesion } from "../helpers/authService";

export default function NavBar() {
  const navigate = useNavigate();
  const [cantidad, setCantidad] = useState(cartService.cantidadTotal());
  const [usuario, setUsuario] = useState(obtenerUsuario());

  // Escuchar cambios del carrito
  useEffect(() => {
    const unsuscribe = cartService.suscribir(() => {
      setCantidad(cartService.cantidadTotal());
    });
    return unsuscribe;
  }, []);

  // Refrescar usuario al montar
  useEffect(() => {
    setUsuario(obtenerUsuario());
  }, []);

  // 🔄 Detectar cambios de login/logout (sin refrescar)
  useEffect(() => {
    const handleStorageChange = () => {
      setUsuario(obtenerUsuario());
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  // Cerrar sesión
  const handleLogout = () => {
    cerrarSesion();
    setUsuario(null);

    // 🔄 Forzar actualización en toda la app
    window.dispatchEvent(new Event("storage"));
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link to="/" className="navbar-brand fw-bold">
          🛍️ Mage Store
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Inicio
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/productos" className="nav-link">
                Productos
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/nosotros" className="nav-link">
                Nosotros
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/ofertas" className="nav-link">
                Ofertas
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/blogs" className="nav-link">
                Blogs
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/contacto" className="nav-link">
                Contacto
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/carrito" className="nav-link position-relative">
                <i className="bi bi-cart3"></i> Carrito
                {cantidad > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {cantidad}
                  </span>
                )}
              </Link>
            </li>

            {/* 🔑 Autenticación */}
            {!usuario ? (
              <>
                <li className="nav-item">
                  <Link to="/login" className="nav-link">
                    <i className="bi bi-box-arrow-in-right me-1"></i> Iniciar Sesión
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/register" className="nav-link">
                    <i className="bi bi-person-plus me-1"></i> Registrarse
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item d-flex align-items-center px-2 text-light">
                  <i className="bi bi-person-circle me-1"></i> Hola,{" "}
                  <span className="fw-semibold ms-1">{usuario.nombre}</span>
                </li>
                <li className="nav-item">
                  <button
                    onClick={handleLogout}
                    className="btn btn-outline-light btn-sm ms-2"
                  >
                    <i className="bi bi-box-arrow-right me-1"></i> Cerrar Sesión
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
