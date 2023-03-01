import React, { useContext } from "react";
import { ThemeContext } from "../../components/providers/ThemeProvider";
export const useUpdateTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const updateTheme = (themeParam) => setTheme(themeParam);

  return { theme, updateTheme };
};
