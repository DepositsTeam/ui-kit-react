import React from "react";
import "./ResponsiveLayout.scss";
import PropTypes from "prop-types";
import Box from "../box";
import classNames from "../../utils/classNames";

const ResponsiveLayout = ({
  full,
  children,
  debugMode,
  className,
  ...props
}) => {
  return (
    <Box
      className={classNames(
        { full, debugMode, "ui-responsive-layout": true },
        className
      )}
    >
      {children}
    </Box>
  );
};

export default ResponsiveLayout;

ResponsiveLayout.propTypes = {
  full: PropTypes.bool,
  debugMode: PropTypes.bool,
  noPadding: PropTypes.bool,
};

ResponsiveLayout.defaultProps = {};
