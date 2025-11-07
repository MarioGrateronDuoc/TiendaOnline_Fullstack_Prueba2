import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/NavBar";
import { AppRoutes } from "./routes/appRoutes";

export default function hApp() {
  return (
    <div style={{
      backgroundImage: 'url("https://image.slidesdocs.com/responsive-images/background/simple-black-and-white-stripes-fashion-minimalist-atmosphere-e-commerce-poster-powerpoint-background_046b6433b0__960_540.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      minHeight: '100vh'
    }}>
      <Router>
        <NavBar />
        <AppRoutes />
      </Router>
    </div>
  );
}