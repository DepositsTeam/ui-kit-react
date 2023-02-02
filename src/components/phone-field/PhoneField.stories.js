import React, { useEffect, useRef } from "react";
import PhoneField from "./PhoneField";
import ThemeProvider from "../providers/ThemeProvider";
import DarkModeProvider from "../providers/DarkModeProvider";

export default {
  title: "Forms/Phone Field",
  component: PhoneField,
};

const Template = (args) => {
  const ref = useRef();
  const div = useRef();
  useEffect(() => {
    console.log(ref.current);
    console.log(div.current);
  }, []);
  const handleChange = (e) => {
    console.log(e.target.value);
    console.log(ref.current.value);
  };
  return (
    <ThemeProvider>
      <div ref={div} />
      <PhoneField ref={ref} {...args} onChange={handleChange} />
    </ThemeProvider>
  );
};

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
