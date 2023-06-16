import DatePicker from "./DatePicker.jsx";
import DarkModeProvider from "../providers/DarkModeProvider.jsx";
import ThemeProvider from "../providers/ThemeProvider.jsx";

export default {
  title: "Forms/Date Picker",
  component: DatePicker,
  argTypes: {},
};

const Template = (args) => (
  <ThemeProvider>
    <DatePicker {...args} />
  </ThemeProvider>
);

const DarkModeTemplate = (args) => (
  <ThemeProvider>
    <div style={{ padding: "3em", background: "#121A26" }}>
      <DarkModeProvider darkMode={true}>
        <DatePicker {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>
);

export const Default = Template.bind({});

export const DefaultDark = DarkModeTemplate.bind({});

export const Range = Template.bind({});
Range.args = {
  range: true,
};

export const DarkRange = DarkModeTemplate.bind({});
DarkRange.args = {
  range: true,
};

export const SizeMassive = Template.bind({});
SizeMassive.args = {
  label: "Form Label",
  size: "massive",
};

export const DarkSizeMassive = DarkModeTemplate.bind({});
DarkSizeMassive.args = {
  label: "Form Label",
  size: "massive",
};

export const SizeHuge = Template.bind({});
SizeHuge.args = {
  label: "Form Label",
  size: "huge",
};

export const DarkSizeHuge = DarkModeTemplate.bind({});
DarkSizeHuge.args = {
  label: "Form Label",
  size: "huge",
};

export const SizeXLarge = Template.bind({});
SizeXLarge.args = {
  label: "Form Label",
  size: "xlarge",
};

export const DarkSizeXLarge = DarkModeTemplate.bind({});
DarkSizeXLarge.args = {
  label: "Form Label",
  size: "xlarge",
};

export const SizeLarge = Template.bind({});
SizeLarge.args = {
  label: "Form Label",
  size: "large",
};

export const DarkSizeLarge = DarkModeTemplate.bind({});
DarkSizeLarge.args = {
  label: "Form Label",
  size: "large",
};

export const SizeMedium = Template.bind({});
SizeMedium.args = {
  label: "Form Label",
  size: "medium",
};

export const DarkSizeMedium = DarkModeTemplate.bind({});
DarkSizeMedium.args = {
  label: "Form Label",
  size: "medium",
};

export const SizeSmall = Template.bind({});
SizeSmall.args = {
  label: "Form Label",
  size: "small",
};

export const DarkSizeSmall = DarkModeTemplate.bind({});
DarkSizeSmall.args = {
  label: "Form Label",
  size: "small",
};
