import AutoLayout from "./AutoLayout.jsx";
import Box from "../box";

export default {
  title: "Layouts/Auto layout",
  component: AutoLayout,
  argTypes: {},
};

const Template = (args) => (
  <AutoLayout {...args}>
    <Box background="#0CB9E9" borderRadius="6px" height="48px" width="48px" />
    <Box background="#0CB9E9" borderRadius="6px" height="48px" width="48px" />
    <Box background="#0CB9E9" borderRadius="6px" height="48px" width="48px" />
    <Box background="#0CB9E9" borderRadius="6px" height="48px" width="48px" />
    <Box background="#0CB9E9" borderRadius="6px" height="48px" width="48px" />
    <Box background="#0CB9E9" borderRadius="6px" height="48px" width="48px" />
    <Box background="#0CB9E9" borderRadius="6px" height="48px" width="48px" />
  </AutoLayout>
);

export const Default = Template.bind({});
