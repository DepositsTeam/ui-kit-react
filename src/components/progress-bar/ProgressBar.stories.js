import ProgressBar from "./ProgressBar";

export default {
  title: "Progress Bar",
  component: ProgressBar,
  argType: {},
};

const Template = (args) => <ProgressBar {...args} />;

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
