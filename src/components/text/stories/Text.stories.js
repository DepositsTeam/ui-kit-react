import React from "react";
import Text from "../src/Text";

export default {
  title: "Typography/Text",
  component: Text,
};

const Template = ({ children, ...args }) => <Text {...args}>{children}</Text>;

export const Body = Template.bind({});
Body.args = { children: "Body" };

export const Paragraph18 = Template.bind({});
Paragraph18.args = { children: "Paragraph18", scale: "p-18" };

export const Footnote = Template.bind({});
Footnote.args = { children: "Footnote", scale: "footnote" };

export const Overline = Template.bind({});
Overline.args = { children: "Overline", scale: "overline" };

export const FootnoteCaps = Template.bind({});
FootnoteCaps.args = { children: "Footnote All Caps", scale: "footnote-caps" };
FootnoteCaps.storyName = "Footnote All Caps";
