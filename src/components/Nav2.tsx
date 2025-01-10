// src/components/Nav2.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Nav2: React.FC = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">
          <Link to="/"> {/* Make logo clickable to return to home */}
            <img src="/path/to/logo.png" alt="Carefinder Logo" />
            <span className="name">Carefinder</span>
          </Link>
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li> {/* Home link */}
          <li><Link to="/search">Search Hospitals</Link></li> {/* Optional link */}
          <li><Link to="/export">Export Hospitals</Link></li>
          <li><Link to="/share">Share Hospitals</Link></li>
          <li><Link to="/editor">Markdown Editor</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/about">About Us</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav2;