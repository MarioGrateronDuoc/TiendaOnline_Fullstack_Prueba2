import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchProductoById } from "../../helpers/productService";
import { cartService } from "../../helpers/cartservice";

export default function DetalleProducto() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [producto, setProducto] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // 🔹 Cargar producto desde backend
  useEffect(() => {
    if (!id) return;

    const cargarProducto = async () => {
      try {
        const data = await fetchProductoById(Number(id));
        setProducto(data);
      } catch (err) {
        console.error("Error cargando producto:", err);
        setProducto(null);
      } finally {
        setLoading(false);
      }
    };

    cargarProducto();
  }, [id]);

  // ⏳ Cargando…
  if (loading) {
    return <p className="text-center mt-5">Cargando producto...</p>;
  }

  // ❌ Producto no encontrado
  if (!producto) {
    return (
      <div className="container mt-5 text-center">
        <h2 className="text-warning">Producto No Encontrado</h2>
        <button className="btn btn-primary mt-3" onClick={() => navigate(-1)}>
          Volver Atrás
        </button>
      </div>
    );
  }

  // 🛒 Agregar al carrito
  const handleAgregarCarrito = () => {
    cartService.agregar(producto);

    const alertDiv = document.createElement("div");
    alertDiv.className =
      "alert alert-success alert-dismissible fade show position-fixed top-0 start-50 translate-middle-x mt-3";
    alertDiv.innerHTML = `
      <strong>✅ ¡Agregado!</strong> ${producto.nombre} se añadió al carrito.
      <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    document.body.appendChild(alertDiv);

    setTimeout(() => alertDiv.remove(), 3000);
  };

  // 🧮 Asegurar formato correcto del precio
  const precioFormateado = Number(producto.precio || 0).toLocaleString("es-CL");

  // 📌 Descripción por defecto
  const descripcion =
    producto.descripcion && producto.descripcion.trim() !== ""
      ? producto.descripcion
      : "Este producto no tiene una descripción disponible por el momento.";

  return (
    <div className="container mt-4">
      {/* Breadcrumb */}
      <nav aria-label="breadcrumb" className="mb-4">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/" className="text-decoration-none">Inicio</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="/productos" className="text-decoration-none">Productos</Link>
          </li>
          <li className="breadcrumb-item active">{producto.nombre}</li>
        </ol>
      </nav>

      <div className="row">
        {/* Imagen */}
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
                  objectFit: "contain",
                }}
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "https://via.placeholder.com/500x400/667eea/ffffff?text=Imagen+No+Disponible";
                }}
              />
            </div>
          </div>
        </div>

        {/* Info del producto */}
        <div className="col-lg-6">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body p-4">

              <span className="badge bg-primary mb-2 fs-6">{producto.categoria}</span>
              <h1 className="fw-bold">{producto.nombre}</h1>

              <h2 className="text-primary fw-bold mt-3">${precioFormateado}</h2>
              <small className="text-muted">Incluye IVA</small>

              {/* Descripción */}
              <div className="mt-4">
                <h5 className="fw-semibold">Descripción</h5>
                <p className="text-muted">{descripcion}</p>
              </div>

              {/* Características */}
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

              {/* Botones */}
              <div className="d-grid gap-2 d-md-flex mt-4">
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
