import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { vi } from "vitest";
import NavBar from "./NavBar";

// 🔹 Mock authService
vi.mock("../helpers/authService", () => ({
  obtenerUsuario: vi.fn(() => null),
  cerrarSesion: vi.fn(),
}));

// 🔹 Mock cartService
vi.mock("../helpers/cartservice", () => ({
  cartService: {
    cantidadTotal: vi.fn(() => 0),
    suscribir: vi.fn(() => () => {}),
  },
}));

describe("NavBar component", () => {
  test("se renderiza correctamente y muestra links principales", () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );

    // Navbar existe
    expect(screen.getByRole("navigation")).toBeInTheDocument();

    // Links visibles
    expect(screen.getByText("Inicio")).toBeInTheDocument();
    expect(screen.getByText("Productos")).toBeInTheDocument();
    expect(screen.getByText("Contacto")).toBeInTheDocument();

    // Usuario NO autenticado
    expect(screen.getByText(/Iniciar/i)).toBeInTheDocument();
    expect(screen.getByText(/Registrarse/i)).toBeInTheDocument();
  });
});
