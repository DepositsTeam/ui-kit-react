import React, { forwardRef, useState, useLayoutEffect } from "react";
import "../../scss/textfield.scss";
import Box from "../box";
import Text from "../text";
import PropTypes from "prop-types";
import Icon from "../icon";
import ChevronFilledDown from "../icons/ChevronFilledDown.jsx";
import Error from "../icons/Error.jsx";
import classNames from "../../utils/classNames";
import inputPropTypes, { defaultProps } from "../../utils/inputPropTypes";
import { allowOnlyNumbers } from "../../utils/allowOnlyNumbers";
import EyeFilledIcon from "../icons/filled/EyeFilledIcon.jsx";
import NoEyeFilledIcon from "../icons/filled/NoEyeFilledIcon.jsx";
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
      onKeyUp,
      onKeyDown,
      onKeyPress,
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
      onFocus,
      ...props
    },
    ref
  ) => {
    const [trueInternalValue, setTrueInternalValue] = useState("");
    const [formattedSSN, setFormattedSSN] = useState(["", ""]);
    const [localType, setLocalType] = useState("text");
    const [focused, setFocused] = useState(false);

    useLayoutEffect(() => {
      if (!focused && value) {
        if (ssn) {
          setTrueInternalValue(formatSSN(value)[0]);
        } else if (currency) {
          const regex = /[0-9$,\.]/;
          if (regex.test(value)) {
            const strippedValue = value.replaceAll("$", "").replaceAll(",", "");
            setTrueInternalValue(`$${number_format(strippedValue, 2)}`);
          }
        } else if (percentage) {
          const regex = /[0-9%\.]/;
          if (regex.test(value)) {
            const parsedValue = parseFloat(value.replaceAll("%", ""));
            const renderedValue =
              parsedValue < 0 ? 0 : parsedValue > 100 ? 100 : parsedValue;
            const newValue = `${renderedValue}%`;
            setTrueInternalValue(newValue);
          }
        } else {
          setTrueInternalValue(value);
        }
        // setInitialized(true);
      } else {
        if (!ssn && !currency && !percentage) {
          setTrueInternalValue(value);
        }
      }
    }, [currency, percentage, ssn, value]);

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
      if (onKeyUp && typeof onKeyUp === "function") {
        onKeyUp(e);
      }
      return handleKeyEvents(e);
    };

    const handleKeydown = (e) => {
      if (onKeyDown && typeof onKeyDown === "function") {
        onKeyDown(e);
      }
      return handleKeyEvents(e);
    };

    const handleKeypress = (e) => {
      if (onKeyPress && typeof onKeyPress === "function") {
        onKeyPress(e);
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

    const emitValue = (e, val = undefined) => {
      if (onChange && typeof onChange === "function") {
        const clonedE = Object.assign({}, e);
        clonedE.target.value = val === undefined ? trueInternalValue : val;

        onChange(clonedE);
      }
      if (onInput && typeof onInput === "function") {
        const clonedE = Object.assign({}, e);
        clonedE.target.value = val === undefined ? trueInternalValue : val;
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
        // alert("I actually got here " + e.target.value);
        setTrueInternalValue(e.target.value);
        emitValue(e, e.target.value);
      }
    };

    const handleBlurEvents = (e) => {
      setFocused(false);
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
            emitOnlyCurrencyValue
              ? number_format(
                  e.target.value.replaceAll("$", "").replaceAll(",", ""),
                  2
                )
              : newValue
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
      setFocused(true);
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
      if (onFocus && typeof onFocus === "function") {
        onFocus(e);
      }
    };

    return (
      <Box className={wrapperClasses}>
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
            ref={ref}
            disabled={disabled}
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
  leftIcon: PropTypes.oneOfType([PropTypes.element, PropTypes.object]),
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
  onKeyPress: PropTypes.func,
  onKeyDown: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onKeyUp: PropTypes.func,
  leftIconComponent: PropTypes.node,
  rightIconComponent: PropTypes.node,
  onlyNumbers: PropTypes.bool,
  percentage: PropTypes.bool,
};

TextField.defaultProps = {
  ...defaultProps,
  type: "text",
};
