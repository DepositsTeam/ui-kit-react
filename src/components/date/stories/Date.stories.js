import React from "react";
import Date from "../src/Date";
import Search from "../../icons/Search";

export default {
  title: "Date Picker",
  component: Date,
};

const Template = (props) => <Date {...props} />;

export const Default = Template.bind({});
Default.args = {
//   placeholder: "Input placeholder",
  dayHolder: "Input placeholder",
  dayLabel: "Day(dd)",
  monthLabel: "Month(mm)",
  yearLabel: "Year(yyyy)",
  dateTitle: "Date Title",
};

