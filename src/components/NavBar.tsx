
import { Link } from "react-router-dom";

export default function NavBar() {
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
              <Link to="/carrito" className="nav-link">
                Carrito 🛒
              </Link>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
}
