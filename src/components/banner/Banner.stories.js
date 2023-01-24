import Banner from "./Banner";
import DarkModeProvider from "../providers/DarkModeProvider";
import ThemeProvider from "../providers/ThemeProvider";

export default {
  title: "Banner",
  component: Banner,
  argTypes: {},
};

const Template = (args) => (
  <ThemeProvider>
    <Banner {...args} />
  </ThemeProvider>
);

const DarkModeTemplate = (args) => (
  <ThemeProvider>
    <div style={{ padding: "3em", background: "#121A26" }}>
      <DarkModeProvider darkMode={true}>
        <Banner {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  title: "Title",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",
};

export const DarkDefault = DarkModeTemplate.bind({});
DarkDefault.args = {
  title: "Title",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",
};

export const Success = Template.bind({});
Success.args = {
  title: "Title",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",
  colorScheme: "success",
};

export const DarkSuccess = DarkModeTemplate.bind({});
DarkSuccess.args = {
  title: "Title",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",
  colorScheme: "success",
};

export const Error = Template.bind({});
Error.args = {
  title: "Title",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",
  colorScheme: "error",
};

export const DarkError = DarkModeTemplate.bind({});
DarkError.args = {
  title: "Title",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",
  colorScheme: "error",
};

export const Warning = Template.bind({});
Warning.args = {
  title: "Title",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",
  colorScheme: "warning",
};

export const DarkWarning = DarkModeTemplate.bind({});
DarkWarning.args = {
  title: "Title",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",
  colorScheme: "warning",
};

export const Info = Template.bind({});
Info.args = {
  title: "Title",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",
  colorScheme: "info",
};

export const DarkInfo = DarkModeTemplate.bind({});
DarkInfo.args = {
  title: "Title",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",
  colorScheme: "info",
};

export const DefaultRemovable = Template.bind({});
DefaultRemovable.args = {
  title: "Title",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",
  removable: true,
};

export const DarkDefaultRemovable = DarkModeTemplate.bind({});
DarkDefaultRemovable.args = {
  title: "Title",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",
  removable: true,
};

export const SuccessRemovable = Template.bind({});
SuccessRemovable.args = {
  title: "Title",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",
  colorScheme: "success",
  removable: true,
};

export const DarkSuccessRemovable = DarkModeTemplate.bind({});
DarkSuccessRemovable.args = {
  title: "Title",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",
  colorScheme: "success",
  removable: true,
};

export const ErrorRemovable = Template.bind({});
ErrorRemovable.args = {
  title: "Title",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",
  colorScheme: "error",
  removable: true,
};

export const DarkErrorRemovable = DarkModeTemplate.bind({});
DarkErrorRemovable.args = {
  title: "Title",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",
  colorScheme: "error",
  removable: true,
};

export const WarningRemovable = Template.bind({});
WarningRemovable.args = {
  title: "Title",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",
  colorScheme: "warning",
  removable: true,
};

export const DarkWarningRemovable = DarkModeTemplate.bind({});
DarkWarningRemovable.args = {
  title: "Title",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",
  colorScheme: "warning",
  removable: true,
};

export const InfoRemovable = Template.bind({});
InfoRemovable.args = {
  title: "Title",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",
  colorScheme: "info",
  removable: true,
};

export const DarkInfoRemovable = DarkModeTemplate.bind({});
DarkInfoRemovable.args = {
  title: "Title",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",
  colorScheme: "info",
  removable: true,
};
