// src/services/authService.ts

const API_AUTH = "https://microservicioauth-production-853d.up.railway.app/auth";

export async function login(email: string, password: string) {
  const response = await fetch(`${API_AUTH}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) return null;

  const data = await response.json();

  // Guarda token, rol y nombre del backend
  localStorage.setItem("token", data.token);
  localStorage.setItem("rol", data.roles[0]);
  localStorage.setItem("nombre", data.nombre || "Usuario");

  return data;
}

export function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("rol");
  localStorage.removeItem("nombre");
}
