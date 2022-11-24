import React, { forwardRef } from "react";
import "../../scss/textfield.css";
import Box from "../box";
import Text from "../text";
import PropTypes from "prop-types";
import Icon from "../icon";
import ChevronFilledDown from "../icons/ChevronFilledDown";
import Error from "../icons/Error";
import classNames from "../../utils/classNames";
import inputPropTypes, { defaultProps } from "../../utils/inputPropTypes";

const TextField = forwardRef(
  (
    {
      label,
      labelComponent,
      leftIcon,
      size,
      dropDown,
      rightIcon,
      errorMessage,
      inputClassName,
      className,
      isHookForm,
      isFormik,
      onLeftIconClick,
      onRightIconClick,
      invisible,
      disabled,
      inputClass,
      oneCharWide,
      labelClass,
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
        invisible,
        disabled,
        oneCharWide,
        [inputClass]: inputClass,
      },
      inputClassName
    );

    const wrapperClasses = classNames(
      [`size__${size}`, "ui-text-field__wrapper"],
      className
    );

    return (
      <Box className={wrapperClasses} ref={ref}>
        {label &&
          !invisible &&
          (typeof label === "string" ? (
            <Box is={"label"}>
              <Text
                className={className({
                  "ui-text-field__label": true,
                  [labelClass]: labelClass,
                })}
                scale={"subhead"}
              >
                {label}
              </Text>
            </Box>
          ) : (
            label
          ))}

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
  }
);

export default TextField;

TextField.propTypes = {
  ...inputPropTypes,
  dropDown: PropTypes.bool,
  rightIcon: PropTypes.node,
  leftIcon: PropTypes.node,
  currency: PropTypes.bool,
  emitOnlyCurrencyValue: PropTypes.bool,
  oneCharWide: PropTypes.bool,
  isPassword: PropTypes.bool,
  ssn: PropTypes.bool,
  maxlength: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  type: PropTypes.string,
  inputClass: PropTypes.string,
  onChange: PropTypes.func,
  onInput: PropTypes.func,
  onKeypress: PropTypes.func,
  onKeydown: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onKeyup: PropTypes.func,
};

TextField.defaultProps = {
  ...defaultProps,
  type: "text",
};
