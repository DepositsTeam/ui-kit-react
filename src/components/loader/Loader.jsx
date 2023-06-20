import React, { useContext } from "react";
import PropTypes from "prop-types";
import "./Loader.scss";
import Box from "../box";
import classNames from "../../utils/classNames";
import { ThemeContext } from "../providers/ThemeProvider.jsx";
import { DarkModeContext } from "../providers/DarkModeProvider.jsx";

const Loader = ({
  fullPage,
  loading,
  loader,
  loaderSize,
  smartColor,
  translucent,
  ringThickness,
  customLoader,
  children,
  size,
  ...props
}) => {
  const { theme } = useContext(ThemeContext);
  const { darkMode } = useContext(DarkModeContext);

  const computedColor = smartColor
    ? smartColor
    : darkMode
    ? theme["--dark-primary-color"]
    : theme["--light-primary-color"];

  return (
    <Box
      style={{
        "--smart-color": computedColor,
        "--loader-size": loaderSize,
        "--ring-thickness": ringThickness,
      }}
      className={classNames({
        "ui-d-loader": true,
        fullPage,
        loading,
        translucent,
      })}
    >
      {loading ? (
        <Box className={"ui-d-loader__wrapper"}>
          {loader === "ring" && (
            <Box className={"ring-loader"}>
              <Box />
              <Box />
              <Box />
              <Box />
            </Box>
          )}
          {loader === "equalizer" && <Box className={"equalizer-loader"} />}
          {loader === "ringed-circle" && (
            <Box className={"ringed-circle-loader"} />
          )}
        </Box>
      ) : (
        children
      )}
    </Box>
  );
};

export default Loader;

Loader.propTypes = {
  fullPage: PropTypes.bool,
  loading: PropTypes.bool,
  loader: PropTypes.oneOf(["ring", "equalizer", "ringed-circle"]),
  size: PropTypes.string,
  thickness: PropTypes.string,
  customLoader: PropTypes.oneOf([PropTypes.element, PropTypes.node]),
  color: PropTypes.string,
};

Loader.defaultProps = {
  loading: true,
  loader: "ring",
  loaderSize: "80px",
  ringThickness: "8px",
};
