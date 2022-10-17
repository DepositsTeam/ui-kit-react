import React from "react";
import CardInputField from "./CardInputField";

export default {
  title: "Forms/Card Input Field",
  component: CardInputField,
};
const consolee = (card) => console.log(card);
const Template = (args) => <CardInputField onChange={consolee} {...args} />;

export const Default = Template.bind({});

export const InitialValue = Template.bind({});
InitialValue.args = {
  initialCardNo: "5399415804082871",
  initialCardExp: "10/37",
  initialCardCvv: "544",
};
