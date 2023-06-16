import React from "react";
import PropTypes from "prop-types";
import "./GridLayout.scss";
import Box from "../box";
import classNames from "../../utils/classNames";

const GridLayout = ({
  className,
  children,
  gridWidth,
  gridHeight,
  colGutter,
  rowGutter,
  width,
  ...props
}) => {
  return (
    <Box
      className={classNames(["ui-grid"], className)}
      style={{
        "--min-grid-width": gridWidth,
        "--min-grid-height": gridHeight,
        "--col-gutter": colGutter,
        "--row-gutter": rowGutter,
      }}
      width={width}
      {...props}
    >
      {children}
    </Box>
  );
};

export default GridLayout;

GridLayout.propTypes = {
  gridWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  gridHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  colGutter: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  rowGutter: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

GridLayout.defaultProps = {
  gridWidth: "350px",
  gridHeight: "150px",
  colGutter: "30px",
  rowGutter: "30px",
  width: "100%",
};
