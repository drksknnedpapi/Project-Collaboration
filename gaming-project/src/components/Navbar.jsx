import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../style/Navbar.css";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // If scrolling down, hide the navbar
        setShowNavbar(false);
      } else {
        // If scrolling up, show the navbar
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div>
      <header className={showNavbar ? "navbar-visible" : "navbar-hidden"}>
        <nav>
          <ul>
            <li><Link to="/" className="logo">Logo</Link></li>
          </ul>
          <ul>
            <li><Link to="/" className="nav-item">Explore</Link></li>
          </ul>
          <ul>
            <li><Link to="/" className="nav-item">Creators</Link></li>
          </ul>
          <ul>
            <li><Link to="/" className="nav-item">Stream</Link></li>
          </ul>
          <ul>
            <li><Link to="/dashboard" className="nav-item">Dashboard</Link></li>
          </ul>
          <ul>
            <li><Link to="/login" className="nav-item">Login</Link></li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
