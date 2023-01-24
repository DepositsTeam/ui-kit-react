import React, {
  createContext,
  useState,
  useEffect,
  useLayoutEffect,
} from "react";
import PropTypes from "prop-types";
import defaultTheme from "../../utils/default-theme";
import tinycolor from "tinycolor2";
import {
  hexToRgbA,
  getTextColor,
  generateColorSpectrum,
} from "../../utils/colorManager";
import convertObjToVars from "../../utils/convertObjToVars";

export const ThemeContext = createContext({
  theme: {
    ...convertObjToVars(defaultTheme),
  },
});

const ThemeProvider = ({ initialTheme, children, ...props }) => {
  const [theme, setTheme] = useState({});
  const [initialState, setInitialState] = useState({
    theme: {
      ...convertObjToVars(defaultTheme),
      ...convertObjToVars(initialTheme),
      ...convertObjToVars(theme),
    },
    setTheme,
  });
  useEffect(() => {
    const computedTheme = {
      ...defaultTheme,
      ...initialTheme,
      ...theme,
    };
    if (computedTheme.primaryColor) {
      computedTheme["light-primary-action-color"] = computedTheme.primaryColor;
      computedTheme["dark-primary-action-color"] = computedTheme.primaryColor;
      computedTheme["light-primary-color"] = computedTheme.primaryColor;
      computedTheme["dark-primary-color"] = computedTheme.primaryColor;
      computedTheme["primarycolor"] = computedTheme.primaryColor;
    }

    // Depends on light primary action color
    // Configure the light primary themes whenever we hydrate the themes
    computedTheme["light-primary-action-text-color"] = getTextColor(
      computedTheme["light-primary-action-color"]
    );

    computedTheme["light-primary-color"] =
      computedTheme["light-primary-action-color"];

    computedTheme["light-primary-action-hover-color"] = `#${tinycolor(
      computedTheme["light-primary-action-color"]
    )
      .lighten(15)
      .toHex()}`;

    computedTheme["light-primary-action-disabled-color"] = `#${tinycolor(
      computedTheme["light-primary-action-color"]
    )
      .lighten(38)
      .toHex()}`;

    computedTheme["light-primary-action-disabled-text-color"] = getTextColor(
      computedTheme["light-primary-action-disabled-color"],
      true
    );

    computedTheme["light-primary-action-text-hover-color"] = getTextColor(
      computedTheme["light-primary-action-hover-color"]
    );

    computedTheme["light-primary-action-box-shadow-color"] = hexToRgbA(
      computedTheme["light-primary-action-color"],
      0.2
    );

    // Configure the semantic color text and boxshadow colors whenever we hydrate the theme
    computedTheme["light-danger-box-shadow-color"] = hexToRgbA(
      computedTheme["light-danger-color"],
      0.2
    );

    computedTheme["light-warning-box-shadow-color"] = hexToRgbA(
      computedTheme["light-warning-color"],
      0.2
    );

    computedTheme["light-success-box-shadow-color"] = hexToRgbA(
      computedTheme["light-success-color"],
      0.2
    );

    computedTheme["dark-danger-box-shadow-color"] = hexToRgbA(
      computedTheme["dark-danger-color"],
      0.2
    );

    computedTheme["dark-warning-box-shadow-color"] = hexToRgbA(
      computedTheme["dark-warning-color"],
      0.2
    );

    computedTheme["dark-success-box-shadow-color"] = hexToRgbA(
      computedTheme["dark-success-color"],
      0.2
    );

    computedTheme["light-danger-text-color"] = getTextColor(
      computedTheme["light-danger-color"]
    );

    computedTheme["dark-danger-text-color"] = getTextColor(
      computedTheme["dark-danger-color"]
    );

    computedTheme["light-success-text-color"] = getTextColor(
      computedTheme["light-success-color"]
    );

    computedTheme["dark-success-text-color"] = getTextColor(
      computedTheme["dark-success-color"]
    );

    computedTheme["light-warning-text-color"] = getTextColor(
      computedTheme["light-warning-color"]
    );

    computedTheme["dark-warning-text-color"] = getTextColor(
      computedTheme["dark-warning-color"]
    );

    // Depends on dark primary action color
    computedTheme["dark-primary-action-text-color"] = getTextColor(
      computedTheme["dark-primary-action-color"]
    );

    computedTheme["light-primary-color"] =
      computedTheme["light-primary-action-color"];

    computedTheme["dark-primary-action-hover-color"] = `#${tinycolor(
      computedTheme["dark-primary-action-color"]
    )
      .lighten(15)
      .toHex()}`;

    computedTheme["dark-primary-action-disabled-color"] = `#${tinycolor(
      computedTheme["dark-primary-action-color"]
    )
      .lighten(38)
      .toHex()}`;

    computedTheme["dark-primary-action-disabled-text-color"] = getTextColor(
      computedTheme["dark-primary-action-disabled-color"],
      true
    );

    computedTheme["dark-primary-action-text-hover-color"] = getTextColor(
      computedTheme["dark-primary-action-hover-color"]
    );

    computedTheme["dark-primary-action-box-shadow-color"] = hexToRgbA(
      computedTheme["dark-primary-action-color"],
      0.2
    );

    // Depends on dark background color
    computedTheme["dark-input-background-color"] = `#${tinycolor(
      computedTheme["dark-background-color"]
    )
      .lighten(8)
      .toHex()}`;

    computedTheme["dark-input-border-color"] = `#${tinycolor(
      computedTheme["dark-input-background-color"]
    )
      .lighten(23)
      .toHex()}`;

    computedTheme["dark-input-label-color"] = `#${tinycolor(
      computedTheme["dark-input-background-color"]
    )
      .lighten(58)
      .toHex()}`;

    computedTheme["dark-input-disabled-color"] = `#${tinycolor(
      computedTheme["dark-input-background-color"]
    )
      .lighten(2)
      .toHex()}`;

    computedTheme["dark-input-disabled-text-color"] = hexToRgbA(
      computedTheme["dark-input-label-color"],
      0.8
    );

    computedTheme["dark-input-icon-color"] = `#${tinycolor(
      computedTheme["dark-input-background-color"]
    )
      .lighten(58)
      .toHex()}`;

    setInitialState({
      theme: {
        ...convertObjToVars(computedTheme),
        ...generateColorSpectrum(computedTheme["light-primary-action-color"]),
        ...generateColorSpectrum(
          computedTheme["dark-primary-action-color"],
          "--dark-primary-"
        ),
        ...generateColorSpectrum(
          computedTheme["dark-background-color"],
          "--dark-background-"
        ),
        ...generateColorSpectrum(
          computedTheme["light-danger-color"],
          "--light-danger-"
        ),
        ...generateColorSpectrum(
          computedTheme["dark-danger-color"],
          "--dark-danger-"
        ),
        ...generateColorSpectrum(
          computedTheme["light-success-color"],
          "--light-success-"
        ),
        ...generateColorSpectrum(
          computedTheme["dark-success-color"],
          "--dark-success-"
        ),
        ...generateColorSpectrum(
          computedTheme["light-warning-color"],
          "--light-warning-"
        ),
        ...generateColorSpectrum(
          computedTheme["dark-warning-color"],
          "--dark-warning-"
        ),
      },
      setTheme,
    });
  }, [initialTheme, theme]);
  useLayoutEffect(() => {
    const savedCssEntries = Object.entries({
      ...convertObjToVars(initialState.theme),
    });
    let cssRules = `
      box-sizing: border-box;
      -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    -webkit-tap-highlight-color: transparent;
      `;
    let themeRules = "";
    if (savedCssEntries.length) {
      themeRules += savedCssEntries.map(([k, v]) => `${k}:${v}`).join(";");
    }
    if (document.getElementById("ui-kit-react-theme-tag")) {
      const styleTag = document.getElementById("ui-kit-react-theme-tag");
      styleTag.setAttribute("id", "ui-kit-react-theme-tag");
      styleTag.setAttribute("type", "text/css");
      styleTag.innerHTML = `:root{${themeRules}}.ui-kit-general-box{${cssRules}}`;
    } else {
      const styleTag = document.createElement("style");
      styleTag.setAttribute("id", "ui-kit-react-theme-tag");
      styleTag.setAttribute("type", "text/css");
      styleTag.innerHTML = `:root{${themeRules}}.ui-kit-general-box{${cssRules}}`;
      document.head.appendChild(styleTag);
    }
  }, [initialState, theme, initialTheme]);
  return (
    <ThemeContext.Provider value={initialState}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

ThemeProvider.propTypes = {
  initialTheme: PropTypes.object,
};

ThemeProvider.defaultProps = {
  initialTheme: {},
};
