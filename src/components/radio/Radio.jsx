import React, { useRef, useEffect } from "react";
import "./Radio.scss";
import Box from "../box";
import Text from "../text";
import PropTypes from "prop-types";
import classNames from "../../utils/classNames";

const Radio = ({
  className,
  children,
  ringed,
  alignToTop,
  label,
  value,
  disabled,
  labelClass,
  alignRight,
  checked,
  onChange,
  labelComponent,
  ringSize,
  ringThickness,
  ...props
}) => {
  const radio = useRef();

  useEffect(() => {
    radio.current.checked = checked;
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


  const generateRadioClassName = classNames(
    {
      ringed,
      "ui-radio__wrapper": true,
      alignToTop,
      alignRight,
    },
    className
  );
  return (
    <Box
      is={"label"}
      className={generateRadioClassName}
      style={{ "--ring-size": ringSize, "--ring-thickness": ringThickness }}
    >
      <Box
        is={"input"}
        className={classNames({
          "ui-radio": true,
          hasLabel: label || children,
        })}
        type={"radio"}
        {...props}
        disabled={disabled}
        ref={radio}
        onChange={handleOnChange}
        value={value}
      />
      {children ? (
        <Box className={"ui-radio__label-wrap"}>{children}</Box>
      ) : labelComponent ? (
        <Box className={"ui-radio__label-text"}>{labelComponent}</Box>
      ) : (
        <Text
          className={classNames({
            "ui-radio__label-text": true,
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

export default Radio;

Radio.defaultProps = {
  ringed: false,
  alignToTop: false,
  ringSize: "16px",
  ringThickness: "5px",
};

Radio.propTypes = {
  ringed: PropTypes.bool,
  alignToTop: PropTypes.bool,
  label: PropTypes.string,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  labelClass: PropTypes.string,
  labelComponent: PropTypes.node,
  alignRight: PropTypes.bool,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  ringSize: PropTypes.string,
  ringThickness: PropTypes.string,
};
