import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Navbar from "./components/navBar/Navbar.jsx";
import Home from "./components/home/home.jsx";
import Body from "./components/body/body.jsx";
import Footer from "./components/footer/footer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navbar />
    <div className="container mx-auto overflow-x-hidden">
      <Home />
      <Body />
      <Footer />
    </div>
  </StrictMode>
);
