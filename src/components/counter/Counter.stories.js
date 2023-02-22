import Counter from "./Counter";
import DarkModeProvider from "../providers/DarkModeProvider";
import ThemeProvider from "../providers/ThemeProvider";


export default {
  title: "Forms/Counter",
  component: Counter,
  argTypes: {},
};

const Template = (args) => (
  <ThemeProvider>
    <Counter {...args} />
  </ThemeProvider>
);

const DarkModeTemplate = (args) => (
    <ThemeProvider>
      <div style={{ padding: "3em", background: "#121A26" }}>
        <DarkModeProvider darkMode={true}>
          <Counter {...args} />
        </DarkModeProvider>
      </div>
    </ThemeProvider>
);


export const Default = Template.bind({});

export const DarkDefault = DarkModeTemplate.bind({});

export const MaxIs10AndMinIs0 = Template.bind({});
MaxIs10AndMinIs0.args = {
  max: 10,
  min: 0,
};
