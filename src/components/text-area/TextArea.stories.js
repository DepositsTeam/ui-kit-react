import TextArea from "./TextArea";
import ThemeProvider from "../providers/ThemeProvider";
import DarkModeProvider from "../providers/DarkModeProvider";

export default {
  title: "Forms/Text Area",
  component: TextArea,
};

const Template = (props) => (
  <ThemeProvider>
    <TextArea {...props} />
  </ThemeProvider>
);

const DarkModeTemplate = (args) => (
  <ThemeProvider>
    <div style={{ padding: "3em", background: "#121A26" }}>
      <DarkModeProvider darkMode={true}>
        <TextArea {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  label: "Form Label",
  placeholder: "Input placeholder",
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Form Label",
  placeholder: "Input placeholder",
  disabled: true,
};

export const Error = Template.bind({});
Error.args = {
  label: "Form Label",
  placeholder: "Input placeholder",
  errorMessage: "Error message",
};

export const DarkModeDefault = DarkModeTemplate.bind({});
DarkModeDefault.args = {
  label: "Form Label",
  placeholder: "Input placeholder",
};

export const DarkModeDisabled = DarkModeTemplate.bind({});
DarkModeDisabled.args = {
  label: "Form Label",
  placeholder: "Input placeholder",
  disabled: true,
};

export const DarkModeError = DarkModeTemplate.bind({});
DarkModeError.args = {
  label: "Form Label",
  placeholder: "Input placeholder",
  errorMessage: "Error message",
};
