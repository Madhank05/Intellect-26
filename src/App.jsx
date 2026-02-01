import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import ScrollToTop from "./components/ScrollToTop"; // ✅ ADD THIS

import Home from "./pages/Home";
import Events from "./pages/Events";
import DayEvents from "./pages/DayEvents";
import Register from "./pages/Register";
import Contact from "./pages/Contact";
import Sponsor from "./pages/Sponsor";

export default function App() {
  return (
    <BrowserRouter>

      <ScrollToTop />     {/* ✅ ADD THIS */}
      <ScrollProgress />

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sponsor" element={<Sponsor />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:dayId" element={<DayEvents />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
