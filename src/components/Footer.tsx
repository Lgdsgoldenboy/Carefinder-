import React from "react";
import "../styles/styles.css";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Logo Section */}
        <div className="footer-logo">
          <img src="/assets/fxemoji_hospital.svg" alt="Carefinder Logo" />
          <div className="carefinder-info">
            <h3>Carefinder</h3>
            <p>
              Discover nearby hospitals, contribute data, and share information
              effortlessly with the CareFinder App.
            </p>
          </div>
        </div>

        {/* Useful Links Section */}
        <div className="useful-links">
          <h4>Useful Links</h4>
          <ul>
            <li>
              <Link to="/search">Hospital List</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
            <li>
              <Link to="/login">Log In</Link>
            </li>
            <li>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
          </ul>
        </div>

        {/* Contact Information Section */}
        <div className="contact-info">
          <h4>Contact Us</h4>
          <address>
            <p>
              <img
                src="/assets/carbon_location-filled.svg"
                className="loc"
                alt="Location Icon"
              />
              No 9 Today Today Street Owhase, Udu rd, Delta State, Nigeria
            </p>
            <p>
              <img
                src="/assets/Vector (3).svg"
                className="loc"
                alt="Phone Icon"
              />
              +2348028306270
            </p>
            <p>
              <img
                src="/assets/material-symbols_mail-outline.svg"
                className="loc"
                alt="Email Icon"
              />
              carefinder@gmail.com
            </p>
          </address>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
