import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import "../../scss/textfield.scss";
import "./PhoneField.scss";
import Box from "../box";
import Text from "../text";
import PropTypes from "prop-types";
import Icon from "../icon";
import Error from "../icons/Error";
import classNames from "../../utils/classNames";
import { AsYouType, formatIncompletePhoneNumber } from "libphonenumber-js";
import { allowOnlyNumbers } from "../../utils/allowOnlyNumbers";
import countryCodes from "../../utils/country_codes_grouped.json";

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
  isUs,
  labelClass,
  phoneNumber,
  onChange,
  code,
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

  const [internalPhone, setInternalPhone] = useState("");
  const [internalCode, setInternalCode] = useState("+1");
  const [formattedInternalPhone, setFormattedInternalPhone] = useState("");
  const [localErrorMessage, setLocalErrorMessage] = useState("");
  const [codeIsFocused, setCodeIsFocused] = useState(false);

  useEffect(() => {
    if (code) {
      setInternalCode(code);
    }
    if (phoneNumber) {
      setInternalPhone(phoneNumber);
    }
  }, [code, phoneNumber]);

  useEffect(() => {
    if (internalCode.length && !countryCodes[internalCode]) {
      setLocalErrorMessage("Please enter a valid country code");
    } else {
      if (internalPhone && internalPhone.length) {
        if (internalCode && internalCode.length) {
          const asYouType = new AsYouType({
            defaultCountry: countryCodes[internalCode][0],
          });
          asYouType.input(internalPhone);
          if (asYouType.getNumber() && asYouType.getNumber().isPossible()) {
            setLocalErrorMessage("");
          } else {
            setLocalErrorMessage("Please enter a valid phone number");
          }
        } else {
          setLocalErrorMessage("");
        }
      } else {
        setLocalErrorMessage("");
      }
    }
  }, [internalCode, internalPhone]);

  useEffect(() => {
    if (onChange && typeof onChange === "function") {
      onChange({
        code: internalCode,
        phoneNumber: internalPhone,
      });
    }
  }, [internalCode, internalPhone]);

  useEffect(() => {
    if (internalCode && countryCodes[internalCode]) {
      setFormattedInternalPhone(
        new AsYouType({
          defaultCountry: countryCodes[internalCode][0],
        }).input(internalPhone)
      );
    } else {
      setFormattedInternalPhone(formatIncompletePhoneNumber(internalPhone));
    }
  }, [internalPhone, internalCode]);

  const updateInternalPhone = (e) => {
    setInternalPhone(e.target.value);
  };
  const updateInternalCode = (e) => {
    setInternalCode(e.target.value);
  };

  const changeFocusStyle = (val) => setCodeIsFocused(val);

  const generateInputFieldClasses = classNames(
    {
      "ui-text-field__input": true,
      "has-error": errorMessage || localErrorMessage,
      "has-left-icon": leftIcon,
      "has-right-icon": dropDown || rightIcon,
      focus: codeIsFocused,
    },
    inputClassName
  );

  const wrapperClasses = classNames(
    {
      [`size__${size}`]: true,
      "ui-text-field__wrapper": true,
      "has-error": errorMessage || localErrorMessage,
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
      {label && (
        <Box is={"label"}>
          <Text
            className={classNames({
              "ui-text-field__label": true,
              labelClass,
            })}
            scale={"subhead"}
          >
            {label}
          </Text>
        </Box>
      )}
      <div
        className={
          "ui-text-field__input-wrapper ui-text-field__phone-input ui-text-field__phone-input"
        }
      >
        <Box
          onInput={resizeCountryCode}
          className={"ui-text-field__country-code"}
          placeholder={"+1"}
          ref={phoneInputRef}
          maxLength={4}
          is={"input"}
          disabled={disabled || isUs}
          value={internalCode}
          onChange={updateInternalCode}
          onFocus={() => changeFocusStyle(true)}
          onBlur={() => changeFocusStyle(false)}
        />
        <Box
          className={generateInputFieldClasses}
          disabled={disabled}
          is={"input"}
          {...props}
          value={formattedInternalPhone}
          onChange={updateInternalPhone}
          onKeyPress={allowOnlyNumbers}
        />
      </div>
      {(errorMessage || localErrorMessage) && (
        <div className={"ui-text-field__error"}>
          <Icon icon={Error} className={"ui-text-field__error-icon"} />
          <Text
            className={"ui-text-field__error-text"}
            scale={"subhead"}
            fontFace={"circularSTD"}
          >
            {localErrorMessage ? localErrorMessage : errorMessage}
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
  isUs: PropTypes.bool,
  phoneNumber: PropTypes.string,
  code: PropTypes.string,
  labelClass: PropTypes.string,
  onChange: PropTypes.func,
};

PhoneField.defaultProps = {
  size: "huge",
};
