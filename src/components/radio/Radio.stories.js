import React from "react";
import Radio from "./Radio";

export default {
  title: "Forms/Radio",
  component: Radio,
};

const Template = (args) => <Radio {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Checking",
};

export const Ringed = Template.bind({});
Ringed.args = {
  label: "Checking",
  ringed: true,
};
