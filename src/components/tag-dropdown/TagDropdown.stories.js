import TagDropdown from "./TagDropdown";

export default {
  title: "Forms/Tag Dropdown",
  component: TagDropdown,
};

const Template = (args) => <TagDropdown {...args} />;

const options = [
  {
    text: "Banking kit",
    value: "banking",
  },
  {
    text: "Money kit",
    value: "money",
  },
  {
    text: "Identity kit",
    value: "identity",
  },
  {
    text: "UI kit",
    value: "ui",
  },
  {
    text: "Commerce kit",
    value: "commerce",
  },
  {
    text: "Benefits",
    value: "benefits",
  },
  {
    text: "API Docs",
    value: "api_docs",
  },
  {
    text: "Console",
    value: "console",
  },
  {
    text: "Statements",
    value: "statements",
  },
  {
    text: "Payouts",
    value: "payouts",
  },
];

const stringOptions = ["Commerce", "Identity", "UI", "Money", "Banking"];

export const Default = Template.bind({});
Default.args = {
  options: [...options],
};

export const Label = Template.bind({});
Label.args = {
  options: [...options],
  label: "Dropdown",
};

export const StringOptions = Template.bind({});
StringOptions.args = {
  options: [...stringOptions],
  label: "String Options",
};
