
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import { Home, Productos, DetallesProductos, carrito } from "./pages/UserPages";
import Carrito from "./pages/UserPages/carrito";

export default function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/productos/:id" element={<DetallesProductos />} />
        <Route path="/carrito" element={<Carrito />} />
      </Routes>
    </Router>
  );
}
