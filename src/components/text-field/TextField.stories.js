import React from "react";
import TextField from "./index";
import Search from "../icons/Search";
import Text from "../text";
import ThemeProvider from "../providers/ThemeProvider";
import DarkModeProvider from "../providers/DarkModeProvider";

export default {
  title: "Forms/Text Field",
  component: TextField,
};

const Template = (args) => (
  <ThemeProvider>
    <TextField {...args} />
  </ThemeProvider>
);

const DarkModeTemplate = (args) => (
  <ThemeProvider>
    <div style={{ padding: "3em", background: "#121A26" }}>
      <DarkModeProvider darkMode={true}>
        <TextField {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  placeholder: "Input placeholder",
  label: "Form Label",
};

export const Ssn = Template.bind({});
Ssn.args = {
  placeholder: "Input placeholder",
  label: "Form Label",
  ssn: true,
};

export const Currency = Template.bind({});
Currency.args = {
  placeholder: "Input placeholder",
  label: "Form Label",
  currency: true,
};

export const Percentage = Template.bind({});
Percentage.args = {
  placeholder: "Input placeholder",
  label: "Form Label",
  percentage: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  placeholder: "Input placeholder",
  label: "Form Label",
  disabled: true,
  background: "red",
};

export const Error = Template.bind({});
Error.args = {
  placeholder: "Input placeholder",
  label: "Form Label",
  errorMessage: "Error Message",
};

export const LeftIcon = Template.bind({});
LeftIcon.args = {
  placeholder: "Input placeholder",
  label: "Form Label",
  leftIcon: Search,
};

export const DropDown = Template.bind({});
DropDown.args = {
  placeholder: "Input placeholder",
  label: "Form Label",
  dropDown: true,
};

export const LeftIconAndDropDown = Template.bind({});
LeftIconAndDropDown.args = {
  placeholder: "Input placeholder",
  label: "Form Label",
  dropDown: true,
  leftIcon: Search,
};

export const SizeMassive = Template.bind({});
SizeMassive.args = {
  placeholder: "Input placeholder",
  label: "Form Label",
  dropDown: true,
  leftIcon: Search,
  size: "massive",
};

export const SizeHuge = Template.bind({});
SizeHuge.args = {
  placeholder: "Input placeholder",
  label: "Form Label",
  dropDown: true,
  leftIcon: Search,
  size: "huge",
};

export const SizeXLarge = Template.bind({});
SizeXLarge.args = {
  placeholder: "Input placeholder",
  label: "Form Label",
  dropDown: true,
  leftIcon: Search,
  size: "xlarge",
};

export const SizeLarge = Template.bind({});
SizeLarge.args = {
  placeholder: "Input placeholder",
  label: "Form Label",
  dropDown: true,
  leftIcon: Search,
  size: "large",
};

export const SizeMedium = Template.bind({});
SizeMedium.args = {
  placeholder: "Input placeholder",
  label: "Form Label",
  dropDown: true,
  leftIcon: Search,
  size: "medium",
};

export const SizeSmall = Template.bind({});
SizeSmall.args = {
  placeholder: "Input placeholder",
  label: "Form Label",
  dropDown: true,
  leftIcon: Search,
  size: "small",
};

export const CustomLabel = Template.bind({});
CustomLabel.args = {
  placeholder: "Input placeholder",
  label: (
    <Text color={"red"} fontSize={"29"} fontWeight={"700"}>
      I am a random text
    </Text>
  ),
};

export const DarkModeDefault = DarkModeTemplate.bind({});
DarkModeDefault.args = {
  placeholder: "Input placeholder",
  label: "Form Label",
};

export const DarkModeSsn = DarkModeTemplate.bind({});
DarkModeSsn.args = {
  placeholder: "Input placeholder",
  label: "Form Label",
  ssn: true,
};

export const DarkModeCurrency = DarkModeTemplate.bind({});
DarkModeCurrency.args = {
  placeholder: "Input placeholder",
  label: "Form Label",
  currency: true,
};

export const DarkModePercentage = DarkModeTemplate.bind({});
DarkModePercentage.args = {
  placeholder: "Input placeholder",
  label: "Form Label",
  percentage: true,
};

export const DarkModeDisabled = DarkModeTemplate.bind({});
DarkModeDisabled.args = {
  placeholder: "Input placeholder",
  label: "Form Label",
  disabled: true,
  background: "red",
};

export const DarkModeError = DarkModeTemplate.bind({});
DarkModeError.args = {
  placeholder: "Input placeholder",
  label: "Form Label",
  errorMessage: "Error Message",
};

export const DarkModeLeftIcon = DarkModeTemplate.bind({});
DarkModeLeftIcon.args = {
  placeholder: "Input placeholder",
  label: "Form Label",
  leftIcon: Search,
};

export const DarkModeDropDown = DarkModeTemplate.bind({});
DarkModeDropDown.args = {
  placeholder: "Input placeholder",
  label: "Form Label",
  dropDown: true,
};

export const DarkModeLeftIconAndDropDown = DarkModeTemplate.bind({});
DarkModeLeftIconAndDropDown.args = {
  placeholder: "Input placeholder",
  label: "Form Label",
  dropDown: true,
  leftIcon: Search,
};

export const DarkModeSizeMassive = DarkModeTemplate.bind({});
DarkModeSizeMassive.args = {
  placeholder: "Input placeholder",
  label: "Form Label",
  dropDown: true,
  leftIcon: Search,
  size: "massive",
};

export const DarkModeSizeHuge = DarkModeTemplate.bind({});
DarkModeSizeHuge.args = {
  placeholder: "Input placeholder",
  label: "Form Label",
  dropDown: true,
  leftIcon: Search,
  size: "huge",
};

export const DarkModeSizeXLarge = DarkModeTemplate.bind({});
DarkModeSizeXLarge.args = {
  placeholder: "Input placeholder",
  label: "Form Label",
  dropDown: true,
  leftIcon: Search,
  size: "xlarge",
};

export const DarkModeSizeLarge = DarkModeTemplate.bind({});
DarkModeSizeLarge.args = {
  placeholder: "Input placeholder",
  label: "Form Label",
  dropDown: true,
  leftIcon: Search,
  size: "large",
};

export const DarkModeSizeMedium = DarkModeTemplate.bind({});
DarkModeSizeMedium.args = {
  placeholder: "Input placeholder",
  label: "Form Label",
  dropDown: true,
  leftIcon: Search,
  size: "medium",
};

export const DarkModeSizeSmall = DarkModeTemplate.bind({});
DarkModeSizeSmall.args = {
  placeholder: "Input placeholder",
  label: "Form Label",
  dropDown: true,
  leftIcon: Search,
  size: "small",
};

export const DarkModeCustomLabel = DarkModeTemplate.bind({});
DarkModeCustomLabel.args = {
  placeholder: "Input placeholder",
  label: (
    <Text color={"red"} fontSize={"29"} fontWeight={"700"}>
      I am a random text
    </Text>
  ),
};
