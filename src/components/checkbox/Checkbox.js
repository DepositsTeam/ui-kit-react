import React from "react";
import "./Checkbox.scss";
import Text from "../text";
import Box from "../box";
import PropTypes from "prop-types";
import classNames from "../../utils/classNames";

const Checkbox = ({
  label,
  alignToTop,
  dashed,
  className,
  disabled,
  labelClass,
  wrapperClass,
  labelComponent,
  ...props
}) => {
  const checkboxClassName = classNames(
    {
      "ui-checkbox__wrapper": true,
      alignToTop,
      dashed,
      disabled,
      [wrapperClass]: wrapperClass,
    },
    className
  );
  return (
    <Box is={"label"} className={checkboxClassName}>
      <Box
        is={"input"}
        className={classNames({
          "ui-checkbox": true,
          hasLabel: label || labelComponent,
        })}
        type={"checkbox"}
        disabled={disabled}
        {...props}
      />
      {label ? (
        label
      ) : (
        <Text
          className={classNames({
            "ui-checkbox__label-wrap ui-text heroNew": true,
            [labelClass]: labelClass,
          })}
        >
          {label}
        </Text>
      )}
    </Box>
  );
};

export default Checkbox;

Checkbox.defaultProps = {
  alignToTop: false,
  disabled: false,
  dashed: false,
};

Checkbox.propTypes = {
  disabled: PropTypes.bool,
  alignToTop: PropTypes.bool,
  dashed: PropTypes.bool,
  top: PropTypes.bool,
  labelClass: PropTypes.string,
  wrapperClass: PropTypes.string,
};
