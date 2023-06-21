import Loader from "./Loader.jsx";
import ThemeProvider from "../providers/ThemeProvider.jsx";

export default {
  title: "Loader",
  component: Loader,
  argTypes: {
    fullPage: {
      control: { type: "boolean" },
    },
    loading: {
      control: { type: "boolean" },
    },
    loader: {
      control: { type: "select" },
      options: ["ring", "equalizer", "ringed-circle"],
    },
    smartColor: {
      control: { type: "color" },
    },
    translucent: {
      control: { type: "boolean" },
    },
    loaderSize: {
      control: { type: "text" },
      table: {
        defaultValue: "80px",
      },
    },
  },
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

export const EqualizerLoader = Template.bind({});
EqualizerLoader.args = {
  loader: "equalizer",
};

export const RingedCircle = Template.bind({});
RingedCircle.args = {
  loader: "ringed-circle",
};
