import React from "react";
import { Navigate } from "react-router-dom";

export default function AdminRoute({ children }: { children: React.ReactElement }) {
  const token = localStorage.getItem("token");
  const rol = localStorage.getItem("rol");

  if (!token) {
    alert("⚠️ Debes iniciar sesión para acceder al panel de administración.");
    return <Navigate to="/login" replace />;
  }

  if (rol !== "ADMIN") {
    alert("⚠️ Acceso denegado: esta sección es solo para administradores");
    return <Navigate to="/" replace />;
  }

  return children;
}
