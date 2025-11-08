import React from "react";
import { Navigate } from "react-router-dom";
import { obtenerUsuarioActual } from "../../helpers/authService";

export default function AdminRoute({ children }: { children: React.ReactElement }) {
  const user = obtenerUsuarioActual();

  if (!user || user.rol !== "admin") {
    alert("⚠️ Acceso denegado: esta sección es solo para administradores");
    return <Navigate to="/" replace />;
  }

  return children;
}
