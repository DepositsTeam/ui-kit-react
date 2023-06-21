import Checkbox from "./Checkbox.jsx";
import DarkModeProvider from "../providers/DarkModeProvider.jsx";
import ThemeProvider from "../providers/ThemeProvider.jsx";

export default {
  title: "Forms/Checkbox",
  component: Checkbox,
  argTypes: {},
};

const Template = (args) => (
  <ThemeProvider>
    <Checkbox {...args} />
  </ThemeProvider>
);

const DarkModeTemplate = (args) => (
  <ThemeProvider>
    <div style={{ padding: "3em", background: "#121A26" }}>
      <DarkModeProvider darkMode={true}>
        <Checkbox {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  label: "I agree to the terms and conditions",
};

export const DarkDefault = DarkModeTemplate.bind({});
DarkDefault.args = {
  label: "I agree to the terms and conditions",
};

export const Dashed = Template.bind({});
Dashed.args = {
  label: "I agree to the terms and conditions",
  dashed: true,
};

export const DarkDashed = DarkModeTemplate.bind({});
DarkDashed.args = {
  label: "I agree to the terms and conditions",
  dashed: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Disabled checkbox",
  disabled: true,
};

export const DarkDisabled = DarkModeTemplate.bind({});
DarkDisabled.args = {
  label: "I agree to the terms and conditions",
  disabled: true,
};
