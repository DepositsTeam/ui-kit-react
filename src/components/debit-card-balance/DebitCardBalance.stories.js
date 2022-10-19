import DebitCardBalance from "./DebitCardBalance";

export default {
  title: "Debit Card Balance",
  component: DebitCardBalance,
};

const Template = (args) => <DebitCardBalance {...args} />;

export const Default = Template.bind({});
