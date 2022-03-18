import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Box from "../../box";

const DatePickerComp  = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div>
      <DatePicker selected={startDate} onChange={(date:Date) => setStartDate(date)} />
    </div>
    
  );
};


export default DatePickerComp;
