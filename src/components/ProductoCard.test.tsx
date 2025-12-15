import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { vi } from "vitest";
import ProductoCard from "./ProductoCard";

// 🔹 Mock cartService
vi.mock("../helpers/cartservice", () => ({
  cartService: {
    agregar: vi.fn(),
  },
}));

describe("ProductoCard component", () => {
  test("renderiza correctamente la informacion del producto", () => {
    const productoMock = {
      id: 1,
      nombre: "Polera Negra",
      categoria: "Ropa",
      descripcion: "Polera algodon premium",
      precio: 19990,
      imagen: "polera.jpg",
    };

    render(
      <MemoryRouter>
        <ProductoCard producto={productoMock} />
      </MemoryRouter>
    );

    // Nombre
    expect(screen.getByText("Polera Negra")).toBeInTheDocument();

    // Categoria
    expect(screen.getByText("Ropa")).toBeInTheDocument();

    // Descripcion
    expect(screen.getByText("Polera algodon premium")).toBeInTheDocument();

    // Precio formateado (es-CL)
    expect(screen.getByText("$19.990")).toBeInTheDocument();

    // Boton Agregar
    expect(screen.getByText(/Agregar/i)).toBeInTheDocument();

    // Link Ver detalles
    expect(screen.getByText(/Ver detalles/i)).toBeInTheDocument();
  });
});
