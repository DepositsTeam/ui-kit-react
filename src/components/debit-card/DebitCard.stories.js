import DebitCard from "./DebitCard";

export default {
  title: "Debit Card",
  component: DebitCard,
};

const Template = (args) => <DebitCard {...args} />;

export const Default = Template.bind({});
