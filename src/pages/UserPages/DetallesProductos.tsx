
import { useParams, Link } from "react-router-dom";
import { getProductoById } from "../../data/data";
import type { Producto } from "../../data/data";

export default function DetalleProducto() {
  const { id } = useParams(); // Obtiene el id de la URL
  const producto: Producto | undefined = getProductoById(Number(id));

  if (!producto) {
    return (
      <div className="container mt-5 text-center">
        <h3>Producto no encontrado</h3>
        <Link to="/productos" className="btn btn-secondary mt-3">
          Volver a productos
        </Link>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div className="row">
        {/* Imagen del producto */}
        <div className="col-md-6 text-center">
          <img
            src={producto.imagen}
            alt={producto.nombre}
            className="img-fluid rounded shadow-sm"
            style={{ maxHeight: "400px", objectFit: "cover" }}
          />
        </div>

        {/* Información del producto */}
        <div className="col-md-6">
          <h2>{producto.nombre}</h2>
          <p className="text-muted">{producto.categoria}</p>
          <h4 className="text-primary mb-3">
            ${producto.precio.toLocaleString("es-CL")}
          </h4>
          <p>{producto.descripcion}</p>

          <div className="d-flex gap-2 mt-4">
            <button className="btn btn-success">Agregar al carrito 🛒</button>
            <Link to="/productos" className="btn btn-outline-secondary">
              Volver
            </Link>
            
          </div>
        </div>
      </div>
    </div>
  );
}
