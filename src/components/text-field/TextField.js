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
      leftIconComponent,
      rightIconComponent,
      labelClass,
      ...props
    },
    ref
  ) => {
    const generateInputFieldClasses = classNames(
      {
        "ui-text-field__input": true,
        "has-error": errorMessage,
        "has-left-icon": leftIcon || leftIconComponent,
        "has-right-icon": dropDown || rightIcon || rightIconComponent,
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
        {labelComponent
          ? labelComponent
          : label &&
            !invisible &&
            (typeof label === "string" ? (
              <Box is={"label"}>
                <Text
                  className={classNames({
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
          {leftIcon && !leftIconComponent && (
            <Icon icon={leftIcon} className={"ui-text-field__left-icon"} />
          )}
          {leftIconComponent && (
            <Box className={"ui-text-field__left-icon"}>
              {leftIconComponent}
            </Box>
          )}

          <Box className={generateInputFieldClasses} is={"input"} {...props} />
          {(dropDown || rightIcon) && !rightIconComponent && (
            <Icon
              icon={dropDown ? ChevronFilledDown : rightIcon}
              className={"ui-text-field__right-icon"}
            />
          )}
          {rightIconComponent}
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
  rightIcon: PropTypes.element,
  leftIcon: PropTypes.element,
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
  leftIconComponent: PropTypes.node,
  rightIconComponent: PropTypes.node,
};

TextField.defaultProps = {
  ...defaultProps,
  type: "text",
};
