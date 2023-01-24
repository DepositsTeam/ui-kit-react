import Dropdown from "./Dropdown";
import DarkModeProvider from "../providers/DarkModeProvider";
import ThemeProvider from "../providers/ThemeProvider";
import DatePicker from "../date-picker/DatePicker";

export default {
  title: "Forms/Dropdown",
  component: Dropdown,
  argTypes: {},
};

const Template = (args) => (
  <ThemeProvider>
    <Dropdown {...args} />
  </ThemeProvider>
);

const PredefinedTemplate = (args) => (
  <ThemeProvider>
    <Dropdown initialValue={"identity"} {...args} />
  </ThemeProvider>
);

const DarkModeTemplate = (args) => (
  <ThemeProvider>
    <div style={{ padding: "3em", background: "#121A26" }}>
      <DarkModeProvider darkMode={true}>
        <Dropdown {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>
);

const DarkModePredefinedTemplate = (args) => (
  <ThemeProvider>
    <div style={{ padding: "3em", background: "#121A26" }}>
      <DarkModeProvider darkMode={true}>
        <Dropdown initialValue={"identity"} {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>
);

const options = [
  {
    text: "Banking kit",
    value: "banking",
  },
  {
    text: "Money kit",
    value: "money",
  },
  {
    text: "Identity kit",
    value: "identity",
  },
  {
    text: "UI kit",
    value: "ui",
  },
  {
    text: "Commerce kit",
    value: "commerce",
  },
];

export const Default = Template.bind({});
Default.args = {
  options: [...options],
};

export const TextOptions = Template.bind({});
TextOptions.args = {
  options: [
    "Banking kit",
    "Money kit",
    "Identity kit",
    "UI kit",
    "Commerce kit",
  ],
};

export const DefaultDark = DarkModeTemplate.bind({});
DefaultDark.args = {
  options: [...options],
};

export const Label = Template.bind({});
Label.args = {
  options: [...options],
  label: "Dropdown",
};

export const LabelDark = DarkModeTemplate.bind({});
LabelDark.args = {
  options: [...options],
  label: "Dropdown",
};

export const Predefined = PredefinedTemplate.bind({});
Predefined.args = {
  label: "Predefined Dropdown",
  options: [...options],
};

export const PredefinedDark = DarkModePredefinedTemplate.bind({});
PredefinedDark.args = {
  label: "Predefined Dropdown",
  options: [...options],
};
