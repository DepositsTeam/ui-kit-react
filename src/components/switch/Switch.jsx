import React from "react";
import "./Switch.scss";
import Text from "../text";
import Box from "../box";
import PropTypes from "prop-types";
import classNames from "../../utils/classNames";

const Switch = ({
  label,
  colorScheme,
  disabled,
  className,
  switchColor,
  thumbColor,
  switchHeight,
  alignRight,
  switchWidth,
  thumbSize,
  ...props
}) => {
  const switchClassName = classNames(
    {
      "ui-switch__wrapper": true,
      [`state__disabled`]: disabled,
      [`semantic__${colorScheme}`]: colorScheme,
      custom_color: switchColor,
      custom_thumb_color: thumbColor,
      alignRight,
    },
    className
  );
  return (
    <Box
      is={"label"}
      className={switchClassName}
      style={{
        "--customswitchcolor": switchColor,
        "--customthumbcolor": thumbColor,
        "--switch-height": switchHeight,
        "--switch-width": switchWidth,
        "--thumb-size": thumbSize,
      }}
    >
      <Box is={"div"} className="ui-switch">
        <Box
          is={"input"}
          className={"ui-slider"}
          type={"checkbox"}
          disabled={disabled && true}
          {...props}
        />
        <Box is={"span"} className={"ui-slider round"} />
      </Box>
      <Text className={"ui-switch__label-text"}>{label}</Text>
    </Box>
  );
};

export default Switch;

Switch.propTypes = {
  colorScheme: PropTypes.oneOf([
    "primary",
    "danger",
    "success",
    "outline",
    "invisible",
  ]),
  disabled: PropTypes.bool,
  switchColor: PropTypes.string,
  thumbColor: PropTypes.string,
  alignRight: PropTypes.bool,
  thumbSize: PropTypes.string,
  switchWidth: PropTypes.string,
  switchHeight: PropTypes.string,
};

Switch.defaultProps = {
  colorScheme: "success",
  disabled: false,
  thumbSize: "18px",
  switchWidth: "56px",
  switchHeight: "26px",
};
