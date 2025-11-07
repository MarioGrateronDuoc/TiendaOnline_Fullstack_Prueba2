import { Link } from "react-router-dom";
import { getProductos } from "../../data/data";
import { useState, useEffect } from "react";

export default function Home() {
  const productos = getProductos();
  const productosCarrusel = productos.slice(0, 4);
  const [indiceActual, setIndiceActual] = useState(0);

  // Cambiar automáticamente cada 3 segundos
  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndiceActual((prev) => (prev + 1) % productosCarrusel.length);
    }, 3000);

    return () => clearInterval(intervalo);
  }, [productosCarrusel.length]);

  const productoActual = productosCarrusel[indiceActual];

  return (
    <div>
      <section className="bg-dark text-white py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-4">
                Bienvenido a <span className="text-primary">Temito Store</span>
              </h1>
              <p className="lead mb-4">
                Descubre la mejor tecnología al mejor precio.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <Link to="/productos" className="btn btn-primary btn-lg">
                  <i className="bi bi-bag me-2"></i>
                  Ver Productos
                </Link>
                <Link to="/ofertas" className="btn btn-outline-light btn-lg">
                  <i className="bi bi-percent me-2"></i>
                  Ofertas Especiales
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              {/* Carrusel Manual Simple */}
              <div className="card border-0 bg-light text-center p-4">
                {/* Imagen del producto actual */}
                <div className="mb-3 d-flex align-items-center justify-content-center" style={{ height: '200px' }}>
                  <img 
                    src={productoActual.imagen} 
                    className="img-fluid"
                    alt={productoActual.nombre}
                    style={{ 
                      maxHeight: '180px', 
                      objectFit: 'contain' 
                    }}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://via.placeholder.com/250x180/667eea/ffffff?text=Producto';
                    }}
                  />
                </div>
                
                {/* Información del producto */}
                <div className="card-body">
                  <span className="badge bg-primary mb-2">{productoActual.categoria}</span>
                  <h5 className="card-title text-dark mb-2">{productoActual.nombre}</h5>
                  <h4 className="text-primary">${productoActual.precio.toLocaleString("es-CL")}</h4>
                </div>

                {/* Indicadores de posición */}
                <div className="d-flex justify-content-center gap-2 mt-3">
                  {productosCarrusel.map((_, index) => (
                    <button
                      key={index}
                      className={`btn btn-sm ${index === indiceActual ? 'btn-primary' : 'btn-outline-primary'}`}
                      onClick={() => setIndiceActual(index)}
                    >
                      {index + 1}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Productos Destacados */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold">Productos Destacados</h2>
            <p className="lead text-muted">Los más vendidos por nuestros clientes</p>
          </div>

          <div className="row">
            {productosCarrusel.map((producto, index) => (
              <div key={producto.id} className="col-lg-3 col-md-6 mb-4">
                <div className={`card h-100 shadow-sm border-0 text-center ${index === indiceActual ? 'border-primary' : ''}`}>
                  <div className="card-img-top p-3 d-flex align-items-center justify-content-center" style={{ height: '150px' }}>
                    <img 
                      src={producto.imagen} 
                      alt={producto.nombre}
                      className="img-fluid"
                      style={{ maxHeight: '120px', objectFit: 'contain' }}
                    />
                  </div>
                  <div className="card-body">
                    <span className="badge bg-secondary mb-2">{producto.categoria}</span>
                    <h6 className="card-title">{producto.nombre}</h6>
                    <h5 className="text-primary">${producto.precio.toLocaleString("es-CL")}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-4">
            <Link to="/productos" className="btn btn-primary btn-lg">
              <i className="bi bi-arrow-right me-2"></i>
              Ver Todos los Productos
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}