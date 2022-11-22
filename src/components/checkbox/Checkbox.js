import React, { useRef, useEffect } from "react";
import "./Checkbox.scss";
import Text from "../text";
import Box from "../box";
import PropTypes from "prop-types";
import classNames from "../../utils/classNames";

const Checkbox = ({
  label,
  alignToTop,
  dashed,
  disabled,
  labelClass,
  wrapperClass,
  labelComponent,
  className,
  checked,
  onChange,
  ...props
}) => {
  const checkbox = useRef();

  useEffect(() => {
    checkbox.current.checked = checked;
  }, [checked]);

  const handleOnChange = (e) => {
    if (checked === undefined) {
      if (onChange && typeof onChange === "function") {
        onChange(e);
      }
    } else {
      if (onChange && typeof onChange === "function") {
        onChange(e, !checked);
      }
    }
  };

  const checkboxClassName = classNames({
    "ui-checkbox__wrapper": true,
    alignToTop,
    dashed,
    disabled,
    [wrapperClass]: wrapperClass,
    [className]: className,
  });
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
        ref={checkbox}
        onChange={handleOnChange}
      />
      {label || (
        <Text
          className={classNames({
            "ui-checkbox__label-wrap ui-text heroNew": true,
            [labelClass]: labelClass,
          })}
          marginY={0}
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
  checked: undefined,
};

Checkbox.propTypes = {
  label: PropTypes.string,
  alignToTop: PropTypes.bool,
  dashed: PropTypes.bool,
  disabled: PropTypes.bool,
  labelClass: PropTypes.string,
  wrapperClass: PropTypes.string,
  labelComponent: PropTypes.object,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};
