import { cartService } from "../helpers/cartservice";
import { Link } from "react-router-dom";
import { useTesting } from "../hook/useTesting";

// 🟢 Modelo correcto que viene desde backend
interface Producto {
  id: number;
  nombre: string;
  precio: number;
  categoria: string;
  descripcion: string;
  imagen: string;
}

interface Props {
  producto: Producto;
}

export default function ProductoCard({ producto }: Props) {
  const test = useTesting("ProductoCard");

  // 📌 Pruebas automáticas
  test.props({
    id: producto.id,
    nombre: producto.nombre,
    precio: producto.precio,
    categoria: producto.categoria,
  });

  const handleAgregar = () => {
    test.evento("agregar_carrito", {
      producto: producto.nombre,
      precio: producto.precio,
    });

    cartService.agregar(producto);
    alert(`✅ ${producto.nombre} agregado al carrito`);
  };

  const handleVerDetalles = () => {
    test.evento("ver_detalles", {
      productoId: producto.id,
      producto: producto.nombre,
    });
  };

  return (
    <div className="col-md-3 mb-4">
      <div className="card h-100 shadow-sm">
        <img
          src={producto.imagen}
          className="card-img-top"
          alt={producto.nombre}
          style={{ objectFit: "cover", height: "200px" }}
          onLoad={() =>
            test.render({ imagen: producto.nombre, estado: "cargada" })
          }
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              "https://via.placeholder.com/200x200/cccccc/000000?text=Sin+Imagen";
          }}
        />

        <div className="card-body d-flex flex-column justify-content-between">
          <h5 className="card-title">{producto.nombre}</h5>

          <p className="text-muted mb-1">{producto.categoria}</p>

          {/* Mostrar descripción corta */}
          <p className="small text-secondary" style={{ minHeight: "45px" }}>
            {producto.descripcion?.slice(0, 60)}...
          </p>

          <h6 className="fw-bold mt-auto mb-3">
            ${Number(producto.precio).toLocaleString("es-CL")}
          </h6>

          <div className="d-flex justify-content-between gap-2">
            <button className="btn btn-success flex-fill" onClick={handleAgregar}>
              Agregar 🛒
            </button>

            <Link
              to={`/producto/${producto.id}`}
              className="btn btn-outline-primary flex-fill"
              onClick={handleVerDetalles}
            >
              Ver detalles
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
