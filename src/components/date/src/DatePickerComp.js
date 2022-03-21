import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./date.css";
import Box from "../../box";
import classNames from "../../../utils/classNames";

const DatePickerComp  = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <Box >
      <DatePicker wrapperClassName="datePicker" selected={startDate} onChange={(date:Date) => setStartDate(date)} />
    </Box>
    
  );
};


export default DatePickerComp;
