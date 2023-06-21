import React from "react";
import PropTypes from "prop-types";
import Box from "../box";
import classNames from "../../utils/classNames";
import "./AutoLayout.scss";

const AutoLayout = ({
  alignment,
  wrap,
  stretchItems,
  itemSpacing,
  direction,
  children,
  className,
  ...props
}) => {
  return (
    <Box
      className={classNames(
        {
          "d-auto-layout": true,
          [`align__${alignment}`]: alignment,
          [`direction__${direction}`]: direction,
          wrap,
          stretchItems,
        },
        className
      )}
      style={{
        [`--spacing-value`]: itemSpacing,
      }}
      {...props}
    >
      {children}
    </Box>
  );
};

export default AutoLayout;

AutoLayout.propTypes = {
  direction: PropTypes.oneOf(["horizontal", "vertical"]),
  itemSpacing: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  alignment: PropTypes.oneOf([
    "top-left",
    "top-center",
    "top-right",
    "center-right",
    "center",
    "center-left",
    "bottom-left",
    "bottom-center",
    "bottom-right",
  ]),
  wrap: PropTypes.bool,
  stretchItems: PropTypes.bool,
};

AutoLayout.defaultProps = {
  direction: "horizontal",
  itemSpacing: "10px",
};
