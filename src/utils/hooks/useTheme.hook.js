import React, { useContext } from "react";
import { ThemeContext } from "../../components/providers/ThemeProvider";
export const useUpdateTheme = (theme) => {
  const { setTheme } = useContext(ThemeContext);

  const updateTheme = (theme) => setTheme(theme);

  return { updateTheme };
};
