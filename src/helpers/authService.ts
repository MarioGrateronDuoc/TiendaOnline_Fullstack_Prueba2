// src/helpers/authService.ts
export interface Usuario {
  nombre: string;
  email: string;
  password: string;
  rol: string; // "admin" o "cliente"
}

// 🟢 Guarda un nuevo usuario (manteniendo los existentes)
export const registrarUsuario = (usuario: Usuario) => {
  const usuarios = obtenerUsuarios();
  usuarios.push(usuario);
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
};

// 🟢 Obtiene todos los usuarios registrados
export const obtenerUsuarios = (): Usuario[] => {
  const data = localStorage.getItem("usuarios");
  return data ? JSON.parse(data) : [];
};

// 🟢 Obtiene el usuario actualmente logueado
export const obtenerUsuarioActual = (): Usuario | null => {
  const data = localStorage.getItem("usuarioActual");
  return data ? JSON.parse(data) : null;
};

// 🟢 Inicia sesión (busca email y contraseña en todos los usuarios)
export const iniciarSesion = (email: string, password: string): boolean => {
  const usuarios = obtenerUsuarios();
  const user = usuarios.find(
    (u) => u.email === email && u.password === password
  );

  if (user) {
    localStorage.setItem("usuarioActual", JSON.stringify(user));
    return true;
  }

  return false;
};

// 🟢 Cierra sesión
export const cerrarSesion = () => {
  localStorage.removeItem("usuarioActual");
};
