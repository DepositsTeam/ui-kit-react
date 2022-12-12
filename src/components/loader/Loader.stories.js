import Loader from "./Loader";

export default {
  title: "Loader",
  component: Loader,
};

const Template = (args) => <Loader {...args} />;

export const Default = Template.bind({});

export const FullPage = Template.bind({});
FullPage.args = {
  fullPage: true,
};
