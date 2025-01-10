// src/components/Nav.tsx
import React from "react";
import "./styles.css";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import { useAuth } from '../context/AuthContext'; // Import the useAuth hook

const Nav: React.FC = () => {
  const { isAuthenticated, user, logout } = useAuth(); // Get authentication state and user info
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogout = () => {
    logout(); // Call the logout function
    navigate('/auth'); // Redirect to the login/signup page after logout
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">
          <img src="/assets/fxemoji_hospital.svg" alt="Carefinder Logo" />
          <span className="name">Carefinder</span>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          {isAuthenticated ? (
            <>
              <li>
                <span className="user-info">Hello, {user?.email}</span> {/* Display user email */}
              </li>
              <li>
                <button onClick={handleLogout} className="logout-btn">Logout</button> {/* Logout button */}
              </li>
            </>
          ) : (
            <li>
              <Link to="/signup" className="login-btn">
                <span className="next"> Sign Up/Login</span>
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;