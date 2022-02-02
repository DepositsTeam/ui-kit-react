import React from "react";
import "./button.css";
import Box from "../../box";
import PropTypes from "prop-types";
import classNames from "../../../utils/classNames";
import PropType from "prop-types";
import Icon from "../../icon";
import ChevronFilledDown from "../../icons/ChevronFilledDown";

const Button = ({
  is,
  leftIcon,
  dropDown,
  disabled,
  size,
  className,
  colorScheme,
  ...props
}) => {
  const generatedClassName = classNames(
    {
      "ui-button": true,
      [`semantic__${colorScheme}`]: colorScheme,
      [`state__disabled`]: disabled,
      [`size__${size}`]: size,
    },
    className
  );
  return (
    <Box is={is} {...props} className={generatedClassName}>
      {leftIcon && (
        <Icon
          className={"ui-button__left-icon"}
          smartColor={"currentcolor"}
          icon={leftIcon}
        />
      )}
      <span className={"ui-button__button-text"}>
        {props.text || props.children}
      </span>
      {dropDown && (
        <Icon
          className={"ui-button__dropdown-icon"}
          smartColor={"currentcolor"}
          icon={ChevronFilledDown}
        />
      )}
    </Box>
  );
};

Button.propTypes = {
  is: PropTypes.oneOf(["button", "a", "span", "div"]),
  colorScheme: PropTypes.oneOf([
    "primary",
    "danger",
    "success",
    "outline",
    "invisible",
  ]),
  disabled: PropType.bool,
  size: PropTypes.oneOf([
    "small",
    "medium",
    "large",
    "xlarge",
    "huge",
    "massive",
  ]),
  leftIcon: PropTypes.object,
  dropDown: PropTypes.bool,
};

Button.defaultProps = {
  is: "button",
  dropDown: false,
  leftIcon: null,
  size: "small",
};

export default Button;
