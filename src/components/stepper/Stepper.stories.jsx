import Stepper from "./Stepper.jsx";
import DarkModeProvider from "../providers/DarkModeProvider.jsx";
import ThemeProvider from "../providers/ThemeProvider.jsx";

export default {
  component: Stepper,
  title: "Stepper",
  argTypes: {},
};

const Template = (args) => (
  <ThemeProvider>
    <Stepper {...args} />
  </ThemeProvider>
);

const DarkModeTemplate = (args) => (
  <ThemeProvider>
    <div style={{ padding: "3em", background: "#121A26" }}>
      <DarkModeProvider darkMode={true}>
        <Stepper {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>
);

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

export const DefaultDark = DarkModeTemplate.bind({});
DefaultDark.args = {
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
};

export const SecondStepDark = DarkModeTemplate.bind({});
SecondStepDark.args = {
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

export const ArrayOfStringsDark = DarkModeTemplate.bind({});
ArrayOfStringsDark.args = {
  steps: [
    "Complete basic KYB",
    "Select program use case",
    "Configure program",
    "Demo & launch program",
  ],
};

export const ArrayOfStringsSecondStepDark = DarkModeTemplate.bind({});
ArrayOfStringsSecondStepDark.args = {
  steps: [
    "Complete basic KYB",
    "Select program use case",
    "Configure program",
    "Demo & launch program",
  ],
  currentStep: 1,
};
