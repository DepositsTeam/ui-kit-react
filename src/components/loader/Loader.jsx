import React from "react";
import PropTypes from "prop-types";
import "./Loader.scss";
import Box from "../box";
import classNames from "../../utils/classNames";

const Loader = ({
  fullPage,
  loading,
  loader,
  customLoader,
  children,
  size,
  thickness,
  color,
  ...props
}) => {
  return (
    <Box className={"ui-d-loader-wrapper"}>
      {loading ? (
        <Box
          style={{
            "--loader-size": size,
            "--loader-thickness": thickness,
            "--custom-color": color,
          }}
          className={classNames({
            "ui-d-loader": true,
            fullPage,
            loading,
            color,
          })}
        >
          <Box>
            {loader === "ring" ? (
              <Box
                className={classNames({
                  "ring-loader": true,
                  color,
                })}
              >
                <Box></Box>
                <Box></Box>
                <Box></Box>
                <Box></Box>
              </Box>
            ) : (
              customLoader
            )}
          </Box>
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
  loader: PropTypes.oneOf(["ring"]),
  size: PropTypes.string,
  thickness: PropTypes.string,
  customLoader: PropTypes.oneOf([PropTypes.element, PropTypes.node]),
  color: PropTypes.string,
};

Loader.defaultProps = {
  loading: true,
  loader: "ring",
  size: "80px",
  thickness: "8px",
};
