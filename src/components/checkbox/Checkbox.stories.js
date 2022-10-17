import React from "react";
import Checkbox from "./Checkbox";

export default {
  title: "Forms/Checkbox",
  component: Checkbox,
};

const Template = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "I agree to the terms and conditions",
};

export const Dashed = Template.bind({});
Dashed.args = {
  label: "I agree to the terms and conditions",
  dashed: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Disabled checkbox",
  disabled: true,
};
