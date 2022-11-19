import TextArea from "./TextArea";

export default {
    title: "Text Area",
    component: TextArea,
}

const Template = (props) => <TextArea {...props} />;

export const Default = Template.bind({});
Default.args = {
    label: "Form Label",
    placeholder: "Input placeholder",
};

export const Disabled = Template.bind({})
Disabled.args = {
    label: "Form Label",
    placeholder: "Input placeholder",
    disabled: true,
};

export const Error = Template.bind({})
Error.args = {
    label: "Form Label",
    placeholder: "Input placeholder",
    errorMessage: "Error message",
}