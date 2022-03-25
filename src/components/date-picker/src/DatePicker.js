import React, { useState } from "react";
import "./DatePicker.css";
import "./Calendar.css";
import Box from "../../box";
import Text from "../../text";
import PropTypes from "prop-types";
import Icon from "../../icon";
import CalendarIcon from "../../icons/Calendar";
import Error from "../../icons/Error";
import classNames from "../../../utils/classNames";
import DatePickerDependency from "react-date-picker/dist/entry.nostyle";

const DatePickerField = ({
  label,
  leftIcon,
  size,
  dropDown,
  rightIcon,
  errorMessage,
  inputClassName,
  className,
  format,
  noCalendarIcon,
  ...props
}) => {
  const [value, onChange] = useState(new Date());
  const generateInputFieldClasses = classNames(
    {
      "ui-text-field__input": true,
      "has-error": errorMessage,
      "has-left-icon": leftIcon,
      "has-right-icon": dropDown || rightIcon,
      "ui-date-picker": true,
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
        <div className={generateInputFieldClasses}>
          <DatePickerDependency
            format={"MM-dd-yyyy"}
            onChange={onChange}
            value={value}
            calendarIcon={null}
            {...props}
            clearIcon={null}
          />
        </div>
        {!noCalendarIcon && (
          <Icon icon={CalendarIcon} className={"ui-text-field__right-icon"} />
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

export default DatePickerField;

DatePickerField.propTypes = {
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
  format: PropTypes.string,
  noCalendarIcon: PropTypes.bool,
};

DatePickerField.defaultProps = {
  size: "medium",
  format: "MM-dd-yyyy",
};
