import React from "react";
import PropTypes from "prop-types";
import "./Loader.scss";
import Box from "../box";
import classNames from "../../utils/classNames";

const Loader = ({ fullPage, loading, loader, children, ...props }) => {
  return (
    <Box className={classNames({ "ui-d-loader": true, fullPage, loading })}>
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
};

Loader.defaultProps = {
  loading: true,
  loader: "ring",
};
