import React from "react"
import PhoneField from "./PhoneField"

export default {
    title: "Phone Field",
    component: PhoneField
}

const Template = args => <PhoneField {...args} />

export const Default = Template.bind({})
Default.args = {
    label: "Form Label"
}
Default.args = {
    placeholder: "Input placeholder",
    label: "Form Label",
};

export const Disabled = Template.bind({});
Disabled.args = {
    placeholder: "Input placeholder",
    label: "Form Label",
    disabled: true,
};

export const Error = Template.bind({});
Error.args = {
    placeholder: "Input placeholder",
    label: "Form Label",
    errorMessage: "Error Message",
};
