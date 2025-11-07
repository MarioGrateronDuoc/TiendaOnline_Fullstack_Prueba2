import { useRoutes } from "react-router-dom";
import Home from "../pages/UserPages/Home";
import Productos from "../pages/UserPages/Productos";
import DetallesProductos from "../pages/UserPages/DetallesProductos";
import Carrito from "../pages/UserPages/carrito";
import Blogs from "../pages/UserPages/blogs";
import DetalleBlog from "../pages/UserPages/DetalleBlog";
import Contacto from "../pages/UserPages/Contacto";


export const AppRoutes = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/productos',
      element: <Productos />
    },
    {
      path: '/producto/:id',
      element: <DetallesProductos />
    },
    {
      path: '/carrito',
      element: <Carrito />
    },
    {
      path: '/blogs',
      element: <Blogs />
    },
    {
      path: '/blog/:id',
      element: <DetalleBlog />
    },
    {
      path: '/contacto',
      element: <Contacto />
    },
    {
      path: '*',
      element: (
        <div className="container text-center mt-5">
          <h1>Página no encontrada - 404</h1>
          <p>La página que buscas no existe.</p>
          <a href="/" className="btn btn-primary">Volver al Inicio</a>
        </div>
      )
    }
  ]);

  return routes;
};