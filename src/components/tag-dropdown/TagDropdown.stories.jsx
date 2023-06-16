import TagDropdown from "./TagDropdown.jsx";
import ThemeProvider from "../providers/ThemeProvider.jsx";
import DarkModeProvider from "../providers/DarkModeProvider.jsx";

export default {
  title: "Forms/Tag Dropdown",
  component: TagDropdown,
};
const Template = (args) => (
  <ThemeProvider>
    <TagDropdown {...args} />
  </ThemeProvider>
);

const DarkModeTemplate = (args) => (
  <ThemeProvider>
    <div style={{ padding: "3em", background: "#121A26" }}>
      <DarkModeProvider darkMode={true}>
        <TagDropdown {...args} />
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
  {
    text: "Benefits",
    value: "benefits",
  },
  {
    text: "API Docs",
    value: "api_docs",
  },
  {
    text: "Console",
    value: "console",
  },
  {
    text: "Statements",
    value: "statements",
  },
  {
    text: "Payouts",
    value: "payouts",
  },
];

const stringOptions = ["Commerce", "Identity", "UI", "Money", "Banking"];

export const Default = Template.bind({});
Default.args = {
  options: [...options],
  onChange: (args) => {
    console.log(args);
  },
};

export const VariableMaxHeight = Template.bind({});
VariableMaxHeight.args = {
  options: [...options],
  maxHeight: "150px",
};

export const Label = Template.bind({});
Label.args = {
  options: [...options],
  label: "Dropdown",
};

export const StringOptions = Template.bind({});
StringOptions.args = {
  options: [...stringOptions],
  label: "String Options",
};

export const DarkModeDefault = DarkModeTemplate.bind({});
DarkModeDefault.args = {
  options: [...options],
};

export const DarkModeVariableMaxHeight = DarkModeTemplate.bind({});
DarkModeVariableMaxHeight.args = {
  options: [...options],
  maxHeight: "150px",
};

export const DarkModeLabel = DarkModeTemplate.bind({});
DarkModeLabel.args = {
  options: [...options],
  label: "Dropdown",
};

export const DarkModeStringOptions = DarkModeTemplate.bind({});
DarkModeStringOptions.args = {
  options: [...stringOptions],
  label: "String Options",
};
