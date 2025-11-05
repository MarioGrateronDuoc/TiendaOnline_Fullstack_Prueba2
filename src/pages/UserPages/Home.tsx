
import { getProductos } from "../../data/data";  // Importamos los datos
import ProductoCard from "../../components/ProductoCard"; // Importamos el componente de tarjeta

export default function Home() {
  const productos = getProductos(); // Obtenemos los productos desde data.ts

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Nuestros Productos</h2>
      <div className="row">
        {productos.map((p) => (
          <ProductoCard key={p.id} producto={p} />
        ))}
      </div>
    </div>
  );
}
