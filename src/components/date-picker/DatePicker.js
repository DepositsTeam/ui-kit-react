import React, { useState, useEffect } from "react";
import "../../scss/textfield.css";
import Box from "../box";
import Text from "../text";
import PropTypes from "prop-types";
import Icon from "../icon";
import CalendarIcon from "../icons/Calendar";
import Error from "../icons/Error";
import classNames from "../../utils/classNames";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const DatePickerField = ({
  label,
  leftIcon,
  size,
  dropDown,
  rightIcon,
  errorMessage,
  inputClassName,
  className,
  dateFormat,
  range,
  noCalendarIcon,
  onChange,
  ...props
}) => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    if (onChange && typeof onChange === "function") {
      onChange(dateRange);
    }
  }, [dateRange]);

  useEffect(() => {
    if (onChange && typeof onChange === "function") {
      onChange(date);
    }
  }, [date]);

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
      {label && (
        <Box is={"label"}>
          <Text className={"ui-text-field__label"} scale={"subhead"}>
            {label}
          </Text>
        </Box>
      )}

      <Box className={"ui-text-field__input-wrapper"}>
        {leftIcon && (
          <Icon icon={leftIcon} className={"ui-text-field__left-icon"} />
        )}
        {range ? (
          <DatePicker
            customInput={
              <Box is={"input"} className={generateInputFieldClasses} />
            }
            selectsRange={true}
            startDate={startDate}
            endDate={endDate}
            onChange={(update) => {
              setDateRange(update);
            }}
            dateFormat={dateFormat}
            {...props}
          />
        ) : (
          <DatePicker
            customInput={
              <Box is={"input"} className={generateInputFieldClasses} />
            }
            selected={date}
            onChange={(date) => setDate(date)}
            dateFormat={dateFormat}
            {...props}
          />
        )}
        {!noCalendarIcon && (
          <Icon icon={CalendarIcon} className={"ui-text-field__right-icon"} />
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
  dateFormat: PropTypes.string,
  noCalendarIcon: PropTypes.bool,
  range: PropTypes.bool,
  onChange: PropTypes.func,
};

DatePickerField.defaultProps = {
  size: "medium",
  dateFormat: "MM-dd-yyyy",
};
