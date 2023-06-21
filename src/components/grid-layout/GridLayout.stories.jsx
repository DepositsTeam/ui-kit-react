import GridLayout from "./GridLayout.jsx";
import Box from "../box";

export default {
  title: "Layouts/Grid Layout",
  component: GridLayout,
  argTypes: {},
};

const Template = (args) => (
  <GridLayout {...args}>
    <Box background="#0CB9E9" borderRadius="6px" />
    <Box background="#0CB9E9" borderRadius="6px" />
    <Box background="#0CB9E9" borderRadius="6px" />
    <Box background="#0CB9E9" borderRadius="6px" />
    <Box background="#0CB9E9" borderRadius="6px" />
    <Box background="#0CB9E9" borderRadius="6px" />
    <Box background="#0CB9E9" borderRadius="6px" />
  </GridLayout>
);

export const Default = Template.bind({});
