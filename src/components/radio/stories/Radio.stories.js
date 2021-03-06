import React from "react";
import Radio from "../src/Radio";

export default {
  title: "Radio",
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
