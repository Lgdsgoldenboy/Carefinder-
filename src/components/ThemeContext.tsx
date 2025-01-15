// src/components/ThemeContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ThemeProviderProps {
    children: ReactNode; // Define children prop
}

const ThemeContext = createContext<any>(null);

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);