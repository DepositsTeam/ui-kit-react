import React, { forwardRef, useState, useEffect, useLayoutEffect } from "react";
import "../../scss/textfield.scss";
import Box from "../box";
import Text from "../text";
import PropTypes from "prop-types";
import Icon from "../icon";
import ChevronFilledDown from "../icons/ChevronFilledDown";
import Error from "../icons/Error";
import classNames from "../../utils/classNames";
import inputPropTypes, { defaultProps } from "../../utils/inputPropTypes";
import { allowOnlyNumbers } from "../../utils/allowOnlyNumbers";
import EyeFilledIcon from "../icons/filled/EyeFilledIcon";
import NoEyeFilledIcon from "../icons/filled/NoEyeFilledIcon";
import { formatSSN } from "../../utils/formatSSN";
import number_format from "../../utils/number_format";
import { formatPercentage } from "../../utils/formatPercentage";

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
      onlyNumbers,
      showError,
      onKeyup,
      onKeydown,
      onKeypress,
      onChange,
      onInput,
      isPassword,
      emitOnlyCurrencyValue,
      currency,
      type,
      ssn,
      percentage,
      maxLength,
      value,
      ...props
    },
    ref
  ) => {
    const [trueInternalValue, setTrueInternalValue] = useState("");
    const [formattedSSN, setFormattedSSN] = useState(["", ""]);
    const [localType, setLocalType] = useState("text");
    const [initialized, setInitialized] = useState(false);

    useLayoutEffect(() => {
      if (!initialized) {
        if (ssn) {
          setTrueInternalValue(formatSSN(value)[0]);
        } else if (currency) {
          const strippedValue = value.replaceAll("$", "").replaceAll(",", "");
          setTrueInternalValue(`$${number_format(strippedValue)}`);
        } else if (percentage) {
          const parsedValue = parseFloat(value.replaceAll("%", ""));
          const renderedValue =
            parsedValue < 0 ? 0 : parsedValue > 100 ? 100 : parsedValue;
          const newValue = `${renderedValue}%`;
          setTrueInternalValue(newValue);
        } else {
          setTrueInternalValue(value);
        }
        setInitialized(true);
      }
    }, []);

    useLayoutEffect(() => {}, [trueInternalValue]);

    useLayoutEffect(() => {
      if (ssn && formattedSSN) {
        setTrueInternalValue(formattedSSN[0]);
      }
    }, [formattedSSN, ssn]);

    useLayoutEffect(() => {
      setLocalType(isPassword ? "password" : type);
    }, [isPassword, type]);

    const generateInputFieldClasses = classNames(
      {
        "ui-text-field__input": true,
        "has-error": errorMessage || showError,
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

    const handleKeyEvents = (e) => {
      if (onlyNumbers || ssn) {
        return allowOnlyNumbers(e);
      }
    };

    const handleKeyup = (e) => {
      if (onKeyup && typeof onKeyup === "function") {
        onKeyup(e);
      }
      return handleKeyEvents(e);
    };

    const handleKeydown = (e) => {
      if (onKeydown && typeof onKeydown === "function") {
        onKeydown(e);
      }
      return handleKeyEvents(e);
    };

    const handleKeypress = (e) => {
      if (onKeypress && typeof onKeypress === "function") {
        onKeypress(e);
      }
      return handleKeyEvents(e);
    };

    const handleRightIconClick = (e) => {
      if (isPassword) {
        setLocalType(localType === "text" ? "password" : "text");
      }
      if (onRightIconClick && typeof onRightIconClick === "function") {
        onRightIconClick(e);
      }
    };

    const handleLeftIconClick = (e) => {
      if (onLeftIconClick && typeof onLeftIconClick === "function") {
        onLeftIconClick(e);
      }
    };

    const emitValue = (e, val) => {
      if (onChange && typeof onChange === "function") {
        const clonedE = Object.assign({}, e);
        clonedE.target.value = val ? val : trueInternalValue;
        onChange(clonedE);
      }
      if (onInput && typeof onInput === "function") {
        const clonedE = Object.assign({}, e);
        clonedE.target.value = val ? val : trueInternalValue;
        onInput(clonedE);
      }
    };

    const computedMaxLength = ssn ? 11 : maxLength;

    const handleInputEvents = (e) => {
      if (currency) {
        let value = e.target.value,
          temp,
          regex = new RegExp(/^\d*(\.\d{0,2})?$/);
        if (!regex.test(value)) {
          temp = value.split("");
          let tested = "";
          for (let i = 0; i < temp.length; i++) {
            tested += temp[i];
            if (!regex.test(tested)) {
              setTrueInternalValue(tested.substr(0, i));
              emitValue(
                e,
                emitOnlyCurrencyValue
                  ? tested.substr(0, i).replaceAll("$", "").replaceAll(",", "")
                  : tested.substr(0, i)
              );
            }
          }
        } else {
          if (emitOnlyCurrencyValue) {
            const emittedValue = e.target.value
              .replaceAll("$", "")
              .replaceAll(",", "");
            setTrueInternalValue(emittedValue);
            emitValue(e, emittedValue);
          } else {
            setTrueInternalValue(e.target.value);
            emitValue(e, e.target.value);
          }
        }
      } else if (ssn) {
        const formatted = formatSSN(e.target.value);
        setFormattedSSN(formatted);
        emitValue(e, formatted[0]);
      } else if (percentage) {
        try {
          const formattedPercent = formatPercentage(e.target.value);
          setTrueInternalValue(formattedPercent);
          emitValue(e, formattedPercent);
        } catch (err) {
          setTrueInternalValue("");
          emitValue(e, "");
        }
      } else {
        setTrueInternalValue(e.target.value);
        emitValue(e, e.target.value);
      }
    };

    const handleBlurEvents = (e) => {
      if (ssn) {
        setTrueInternalValue(formattedSSN[1]);
        emitValue(e, formattedSSN[0]);
      }
      if (currency) {
        if (e.target.value) {
          const newValue = `$${number_format(
            parseFloat(
              trueInternalValue.split(",").join("").replaceAll("$", "")
            ),
            2
          )}`;
          setTrueInternalValue(newValue);
          emitValue(
            e,
            emitOnlyCurrencyValue ? number_format(e.target.value, 2) : newValue
          );
        } else {
          const newValue = "$0.00";
          setTrueInternalValue(newValue);
          emitValue(e, newValue);
        }
      }
      if (percentage) {
        const value = e.target.value;
        if (value) {
          const parsedValue = parseFloat(value.replaceAll("%", ""));
          const renderedValue =
            parsedValue < 0 ? 0 : parsedValue > 100 ? 100 : parsedValue;
          const newValue = `${renderedValue}%`;
          setTrueInternalValue(newValue);
          emitValue(e, newValue);
        } else {
          const newValue = "0%";
          setTrueInternalValue(newValue);
          emitValue(e, newValue);
        }
      }
    };

    const handleFocusEvents = (e) => {
      if (ssn) {
        setTrueInternalValue(formattedSSN[0]);
        setTimeout(() => {
          e.target.select();
        });
      }
      if (currency) {
        if (props.emitOnlyCurrencyValue) {
          setTrueInternalValue(
            trueInternalValue.replaceAll("$", "").replaceAll(",", "")
          );
          setTimeout(() => {
            e.target.select();
          });
        } else {
          setTrueInternalValue(
            trueInternalValue.replaceAll("$", "").replaceAll(",", "")
          );
          setTimeout(() => {
            e.target.select();
          });
        }
      }
      if (percentage) {
        setTrueInternalValue(e.target.value.replaceAll("%", ""));
        setTimeout(() => {
          e.target.select();
        });
      }
    };

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
            <Icon
              icon={leftIcon}
              className={"ui-text-field__left-icon"}
              onClick={handleLeftIconClick}
            />
          )}
          {leftIconComponent && (
            <Box
              className={"ui-text-field__left-icon"}
              onClick={handleLeftIconClick}
            >
              {leftIconComponent}
            </Box>
          )}

          <Box
            {...props}
            className={generateInputFieldClasses}
            onKeyUp={handleKeyup}
            onKeyDown={handleKeydown}
            onKeyPress={handleKeypress}
            onInput={handleInputEvents}
            onBlur={handleBlurEvents}
            onFocus={handleFocusEvents}
            type={localType}
            is={"input"}
            value={trueInternalValue}
            maxLength={computedMaxLength}
          />
          {isPassword && !rightIcon ? (
            <Icon
              icon={localType === "text" ? EyeFilledIcon : NoEyeFilledIcon}
              className={"ui-text-field__right-icon"}
              onClick={handleRightIconClick}
            />
          ) : (
            (dropDown || rightIcon) &&
            !rightIconComponent && (
              <Icon
                icon={dropDown ? ChevronFilledDown : rightIcon}
                className={"ui-text-field__right-icon"}
                onClick={handleRightIconClick}
              />
            )
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
  onlyNumbers: PropTypes.bool,
  percentage: PropTypes.bool,
};

TextField.defaultProps = {
  ...defaultProps,
  type: "text",
};
