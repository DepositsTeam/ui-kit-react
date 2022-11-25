import Dropdown from "./Dropdown";

export default {
  title: "Forms/Dropdown",
  component: Dropdown,
};

const Template = (args) => <Dropdown {...args} />;

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
];

export const Default = Template.bind({});
Default.args = {
  options: [...options],
  onChange(value) {
    console.log("New value is", value);
  },
};

export const Label = Template.bind({});
Label.args = {
  options: [...options],
  label: "Dropdown",
};
