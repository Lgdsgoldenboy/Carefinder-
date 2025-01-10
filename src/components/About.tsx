// src/components/About.tsx
import React from "react";
import { Link } from "react-router-dom";
import "./About.css"; // Assuming specific styles for About
import { useTheme } from './ThemeContext'; // Import the useTheme hook

const About: React.FC = () => {
  const { theme, toggleTheme } = useTheme(); // Get theme and toggle function

  return (
    <div className={`about-container ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
      <h2>About Carefinder</h2>
      <p>
        Carefinder is a platform designed to help users find hospitals in their area quickly and efficiently.
      </p>

      <section className="about-mission">
        <h3>Our Mission</h3>
        <p>To provide easy access to healthcare information and resources.</p>
      </section>

      <section className="about-vision">
        <h3>Our Vision</h3>
        <p>To be the leading platform for healthcare accessibility and information.</p>
      </section>

      <section className="about-team">
        <h3>Our Team</h3>
        <p>We are a dedicated team of professionals committed to improving healthcare access for everyone.</p>
      </section>

      <Link to="/" className="home-button">
        Return to Home
      </Link>
      <button onClick={toggleTheme} className="theme-toggle-button">
        Toggle Theme
      </button>
    </div>
  );
};

export default About;