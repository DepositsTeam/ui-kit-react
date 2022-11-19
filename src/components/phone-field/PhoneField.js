import React, { useLayoutEffect, useRef } from "react";
import "../../scss/textfield.css";
import "./PhoneField.scss";
import Box from "../box";
import Text from "../text";
import PropTypes from "prop-types";
import Icon from "../icon";
import Error from "../icons/Error";
import classNames from "../../utils/classNames";

const PhoneField = ({
  label,
  leftIcon,
  size,
  dropDown,
  rightIcon,
  errorMessage,
  inputClassName,
  className,
  disabled,
  ...props
}) => {
  const phoneInputRef = useRef();
  useLayoutEffect(() => {
    const elem = phoneInputRef.current;
    console.log(phoneInputRef);
    const value = elem.value;
    elem.style.width = "calc(" + value.length + "ch + 4px)";
    const wrapper = elem.closest(".ui-text-field__wrapper");
    let offset;
    if (wrapper.classList.contains("size__small")) {
      offset = 16;
    } else if (wrapper.classList.contains("size__xlarge")) {
      offset = 20;
    } else {
      offset = 26;
    }
    elem.nextSibling.style.paddingLeft =
      "calc(" +
      (value.length <= 2 ? 2 : value.length) +
      "ch + " +
      offset +
      "px)";
  }, []);

  const generateInputFieldClasses = classNames(
    {
      "ui-text-field__input": true,
      "has-error": errorMessage,
      "has-left-icon": leftIcon,
      "has-right-icon": dropDown || rightIcon,
    },
    inputClassName
  );

  const wrapperClasses = classNames(
    {
      [`size__${size}`]: true,
      "ui-text-field__wrapper": true,
      "has-error": errorMessage,
      disabled,
    },
    className
  );

  const resizeCountryCode = (elem) => {
    const value = elem.target.value;
    elem.target.style.width = "calc(" + value.length + "ch + 4px)";
    const wrapper = elem.target.closest(".ui-text-field__wrapper");
    let offset;
    if (wrapper.classList.contains("size__small")) {
      offset = 16;
    } else if (wrapper.classList.contains("size__xlarge")) {
      offset = 20;
    } else {
      offset = 26;
    }
    elem.target.nextSibling.style.paddingLeft =
      "calc(" +
      (value.length <= 2 ? 2 : value.length) +
      "ch + " +
      offset +
      "px)";
  };

  return (
    <Box className={wrapperClasses}>
      <Box is={"label"}>
        <Text className={"ui-text-field__label"} scale={"subhead"}>
          {label}
        </Text>
      </Box>
      <div
        className={"ui-text-field__input-wrapper ui-text-field__phone-input"}
      >
        <Box
          onInput={resizeCountryCode}
          className={"ui-text-field__country-code"}
          placeholder={"+1"}
          ref={phoneInputRef}
          maxLength={4}
          is={"input"}
          disabled={disabled}
        />
        <Box
          className={generateInputFieldClasses}
          disabled={disabled}
          is={"input"}
          {...props}
        />
      </div>
      {errorMessage && (
        <div className={"ui-text-field__error"}>
          <Icon icon={Error} className={"ui-text-field__error-icon"} />
          <Text
            className={"ui-text-field__error-text"}
            scale={"subhead"}
            fontFace={"circularSTD"}
          >
            {errorMessage}
          </Text>
        </div>
      )}
    </Box>
  );
};

export default PhoneField;

PhoneField.propTypes = {
  label: PropTypes.string,
  dropDown: PropTypes.bool,
  size: PropTypes.oneOf([
    "small",
    "medium",
    "large",
    "xlarge",
    "huge",
    "massive",
  ]),
};

PhoneField.defaultProps = {
  size: "medium",
};
