// src/components/LandingPage.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles.css';
import './LandingPage.css'
import { useTheme } from './ThemeContext'; // Import the useTheme hook

const LandingPage: React.FC = () => {
    const { theme, toggleTheme } = useTheme(); // Get theme and toggle function

    return (
        <div className={`landing-container ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
            <h1>Welcome to Carefinder</h1>
            <p>Your one-stop solution for finding hospitals in your area.</p>
            <Link to="/search" className="search-link">Search Hospitals</Link>
            <button onClick={toggleTheme} className="theme-toggle-button">
                Toggle Theme
            </button>
        </div>
    );
};

export default LandingPage;