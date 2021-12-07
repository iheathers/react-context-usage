import React, { useState, createContext, useContext } from "react";

export const ThemeContext = createContext();
export const ThemeUpdateContext = createContext();

export const useTheme = () => {
  console.log("useTheme", useContext(ThemeContext));
  return useContext(ThemeContext);
};

export const useThemeUpdate = () => {
  console.log("usethemeUpdate", useContext(ThemeUpdateContext));
  return useContext(ThemeUpdateContext);
};

const ThemeProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(true);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <ThemeContext.Provider value={darkTheme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
