import { useRoutes } from "react-router-dom";
import { Home, Productos, DetallesProductos, Carrito, Blogs, DetalleBlog, Contacto, Ofertas, Nosotros } from "../pages/UserPages";


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
      path: '/nosotros',
      element: <Nosotros />
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
      path: '/ofertas',
      element: <Ofertas />
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