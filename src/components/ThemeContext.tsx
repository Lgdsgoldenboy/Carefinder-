// src/components/ThemeContext.tsx
import React, { createContext, useContext, useState } from 'react';

// Create the context
const ThemeContext = createContext<any>(null);

// Create a provider component
export const ThemeProvider: React.FC = ({ children }) => {
    const [theme, setTheme] = useState('light'); // Default theme

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// Custom hook to use the ThemeContext
export const useTheme = () => useContext(ThemeContext);