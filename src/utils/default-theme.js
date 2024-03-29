import convertObjToVars from "../utils/convertObjToVars";
import { getTextColor, hexToRgbA } from "../utils/colorManager";

const defaultTheme = {
  "light-primary-action-color": "#0db9e9",
  "light-primary-action-text-color": "#212934",
  "light-text-color": "#212934",
  "light-primary-action-hover-color": "#43d2fa",
  "light-primary-action-text-hover-color": "#ffffff",
  "light-primary-action-disabled-color": "#bdf3fc",
  // light-primary-action-disabled-text-color: "",
  "light-primary-action-box-shadow-color": "rgba(67, 210, 250, 0.25)",
  "light-secondary-action-color": "",
  "light-subtle-text-color": "#ced6de",
  "light-secondary-action-disabled-color": "",
  "light-input-background-color": "#ffffff",
  "light-background-color": "#ffffff",
  "light-outline-action-color": "#0d7fe9",
  "light-outline-action-disabled-color": "#acd7ff",
  "light-outline-action-box-shadow-color": "rgba(27, 92, 224, 0.2)",

  "light-danger-color": "#D62F4B",
  "light-danger-text-color": "#ffffff",
  "light-danger-box-shadow-color": "rgba(214, 47, 75, 0.3)",
  "light-danger-100": "#FFF0F2",
  "light-danger-200": "#FCC5CE",
  "light-danger-300": "#F99BAB",
  "light-danger-400": "#E85E75",
  "light-danger-500": "#D62F4B",
  "light-danger-600": "#AD283D",
  "light-danger-700": "#842432",
  "light-danger-800": "#5C1E27",
  "light-danger-900": "#331418",

  "dark-danger-color": "#df5e74",
  "dark-danger-text-color": "#121A26",
  "dark-danger-box-shadow-color": "rgba(214, 47, 75, 0.3)",
  "dark-danger-100": "#EEA7B3",
  "dark-danger-200": "#EB98A6",
  "dark-danger-300": "#E88898",
  "dark-danger-400": "#E47588",
  "dark-danger-500": "#DF5E74",
  "dark-danger-600": "#D93F59",
  "dark-danger-700": "#C12640",
  "dark-danger-800": "#911C30",
  "dark-danger-900": "#350A12",

  "light-success-color": "#00b058",
  "light-success-text-color": "#ffffff",
  "light-success-box-shadow-color": "rgba(0, 176, 88, 0.3)",
  "light-success-100": "#C4EFDF",
  "light-success-200": "#9BDFC4",
  "light-success-300": "#71D0A7",
  "light-success-400": "#27C079",
  "light-success-500": "#00B058",
  "light-success-600": "#158957",
  "light-success-700": "#1F624A",
  "light-success-800": "#1D3B32",
  "light-success-900": "#0D1E19",

  "dark-success-color": "#2eab6c",
  "dark-success-text-color": "#121A26",
  "dark-success-box-shadow-color": "rgba(0, 176, 88, 0.3)",
  "dark-success-100": "#71D0A7",
  "dark-success-200": "#53D091",
  "dark-success-300": "#36C77D",
  "dark-success-400": "#32BA75",
  "dark-success-500": "#2EAB6C",
  "dark-success-600": "#2A9B62",
  "dark-success-700": "#1F7348",
  "dark-success-800": "#175636",
  "dark-success-900": "#081E13",

  "light-warning-color": "#FFB44F",
  "light-warning-text-color": getTextColor("#ffb44f"),
  "light-warning-box-shadow-color": hexToRgbA("#FFB44F", 0.2),
  "light-warning-100": "#FFF8F0",
  "light-warning-200": "#FFF0DB",
  "light-warning-300": "#FFE5C2",
  "light-warning-400": "#FFD49B",
  "light-warning-500": "#FFB44F",
  "light-warning-600": "#FF9505",
  "light-warning-700": "#E08304",
  "light-warning-800": "#995A06",
  "light-warning-900": "#573302",

  "dark-warning-color": "#C87503",
  "dark-warning-text-color": getTextColor("#C87503"),
  "dark-warning-box-shadow-color": hexToRgbA("#C87503", 0.2),
  "dark-warning-100": "#FCA835",
  "dark-warning-200": "#FB9810",
  "dark-warning-300": "#EF8C04",
  "dark-warning-400": "#DC8104",
  "dark-warning-500": "#C87503",
  "dark-warning-600": "#B06703",
  "dark-warning-700": "#935703",
  "dark-warning-800": "#6E4102",
  "dark-warning-900": "#271701",

  "dark-primary-action-color": "#0db9e9",
  "dark-text-color": "#212934",
  "dark-primary-action-hover-color": "#43d2fa",
  "dark-primary-action-disabled-color": "#bdf3fc",
  "dark-primary-action-box-shadow-color": "rgba(67, 210, 250, 0.25)",
  "dark-secondary-action-color": "",
  "dark-subtle-text-color": "#ced6de",
  "dark-secondary-action-disabled-color": "",
  "dark-input-background-color": "#1F2B3B",
  "dark-input-label-color": "#94A3B8",
  "dark-input-border-color": "#384860",
  "dark-input-icon-color": "#94A3B8",
  "dark-background-color": "#121A26",
  "dark-input-disabled-text-color": "rgba(148, 163, 184, 0.8)",

  "light-primary-color": "#0db9e9",
  "light-primary-100": "#f2fafc",
  "light-primary-200": "#bdf3fc",
  "light-primary-300": "#75e2fa",
  "light-primary-400": "#43d2fa",
  "light-primary-500": "#0db9e9",
  "light-primary-600": "#0c9ccc",
  "light-primary-700": "#0b87b0",
  "light-primary-800": "#085e7a",
  "light-primary-900": "#094357",

  "dark-primary-color": "#0db9e9",
  "dark-primary-100": "#56c7ee",
  "dark-primary-200": "#36bdea",
  "dark-primary-300": "#0ea2d3",
  "dark-primary-400": "#0b7fa5",
  "dark-primary-500": "#0db9e9",
  "dark-primary-600": "#1182a8",
  "dark-primary-700": "#0f6d8d",
  "dark-primary-800": "#085e7a",
  "dark-primary-900": "#094357",
  "default-font-face": null,
  "dark-background-100": "#e5e6e7",
  "dark-background-200": "#bfc1c4",
  "dark-background-300": "#868a90",
  "dark-background-400": "#474d57",
  "dark-background-500": "#121a26",
  "dark-background-600": "#0f141c",
  "dark-background-700": "#0e141c",
  "dark-background-800": "#0a0d13",
  "dark-background-900": "#070a0c",
};

export const defaultThemeVars = {
  ...convertObjToVars(defaultTheme),
};

export default defaultTheme;
