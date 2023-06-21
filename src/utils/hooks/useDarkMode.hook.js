import React, { useContext } from "react";
import { DarkModeContext } from "../../components/providers/DarkModeProvider.jsx";

export const useUpdateDarkMode = (darkMode) => {
  const { updateDarkMode } = useContext(DarkModeContext);

  return { updateDarkMode };
};
