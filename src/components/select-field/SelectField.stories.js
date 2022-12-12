import React, { useState, useEffect } from "react";
import SelectField from "./index";
import Search from "../icons/Search";

export default {
  title: "Forms/Select Field",
  component: SelectField,
};

const Template = (props) => <SelectField {...props} />;

const TemplateWithVal = (props) => {
  const [value, setValue] = useState("");

  useEffect(() => {

  }, [value]);

  const changeValue = (val) => {
    // alert(val);
    setValue(val);
  };

  return <SelectField {...props} value={value} onChange={changeValue} />;
};

export const Default = Template.bind({});
Default.args = {
  placeholder: "Select a value",
  label: "Form Label",
};

export const Disabled = Template.bind({});
Disabled.args = {
  placeholder: "Select a value",
  label: "Form Label",
  disabled: true,
};

export const Error = Template.bind({});
Error.args = {
  placeholder: "Select a value",
  label: "Form Label",
  errorMessage: "Error Message",
};

export const LeftIcon = Template.bind({});
LeftIcon.args = {
  placeholder: "Select a value",
  label: "Form Label",
  leftIcon: Search,
};

export const DropDown = Template.bind({});
DropDown.args = {
  placeholder: "Select a value",
  label: "Form Label",
  dropDown: true,
};

export const LeftIconAndDropDown = Template.bind({});
LeftIconAndDropDown.args = {
  placeholder: "Select a value",
  label: "Form Label",
  dropDown: true,
  leftIcon: Search,
};

export const SizeMassive = Template.bind({});
SizeMassive.args = {
  placeholder: "Select a value",
  label: "Form Label",
  dropDown: true,
  leftIcon: Search,
  size: "massive",
};

export const SizeHuge = Template.bind({});
SizeHuge.args = {
  placeholder: "Select a value",
  label: "Form Label",
  dropDown: true,
  leftIcon: Search,
  size: "huge",
};

export const SizeXLarge = Template.bind({});
SizeXLarge.args = {
  placeholder: "Select a value",
  label: "Form Label",
  dropDown: true,
  leftIcon: Search,
  size: "xlarge",
};

export const SizeLarge = Template.bind({});
SizeLarge.args = {
  placeholder: "Select a value",
  label: "Form Label",
  dropDown: true,
  leftIcon: Search,
  size: "large",
};

export const SizeMedium = Template.bind({});
SizeMedium.args = {
  placeholder: "Select a value",
  label: "Form Label",
  dropDown: true,
  leftIcon: Search,
  size: "medium",
};

export const SizeSmall = Template.bind({});
SizeSmall.args = {
  placeholder: "Select a value",
  label: "Form Label",
  dropDown: true,
  leftIcon: Search,
  size: "small",
};

export const Options = TemplateWithVal.bind({});
Options.args = {
  placeholder: "Select a value",
  label: "Select Label",
  dropDown: true,
  leftIcon: Search,
  options: [
    {
      text: "Option 1",
      value: "option_1",
    },
    {
      text: "Option 2",
      value: "option_2",
    },
    {
      text: "Option 3",
      value: "option_3",
    },
    {
      text: "Option 4",
      value: "option_4",
    },
  ],
};
