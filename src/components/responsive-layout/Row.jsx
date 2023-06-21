import React from "react";
import PropTypes from "prop-types";
import Box from "../box";
import "./Row.scss";
import classNames from "../../utils/classNames";

const Row = ({
  className,
  children,
  alignment,
  gutter,
  gutterX,
  gutterY,
  ...props
}) => {
  const computedGutter = {
    x: gutterX || gutter,
    y: gutterY || gutter,
  };

  return (
    <Box
      className={classNames(
        {
          [`align__${alignment}`]: alignment,
          "ui-responsive__row": true,
        },
        className
      )}
      {...props}
      style={{ "--gutter-x": computedGutter.x, "--gutter-y": computedGutter.y }}
    >
      {children}
    </Box>
  );
};

export default Row;

Row.propTypes = {
  alignment: PropTypes.oneOf(["top", "center", "bottom"]),
  gutter: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  gutterX: PropTypes.string,
  gutterY: PropTypes.string,
};

Row.defaultProps = {
  alignment: "top",
  gutter: "16px",
};
