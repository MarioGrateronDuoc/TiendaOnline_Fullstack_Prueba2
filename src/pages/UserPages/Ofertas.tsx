import { Link } from "react-router-dom";
import { getProductos } from "../../data/data";
import ProductoCard from "../../components/ProductoCard";

export default function Ofertas() {
  const productos = getProductos();
  
  // Productos en oferta (modificamos los precios para simular descuento)
  const productosOferta = productos.slice(0, 6).map(producto => ({
    ...producto,
    precio: Math.round(producto.precio * 0.7), // Aplicamos 30% descuento
    enOferta: true
  }));

  return (
    <div className="container mt-4">
      {/* Header */}
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold text-danger">🔥 Ofertas Especiales</h1>
        <p className="lead text-muted">Descuentos exclusivos por tiempo limitado</p>
        <div className="alert alert-warning d-inline-block">
          ⏰ Ofertas válidas hasta agotar stock
        </div>
      </div>

      {/* Productos en Oferta usando ProductoCard */}
      <div className="row">
        {productosOferta.map((producto) => (
          <ProductoCard 
            key={producto.id} 
            producto={producto}
          />
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-5">
        <div className="card bg-light border-0">
          <div className="card-body py-5">
            <h3>¿No encontraste lo que buscabas?</h3>
            <p className="text-muted mb-4">Explora todos nuestros productos disponibles</p>
            <Link to="/productos" className="btn btn-primary btn-lg">
              Ver Todos los Productos
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}