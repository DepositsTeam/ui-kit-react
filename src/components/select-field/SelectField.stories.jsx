import SelectField from "./SelectField.jsx";
import DarkModeProvider from "../providers/DarkModeProvider.jsx";
import ThemeProvider from "../providers/ThemeProvider.jsx";
import SearchIcon from "../icons/Search.jsx";
import { useState } from "react";
import Box from "../box";

export default {
  title: "Forms/Select Field",
  component: SelectField,
  argTypes: {},
};

const Template = (args) => (
  <ThemeProvider>
    <SelectField {...args} />
  </ThemeProvider>
);

const DarkModeTemplate = (args) => (
  <ThemeProvider>
    <div style={{ padding: "3em", background: "#121A26" }}>
      <DarkModeProvider darkMode={true}>
        <SelectField {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>
);

const StatefulTemplate = (args) => {
  const [value, setValue] = useState("");

  return (
    <ThemeProvider>
      <SelectField {...args} onChange={(value) => setValue(value)} />
      <Box is={"span"}>{value}</Box>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});
Default.args = {
  label: "Form Label",
};

export const DarkModeDefault = DarkModeTemplate.bind({});
DarkModeDefault.args = {
  label: "Form Label",
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Form Label",
  disabled: true,
};

export const DarkModeDisabled = DarkModeTemplate.bind({});
DarkModeDisabled.args = {
  label: "Form Label",
  disabled: true,
};

export const Error = Template.bind({});
Error.args = {
  label: "Form Label",
  errorMessage: "Error Message",
};

export const DarkModeError = DarkModeTemplate.bind({});
DarkModeError.args = {
  label: "Form Label",
  errorMessage: "Error Message",
};

export const LeftIcon = Template.bind({});
LeftIcon.args = {
  label: "Form Label",
  leftIcon: SearchIcon,
};

export const DarkModeLeftIcon = DarkModeTemplate.bind({});
DarkModeLeftIcon.args = {
  label: "Form Label",
  leftIcon: SearchIcon,
};

export const DropDown = Template.bind({});
DropDown.args = {
  label: "Form Label",
  dropDown: true,
};

export const DarkModeDropDown = DarkModeTemplate.bind({});
DarkModeDropDown.args = {
  label: "Form Label",
  dropDown: true,
};

export const LeftIconAndDropDown = Template.bind({});
LeftIconAndDropDown.args = {
  label: "Form Label",
  dropDown: true,
  leftIcon: SearchIcon,
};

export const DarkModeLeftIconAndDropDown = DarkModeTemplate.bind({});
DarkModeLeftIconAndDropDown.args = {
  label: "Form Label",
  dropDown: true,
  leftIcon: SearchIcon,
};

export const SizeMassive = Template.bind({});
SizeMassive.args = {
  label: "Form Label",
  dropDown: true,
  leftIcon: SearchIcon,
  size: "massive",
};

export const DarkModeSizeMassive = DarkModeTemplate.bind({});
DarkModeSizeMassive.args = {
  label: "Form Label",
  dropDown: true,
  leftIcon: SearchIcon,
  size: "massive",
};

export const SizeHuge = Template.bind({});
SizeHuge.args = {
  label: "Form Label",
  dropDown: true,
  leftIcon: SearchIcon,
  size: "huge",
};

export const DarkModeSizeHuge = DarkModeTemplate.bind({});
DarkModeSizeHuge.args = {
  label: "Form Label",
  dropDown: true,
  leftIcon: SearchIcon,
  size: "huge",
};

export const SizeXLarge = Template.bind({});
SizeXLarge.args = {
  label: "Form Label",
  dropDown: true,
  leftIcon: SearchIcon,
  size: "xlarge",
};

export const DarkModeXLarge = DarkModeTemplate.bind({});
DarkModeXLarge.args = {
  label: "Form Label",
  dropDown: true,
  leftIcon: SearchIcon,
  size: "xlarge",
};

export const SizeLarge = Template.bind({});
SizeLarge.args = {
  label: "Form Label",
  dropDown: true,
  leftIcon: SearchIcon,
  size: "large",
};

export const DarkModeSizeLarge = DarkModeTemplate.bind({});
DarkModeSizeLarge.args = {
  label: "Form Label",
  dropDown: true,
  leftIcon: SearchIcon,
  size: "large",
};

export const SizeMedium = Template.bind({});
SizeMedium.args = {
  label: "Form Label",
  dropDown: true,
  leftIcon: SearchIcon,
  size: "medium",
};

export const DarkModeSizeMedium = DarkModeTemplate.bind({});
DarkModeSizeMedium.args = {
  label: "Form Label",
  dropDown: true,
  leftIcon: SearchIcon,
  size: "medium",
};

export const SizeSmall = Template.bind({});
SizeSmall.args = {
  label: "Form Label",
  dropDown: true,
  leftIcon: SearchIcon,
  size: "small",
};

export const DarkModeSizeSmall = DarkModeTemplate.bind({});
DarkModeSizeSmall.args = {
  label: "Form Label",
  dropDown: true,
  leftIcon: SearchIcon,
  size: "small",
};

export const StatefulExample = StatefulTemplate.bind({});
StatefulExample.args = {
  size: "medium",
};
