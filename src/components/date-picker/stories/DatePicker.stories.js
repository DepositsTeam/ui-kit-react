import React from "react";
import DatePicker from "../src/DatePicker";
import Search from "../../icons/Search";

export default {
  title: "Date Picker",
  component: DatePicker,
};

const Template = (props) => <DatePicker {...props} />;

export const Default = Template.bind({});
Default.args = {
  label: "DatePicker Title",
  placeholder: "Input placeholder",
};

export const Disabled = Template.bind({});
Disabled.args = {
  placeholder: "Input placeholder",
  label: "DatePicker Title",
  disabled: true,
};

export const Error = Template.bind({});
Error.args = {
  placeholder: "Input placeholder",
  label: "DatePicker Title",
  errorMessage: "Error Message",
};

export const LeftIcon = Template.bind({});
LeftIcon.args = {
  placeholder: "Input placeholder",
  label: "DatePicker Title",
  leftIcon: Search,
};

export const DropDown = Template.bind({});
DropDown.args = {
  placeholder: "Input placeholder",
  label: "DatePicker Title",
  dropDown: true,
};

export const LeftIconAndDropDown = Template.bind({});
LeftIconAndDropDown.args = {
  placeholder: "Input placeholder",
  label: "DatePicker Title",
  dropDown: true,
  leftIcon: Search,
};


export const SizeMassive = Template.bind({});
SizeMassive.args = {
  placeholder: "Input placeholder",
  label: "DatePicker Title",
  dropDown: true,
  leftIcon: Search,
  size: "massive",
};

export const SizeHuge = Template.bind({});
SizeHuge.args = {
  placeholder: "Input placeholder",
  label: "DatePicker Title",
  dropDown: true,
  leftIcon: Search,
  size: "huge",
};

export const SizeXLarge = Template.bind({});
SizeXLarge.args = {
  placeholder: "Input placeholder",
  label: "DatePicker Title",
  dropDown: true,
  leftIcon: Search,
  size: "xlarge",
};

export const SizeLarge = Template.bind({})
SizeLarge.args = {
  placeholder: "Input placeholder",
  label: "DatePicker Title",
  dropDown: true,
  leftIcon: Search,
  size: "large",
}

export const SizeMedium = Template.bind({})
SizeMedium.args = {
  placeholder: "Input placeholder",
  label: "DatePicker Title",
  dropDown: true,
  leftIcon: Search,
  size: "medium",
}

export const SizeSmall = Template.bind({})
SizeSmall.args = {
  placeholder: "Input placeholder",
  label: "DatePicker Title",
  dropDown: true,
  leftIcon: Search,
  size: "small",
}

