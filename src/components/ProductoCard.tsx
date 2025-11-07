import { cartService } from "../helpers/cartservice" 
import type { Producto } from "../data/data";
import { Link } from "react-router-dom";

interface Props {
  producto: Producto;
}

export default function ProductoCard({ producto }: Props) {
  return (
    <div className="col-md-3 mb-4">
      <div className="card h-100 shadow-sm">
        <img
          src={producto.imagen}
          className="card-img-top"
          alt={producto.nombre}
          style={{ objectFit: "cover", height: "200px" }}
        />
        <div className="card-body d-flex flex-column justify-content-between">
          <h5 className="card-title">{producto.nombre}</h5>
          <p className="text-muted mb-2">{producto.categoria}</p>
          <p className="card-text">{producto.descripcion}</p>
          <h6 className="fw-bold mt-auto mb-3">
            ${producto.precio.toLocaleString("es-CL")}
          </h6>

          <div className="d-flex justify-content-between gap-2">
            <button
              className="btn btn-success flex-fill"
              onClick={() => {
                cartService.agregar(producto); // agrega al carrito
                alert(`✅ ${producto.nombre} agregado al carrito`);
              }}
            >
              Agregar 🛒
            </button>
            <Link
              to={`/producto/${producto.id}`}
              className="btn btn-outline-primary flex-fill"
            >
              Ver detalles
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
