import type { Producto } from "../data/data";
import { getFromStorage, saveToStorage } from "./storage";

const KEY = "carrito";

export const cartService = {
  obtener: (): Producto[] => getFromStorage<Producto[]>(KEY) || [],
  agregar: (p: Producto) => {
    const c = getFromStorage<Producto[]>(KEY) || [];
    saveToStorage(KEY, [...c, p]);
    window.dispatchEvent(new Event("carrito-actualizado"));
  },
  cantidad: (): number => (getFromStorage<Producto[]>(KEY) || []).length,
};
