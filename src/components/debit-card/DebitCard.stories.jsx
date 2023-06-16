import DebitCard from "./DebitCard.jsx";

export default {
  title: "Debit Card",
  component: DebitCard,
};

const Template = (args) => <DebitCard {...args} />;

export const Default = Template.bind({});
