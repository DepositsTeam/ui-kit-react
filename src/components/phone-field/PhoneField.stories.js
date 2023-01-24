import React from "react";
import PhoneField from "./PhoneField";
import ThemeProvider from "../providers/ThemeProvider";
import DarkModeProvider from "../providers/DarkModeProvider";

export default {
  title: "Forms/Phone Field",
  component: PhoneField,
};

const Template = (args) => (
  <ThemeProvider>
    <PhoneField {...args} />
  </ThemeProvider>
);

const DarkModeTemplate = (args) => (
  <ThemeProvider>
    <div style={{ padding: "3em", background: "#121A26" }}>
      <DarkModeProvider darkMode={true}>
        <PhoneField {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  label: "Form Label",
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Form Label",
  disabled: true,
};

export const Error = Template.bind({});
Error.args = {
  label: "Form Label",
  errorMessage: "Error Message",
};

export const isUs = Template.bind({});
isUs.args = {
  label: "Form Label",
  isUs: true,
};

export const DarkModeDefault = DarkModeTemplate.bind({});
DarkModeDefault.args = {
  label: "Form Label",
};

export const DarkModeDisabled = DarkModeTemplate.bind({});
DarkModeDisabled.args = {
  label: "Form Label",
  disabled: true,
};

export const DarkModeError = DarkModeTemplate.bind({});
DarkModeError.args = {
  label: "Form Label",
  errorMessage: "Error Message",
};

export const DarkModeisUs = DarkModeTemplate.bind({});
DarkModeisUs.args = {
  label: "Form Label",
  isUs: true,
};
