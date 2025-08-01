// ThemeContext.js
import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    '--header-bg': '21, 32, 43', // RGB values as string
    // other theme variables...
  });

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div style={theme}> {/* This applies the CSS variables to the subtree */}
        {children}
      </div>
    </ThemeContext.Provider>
  );
};