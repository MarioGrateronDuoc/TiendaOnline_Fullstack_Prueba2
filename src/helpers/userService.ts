const API_USER =
  "https://microserviciouser-production-e1ea.up.railway.app/api/usuarios";

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

export async function getAllUsers() {
  const token = localStorage.getItem("token");

  if (!token) throw new Error("No hay token — debes iniciar sesión");

  const response = await fetch(API_USER, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error("Error API:", errorText);
    throw new Error("No autorizado (¿token incorrecto o no eres ADMIN?)");
  }

  return await response.json();
}


export async function createUserAsAdmin(usuario: {
  nombre: string;
  email: string;
  password: string;
  rol: "USER" | "ADMIN";
}) {
  const token = localStorage.getItem("token");

  const res = await fetch(`${API_USER}/admin`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(usuario),
  });

  if (!res.ok) {
    throw new Error("Error al crear usuario");
  }

  return res.json();
}

export async function deleteUser(id: number) {
  const token = localStorage.getItem("token");

  if (!token) throw new Error("No hay token");

  const response = await fetch(`${API_USER}/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error("Error API:", errorText);
    throw new Error("Error al eliminar usuario");
  }
}


export async function updateUserRol(id: number, rol: string) {
  const token = localStorage.getItem("token");

  if (!token) throw new Error("No hay token");

  const response = await fetch(`${API_USER}/${id}/rol`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ rol }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error("Error API:", errorText);
    throw new Error("Error al cambiar rol");
  }

  return await response.json();
}
