import React, { useState } from "react";
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
import DatePickerComp from "./DatePickerComp";

const Date = ({  
  dateTitle,
  inputClassName,
  className,
  ...props }) => {

  return (
      <Box >

        <Text className={"ui-text-field__label"} scale={"subhead"}>
          {dateTitle}
        </Text>

        <DatePickerComp />

    </Box>
  );
};


export default Date;
