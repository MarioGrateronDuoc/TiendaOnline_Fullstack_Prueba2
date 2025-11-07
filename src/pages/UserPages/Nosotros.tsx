import { Link } from "react-router-dom";

export default function Nosotros() {
  return (
    <div className="container mt-4">
      {/* Hero Section */}
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold text-primary">Sobre Nosotros</h1>
        <p className="lead text-muted">Conoce más sobre Temito Store</p>
      </div>

      <div className="row align-items-center mb-5">
        <div className="col-lg-6">
          <h2 className="fw-bold mb-4">Nuestra Historia</h2>
          <p className="fs-5 mb-4">
            En <strong>Temito Store</strong> nos dedicamos a brindar la mejor tecnología 
            al precio más accesible. Desde nuestro inicio en 2020, hemos crecido 
            gracias a la confianza de miles de clientes satisfechos.
          </p>
          <p className="fs-5 mb-4">
            Nos especializamos en celulares, laptops, tablets y accesorios de 
            las marcas más reconocidas, siempre garantizando calidad y soporte técnico.
          </p>
        </div>
        <div className="col-lg-6 text-center">
          <img 
            src="https://via.placeholder.com/500x300/667eea/ffffff?text=Temito+Store" 
            alt="Nuestra tienda" 
            className="img-fluid rounded shadow"
          />
        </div>
      </div>

      {/* Misión y Visión */}
      <div className="row mb-5">
        <div className="col-md-6 mb-4">
          <div className="card border-0 bg-primary text-white h-100">
            <div className="card-body p-4 text-center">
              <i className="bi bi-bullseye display-4 mb-3"></i>
              <h3>Misión</h3>
              <p className="fs-5">
                Ofrecer tecnología de calidad con precios justos y un servicio 
                excepcional que supere las expectativas de nuestros clientes.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card border-0 bg-success text-white h-100">
            <div className="card-body p-4 text-center">
              <i className="bi bi-eye display-4 mb-3"></i>
              <h3>Visión</h3>
              <p className="fs-5">
                Ser la tienda de tecnología preferida en Latinoamérica, 
                reconocida por nuestra innovación y compromiso con el cliente.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Valores */}
      <div className="text-center mb-5">
        <h2 className="fw-bold mb-4">Nuestros Valores</h2>
        <div className="row">
          <div className="col-md-3 mb-3">
            <div className="p-3">
              <i className="bi bi-heart display-4 text-danger mb-3"></i>
              <h5>Pasión</h5>
              <p className="text-muted">Amamos la tecnología</p>
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <div className="p-3">
              <i className="bi bi-shield-check display-4 text-primary mb-3"></i>
              <h5>Confianza</h5>
              <p className="text-muted">Productos garantizados</p>
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <div className="p-3">
              <i className="bi bi-people display-4 text-success mb-3"></i>
              <h5>Compromiso</h5>
              <p className="text-muted">Clientes satisfechos</p>
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <div className="p-3">
              <i className="bi bi-lightning display-4 text-warning mb-3"></i>
              <h5>Innovación</h5>
              <p className="text-muted">Siempre a la vanguardia</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="card bg-light border-0">
        <div className="card-body text-center py-5">
          <h3 className="mb-3">¿Listo para experimentar la mejor tecnología?</h3>
          <p className="text-muted mb-4">Descubre nuestros productos y únete a la familia Temito Store</p>
          <div className="d-flex justify-content-center gap-3">
            <Link to="/productos" className="btn btn-primary btn-lg">
              Ver Productos
            </Link>
            <Link to="/contacto" className="btn btn-outline-primary btn-lg">
              Contáctanos
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}