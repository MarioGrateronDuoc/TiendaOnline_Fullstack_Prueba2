
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import { Home, Productos, DetallesProductos, blog, DetalleBlog } from "./pages/UserPages";
import Carrito from "./pages/UserPages/carrito";
import Blogs from "./pages/UserPages/blogs";

export default function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/productos/:id" element={<DetallesProductos />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<DetalleBlog />} />
      </Routes>
    </Router>
  );
}
