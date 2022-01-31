import React from "react";
import "./textfield.css";
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
      <div className={"ui-text-field__input-wrapper"}>
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
};

TextField.defaultProps = {};
