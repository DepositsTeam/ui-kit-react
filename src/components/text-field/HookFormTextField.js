import React from "react";
import "../../scss/textfield.css";
import Box from "../box";
import Text from "../text";
import Icon from "../icon";
import ChevronFilledDown from "../icons/ChevronFilledDown";
import Error from "../icons/Error";
import classNames from "../../utils/classNames";
import { propTypes, defaultProps } from "./textFieldProps";

const HookFormTextField = React.forwardRef(
  (
    {
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
      onChange,
      onBlur,
      name,
      ...props
    },
    ref
  ) => {
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
          <Box
            className={generateInputFieldClasses}
            is={"input"}
            {...props}
            ref={ref}
            onChange={onChange}
            onBlur={onBlur}
            name={name}
          />
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
  }
);

export default HookFormTextField;

HookFormTextField.propTypes = { ...propTypes };

HookFormTextField.defaultProps = { ...defaultProps };
