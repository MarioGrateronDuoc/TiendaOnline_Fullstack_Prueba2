import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="container-fluid bg-light min-vh-100 py-4">
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-3 col-lg-2 bg-dark text-white p-3">
          <h4 className="fw-bold mb-4">Panel Admin</h4>
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link to="/admin" className="nav-link text-white">
                <i className="bi bi-speedometer2 me-2"></i> Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/admin/productos" className="nav-link text-white">
                <i className="bi bi-box-seam me-2"></i> Productos
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/admin/usuarios" className="nav-link text-white">
                <i className="bi bi-people me-2"></i> Usuarios
              </Link>
            </li>
          </ul>
        </div>

        {/* Contenido */}
        <div className="col-md-9 col-lg-10 p-4">
          <h2 className="fw-bold mb-4">Bienvenido al Panel de Administración</h2>
          <p className="text-muted">
            Desde aquí puedes gestionar los productos, usuarios y ofertas de Mage Store.
          </p>

          <div className="row">
            <div className="col-md-4 mb-3">
              <div className="card shadow-sm border-0">
                <div className="card-body text-center">
                  <i className="bi bi-box-seam fs-1 text-primary"></i>
                  <h5 className="fw-bold mt-3">Productos</h5>
                  <p>Administra el catálogo completo de la tienda.</p>
                  <Link to="/admin/productos" className="btn btn-primary btn-sm">
                    Ir a Productos
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-3">
              <div className="card shadow-sm border-0">
                <div className="card-body text-center">
                  <i className="bi bi-people fs-1 text-success"></i>
                  <h5 className="fw-bold mt-3">Usuarios</h5>
                  <p>Gestiona cuentas de clientes y administradores.</p>
                  <Link to="/admin/usuarios" className="btn btn-success btn-sm">
                    Ir a Usuarios
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-3">
              <div className="card shadow-sm border-0">
                <div className="card-body text-center">
                  <i className="bi bi-percent fs-1 text-warning"></i>
                  <h5 className="fw-bold mt-3">Ofertas</h5>
                  <p>Controla promociones y descuentos de la tienda.</p>
                  <Link to="/admin/ofertas" className="btn btn-warning btn-sm text-white">
                    Ir a Ofertas
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
