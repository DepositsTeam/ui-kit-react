import Stepper from "./Stepper";

export default {
  component: Stepper,
  title: "Stepper",
  argTypes: {},
};

const Template = (args) => <Stepper {...args} />;

export const Default = Template.bind({});
Default.args = {
  steps: [
    {
      text: "Complete basic KYB",
      description: "August 16, 2021 at 5:15 PM",
    },
    {
      text: "Select program use case",
    },
    {
      text: "Configure program",
    },
    {
      text: "Demo & launch program",
    },
  ],
};

export const Variant2 = Template.bind({});
Variant2.args = {
  steps: [
    {
      text: "Complete basic KYB",
      description: "August 16, 2021 at 5:15 PM",
    },
    {
      text: "Select program use case",
    },
    {
      text: "Configure program",
    },
    {
      text: "Demo & launch program",
    },
  ],
  scheme: "variant-2",
};

export const SecondStep = Template.bind({});
SecondStep.args = {
  steps: [
    {
      text: "Complete basic KYB",
    },
    {
      text: "Select program use case",
    },
    {
      text: "Configure program",
    },
    {
      text: "Demo & launch program",
    },
  ],
  currentStep: 1,
};
export const ArrayOfStrings = Template.bind({});
ArrayOfStrings.args = {
  steps: [
    "Complete basic KYB",
    "Select program use case",
    "Configure program",
    "Demo & launch program",
  ],
};
export const ArrayOfStringsSecondStep = Template.bind({});
ArrayOfStringsSecondStep.args = {
  steps: [
    "Complete basic KYB",
    "Select program use case",
    "Configure program",
    "Demo & launch program",
  ],
  currentStep: 1,
};
