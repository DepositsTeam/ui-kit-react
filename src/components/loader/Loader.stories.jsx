import Loader from "./Loader.jsx";
import ThemeProvider from "../providers/ThemeProvider.jsx";

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
