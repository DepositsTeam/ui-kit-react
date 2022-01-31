import React from "react";
import Heading from "../src/Heading";

export default {
  title: "Typography/Heading",
  component: Heading,
};

const Template = ({ children, ...args }) => (
  <Heading {...args}>{children}</Heading>
);

export const H1 = Template.bind({});
H1.args = {
  children: "H1",
};

export const H2 = Template.bind({});
H2.args = {
  children: "H2",
};

export const H3 = Template.bind({});
H3.args = {
  children: "H3",
};

export const H4 = Template.bind({});
H4.args = {
  children: "H4",
};

export const H5 = Template.bind({});
H5.args = {
  children: "H5",
};

export const H6 = Template.bind({});
H6.args = {
  children: "H6",
};

export const Subtitle1 = Template.bind({});
Subtitle1.args = {
  children: "Subtitle1",
  scale: "subtitle-1",
};

export const Subtitle2 = Template.bind({});
Subtitle2.args = {
  children: "Subtitle2",
  scale: "subtitle-2",
};

export const Subhead = Template.bind({});
Subhead.args = {
  children: "Subhead",
  scale: "subhead",
};
