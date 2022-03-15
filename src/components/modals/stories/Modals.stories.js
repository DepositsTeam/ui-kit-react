import React from "react";
import Modals from "../src/Modals";
import Search from "../../icons/Search";

export default {
  title: "Modals",
  component: Modals,
};

const Template = (props) => <Modals {...props} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: "Input placeholder",
  label: "Form Label",
  formTitle: "Title",
  buttonLabel: "Primary Button"
};

export const Signature = Template.bind({});
Signature.args = {
  // placeholder: "Input placeholder",
  // label: "Form Label",
  signatureTitle: "Sign Contract",
  signatureContent: ""
};
