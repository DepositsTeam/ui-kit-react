import ProgressBar from "./ProgressBar.jsx";
import DarkModeProvider from "../providers/DarkModeProvider.jsx";
import ThemeProvider from "../providers/ThemeProvider.jsx";

export default {
  title: "Progress bar",
  component: ProgressBar,
  argTypes: {},
};

const Template = (args) => (
  <ThemeProvider>
    <ProgressBar {...args} />
  </ThemeProvider>
);

const DarkModeTemplate = (args) => (
  <ThemeProvider>
    <div style={{ padding: "3em", background: "#121A26" }}>
      <DarkModeProvider darkMode={true}>
        <ProgressBar {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>
);

export const Default = Template.bind({});

export const FiftyPercent = Template.bind({});
FiftyPercent.args = {
  percentage: 50,
};

export const HundredPercent = Template.bind({});
HundredPercent.args = {
  percentage: 100,
};

export const ThreeOutOfFive = Template.bind({});
ThreeOutOfFive.args = {
  totalSteps: 5,
  currentStep: 3,
};

export const DefaultDark = DarkModeTemplate.bind({});

export const FiftyPercentDark = DarkModeTemplate.bind({});
FiftyPercentDark.args = {
  percentage: 50,
};

export const HundredPercentDark = DarkModeTemplate.bind({});
HundredPercentDark.args = {
  percentage: 100,
};

export const ThreeOutOfFiveDark = DarkModeTemplate.bind({});
ThreeOutOfFiveDark.args = {
  totalSteps: 5,
  currentStep: 3,
};

export const Variant2 = Template.bind({});
Variant2.args = {
  variant: "variant-2",
  percentage: 25,
};

export const Variant2CustomHeight = Template.bind({});
Variant2CustomHeight.args = {
  variant: "variant-2",
  percentage: 25,
  height: "8px",
};
