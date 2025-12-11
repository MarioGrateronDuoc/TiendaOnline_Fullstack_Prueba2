// src/services/userService.ts

const API_USER = "https://microserviciouser-production-e1ea.up.railway.app/api/usuarios";

// -------------------------------------------
// ✅ Registrar usuario (funciona perfecto)
// -------------------------------------------
export async function registerUser(usuario: any) {
  const response = await fetch(API_USER, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(usuario),
  });

  if (!response.ok) {
    const msg = await response.text();
    console.error(msg);
    throw new Error("Error al registrar usuario");
  }

  return await response.json();
}

// -------------------------------------------
// ✅ Obtener usuarios (solo ADMIN)
// -------------------------------------------
export async function getAllUsers() {
  const token = localStorage.getItem("token");

  if (!token) throw new Error("No hay token — debes iniciar sesión");

  const response = await fetch(API_USER, {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json"
    }
  });

  // ⚠️ Si falla acceso → no eres ADMIN o token expiró
  if (!response.ok) {
    const errorText = await response.text();
    console.error("Error API:", errorText);
    throw new Error("No autorizado (¿token incorrecto o no eres ADMIN?)");
  }

  return await response.json();
}
