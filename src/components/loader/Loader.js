import React from "react";
import PropTypes from "prop-types";
import "./Loader.scss";
import Box from "../box";
import classNames from "../../utils/classNames";

const Loader = ({
  fullPage,
  loading,
  loader,
  children,
  size,
  thickness,
  ...props
}) => {
  return (
    <Box
      style={{
        "--loader-size": size,
        "--loader-thickness": thickness,
      }}
      className={classNames({ "ui-d-loader": true, fullPage, loading })}
    >
      {loading && (
        <Box>
          {loader === "ring" ? (
            <Box className="ring-loader">
              <Box></Box>
              <Box></Box>
              <Box></Box>
              <Box></Box>
            </Box>
          ) : (
            children
          )}
        </Box>
      )}
    </Box>
  );
};

export default Loader;

Loader.propTypes = {
  fullPage: PropTypes.bool,
  loading: PropTypes.bool,
  loader: PropTypes.oneOf(["ring"]),
  size: PropTypes.string,
  thickness: PropTypes.string,
};

Loader.defaultProps = {
  loading: true,
  loader: "ring",
  size: "80px",
  thickness: "8px",
};
