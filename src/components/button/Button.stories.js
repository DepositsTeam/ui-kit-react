import Button from "./Button";
import DarkModeProvider from "../providers/DarkModeProvider";
import ThemeProvider from "../providers/ThemeProvider";
import SearchIcon from "../icons/Search";

export default {
  title: "Button",
  component: Button,
  argTypes: {},
};

const Template = (args) => (
  <ThemeProvider>
    <Button {...args} />
  </ThemeProvider>
);

const DarkModeTemplate = (args) => (
  <ThemeProvider >
    <div style={{ padding: "3em", background: "#121A26" }}>
      <DarkModeProvider darkMode={true}>
        <Button {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  children: "Default Button",
};

export const Pill = Template.bind({});
Pill.args = {
  pill: true,
  children: "Default Button",
};

export const DarkDefault = DarkModeTemplate.bind({});
DarkDefault.args = {
  children: "Default Button",
};

export const Primary = Template.bind({});
Primary.args = { children: "Primary Button", colorScheme: "primary" };

export const DarkPrimary = DarkModeTemplate.bind({});
DarkPrimary.args = { children: "Primary Button", colorScheme: "primary" };

export const PrimaryLoading = Template.bind({});
PrimaryLoading.args = {
  children: "Primary Loading Button",
  colorScheme: "primary",
  loading: true,
};
PrimaryLoading.storyName = "Loading";

export const DarkPrimaryLoading = DarkModeTemplate.bind({});
DarkPrimaryLoading.args = {
  children: "Primary Loading Button",
  colorScheme: "primary",
  loading: true,
};
PrimaryLoading.storyName = "Dark Loading";

export const Danger = Template.bind({});
Danger.args = { children: "Danger Button", colorScheme: "danger" };

export const DarkDanger = DarkModeTemplate.bind({});
DarkDanger.args = { children: "Danger Button", colorScheme: "danger" };

export const Success = Template.bind({});
Success.args = { children: "Success Button", colorScheme: "success" };

export const DarkSuccess = DarkModeTemplate.bind({});
DarkSuccess.args = { children: "Success Button", colorScheme: "success" };

export const Outline = Template.bind({});
Outline.args = { children: "Outline Button", colorScheme: "outline" };

export const DarkOutline = DarkModeTemplate.bind({});
DarkOutline.args = { children: "Outline Button", colorScheme: "outline" };

export const OutlineLeftIcon = Template.bind({});
OutlineLeftIcon.args = {
  children: "Outline Button",
  colorScheme: "outline",
  leftIcon: SearchIcon,
};

export const DarkOutlineLeftIcon = DarkModeTemplate.bind({});
DarkOutlineLeftIcon.args = {
  children: "Outline Button",
  colorScheme: "outline",
  leftIcon: SearchIcon,
};

export const OutlineDropdown = Template.bind({});
OutlineDropdown.args = {
  children: "Outline Button",
  colorScheme: "outline",
  dropDown: true,
};

export const DarkOutlineDropdown = DarkModeTemplate.bind({});
DarkOutlineDropdown.args = {
  children: "Outline Button",
  colorScheme: "outline",
  dropDown: true,
};

export const Invisible = Template.bind({});
Invisible.args = { children: "Invisible Button", colorScheme: "invisible" };

export const DarkInvisible = DarkModeTemplate.bind({});
DarkInvisible.args = { children: "Invisible Button", colorScheme: "invisible" };

export const InvisibleLeftIcon = Template.bind({});
InvisibleLeftIcon.args = {
  children: "Invisible Button",
  colorScheme: "invisible",
  leftIcon: SearchIcon,
};

export const DarkInvisibleLeftIcon = DarkModeTemplate.bind({});
DarkInvisibleLeftIcon.args = {
  children: "Invisible Button",
  colorScheme: "invisible",
  leftIcon: SearchIcon,
};

export const InvisibleLeftIconDropdown = Template.bind({});
InvisibleLeftIconDropdown.args = {
  children: "Invisible Button",
  colorScheme: "invisible",
  dropDown: true,
};

export const DarkInvisibleLeftIconDropdown = DarkModeTemplate.bind({});
DarkInvisibleLeftIconDropdown.args = {
  children: "Invisible Button",
  colorScheme: "invisible",
  dropDown: true,
};

export const Small = Template.bind({});
Small.args = { children: "Small Button", size: "small" };

export const DarkSmall = DarkModeTemplate.bind({});
DarkSmall.args = { children: "Small Button", size: "small" };

export const Medium = Template.bind({});
Medium.args = { children: "Medium Button", size: "medium" };

export const DarkMedium = DarkModeTemplate.bind({});
DarkMedium.args = { children: "Medium Button", size: "medium" };

export const Large = Template.bind({});
Large.args = { children: "Large Button", size: "large" };

export const DarkLarge = DarkModeTemplate.bind({});
DarkLarge.args = { children: "Large Button", size: "large" };

export const XLarge = Template.bind({});
XLarge.args = { children: "X-Large Button", size: "xlarge" };
XLarge.storyName = "X-Large";

export const DarkXLarge = DarkModeTemplate.bind({});
DarkXLarge.args = { children: "X-Large Button", size: "xlarge" };
DarkXLarge.storyName = "X-Large";

export const Huge = Template.bind({});
Huge.args = { children: "Huge Button", size: "huge" };

export const DarkHuge = DarkModeTemplate.bind({});
DarkHuge.args = { children: "Huge Button", size: "huge" };

export const Massive = Template.bind({});
Massive.args = { children: "Massive Button", size: "massive" };

export const DarkMassive = DarkModeTemplate.bind({});
DarkMassive.args = { children: "Massive Button", size: "massive" };

export const Dropdown = Template.bind({});
Dropdown.args = { children: "Dropdown Button", dropDown: true };
Dropdown.storyName = "Dropdown Button";

export const DarkDropdown = DarkModeTemplate.bind({});
DarkDropdown.args = { children: "Dropdown Button", dropDown: true };
DarkDropdown.storyName = "Dropdown Button";

export const IconButton = Template.bind({});
IconButton.args = { children: "Icon Button", leftIcon: SearchIcon };

export const DarkIconButton = DarkModeTemplate.bind({});
DarkIconButton.args = { children: "Icon Button", leftIcon: SearchIcon };

export const PrimaryIconButton = Template.bind({});
PrimaryIconButton.args = {
  children: "Primary Icon Button",
  colorScheme: "primary",
  leftIcon: SearchIcon,
};

export const DarkPrimaryIconButton = DarkModeTemplate.bind({});
DarkPrimaryIconButton.args = {
  children: "Primary Icon Button",
  colorScheme: "primary",
  leftIcon: SearchIcon,
};

export const SuccessIconButton = Template.bind({});
SuccessIconButton.args = {
  children: "Success Icon Button",
  colorScheme: "success",
  leftIcon: SearchIcon,
};

export const DarkSuccessIconButton = DarkModeTemplate.bind({});
DarkSuccessIconButton.args = {
  children: "Success Icon Button",
  colorScheme: "success",
  leftIcon: SearchIcon,
};

export const SuccessIconXLargeButton = Template.bind({});
SuccessIconXLargeButton.args = {
  children: "Success Icon XLarge Button",
  colorScheme: "success",
  leftIcon: SearchIcon,
  size: "xlarge",
};

export const DarkSuccessIconXLargeButton = DarkModeTemplate.bind({});
DarkSuccessIconXLargeButton.args = {
  children: "Success Icon XLarge Button",
  colorScheme: "success",
  leftIcon: SearchIcon,
  size: "xlarge",
};

export const SuccessIconHugeButton = Template.bind({});
SuccessIconHugeButton.args = {
  children: "Success Icon Huge Button",
  colorScheme: "success",
  leftIcon: SearchIcon,
  size: "huge",
};

export const DarkSuccessIconHugeButton = DarkModeTemplate.bind({});
DarkSuccessIconHugeButton.args = {
  children: "Success Icon Huge Button",
  colorScheme: "success",
  leftIcon: SearchIcon,
  size: "huge",
};

export const SuccessIconMassiveButton = Template.bind({});
SuccessIconMassiveButton.args = {
  children: "Success Icon Massive Button",
  colorScheme: "success",
  leftIcon: SearchIcon,
  size: "massive",
};

export const DarkSuccessIconMassiveButton = DarkModeTemplate.bind({});
DarkSuccessIconMassiveButton.args = {
  children: "Success Icon Massive Button",
  colorScheme: "success",
  leftIcon: SearchIcon,
  size: "massive",
};
