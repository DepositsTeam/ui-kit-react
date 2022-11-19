import React from "react";
import "../../scss/textfield.css";
import "./SelectField.scss";
import classNames from "../../utils/classNames";
import Box from "../box";
import Text from "../text";
import Icon from "../icon";
import ChevronFilledDown from "../icons/ChevronFilledDown";
import Error from "../icons/Error";
import PropTypes from "prop-types";
import keyGen from "../../utils/keyGen";

const SelectField = ({
  label,
  leftIcon,
  size,
  dropDown,
  rightIcon,
  errorMessage,
  inputClassName,
  options,
  className,
  ...props
}) => {
  const generateInputFieldClasses = classNames(
    {
      "ui-text-field__input": true,
      "has-error": errorMessage,
      "has-left-icon": leftIcon,
      "has-right-icon": dropDown || rightIcon,
    },
    inputClassName
  );

  const selectWrapperClasses = classNames({
    "ui-text-field__input-wrapper": true,
    "ui-select-field__wrapper": true,
    "has-error": errorMessage,
  });

  const wrapperClasses = classNames(
    [`size__${size}`, "ui-text-field__wrapper"],
    className
  );

  const mappedOptions = options.map((option) => (
    <option
      key={keyGen()}
      value={
        typeof option === "string"
          ? option
          : option.value
          ? option.value
          : option.text
      }
    >
      {typeof option === "string" ? option : option.text}
    </option>
  ));

  return (
    <Box className={wrapperClasses}>
      <Box is={"label"}>
        <Text className={"ui-text-field__label"} scale={"subhead"}>
          {label}
        </Text>
      </Box>
      <div className={selectWrapperClasses}>
        {leftIcon && (
          <Icon icon={leftIcon} className={"ui-text-field__left-icon"} />
        )}
        <Box className={generateInputFieldClasses} is={"select"} {...props}>
          {mappedOptions}
        </Box>

        <Icon
          icon={ChevronFilledDown}
          className={"ui-text-field__right-icon"}
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

export default SelectField;

SelectField.propTypes = {
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
  options: PropTypes.array,
};

SelectField.defaultProps = {
  size: "medium",
  options: ["Item 1", "Item 2", "item 3"],
};
