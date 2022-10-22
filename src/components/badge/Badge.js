import React from "react";
import PropTypes from "prop-types";
import Box from "../box";
import "./badge.css";
import classNames from "../../utils/classNames";
import Text from "../text";
import { getTextColor } from "../../utils/colorManager";

const Badge = ({
  children,
  colorScheme,
  className,
  subtle,
  size,
  customSize,
  smartColor,
  ...props
}) => {
  const generatedClassName = classNames(
    {
      [`color-scheme__${colorScheme}`]: true,
      subtle,
      [`size__${size}`]: true,
      "ui-badge": true,
      sizeCustom: customSize,
      smartColor,
    },
    className
  );

  const cssVars = {
    "--size": typeof customSize === "number" ? `${customSize}px` : customSize,
    "--smart-color": smartColor,
    "--smart-text-color": getTextColor(smartColor),
  };

  return (
    <Box className={generatedClassName} style={cssVars}>
      <Text
        equalLineHeight
        className={"ui-badge__text"}
        scale={size === "large" ? "footnote" : "overline"}
        fontSize={size === "huge" ? "12px" : null}
      >
        {children}
      </Text>
    </Box>
  );
};

export default Badge;

Badge.propTypes = {
  colorScheme: PropTypes.oneOf([
    "neutral",
    "green",
    "red",
    "yellow",
    "cyan",
    "blue",
  ]).isRequired,
  subtle: PropTypes.bool,
  size: PropTypes.oneOf(["small", "medium", "large", "huge"]).isRequired,
  customSize: PropTypes.string,
  smartColor: PropTypes.string,
};

Badge.defaultProps = {
  colorScheme: "neutral",
  subtle: false,
  size: "small",
};
