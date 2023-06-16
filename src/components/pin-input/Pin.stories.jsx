import PinInput from "./PinInput.jsx";
import DarkModeProvider from "../providers/DarkModeProvider.jsx";
import ThemeProvider from "../providers/ThemeProvider.jsx";

export default {
  title: "Forms/Pin Input",
  component: PinInput,
  argTypes: {},
};

const Template = (args) => (
  <ThemeProvider>
    <PinInput {...args} />
  </ThemeProvider>
);

const DarkModeTemplate = (args) => (
  <ThemeProvider>
    <div style={{ padding: "3em", background: "#121A26" }}>
      <DarkModeProvider darkMode={true}>
        <PinInput {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>
);

const DefaultValueTemplate = (args) => (
  <ThemeProvider>
    <PinInput initialValue={"123456"} {...args} />
  </ThemeProvider>
);

export const DarkModeDefaultValueTemplate = (args) => (
  <ThemeProvider>
    <div style={{ padding: "3em", background: "#121A26" }}>
      <DarkModeProvider darkMode={true}>
        <PinInput initialValue={"123456"} {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>
);

export const DefaultVal = DefaultValueTemplate.bind({});

export const DarkDefaultVal = DarkModeDefaultValueTemplate.bind({});

export const Password = Template.bind({});
Password.args = {
  password: true,
};

export const DarkPassword = DarkModeTemplate.bind({});
DarkPassword.args = {
  password: true,
};

export const Text = Template.bind({});
Text.args = {
  password: false,
};

export const DarkText = DarkModeTemplate.bind({});
DarkText.args = {
  password: false,
};

export const OnlyNumbers = Template.bind({});
OnlyNumbers.args = {
  onlyNumbers: true,
};

export const DarkOnlyNumbers = DarkModeTemplate.bind({});
DarkOnlyNumbers.args = {
  onlyNumbers: true,
};

export const HasError = Template.bind({});
HasError.args = {
  errorMessage: "I'll always show an error",
};

export const DarkHasError = DarkModeTemplate.bind({});
DarkHasError.args = {
  errorMessage: "I'll always show an error",
};
