// src/components/Contact.tsx
import React from "react";
import { Link } from "react-router-dom";
import "./Contact.css"; // Assuming specific styles for Contact

const Contact: React.FC = () => {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>If you have any questions or need assistance, feel free to reach out to us!</p>

      <section className="contact-info">
        <h3>Contact Information</h3>
        <p>
          Email: <a href="mailto:support@carefinder.com">support@carefinder.com</a>
        </p>
        <p>
          Phone: <a href="tel:+2348028306270">+234 802 830 6270</a>
        </p>
      </section>

      <section className="social-links">
        <h3>Follow Us</h3>
        <p>
          <a href="https://www.facebook.com/orieno.oghogho.5?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">Facebook</a> |
          <a href="https://x.com/P_O_J_RIENO" target="_blank" rel="noopener noreferrer">Twitter</a> |
          <a href="https://www.instagram.com/p.o.j.rieno" target="_blank" rel="noopener noreferrer">Instagram</a> |
          <a href="https://www.linkedin.com/in/oghogho-orieno-58ba50204" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </p>
      </section>

      <section className="internal-links">
        <h3>Quick Links</h3>
        <p>
          <Link to="/">Home</Link> | <Link to="/search">Search Hospitals</Link>
        </p>
      </section>

      <Link to="/" className="home-button">
        Return to Home
      </Link>
    </div>
  );
};

export default Contact;
