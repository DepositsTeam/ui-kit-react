import React, { useState, createContext, useLayoutEffect } from "react";
import PropTypes from "prop-types";

export const DarkModeContext = createContext({
  darkMode: null,
});

const DarkModeProvider = ({ darkMode, children, ...props }) => {
  const [darkModeState, setDarkModeState] = useState(null);

  useLayoutEffect(() => {
    if (darkMode !== null) {
      setDarkModeState(darkMode);
    } else {
      const localStorageDarkMode = localStorage.getItem("dark_mode");
      if (localStorageDarkMode) {
        setDarkModeState(localStorageDarkMode === "enabled");
      } else {
        setDarkModeState(
          window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
        );
      }
    }
  }, [darkMode]);

  const initialState = {
    darkMode: darkModeState,
    updateDarkMode: setDarkModeState,
  };
  return (
    <DarkModeContext.Provider value={initialState}>
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeProvider;

DarkModeProvider.propTypes = {
  darkMode: PropTypes.bool,
};

DarkModeProvider.defaultProps = {
  darkMode: null,
};
