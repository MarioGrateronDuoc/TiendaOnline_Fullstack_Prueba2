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
    imagen: "https://www.daltronpng.com//wp-content/uploads/2022/09/Apple-iPhone-14-Promax-256gb-Purple-Black-scaled.jpg"
  },
  {
    id: 2,
    nombre: "Samsung Galaxy S23",
    precio: 899990,
    categoria: "Celulares",
    descripcion: "Rendimiento de nueva generación con cámara profesional y diseño elegante.",
    imagen: "https://img.global.news.samsung.com/es/wp-content/uploads/2023/02/s23ultra-groupkv_exclusive_mo_221230-563x563.png"
  },
  {
    id: 3,
    nombre: "MacBook Air M2",
    precio: 1299990,
    categoria: "Laptops",
    descripcion: "Liviana, silenciosa y con chip M2. Ideal para estudiantes y profesionales.",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOPlmozocRWYYbqt7uMW9j8c_IlkF1GN77BQ&s"
  },
  {
    id: 4,
    nombre: "Dell XPS 13",
    precio: 1099990,
    categoria: "Laptops",
    descripcion: "Laptop ultradelgada con pantalla InfinityEdge Full HD y batería de larga duración.",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2x3RDOVcRDXNnbghU6doOGqcb8hMlfiE3rQ&s"
  },
  {
    id: 5,
    nombre: "iPad Pro 12.9",
    precio: 1159990,
    categoria: "Tablets",
    descripcion: "Pantalla Liquid Retina XDR con chip M2. Potencia de un computador en formato tablet.",
    imagen: "https://assets.pcfactory.cl/public/foto/47308/2_500.jpg?t=1671635959810"
  },
  {
    id: 6,
    nombre: "Apple AirPods Pro",
    precio: 299990,
    categoria: "Accesorios",
    descripcion: "Cancelación activa de ruido y sonido inmersivo. Con carga inalámbrica.",
    imagen: "https://www.apple.com/v/airpods-pro/q/images/overview/welcome/hero__b0eal3mn03ua_large.jpg"
  },
  {
    id: 7,
    nombre: "Smartwatch Series 8",
    precio: 399990,
    categoria: "Accesorios",
    descripcion: "Monitorea salud, sueño y actividad física con precisión profesional.",
    imagen: "https://think-ecuador.com/wp-content/uploads/2022/10/Apple-Watch-SE-44mm-Blanco-Estrella-con-banda-deportiva-Blanco-Estrella.jpg"
  },
  {
    id: 8,
    nombre: "Google Pixel 7",
    precio: 799990,
    categoria: "Celulares",
    descripcion: "Cámara inteligente, batería de larga duración y Android puro con actualizaciones rápidas.",
    imagen: "https://i.blogs.es/0c377d/captura-de-pantalla-2022-10-06-a-las-15.50.55/840_560.jpeg"
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
