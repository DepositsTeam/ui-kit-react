import React from "react";
import PropTypes from "prop-types";
import Box from "../../box";
import "./badge.css";
import classNames from "../../../utils/classNames";
import Text from "../../text";

const Badge = ({
  children,
  colorScheme,
  className,
  subtle,
  size,
  ...props
}) => {
  const generatedClassName = classNames(
    {
      [`color-scheme__${colorScheme}`]: true,
      subtle,
      [`size__${size}`]: true,
      "ui-badge": true,
    },
    className
  );

  return (
    <Box className={generatedClassName}>
      <Text className={"ui-badge__text"} scale={size === "large" ? "footnote" : "overline"}>{children}</Text>
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
  size: PropTypes.oneOf(["small", "medium", "large"]).isRequired,
};

Badge.defaultProps = {
  colorScheme: "neutral",
  subtle: false,
  size: "small",
};
