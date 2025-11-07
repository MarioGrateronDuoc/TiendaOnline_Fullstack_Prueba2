import { Link } from "react-router-dom";
import { cartService } from "../helpers/cartservice"; 
import { useState, useEffect } from "react";

export default function NavBar() {
  const [cantidad, setCantidad] = useState(cartService.cantidadTotal());

  useEffect(() => {
    // Suscribirse al servicio de carrito
    const unsuscribe = cartService.suscribir(() => {
      setCantidad(cartService.cantidadTotal());
    });

    return unsuscribe; // Limpiar suscripción al desmontar
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link to="/" className="navbar-brand fw-bold">
          🛍️ Temito Store
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
          </ul>
        </div>
      </div>
    </nav>
  );
}