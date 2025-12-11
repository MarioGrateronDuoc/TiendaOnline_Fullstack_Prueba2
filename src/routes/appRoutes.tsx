import { useRoutes } from "react-router-dom";
import {
  Home,
  Productos,
  DetallesProductos,
  Carrito,
  Blogs,
  DetalleBlog,
  Contacto,
  Ofertas,
  Nosotros,
} from "../pages/UserPages";

import Login from "../pages/UserPages/Login";
import Register from "../pages/UserPages/Register";

// 🧩 Importaciones del Panel de Administración
import Dashboard from "../pages/Admin/Dashboard";
import AdminProductos from "../pages/Admin/AdminProductos";
import AdminRoute from "./AdminRoute"; // Protege las rutas solo para admin
import AdminUsuarios from "../pages/Admin/AdminUsuarios";
import AdminOfertas from "../pages/Admin/AdminOfertas";



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
      path: '/login',
      element: <Login />
    },
    {
      path: '/register',
      element: <Register />
    },

    // ⚙️ Rutas del Panel de Administración (protegidas)
    {
      path: '/admin',
      element: (
        <AdminRoute>
          <Dashboard />
        </AdminRoute>
      )
    },
    {
      path: '/admin/productos',
      element: (
        <AdminRoute>
          <AdminProductos />
        </AdminRoute>
      )
    },

    {
  path: '/admin/usuarios',
  element: (
    <AdminRoute>
      <AdminUsuarios />
    </AdminRoute>
  )
    },

    {
      path: '/admin/ofertas',
      element: (
        <AdminRoute>
          <AdminOfertas />
        </AdminRoute>
      )
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
