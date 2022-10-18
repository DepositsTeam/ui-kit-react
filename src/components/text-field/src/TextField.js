import React from "react";
import "../../../scss/textfield.scss";
import Box from "../../box";
import Text from "../../text";
import PropTypes from "prop-types";
import Icon from "../../icon";
import ChevronFilledDown from "../../icons/ChevronFilledDown";
import Error from "../../icons/Error";
import classNames from "../../../utils/classNames";

const TextField = ({
  label,
  leftIcon,
  size,
  dropDown,
  rightIcon,
  errorMessage,
  inputClassName,
  className,
  isHookForm,
  isFormik,
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

  const wrapperClasses = classNames(
    [`size__${size}`, "ui-text-field__wrapper"],
    className
  );

  return (
    <Box className={wrapperClasses}>
      <Box is={"label"}>
        <Text className={"ui-text-field__label"} scale={"subhead"}>
          {label}
        </Text>
      </Box>
      <Box className={"ui-text-field__input-wrapper"}>
        {leftIcon && (
          <Icon icon={leftIcon} className={"ui-text-field__left-icon"} />
        )}
        <Box className={generateInputFieldClasses} is={"input"} {...props} />
        {(dropDown || rightIcon) && (
          <Icon
            icon={dropDown ? ChevronFilledDown : rightIcon}
            className={"ui-text-field__right-icon"}
          />
        )}
      </Box>
      {errorMessage && (
        <Box className={"ui-text-field__error"}>
          <Icon icon={Error} className={"ui-text-field__error-icon"} />
          <Text
            className={"ui-text-field__error-text"}
            scale={"subhead"}
            fontFace={"circularSTD"}
          >
            {errorMessage}
          </Text>
        </Box>
      )}
    </Box>
  );
};

export default TextField;

TextField.propTypes = {
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
  errorMessage: PropTypes.string,
};

TextField.defaultProps = {
  size: "medium",
};
