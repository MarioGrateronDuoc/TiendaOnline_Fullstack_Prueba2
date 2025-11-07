import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/NavBar";
import { AppRoutes } from "./routes/appRoutes";

export default function App() {
  return (
    <Router>
      <NavBar />
      <AppRoutes />
    </Router>
  );
}