import type { Producto } from "../data/data";
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
          <h6 className="fw-bold mt-auto mb-3">${producto.precio.toLocaleString("es-CL")}</h6>
          <button className="btn btn-primary w-100">Agregar al carrito</button>
        </div>
      </div>
    </div>
  );
}