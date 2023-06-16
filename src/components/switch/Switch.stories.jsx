import React from "react";
import Switch from "./Switch.jsx";
import ThemeProvider from "../providers/ThemeProvider.jsx";
import DarkModeProvider from "../providers/DarkModeProvider.jsx";

export default {
  title: "Forms/Switch",
  component: Switch,
};

const Template = (args) => (
  <ThemeProvider>
    <Switch {...args} />
  </ThemeProvider>
);

const DarkModeTemplate = (args) => (
  <ThemeProvider>
    <div style={{ padding: "3em", background: "#121A26" }}>
      <DarkModeProvider darkMode={true}>
        <Switch {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  label: "I agree to the terms and conditions",
};

export const DarkModeDefault = DarkModeTemplate.bind({});
DarkModeDefault.args = {
  label: "I agree to the terms and conditions",
};
