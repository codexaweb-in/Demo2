import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ReviewPage from "./pages/ReviewPage";
import ProductPage from "./pages/ProductPage";
import ContactPage from "./pages/ContactPage";
import ScrollToUp from "./components/ScrollToUp";
import LandingPage from "./pages/LandingPage";

export default function App() {
  return (
    <BrowserRouter>
    <ScrollToUp/>
      <div className="scroll-smooth">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/testimonials" element={<ReviewPage />} />
          <Route path="/products/:productId" element={<ProductPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/landingPage" element={<LandingPage />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}