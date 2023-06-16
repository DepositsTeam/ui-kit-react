import DebitCardBalance from "./DebitCardBalance.jsx";

export default {
  title: "Debit Card Balance",
  component: DebitCardBalance,
};

const Template = (args) => <DebitCardBalance {...args} />;

export const Default = Template.bind({});

export const DisabledHiding = Template.bind({});
DisabledHiding.args = {
  enableHiding: false,
};
