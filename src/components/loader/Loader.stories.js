import Loader from "./Loader";
import ThemeProvider from "../providers/ThemeProvider";

export default {
  title: "Loader",
  component: Loader,
};

const Template = (args) => (
  <ThemeProvider>
    <Loader {...args} />
  </ThemeProvider>
);

export const Default = Template.bind({});

export const FullPage = Template.bind({});
FullPage.args = {
  fullPage: true,
};
