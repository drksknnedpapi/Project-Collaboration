import React from "react";
import { Link } from "react-router-dom";
import '../style/Navbar.css';

const Navbar = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li><Link to="/" className="logo">Logo</Link></li>
          </ul>
          <ul>
            <li><Link to="/" className="nav-item">Explore</Link></li>
          </ul>
          <ul>
            <li><Link to="/creators" className="nav-item">Creators</Link></li>
          </ul>
          <ul>
            <li><Link to="/stream" className="nav-item">Stream</Link></li>
          </ul>
          <ul>
            <li><Link to="/about" className="nav-item">About Us</Link></li>
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
