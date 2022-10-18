import React from "react";
import "./button.scss";
import Box from "../box";
import PropTypes from "prop-types";
import classNames from "../../utils/classNames";
import PropType from "prop-types";
import Icon from "../icon";
import ChevronFilledDown from "../icons/ChevronFilledDown";
import tinycolor from "tinycolor2";
import { getTextColor } from "../../utils/colorManager";

const Button = ({
  is,
  leftIcon,
  rightIcon,
  dropDown,
  disabled,
  size,
  className,
  colorScheme,
  responsive,
  text,
  loading,
  loadingText,
  pill,
  smartColor,
  smartHoverColor,
  ...props
}) => {
  const generatedClassName = classNames(
    {
      "ui-button": true,
      [`semantic__${colorScheme}`]: colorScheme,
      [`state__disabled`]: disabled,
      [`size__${size}`]: size,
      responsive,
      smartColor,
      smartHoverColor,
      pill,
    },
    className
  );
  const smartCalculatedHoverColor = tinycolor(smartColor)
    .darken(10)
    .toHexString();
  const cssVars = {
    "--smart-color": smartColor,
    "--smart-hover-color": smartHoverColor,
    ...(smartColor
      ? {
          "--smart-calculated-hover-color": smartCalculatedHoverColor,
          "--smart-calculated-hover-text-color": getTextColor(
            smartCalculatedHoverColor
          ),
        }
      : {}),
    "--smart-text-color": getTextColor(smartColor),
    "--smart-hover-text-color": getTextColor(smartHoverColor),
  };

  return (
    <Box
      is={is}
      {...props}
      disabled={loading || disabled}
      className={generatedClassName}
      style={cssVars}
    >
      {leftIcon && <Icon className={"ui-button__left-icon"} icon={leftIcon} />}
      <span
        className={classNames({
          "loader-text": loading,
          "ui-button__button-text": true,
        })}
      >
        {loading ? <span>{loadingText} </span> : text || props.children}
      </span>
      {dropDown && (
        <Icon className={"ui-button__dropdown-icon"} icon={ChevronFilledDown} />
      )}
      {rightIcon && !dropDown && (
        <Icon className={"ui-button__dropdown-icon"} icon={rightIcon} />
      )}
    </Box>
  );
};

Button.propTypes = {
  is: PropTypes.oneOfType([
    PropTypes.oneOf(["button", "a", "span", "div"]),
    PropTypes.elementType,
  ]),
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
  rightIcon: PropTypes.object,
  dropDown: PropTypes.bool,
  responsive: PropTypes.bool,
  text: PropTypes.string,
  loading: PropTypes.bool,
  loadingText: PropTypes.string,
  pill: PropTypes.bool,
  smartColor: PropTypes.string,
  smartHoverColor: PropTypes.string,
};

Button.defaultProps = {
  is: "button",
  dropDown: false,
  leftIcon: null,
  size: "small",
  loadingText: "Loading",
};

export default Button;
