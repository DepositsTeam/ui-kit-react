import React from "react";
import Alert from "./Alert.jsx";
import DarkModeProvider from "../providers/DarkModeProvider.jsx";

export default {
  title: "Alert",
  component: Alert,
  argTypes: {
    message: {
      control: { type: "text", default: "This is a simple message" },
    },
  },
};

const Template = ({ children, ...args }) => {
  return <Alert {...args} />;
};

const DarkTemplate = ({ children, ...args }) => (
  <div style={{ padding: "3em", background: "#121A26" }}>
    <DarkModeProvider darkMode={true}>
      <Alert {...args} />
    </DarkModeProvider>
  </div>
);

export const FlatDefault = Template.bind({});
FlatDefault.args = {
  message: "I am an alert",
};

export const DarkFlatDefault = DarkTemplate.bind({});
DarkFlatDefault.args = {
  message: "I am an alert",
};

export const FlatSuccess = Template.bind({});
FlatSuccess.args = {
  colorScheme: "success",
  message: "I am an alert",
};

export const DarkFlatSuccess = DarkTemplate.bind({});
DarkFlatSuccess.args = {
  colorScheme: "success",
  message: "I am an alert",
};

export const FlatWarning = Template.bind({});
FlatWarning.args = {
  colorScheme: "warning",
  message: "I am an alert",
};

export const DarkFlatWarning = DarkTemplate.bind({});
DarkFlatWarning.args = {
  colorScheme: "warning",
  message: "I am an alert",
};

export const FlatError = Template.bind({});
FlatError.args = {
  colorScheme: "error",
  message: "I am an alert",
};

export const DarkFlatError = DarkTemplate.bind({});
DarkFlatError.args = {
  colorScheme: "error",
  message: "I am an alert",
};

export const FlatInfo = Template.bind({});
FlatInfo.args = {
  colorScheme: "info",
  message: "I am an alert",
};

export const DarkFlatInfo = DarkTemplate.bind({});
DarkFlatInfo.args = {
  colorScheme: "info",
  message: "I am an alert",
};

export const FlatDefaultDescription = Template.bind({});
FlatDefaultDescription.args = {
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

export const DarkFlatDefaultDescription = DarkTemplate.bind({});
DarkFlatDefaultDescription.args = {
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

export const FlatSuccessDescription = Template.bind({});
FlatSuccessDescription.args = {
  colorScheme: "success",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

export const DarkFlatSuccessDescription = DarkTemplate.bind({});
DarkFlatSuccessDescription.args = {
  colorScheme: "success",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

export const FlatWarningDescription = Template.bind({});
FlatWarningDescription.args = {
  colorScheme: "warning",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

export const DarkFlatWarningDescription = DarkTemplate.bind({});
DarkFlatWarningDescription.args = {
  colorScheme: "warning",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

export const FlatErrorDescription = Template.bind({});
FlatErrorDescription.args = {
  colorScheme: "error",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

export const DarkFlatErrorDescription = DarkTemplate.bind({});
DarkFlatErrorDescription.args = {
  colorScheme: "error",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

export const FlatInfoDescription = Template.bind({});
FlatInfoDescription.args = {
  colorScheme: "info",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

export const DarkFlatInfoDescription = DarkTemplate.bind({});
DarkFlatInfoDescription.args = {
  colorScheme: "info",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

export const FlatDefaultButton = Template.bind({});
FlatDefaultButton.args = {
  button: {
    text: "Default Button",
  },
};

export const DarkFlatDefaultButton = DarkTemplate.bind({});
DarkFlatDefaultButton.args = {
  button: {
    text: "Default Button",
  },
};

export const FlatSuccessButton = Template.bind({});
FlatSuccessButton.args = {
  colorScheme: "success",
  button: {
    text: "Default Button",
  },
};

export const DarkFlatSuccessButton = DarkTemplate.bind({});
DarkFlatSuccessButton.args = {
  colorScheme: "success",
  button: {
    text: "Default Button",
  },
};

export const FlatWarningButton = Template.bind({});
FlatWarningButton.args = {
  colorScheme: "warning",
  button: {
    text: "Default Button",
  },
};

export const DarkFlatWarningButton = DarkTemplate.bind({});
DarkFlatWarningButton.args = {
  colorScheme: "warning",
  button: {
    text: "Default Button",
  },
};

export const FlatErrorButton = Template.bind({});
FlatErrorButton.args = {
  colorScheme: "error",
  button: {
    text: "Default Button",
  },
};

export const DarkFlatErrorButton = DarkTemplate.bind({});
DarkFlatErrorButton.args = {
  colorScheme: "error",
  button: {
    text: "Default Button",
  },
};

export const FlatInfoButton = Template.bind({});
FlatInfoButton.args = {
  colorScheme: "info",
  button: {
    text: "Default Button",
  },
};

export const DarkFlatInfoButton = DarkTemplate.bind({});
DarkFlatInfoButton.args = {
  colorScheme: "info",
  button: {
    text: "Default Button",
  },
};

export const FlatDefaultDescriptionButton = Template.bind({});
FlatDefaultDescriptionButton.args = {
  button: {
    text: "Default Button",
  },
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

export const DarkFlatDefaultDescriptionButton = DarkTemplate.bind({});
DarkFlatDefaultDescriptionButton.args = {
  button: {
    text: "Default Button",
  },
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

export const FlatSuccessDescriptionButton = Template.bind({});
FlatSuccessDescriptionButton.args = {
  colorScheme: "success",
  button: {
    text: "Default Button",
  },
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

export const DarkFlatSuccessDescriptionButton = DarkTemplate.bind({});
DarkFlatSuccessDescriptionButton.args = {
  colorScheme: "success",
  button: {
    text: "Default Button",
  },
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

export const FlatWarningDescriptionButton = Template.bind({});
FlatWarningDescriptionButton.args = {
  colorScheme: "warning",
  button: {
    text: "Default Button",
  },
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

export const DarkFlatWarningDescriptionButton = DarkTemplate.bind({});
DarkFlatWarningDescriptionButton.args = {
  colorScheme: "warning",
  button: {
    text: "Default Button",
  },
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

export const FlatErrorDescriptionButton = Template.bind({});
FlatErrorDescriptionButton.args = {
  button: {
    text: "Default Button",
  },
  colorScheme: "error",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

export const DarkFlatErrorDescriptionButton = DarkTemplate.bind({});
DarkFlatErrorDescriptionButton.args = {
  button: {
    text: "Default Button",
  },
  colorScheme: "error",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

export const FlatInfoDescriptionButton = Template.bind({});
FlatInfoDescriptionButton.args = {
  button: {
    text: "Default Button",
  },
  colorScheme: "info",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

export const DarkFlatInfoDescriptionButton = DarkTemplate.bind({});
DarkFlatInfoDescriptionButton.args = {
  button: {
    text: "Default Button",
  },
  colorScheme: "info",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

export const FilledDefault = Template.bind({});
FilledDefault.args = {
  theme: "filled",
};

export const DarkFilledDefault = DarkTemplate.bind({});
DarkFilledDefault.args = {
  theme: "filled",
};

export const FilledSuccess = Template.bind({});
FilledSuccess.args = {
  theme: "filled",
  colorScheme: "success",
};

export const DarkFilledSuccess = DarkTemplate.bind({});
DarkFilledSuccess.args = {
  theme: "filled",
  colorScheme: "success",
};

export const FilledWarning = Template.bind({});
FilledWarning.args = {
  theme: "filled",
  colorScheme: "warning",
};

export const DarkFilledWarning = DarkTemplate.bind({});
DarkFilledWarning.args = {
  theme: "filled",
  colorScheme: "warning",
};

export const FilledError = Template.bind({});
FilledError.args = {
  theme: "filled",
  colorScheme: "error",
};

export const DarkFilledError = DarkTemplate.bind({});
DarkFilledError.args = {
  theme: "filled",
  colorScheme: "error",
};

export const FilledInfo = Template.bind({});
FilledInfo.args = {
  theme: "filled",
  colorScheme: "info",
};

export const DarkFilledInfo = DarkTemplate.bind({});
DarkFilledInfo.args = {
  theme: "filled",
  colorScheme: "info",
};

export const FilledDefaultDescription = Template.bind({});
FilledDefaultDescription.args = {
  theme: "filled",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

export const DarkFilledDefaultDescription = DarkTemplate.bind({});
DarkFilledDefaultDescription.args = {
  theme: "filled",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

export const FilledSuccessDescription = Template.bind({});
FilledSuccessDescription.args = {
  theme: "filled",
  colorScheme: "success",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

export const DarkFilledSuccessDescription = DarkTemplate.bind({});
DarkFilledSuccessDescription.args = {
  theme: "filled",
  colorScheme: "success",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

export const FilledWarningDescription = Template.bind({});
FilledWarningDescription.args = {
  theme: "filled",
  colorScheme: "warning",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

export const DarkFilledWarningDescription = DarkTemplate.bind({});
DarkFilledWarningDescription.args = {
  theme: "filled",
  colorScheme: "warning",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

export const FilledErrorDescription = Template.bind({});
FilledErrorDescription.args = {
  theme: "filled",
  colorScheme: "error",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

export const DarkFilledErrorDescription = DarkTemplate.bind({});
DarkFilledErrorDescription.args = {
  theme: "filled",
  colorScheme: "error",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

export const FilledInfoDescription = Template.bind({});
FilledInfoDescription.args = {
  theme: "filled",
  colorScheme: "info",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

export const DarkFilledInfoDescription = DarkTemplate.bind({});
DarkFilledInfoDescription.args = {
  theme: "filled",
  colorScheme: "info",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

export const FilledDefaultButton = Template.bind({});
FilledDefaultButton.args = {
  theme: "filled",
  button: {
    text: "Default Button",
  },
};

export const DarkFilledDefaultButton = DarkTemplate.bind({});
DarkFilledDefaultButton.args = {
  theme: "filled",
  button: {
    text: "Default Button",
  },
};

export const FilledSuccessButton = Template.bind({});
FilledSuccessButton.args = {
  theme: "filled",
  colorScheme: "success",
  button: {
    text: "Default Button",
  },
};

export const DarkFilledSuccessButton = DarkTemplate.bind({});
DarkFilledSuccessButton.args = {
  theme: "filled",
  colorScheme: "success",
  button: {
    text: "Default Button",
  },
};

export const FilledWarningButton = Template.bind({});
FilledWarningButton.args = {
  theme: "filled",
  colorScheme: "warning",
  button: {
    text: "Default Button",
  },
};

export const DarkFilledWarningButton = DarkTemplate.bind({});
DarkFilledWarningButton.args = {
  theme: "filled",
  colorScheme: "warning",
  button: {
    text: "Default Button",
  },
};
export const FilledErrorButton = Template.bind({});
FilledErrorButton.args = {
  theme: "filled",
  colorScheme: "error",
  button: {
    text: "Default Button",
  },
};

export const DarkFilledErrorButton = DarkTemplate.bind({});
DarkFilledErrorButton.args = {
  theme: "filled",
  colorScheme: "error",
  button: {
    text: "Default Button",
  },
};

export const FilledInfoButton = Template.bind({});
FilledInfoButton.args = {
  theme: "filled",
  colorScheme: "info",
  button: {
    text: "Default Button",
  },
};

export const DarkFilledInfoButton = DarkTemplate.bind({});
DarkFilledInfoButton.args = {
  theme: "filled",
  colorScheme: "info",
  button: {
    text: "Default Button",
  },
};

export const FilledDefaultDescriptionButton = Template.bind({});
FilledDefaultDescriptionButton.args = {
  theme: "filled",
  button: {
    text: "Default Button",
  },
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

export const DarkFilledDefaultDescriptionButton = DarkTemplate.bind({});
DarkFilledDefaultDescriptionButton.args = {
  theme: "filled",
  button: {
    text: "Default Button",
  },
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

export const FilledSuccessDescriptionButton = Template.bind({});
FilledSuccessDescriptionButton.args = {
  theme: "filled",
  colorScheme: "success",
  button: {
    text: "Default Button",
  },
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

export const DarkFilledSuccessDescriptionButton = DarkTemplate.bind({});
DarkFilledSuccessDescriptionButton.args = {
  theme: "filled",
  colorScheme: "success",
  button: {
    text: "Default Button",
  },
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

export const FilledWarningDescriptionButton = Template.bind({});
FilledWarningDescriptionButton.args = {
  theme: "filled",
  colorScheme: "warning",
  button: {
    text: "Default Button",
  },
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

export const DarkFilledWarningDescriptionButton = DarkTemplate.bind({});
DarkFilledWarningDescriptionButton.args = {
  theme: "filled",
  colorScheme: "warning",
  button: {
    text: "Default Button",
  },
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

export const FilledErrorDescriptionButton = Template.bind({});
FilledErrorDescriptionButton.args = {
  theme: "filled",
  button: {
    text: "Default Button",
  },
  colorScheme: "error",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

export const DarkFilledErrorDescriptionButton = DarkTemplate.bind({});
DarkFilledErrorDescriptionButton.args = {
  theme: "filled",
  button: {
    text: "Default Button",
  },
  colorScheme: "error",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

export const FilledInfoDescriptionButton = Template.bind({});
FilledInfoDescriptionButton.args = {
  theme: "filled",
  button: {
    text: "Default Button",
  },
  colorScheme: "info",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

export const DarkFilledInfoDescriptionButton = DarkTemplate.bind({});
DarkFilledInfoDescriptionButton.args = {
  theme: "filled",
  button: {
    text: "Default Button",
  },
  colorScheme: "info",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

export const InlineSuccess = Template.bind({});
InlineSuccess.args = {
  colorScheme: "success",
  theme: "inline",
};

export const DarkInlineSuccess = DarkTemplate.bind({});
DarkInlineSuccess.args = {
  colorScheme: "success",
  theme: "inline",
};

export const InlineWarning = Template.bind({});
InlineWarning.args = {
  colorScheme: "warning",
  theme: "inline",
};

export const DarkInlineWarning = DarkTemplate.bind({});
DarkInlineWarning.args = {
  colorScheme: "warning",
  theme: "inline",
};

export const InlineError = Template.bind({});
InlineError.args = {
  colorScheme: "error",
  theme: "inline",
};

export const DarkInlineError = DarkTemplate.bind({});
DarkInlineError.args = {
  colorScheme: "error",
  theme: "inline",
};

export const InlineInfo = Template.bind({});
InlineInfo.args = {
  colorScheme: "info",
  theme: "inline",
};

export const DarkInlineInfo = DarkTemplate.bind({});
DarkInlineInfo.args = {
  colorScheme: "info",
  theme: "inline",
};
