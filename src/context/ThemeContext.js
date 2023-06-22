import React, { createContext, useState } from "react";

export const ThemeContext = createContext();
export const ThemeUpdateContext = createContext();
export const ThemeProvider = ({ children }) => {
  const [DarkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme((prevTheme) => !prevTheme);
  };
  return (
    <ThemeContext.Provider value={DarkTheme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
};
