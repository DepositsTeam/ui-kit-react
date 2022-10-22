import { Box, Text, ErrorIcon } from "../../index";
import classNames from "../../utils/classNames";
import "./Counter.scss";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import number_format from "../../utils/number_format";

const Counter = ({
  label,
  size,
  max,
  min,
  errorMessage,
  coloredButtons,
  labelClass,
  labelFontFace,
  inputClass,
  disabled,
  decimal,
  alterMagnitude,
  spacing,
  value,
  onChange,
  className,
  ...props
}) => {
  const [internalValue, setInternalValue] = useState(null);
  const [formattedValue, setFormattedValue] = useState(0);

  useEffect(() => {
    setInternalValue(value);
  }, []);

  useEffect(() => {
    if (onChange && typeof onChange === "function") {
      onChange(internalValue);
    }
    if (decimal) {
      setFormattedValue(number_format(internalValue, 2));
    } else {
      setFormattedValue(internalValue);
    }
  }, [internalValue]);

  const increase = () => {
    const temp = internalValue + alterMagnitude;
    setInternalValue((max === 0 || !!max) && temp >= max ? max : temp);
  };
  const decrease = () => {
    const temp = internalValue - alterMagnitude;
    setInternalValue((min === 0 || !!min) && temp <= min ? min : temp);
  };

  return (
    <Box
      className={`ui-counter ${className ?? className}`}
      style={{
        "--counter-spacing": spacing,
      }}
    >
      <Box className={classNames(["ui-text-field__wrapper", `size__${size}`])}>
        {!!label && (
          <Box is="label">
            <Text
              marginTop="0px"
              className={classNames({
                "ui-text-field__label": true,
                [labelClass]: labelClass,
              })}
              scale="subhead"
              fontFace={labelFontFace}
            >
              {label}
            </Text>
          </Box>
        )}
        <Box className="ui-text-field__input-wrapper">
          <Box
            is={"button"}
            className={classNames({
              "ui-text-field--counter_input_button left": true,
              coloredButtons,
            })}
            onClick={decrease}
          >
            -
          </Box>
          <Box
            is={"input"}
            className={classNames({
              "ui-text-field__input": true,
              "has-error": errorMessage,
              disabled,
              [inputClass]: true,
            })}
            value={formattedValue}
            readonly
            {...props}
          />
          <Box
            is={"button"}
            className={classNames({
              "ui-text-field--counter_input_button right": true,
              coloredButtons,
            })}
            onClick={increase}
          >
            +
          </Box>
        </Box>
        {!!errorMessage && (
          <Box className="ui-text-field__error">
            <ErrorIcon className="ui-text-field__error-icon" />
            <Text
              className="ui-text-field__error-text"
              scale="subhead"
              fontFace="circularSTD"
            >
              {errorMessage}
            </Text>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Counter;

Counter.propTypes = {
  label: PropTypes.string,
  size: PropTypes.oneOf([
    "small",
    "medium",
    "large",
    "xlarge",
    "huge",
    "massive",
  ]),
  errorMessage: PropTypes.string,
  coloredButtons: PropTypes.bool,
  labelClass: PropTypes.string,
  inputClass: PropTypes.string,
  disabled: PropTypes.bool,
  decimal: PropTypes.bool,
  alterMagnitude: PropTypes.number,
  spacing: PropTypes.string,
  value: PropTypes.number,
  onChange: PropTypes.func,
  max: PropTypes.number,
  min: PropTypes.number,
};

Counter.defaultProps = {
  size: "medium",
  spacing: "16px",
  alterMagnitude: 1,
  value: 0,
};
