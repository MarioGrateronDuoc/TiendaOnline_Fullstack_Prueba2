
export function saveToStorage(key: string, value: any): void {
  try {
    const data = JSON.stringify(value);
    localStorage.setItem(key, data);
  } catch (error) {
    console.error("Error guardando en localStorage:", error);
  }
}

// Obtiene y convierte el valor almacenado (si existe)
export function getFromStorage<T>(key: string): T | null {
  try {
    const item = localStorage.getItem(key);
    return item ? (JSON.parse(item) as T) : null;
  } catch (error) {
    console.error("Error leyendo desde localStorage:", error);
    return null;
  }
}

// Elimina una clave específica
export function removeFromStorage(key: string): void {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error("Error eliminando en localStorage:", error);
  }
}

// Limpia todo el almacenamiento local (borra todo)
export function clearStorage(): void {
  try {
    localStorage.clear();
  } catch (error) {
    console.error("Error limpiando localStorage:", error);
  }
}
