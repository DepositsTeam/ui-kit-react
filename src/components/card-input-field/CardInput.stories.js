import React from "react";
import CardInputField from "./CardInputField";
import ThemeProvider from "../providers/ThemeProvider";
import DarkModeProvider from "../providers/DarkModeProvider";

export default {
  title: "Forms/Card Input Field",
  component: CardInputField,
};
const consolee = (card) => console.log(card);
const Template = (args) => (
  <ThemeProvider>
    <CardInputField onChange={consolee} {...args} />
  </ThemeProvider>
);

const DarkModeTemplate = (args) => (
  <ThemeProvider>
    <div style={{ padding: "3em", background: "#121A26" }}>
      <DarkModeProvider darkMode={true}>
        <CardInputField onChange={consolee} {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>
);

export const Default = Template.bind({});

export const InitialValue = Template.bind({});
InitialValue.args = {
  initialCardNo: "5399415804082871",
  initialCardExp: "10/37",
  initialCardCvv: "544",
};

export const DarkDefault = DarkModeTemplate.bind({});

export const DarkInitialValue = DarkModeTemplate.bind({});
DarkInitialValue.args = {
  initialCardNo: "5399415804082871",
  initialCardExp: "10/37",
  initialCardCvv: "544",
};
