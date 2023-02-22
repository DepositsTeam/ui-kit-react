import React, { useContext } from "react";
import { DarkModeContext } from "../../components/providers/DarkModeProvider";

export const useUpdateDarkMode = (darkMode) => {
  const { updateDarkMode } = useContext(DarkModeContext);

  return { updateDarkMode };
};
