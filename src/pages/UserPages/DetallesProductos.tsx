import { useParams, Link, useNavigate } from "react-router-dom";
import { getProductoById } from "../../data/data";
import type { Producto } from "../../data/data";
import { cartService } from "../../helpers/cartservice";

export default function DetalleProducto() {
  const { id } = useParams();
  const navigate = useNavigate();
  const producto: Producto | undefined = getProductoById(Number(id));

  if (!producto) {
    return (
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center">
            <div className="card border-0 shadow-lg">
              <div className="card-body py-5">
                <i className="bi bi-exclamation-triangle display-1 text-warning"></i>
                <h2 className="text-warning mt-3">Producto No Encontrado</h2>
                <p className="text-muted mb-4">El producto que buscas no existe o ha sido removido.</p>
                <button 
                  onClick={() => navigate(-1)}
                  className="btn btn-primary"
                >
                  <i className="bi bi-arrow-left me-2"></i>
                  Volver Atrás
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const handleAgregarCarrito = () => {
    cartService.agregar(producto);
    // Mostrar toast o alerta mejorada
    const alertDiv = document.createElement('div');
    alertDiv.className = 'alert alert-success alert-dismissible fade show position-fixed top-0 start-50 translate-middle-x mt-3';
    alertDiv.innerHTML = `
      <strong>✅ ¡Agregado!</strong> ${producto.nombre} se añadió al carrito.
      <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    document.body.appendChild(alertDiv);
    
    // Auto-remover después de 3 segundos
    setTimeout(() => {
      if (alertDiv.parentNode) {
        alertDiv.parentNode.removeChild(alertDiv);
      }
    }, 3000);
  };

  return (
    <div className="container mt-4">
      {/* Breadcrumb */}
      <nav aria-label="breadcrumb" className="mb-4">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/" className="text-decoration-none">
              <i className="bi bi-house me-1"></i>
              Inicio
            </Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="/productos" className="text-decoration-none">
              Productos
            </Link>
          </li>
          <li className="breadcrumb-item active">{producto.nombre}</li>
        </ol>
      </nav>

      <div className="row">
        {/* Imagen del producto */}
        <div className="col-lg-6 mb-4">
          <div className="card border-0 shadow-sm">
            <div className="card-body text-center p-4">
              <img
                src={producto.imagen}
                alt={producto.nombre}
                className="img-fluid rounded"
                style={{ 
                  maxHeight: "400px", 
                  width: "100%", 
                  objectFit: "contain" 
                }}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://via.placeholder.com/500x400/667eea/ffffff?text=Imagen+No+Disponible';
                }}
              />
            </div>
          </div>
        </div>

        {/* Información del producto */}
        <div className="col-lg-6">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body p-4">
              {/* Categoría y Nombre */}
              <div className="mb-3">
                <span className="badge bg-primary bg-gradient fs-6 mb-2">
                  {producto.categoria}
                </span>
                <h1 className="h2 fw-bold text-dark">{producto.nombre}</h1>
              </div>

              {/* Precio */}
              <div className="mb-4">
                <h2 className="text-primary fw-bold">
                  ${producto.precio.toLocaleString("es-CL")}
                </h2>
                <small className="text-muted">Precio incluye IVA</small>
              </div>

              {/* Descripción */}
              <div className="mb-4">
                <h5 className="fw-semibold">Descripción</h5>
                <p className="text-muted lead" style={{ lineHeight: '1.6' }}>
                  {producto.descripcion}
                </p>
              </div>

              {/* Características (puedes agregar más si tienes los datos) */}
              <div className="mb-4">
                <h5 className="fw-semibold">Características</h5>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <i className="bi bi-check-circle text-success me-2"></i>
                    Garantía 12 meses
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check-circle text-success me-2"></i>
                    Envío gratis
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check-circle text-success me-2"></i>
                    Soporte técnico incluido
                  </li>
                </ul>
              </div>

              {/* Botones de acción */}
              <div className="d-grid gap-2 d-md-flex">
                <button 
                  className="btn btn-primary btn-lg flex-fill"
                  onClick={handleAgregarCarrito}
                >
                  <i className="bi bi-cart-plus me-2"></i>
                  Agregar al Carrito
                </button>
                <button 
                  className="btn btn-outline-secondary btn-lg"
                  onClick={() => navigate(-1)}
                >
                  <i className="bi bi-arrow-left me-2"></i>
                  Volver
                </button>
              </div>

              {/* Información adicional */}
              <div className="mt-4 pt-3 border-top">
                <div className="row text-center">
                  <div className="col-4">
                    <i className="bi bi-truck display-6 text-muted"></i>
                    <p className="small mb-0">Envío Gratis</p>
                  </div>
                  <div className="col-4">
                    <i className="bi bi-shield-check display-6 text-muted"></i>
                    <p className="small mb-0">Garantía</p>
                  </div>
                  <div className="col-4">
                    <i className="bi bi-arrow-repeat display-6 text-muted"></i>
                    <p className="small mb-0">Devolución</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}