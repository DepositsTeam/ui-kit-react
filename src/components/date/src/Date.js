import React from "react";
import Box from "../../box";
import PropTypes from "prop-types";
import classNames from "../../../utils/classNames";
import Icon from "../../icon";
import ChevronFilledDown from "../../icons/ChevronFilledDown";
import Error from "../../icons/Error";
import Text from "../../text";
import "./date.css";
import TextField from "../../text-field/src/TextField";
import Close from "../../icons/Close";
import Button from "../../button/src/Button";
import { Primary } from "../../button/stories/Button.stories";

const Date = ({  
  dateTitle,
  dayHolder,
  monthHolder,
  yearHolder,
  dayLabel,
  monthLabel,
  yearLabel,
  leftIcon,
  size,
  dropDown,
  rightIcon,
  errorMessage,
  inputClassName,
  className,
  ...props }) => {
  const generateInputFieldClasses = classNames(
    {
      "ui-date": true,
      "ui-modalSignature": true,
      // "has-error": errorMessage,
      // "has-left-icon": leftIcon,
      // "has-right-icon": dropDown || rightIcon,
    },
    inputClassName
  );

  const wrapperClasses = classNames(
    [`size__${size}`, "ui-date__wrapper", "ui-date-signature__wrapper"],
    className
  );

  return (
      <Box className={"ui-date"}>

      <div className={"ui-date__header"}>
        <Text className={"ui-date__title"} >
          {dateTitle}
        </Text>

      <Icon className={"ui-date__close"} icon={Close}/>
      </div>
     
      <div className={"ui-date__field"}>

        <Box className="ui-date__all">
          <div className="ui-date__day">
            <Box is={"label"}>
                <Text className={"ui-text-field__label"} scale={"subhead"}>
                    {dayLabel}
                </Text>
            </Box>

            <Box className={"ui-date__inputfield"} is={"input"} {...props} />
          </div>

        <div className="ui-date__month">
            <Box is={"label"}>
                <Text className={"ui-text-field__label"} scale={"subhead"}>
                    {monthLabel}
                </Text>
            </Box>

            <Box className={"ui-date__inputfield"} is={"input"} {...props} />
        </div>

        <div>
            <Box is={"label"}>
                <Text className={"ui-text-field__label"} scale={"subhead"}>
                    {yearLabel}
                </Text>
            </Box>

            <Box className={"ui-date__inputfield"} is={"input"} {...props} />
        </div>

        </Box>

      </div>
    </Box>
  );
};

Date.propTypes = {
  label: PropTypes.string,
  errorMessage: PropTypes.string,
};

export default Date;
