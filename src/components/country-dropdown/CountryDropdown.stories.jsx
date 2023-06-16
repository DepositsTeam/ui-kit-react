import CountryDropdown from "./CountryDropdown.jsx";

export default {
  component: CountryDropdown,
  title: "Forms/Country Dropdown",
};

const Template = (args) => <CountryDropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Select a country",
};
