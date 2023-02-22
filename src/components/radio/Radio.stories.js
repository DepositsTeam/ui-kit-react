import Radio from "./Radio";
import DarkModeProvider from "../providers/DarkModeProvider";
import ThemeProvider from "../providers/ThemeProvider";

export default {
  title: "Forms/Radio",
  component: Radio,
  argTypes: {},
};

const Template = (args) => (
  <ThemeProvider>
    <Radio {...args} />
  </ThemeProvider>
);

const DarkModeTemplate = (args) => (
  <ThemeProvider>
    <div style={{ padding: "3em", background: "#121A26" }}>
      <DarkModeProvider darkMode={true}>
        <Radio {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  label: "Checking",
};

export const DarkDefault = DarkModeTemplate.bind({});
DarkDefault.args = {
  label: "Checking",
};

export const Ringed = Template.bind({});
Ringed.args = {
  label: "Checking",
  ringed: true,
};

export const DarkRinged = DarkModeTemplate.bind({});
DarkRinged.args = {
  label: "Checking",
  ringed: true,
};
