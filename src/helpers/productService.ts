// src/helpers/productService.ts

const API_URL = "https://backendecomercefullstack-production.up.railway.app/api/productos";

// 👉 Función para obtener el token actual
function getAuthHeaders() {
  const token = localStorage.getItem("token");
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
}

// ------------------- GET TODOS -------------------
export async function fetchProductos() {
  const res = await fetch(API_URL);
  return await res.json();
}

// ------------------- GET POR ID -------------------
export async function fetchProductoById(id: number) {
  const res = await fetch(`${API_URL}/${id}`);
  return await res.json();
}

// ------------------- CREAR -------------------
export async function crearProducto(producto: any) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: getAuthHeaders(),
    body: JSON.stringify(producto),
  });

  if (!res.ok) throw new Error("Error al crear producto");
  return await res.json();
}

// ------------------- ACTUALIZAR -------------------
export async function actualizarProducto(id: number, producto: any) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: getAuthHeaders(),
    body: JSON.stringify(producto),
  });

  if (!res.ok) throw new Error("Error al actualizar producto");
  return await res.json();
}

// ------------------- ELIMINAR -------------------
export async function eliminarProducto(id: number) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
    headers: getAuthHeaders(),
  });

  if (!res.ok) throw new Error("Error al eliminar producto");
}
