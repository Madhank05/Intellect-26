import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaHome, FaCalendarAlt, FaEnvelope, FaUserEdit } from "react-icons/fa";
import React from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isActive = (path, hash = "") => {
    if (hash) {
      return location.pathname === path && location.hash === hash;
    }
    return location.pathname === path && !location.hash;
  };

  return (
    <nav className="navbar">

      {/* BRAND */}
      <Link
        to="/"
        className="brand"
        onClick={() => {
          setOpen(false);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        style={{ textDecoration: 'none' }}
      >
        <img src="/posters/logo.jpg" alt="Intellect Logo" className="logo-img" />
        <span className="brand-text">INTELLECT <strong>26</strong></span>
      </Link>

      {/* Desktop Links */}
      <div className="nav-links desktop">
        <Link to="/" className={isActive("/") ? "active" : ""}>Home</Link>
        <Link to="/#events" className={isActive("/", "#events") ? "active" : ""}>Events</Link>
        <Link to="/#contact" className={isActive("/", "#contact") ? "active" : ""}>Contact</Link>
        <Link to="/register" className={isActive("/register") ? "active" : ""}>Register</Link>
      </div>

      {/* Hamburger */}
      <div className="hamburger" onClick={() => setOpen(!open)}>
        {open ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="mobile-menu">
          <Link to="/" className={isActive("/") ? "active" : ""} onClick={() => setOpen(false)}>
            <FaHome /> Home
          </Link>
          <Link to="/#events" className={isActive("/", "#events") ? "active" : ""} onClick={() => setOpen(false)}>
            <FaCalendarAlt /> Events
          </Link>
          <Link to="/#contact" className={isActive("/", "#contact") ? "active" : ""} onClick={() => setOpen(false)}>
            <FaEnvelope /> Contact
          </Link>
          <Link to="/register" className={isActive("/register") ? "active" : ""} onClick={() => setOpen(false)}>
            <FaUserEdit /> Register
          </Link>
        </div>
      )}
    </nav>
  );
}
