import Card from "./Card.jsx";
import Box from "../box";
import Heading from "../heading";
import FilterIcon from "../icons/Filter";
import DarkModeProvider from "../providers/DarkModeProvider.jsx";
import ThemeProvider from "../providers/ThemeProvider.jsx";

export default {
  title: "Card",
  component: Card,
  argTypes: {},
};

const Template = (args) => (
  <ThemeProvider>
    <Card {...args} />
  </ThemeProvider>
);

const DarkModeTemplate = (args) => (
  <ThemeProvider>
    <div style={{ padding: "3em", background: "#121A26" }}>
      <DarkModeProvider darkMode={true}>
        <Card {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>
);

const HeaderFooterTemplate = (args) => (
  <ThemeProvider>
    <Card
      {...args}
      header={
        <Box
          width="100%"
          padding="16px"
          background="#f1f1f1"
          borderTopLeftRadius={"6px"}
          borderTopRightRadius={"6px"}
          boxShadow="0px 2px 4px rgba(0, 0, 0, 0.05)"
        >
          <Heading scale={"h5"} marginY={0} fontWeight={"500"}>
            Custom Header
          </Heading>
        </Box>
      }
      footer={
        <Box
          width="100%"
          padding="16px"
          background="#f1f1f1"
          borderBottomLeftRadius={"6px"}
          borderBottomRightRadius={"6px"}
          boxShadow="0px 2px 4px rgba(0, 0, 0, 0.05)"
        >
          <Heading scale={"h5"} marginY={0} fontWeight={"500"}>
            Custom Footer
          </Heading>
        </Box>
      }
    />
  </ThemeProvider>
);

const DarkModeHeaderFooterTemplate = (args) => (
  <ThemeProvider>
    <div style={{ padding: "3em", background: "#121A26" }}>
      <DarkModeProvider darkMode={true}>
        <Card
          {...args}
          header={
            <Box
              width="100%"
              padding="16px"
              background="#474d57"
              borderTopLeftRadius={"6px"}
              borderTopRightRadius={"6px"}
              boxShadow="0px 2px 4px rgba(0, 0, 0, 0.05)"
            >
              <Heading scale={"h5"} marginY={0} fontWeight={"500"}>
                Custom Header
              </Heading>
            </Box>
          }
          footer={
            <Box
              width="100%"
              padding="16px"
              background="#474d57"
              borderBottomLeftRadius={"6px"}
              borderBottomRightRadius={"6px"}
              boxShadow="0px 2px 4px rgba(0, 0, 0, 0.05)"
            >
              <Heading scale={"h5"} marginY={0} fontWeight={"500"}>
                Custom Footer
              </Heading>
            </Box>
          }
        />
      </DarkModeProvider>
    </div>
  </ThemeProvider>
);

const text =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu ac consectetur mauris in ipsum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu ac tr yi ng sth consectetur mauris in ipsum.";

export const Default = Template.bind({});
Default.args = {
  children: text,
  title: "Test title",
  desc: "I have a test description",
};

export const DefaultDark = DarkModeTemplate.bind({});
DefaultDark.args = {
  children: text,
  title: "Test title",
  desc: "I have a test description",
};

export const Icon = Template.bind({});
Icon.args = {
  children: text,
  icon: FilterIcon,
  title: "Test title",
};

export const IconDark = DarkModeTemplate.bind({});
IconDark.args = {
  children: text,
  icon: FilterIcon,
  title: "Test title",
};

export const Radio = Template.bind({});
Radio.args = {
  children: text,
  radio: true,
  title: "Test title",
};

export const RadioDark = DarkModeTemplate.bind({});
RadioDark.args = {
  children: text,
  radio: true,
  title: "Test title",
};

export const CheckBox = Template.bind({});
CheckBox.args = {
  children: text,
  checkbox: true,
  title: "Test title",
};

export const CheckBoxDark = DarkModeTemplate.bind({});
CheckBoxDark.args = {
  children: text,
  checkbox: true,
  title: "Test title",
};

export const RadioIcon = Template.bind({});
RadioIcon.args = {
  children: text,
  radio: true,
  icon: FilterIcon,
  title: "Test title",
};
RadioIcon.storyName = "Radio & Icon";

export const RadioIconDark = DarkModeTemplate.bind({});
RadioIconDark.args = {
  children: text,
  radio: true,
  icon: FilterIcon,
  title: "Test title",
};
RadioIconDark.storyName = "Dark Radio & Icon";

export const CheckIcon = Template.bind({});
CheckIcon.args = {
  children: text,
  checkbox: true,
  icon: FilterIcon,
  title: "Test title",
};
CheckIcon.storyName = "Checkbox & Icon";

export const CheckIconDark = DarkModeTemplate.bind({});
CheckIconDark.args = {
  children: text,
  checkbox: true,
  icon: FilterIcon,
  title: "Test title",
};
CheckIconDark.storyName = "Dark Checkbox & Icon";

export const NoDesc = Template.bind({});
NoDesc.storyName = "No Description";

export const NoDescDark = DarkModeTemplate.bind({});
NoDescDark.storyName = "No Description Dark";

export const NoDescIcon = Template.bind({});
NoDescIcon.args = {
  icon: FilterIcon,
  title: "Test title",
};
NoDescIcon.storyName = "Icon - No description";

export const NoDescIconDark = DarkModeTemplate.bind({});
NoDescIconDark.args = {
  icon: FilterIcon,
  title: "Test title",
};
NoDescIconDark.storyName = "Icon - No description Dark";

export const NoDescRadio = Template.bind({});
NoDescRadio.args = {
  radio: true,
  title: "Test title",
};
NoDescRadio.storyName = "Radio - No description";

export const NoDescRadioDark = DarkModeTemplate.bind({});
NoDescRadioDark.args = {
  radio: true,
  title: "Test title",
};
NoDescRadioDark.storyName = "Radio - No description Dark";

export const NoDescCheckBox = Template.bind({});
NoDescCheckBox.args = {
  checkbox: true,
  title: "Test title",
};
NoDescCheckBox.storyName = "Checkbox - No description";

export const NoDescCheckBoxDark = DarkModeTemplate.bind({});
NoDescCheckBoxDark.args = {
  checkbox: true,
  title: "Test title",
};
NoDescCheckBoxDark.storyName = "Checkbox - No description Dark";

export const NoDescRadioIcon = Template.bind({});
NoDescRadioIcon.args = {
  radio: true,
  icon: FilterIcon,
  title: "Test title",
};
NoDescRadioIcon.storyName = "Radio & Icon - No description";

export const NoDescRadioIconDark = DarkModeTemplate.bind({});
NoDescRadioIconDark.args = {
  radio: true,
  icon: FilterIcon,
  title: "Test title",
};
NoDescRadioIconDark.storyName = "Radio & Icon - No description";

export const NoDescCheckIcon = Template.bind({});
NoDescCheckIcon.args = {
  checkbox: true,
  icon: FilterIcon,
  title: "Test title",
};
NoDescCheckIcon.storyName = "Checkbox & Icon - No description";

export const NoDescCheckIconDark = DarkModeTemplate.bind({});
NoDescCheckIconDark.args = {
  checkbox: true,
  icon: FilterIcon,
  title: "Test title",
};
NoDescCheckIconDark.storyName = "Checkbox & Icon - No description Dark";

export const CustomHeaderAndFooter = HeaderFooterTemplate.bind({});
CustomHeaderAndFooter.args = {
  desc: "I am some awesome content",
  title: "Test title",
};

export const CustomHeaderAndFooterDark = DarkModeHeaderFooterTemplate.bind({});
CustomHeaderAndFooterDark.args = {
  desc: "I am some awesome content",
  title: "Test title",
};
