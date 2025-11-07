import type { Producto } from "../data/data";

// Interfaz para items del carrito con cantidad
export interface CarritoItem extends Producto {
  cantidad: number;
}

export const cartService = {
  // Estado global del carrito (simulado con variable)
  carrito: [] as CarritoItem[],
  
  // Suscriptores para reactividad
  suscriptores: [] as (() => void)[],
  
  // Notificar cambios a todos los componentes
  notificarCambios: function() {
    this.suscriptores.forEach(callback => callback());
  },
  
  // Suscribirse a cambios del carrito
  suscribir: function(callback: () => void) {
    this.suscriptores.push(callback);
    return () => {
      this.suscriptores = this.suscriptores.filter(cb => cb !== callback);
    };
  },
  
  obtener: function(): CarritoItem[] {
    return this.carrito;
  },

  agregar: function(producto: Producto) {
    const existente = this.carrito.find(item => item.id === producto.id);
    
    if (existente) {
      existente.cantidad += 1;
    } else {
      this.carrito.push({ ...producto, cantidad: 1 });
    }
    
    this.notificarCambios();
  },

  eliminar: function(id: number) {
    this.carrito = this.carrito.filter(item => item.id !== id);
    this.notificarCambios();
  },

  actualizarCantidad: function(id: number, cantidad: number) {
    if (cantidad < 1) {
      this.eliminar(id);
      return;
    }
    
    const item = this.carrito.find(item => item.id === id);
    if (item) {
      item.cantidad = cantidad;
      this.notificarCambios();
    }
  },

  vaciar: function() {
    this.carrito = [];
    this.notificarCambios();
  },

  cantidadTotal: function(): number {
    return this.carrito.reduce((total, item) => total + item.cantidad, 0);
  },

  totalPrecio: function(): number {
    return this.carrito.reduce((total, item) => total + (item.precio * item.cantidad), 0);
  }
};