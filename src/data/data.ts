
export interface Producto {
  id: number;
  nombre: string;
  precio: number;
  categoria: string;
  descripcion: string;
  imagen: string;
}

let productos: Producto[] = [
  {
    id: 1,
    nombre: "iPhone 14",
    precio: 999990,
    categoria: "Celulares",
    descripcion: "El último modelo de Apple con pantalla Super Retina XDR y chip A15 Bionic.",
    imagen: "/img/productos/Iphone 14.jpg"
  },
  {
    id: 2,
    nombre: "Samsung Galaxy S23",
    precio: 899990,
    categoria: "Celulares",
    descripcion: "Rendimiento de nueva generación con cámara profesional y diseño elegante.",
    imagen: "/img/productos/Samsung Galaxy S23.jpg"
  },
  {
    id: 3,
    nombre: "MacBook Air M2",
    precio: 1299990,
    categoria: "Laptops",
    descripcion: "Liviana, silenciosa y con chip M2. Ideal para estudiantes y profesionales.",
    imagen: "/img/productos/MacBook Air M2.jpg"
  },
  {
    id: 4,
    nombre: "Dell XPS 13",
    precio: 1099990,
    categoria: "Laptops",
    descripcion: "Laptop ultradelgada con pantalla InfinityEdge Full HD y batería de larga duración.",
    imagen: "/img/productos/Dell XPS 13.jpg"
  },
  {
    id: 5,
    nombre: "iPad Pro 12.9",
    precio: 1159990,
    categoria: "Tablets",
    descripcion: "Pantalla Liquid Retina XDR con chip M2. Potencia de un computador en formato tablet.",
    imagen: "/img/productos/iPad Pro 12.9.jpg"
  },
  {
    id: 6,
    nombre: "Apple AirPods Pro",
    precio: 299990,
    categoria: "Accesorios",
    descripcion: "Cancelación activa de ruido y sonido inmersivo. Con carga inalámbrica.",
    imagen: "/img/productos/AirPods Pro.jpg"
  },
  {
    id: 7,
    nombre: "Smartwatch Series 8",
    precio: 399990,
    categoria: "Accesorios",
    descripcion: "Monitorea salud, sueño y actividad física con precisión profesional.",
    imagen: "/img/productos/smartwatch.jpg"
  },
  {
    id: 8,
    nombre: "Google Pixel 7",
    precio: 799990,
    categoria: "Celulares",
    descripcion: "Cámara inteligente, batería de larga duración y Android puro con actualizaciones rápidas.",
    imagen: "/img/productos/Google Pixel 7.jpg"
  }
];

// ----- Funciones CRUD -----

export function getProductos(): Producto[] {
  return productos;
}

export function getProductoById(id: number): Producto | undefined {
  return productos.find((p) => p.id === id);
}

export function addProducto(producto: Producto): void {
  productos.push(producto);
}

export function updateProducto(id: number, data: Partial<Producto>): void {
  const index = productos.findIndex((p) => p.id === id);
  if (index !== -1) productos[index] = { ...productos[index], ...data };
}

export function deleteProducto(id: number): void {
  productos = productos.filter((p) => p.id !== id);
}
