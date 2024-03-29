import React from "react";
import Accordion from "./Accordion.jsx";

export default {
  title: "Accordion",
  component: Accordion,
};

const Template = (args) => <Accordion {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Personal information verification",
};
