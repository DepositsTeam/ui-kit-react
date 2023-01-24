import Badge from "./Badge";
import ThemeProvider from "../providers/ThemeProvider";
import DarkModeProvider from "../providers/DarkModeProvider";

export default {
  title: "Badge",
  component: Badge,
  argTypes: {},
};

const Template = (args) => (
  <ThemeProvider>
    <Badge {...args} />
  </ThemeProvider>
);

const DarkModeTemplate = (args) => (
  <ThemeProvider>
    <div style={{ padding: "3em", background: "#121A26" }}>
      <DarkModeProvider darkMode={true}>
        <Badge {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>
);

export const SmallNeutral = Template.bind({});
SmallNeutral.args = {
  children: "Neutral",
};

export const DarkSmallNeutral = DarkModeTemplate.bind({});
DarkSmallNeutral.args = {
  children: "Neutral",
};

export const SmallGreen = Template.bind({});
SmallGreen.args = {
  children: "Green",
  colorScheme: "green",
};

export const DarkSmallGreen = DarkModeTemplate.bind({});
DarkSmallGreen.args = {
  children: "Green",
  colorScheme: "green",
};

export const SmallRed = Template.bind({});
SmallRed.args = {
  children: "Red",
  colorScheme: "red",
};

export const DarkSmallRed = DarkModeTemplate.bind({});
DarkSmallRed.args = {
  children: "Red",
  colorScheme: "red",
};

export const SmallYellow = Template.bind({});
SmallYellow.args = {
  children: "Yellow",
  colorScheme: "yellow",
};

export const DarkSmallYellow = DarkModeTemplate.bind({});
DarkSmallYellow.args = {
  children: "Yellow",
  colorScheme: "yellow",
};

export const SmallCyan = Template.bind({});
SmallCyan.args = {
  children: "Cyan",
  colorScheme: "cyan",
};

export const DarkSmallCyan = DarkModeTemplate.bind({});
DarkSmallCyan.args = {
  children: "Cyan",
  colorScheme: "cyan",
};

export const SmallBlue = Template.bind({});
SmallBlue.args = {
  children: "Blue",
  colorScheme: "blue",
};

export const DarkSmallBlue = DarkModeTemplate.bind({});
DarkSmallBlue.args = {
  children: "Blue",
  colorScheme: "blue",
};

export const MediumNeutral = Template.bind({});
MediumNeutral.args = {
  children: "Neutral",
  size: "medium",
};

export const DarkMediumNeutral = DarkModeTemplate.bind({});
DarkMediumNeutral.args = {
  children: "Neutral",
  size: "medium",
};

export const MediumGreen = Template.bind({});
MediumGreen.args = {
  children: "Green",
  colorScheme: "green",
  size: "medium",
};

export const DarkMediumGreen = DarkModeTemplate.bind({});
DarkMediumGreen.args = {
  children: "Green",
  colorScheme: "green",
  size: "medium",
};

export const MediumRed = Template.bind({});
MediumRed.args = {
  children: "Red",
  colorScheme: "red",
  size: "medium",
};

export const DarkMediumRed = DarkModeTemplate.bind({});
DarkMediumRed.args = {
  children: "Red",
  colorScheme: "red",
  size: "medium",
};

export const MediumYellow = Template.bind({});
MediumYellow.args = {
  children: "Yellow",
  colorScheme: "yellow",
  size: "medium",
};

export const DarkMediumYellow = DarkModeTemplate.bind({});
DarkMediumYellow.args = {
  children: "Yellow",
  colorScheme: "yellow",
  size: "medium",
};

export const MediumCyan = Template.bind({});
MediumCyan.args = {
  children: "Cyan",
  colorScheme: "cyan",
  size: "medium",
};

export const DarkMediumCyan = DarkModeTemplate.bind({});
DarkMediumCyan.args = {
  children: "Cyan",
  colorScheme: "cyan",
  size: "medium",
};

export const MediumBlue = Template.bind({});
MediumBlue.args = {
  children: "Blue",
  colorScheme: "blue",
  size: "large",
};

export const DarkMediumBlue = DarkModeTemplate.bind({});
DarkMediumBlue.args = {
  children: "Blue",
  colorScheme: "blue",
  size: "large",
};

export const LargeNeutral = Template.bind({});
LargeNeutral.args = {
  children: "Neutral",
  size: "large",
};

export const DarkLargeNeutral = DarkModeTemplate.bind({});
DarkLargeNeutral.args = {
  children: "Neutral",
  size: "large",
};

export const LargeGreen = Template.bind({});
LargeGreen.args = {
  children: "Green",
  colorScheme: "green",
  size: "large",
};

export const DarkLargeGreen = DarkModeTemplate.bind({});
DarkLargeGreen.args = {
  children: "Green",
  colorScheme: "green",
  size: "large",
};

export const LargeRed = Template.bind({});
LargeRed.args = {
  children: "Red",
  colorScheme: "red",
  size: "large",
};

export const DarkLargeRed = DarkModeTemplate.bind({});
DarkLargeRed.args = {
  children: "Red",
  colorScheme: "red",
  size: "large",
};

export const LargeYellow = Template.bind({});
LargeYellow.args = {
  children: "Yellow",
  colorScheme: "yellow",
  size: "large",
};

export const DarkLargeYellow = DarkModeTemplate.bind({});
DarkLargeYellow.args = {
  children: "Yellow",
  colorScheme: "yellow",
  size: "large",
};

export const LargeCyan = Template.bind({});
LargeCyan.args = {
  children: "Cyan",
  colorScheme: "cyan",
  size: "large",
};

export const DarkLargeCyan = DarkModeTemplate.bind({});
DarkLargeCyan.args = {
  children: "Cyan",
  colorScheme: "cyan",
  size: "large",
};

export const LargeBlue = Template.bind({});
LargeBlue.args = {
  children: "Blue",
  colorScheme: "blue",
  size: "large",
};

export const DarkLargeBlue = DarkModeTemplate.bind({});
DarkLargeBlue.args = {
  children: "Blue",
  colorScheme: "blue",
  size: "large",
};

export const SubtleSmallNeutral = Template.bind({});
SubtleSmallNeutral.args = {
  children: "Neutral",
  subtle: true,
};

export const DarkSubtleSmallNeutral = DarkModeTemplate.bind({});
DarkSubtleSmallNeutral.args = {
  children: "Neutral",
  subtle: true,
};

export const SubtleSmallGreen = Template.bind({});
SubtleSmallGreen.args = {
  children: "Green",
  subtle: true,
  colorScheme: "green",
};

export const DarkSubtleSmallGreen = DarkModeTemplate.bind({});
DarkSubtleSmallGreen.args = {
  children: "Green",
  subtle: true,
  colorScheme: "green",
};

export const SubtleSmallRed = Template.bind({});
SubtleSmallRed.args = {
  children: "Red",
  subtle: true,
  colorScheme: "red",
};

export const DarkSubtleSmallRed = DarkModeTemplate.bind({});
DarkSubtleSmallRed.args = {
  children: "Red",
  subtle: true,
  colorScheme: "red",
};

export const SubtleSmallYellow = Template.bind({});
SubtleSmallYellow.args = {
  children: "Yellow",
  subtle: true,
  colorScheme: "yellow",
};

export const DarkSubtleSmallYellow = DarkModeTemplate.bind({});
DarkSubtleSmallYellow.args = {
  children: "Yellow",
  subtle: true,
  colorScheme: "yellow",
};

export const SubtleSmallCyan = Template.bind({});
SubtleSmallCyan.args = {
  children: "Cyan",
  subtle: true,
  colorScheme: "cyan",
};

export const DarkSubtleSmallCyan = DarkModeTemplate.bind({});
DarkSubtleSmallCyan.args = {
  children: "Cyan",
  subtle: true,
  colorScheme: "cyan",
};

export const SubtleSmallBlue = Template.bind({});
SubtleSmallBlue.args = {
  children: "Blue",
  subtle: true,
  colorScheme: "blue",
};

export const DarkSubtleSmallBlue = DarkModeTemplate.bind({});
DarkSubtleSmallBlue.args = {
  children: "Blue",
  subtle: true,
  colorScheme: "blue",
};

export const SubtleMediumNeutral = Template.bind({});
SubtleMediumNeutral.args = {
  children: "Neutral",
  subtle: true,
  size: "medium",
};

export const SubtleMediumNeutralDark = DarkModeTemplate.bind({});
SubtleMediumNeutralDark.args = {
  children: "Neutral",
  subtle: true,
  size: "medium",
};

export const SubtleMediumGreen = Template.bind({});
SubtleMediumGreen.args = {
  children: "Green",
  subtle: true,
  colorScheme: "green",
  size: "medium",
};

export const SubtleMediumGreenDark = DarkModeTemplate.bind({});
SubtleMediumGreenDark.args = {
  children: "Green",
  subtle: true,
  colorScheme: "green",
  size: "medium",
};

export const SubtleMediumRed = Template.bind({});
SubtleMediumRed.args = {
  children: "Red",
  subtle: true,
  colorScheme: "red",
  size: "medium",
};

export const SubtleMediumRedDark = DarkModeTemplate.bind({});
SubtleMediumRedDark.args = {
  children: "Red",
  subtle: true,
  colorScheme: "red",
  size: "medium",
};

export const SubtleMediumYellow = Template.bind({});
SubtleMediumYellow.args = {
  children: "Yellow",
  subtle: true,
  colorScheme: "yellow",
  size: "medium",
};

export const SubtleMediumYellowDark = DarkModeTemplate.bind({});
SubtleMediumYellowDark.args = {
  children: "Yellow",
  subtle: true,
  colorScheme: "yellow",
  size: "medium",
};

export const SubtleMediumCyan = Template.bind({});
SubtleMediumCyan.args = {
  children: "Cyan",
  subtle: true,
  colorScheme: "cyan",
  size: "medium",
};

export const SubtleMediumCyanDark = DarkModeTemplate.bind({});
SubtleMediumCyanDark.args = {
  children: "Cyan",
  subtle: true,
  colorScheme: "cyan",
  size: "medium",
};

export const SubtleMediumBlue = Template.bind({});
SubtleMediumBlue.args = {
  children: "Blue",
  subtle: true,
  colorScheme: "blue",
  size: "large",
};

export const DarkSubtleMediumBlue = DarkModeTemplate.bind({});
DarkSubtleMediumBlue.args = {
  children: "Blue",
  subtle: true,
  colorScheme: "blue",
  size: "large",
};

export const SubtleLargeNeutral = Template.bind({});
SubtleLargeNeutral.args = {
  children: "Neutral",
  subtle: true,
  size: "large",
};

export const SubtleLargeNeutralDark = DarkModeTemplate.bind({});
SubtleLargeNeutralDark.args = {
  children: "Neutral",
  subtle: true,
  size: "large",
};

export const SubtleLargeGreen = Template.bind({});
SubtleLargeGreen.args = {
  children: "Green",
  subtle: true,
  colorScheme: "green",
  size: "large",
};

export const SubtleLargeGreenDark = DarkModeTemplate.bind({});
SubtleLargeGreenDark.args = {
  children: "Green",
  subtle: true,
  colorScheme: "green",
  size: "large",
};

export const SubtleLargeRed = Template.bind({});
SubtleLargeRed.args = {
  children: "Red",
  subtle: true,
  colorScheme: "red",
  size: "large",
};

export const SubtleLargeRedDark = DarkModeTemplate.bind({});
SubtleLargeRedDark.args = {
  children: "Red",
  subtle: true,
  colorScheme: "red",
  size: "large",
};

export const SubtleLargeYellow = Template.bind({});
SubtleLargeYellow.args = {
  children: "Yellow",
  subtle: true,
  colorScheme: "yellow",
  size: "large",
};

export const SubtleLargeYellowDark = DarkModeTemplate.bind({});
SubtleLargeYellowDark.args = {
  children: "Yellow",
  subtle: true,
  colorScheme: "yellow",
  size: "large",
};

export const SubtleLargeCyan = Template.bind({});
SubtleLargeCyan.args = {
  children: "Cyan",
  subtle: true,
  colorScheme: "cyan",
  size: "large",
};

export const SubtleLargeCyanDark = DarkModeTemplate.bind({});
SubtleLargeCyanDark.args = {
  children: "Cyan",
  subtle: true,
  colorScheme: "cyan",
  size: "large",
};

export const SubtleLargeBlue = Template.bind({});
SubtleLargeBlue.args = {
  children: "Blue",
  subtle: true,
  colorScheme: "blue",
  size: "large",
};

export const SubtleLargeBlueDark = DarkModeTemplate.bind({});
SubtleLargeBlueDark.args = {
  children: "Blue",
  subtle: true,
  colorScheme: "blue",
  size: "large",
};

export const SubtleHugeNeutral = Template.bind({});
SubtleHugeNeutral.args = {
  children: "Neutral",
  subtle: true,
  size: "huge",
};

export const SubtleHugeNeutralDark = DarkModeTemplate.bind({});
SubtleHugeNeutralDark.args = {
  children: "Neutral",
  subtle: true,
  size: "huge",
};

export const SubtleHugeGreen = Template.bind({});
SubtleHugeGreen.args = {
  children: "Green",
  subtle: true,
  colorScheme: "green",
  size: "huge",
};

export const SubtleHugeGreenDark = DarkModeTemplate.bind({});
SubtleHugeGreenDark.args = {
  children: "Green",
  subtle: true,
  colorScheme: "green",
  size: "huge",
};

export const SubtleHugeRed = Template.bind({});
SubtleHugeRed.args = {
  children: "Red",
  subtle: true,
  colorScheme: "red",
  size: "huge",
};

export const SubtleHugeRedDark = DarkModeTemplate.bind({});
SubtleHugeRedDark.args = {
  children: "Red",
  subtle: true,
  colorScheme: "red",
  size: "huge",
};

export const SubtleHugeYellow = Template.bind({});
SubtleHugeYellow.args = {
  children: "Yellow",
  subtle: true,
  colorScheme: "yellow",
  size: "huge",
};

export const SubtleHugeYellowDark = DarkModeTemplate.bind({});
SubtleHugeYellowDark.args = {
  children: "Yellow",
  subtle: true,
  colorScheme: "yellow",
  size: "huge",
};

export const SubtleHugeCyan = Template.bind({});
SubtleHugeCyan.args = {
  children: "Cyan",
  subtle: true,
  colorScheme: "cyan",
  size: "huge",
};

export const SubtleHugeCyanDark = DarkModeTemplate.bind({});
SubtleHugeCyanDark.args = {
  children: "Cyan",
  subtle: true,
  colorScheme: "cyan",
  size: "huge",
};

export const SubtleHugeBlue = Template.bind({});
SubtleHugeBlue.args = {
  children: "Blue",
  subtle: true,
  colorScheme: "blue",
  size: "huge",
};

export const SubtleHugeBlueDark = DarkModeTemplate.bind({});
SubtleHugeBlueDark.args = {
  children: "Blue",
  subtle: true,
  colorScheme: "blue",
  size: "huge",
};
