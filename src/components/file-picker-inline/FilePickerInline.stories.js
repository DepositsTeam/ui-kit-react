import FilePickerInline from "./FilePickerInline";

export default {
  component: FilePickerInline,
  title: "Forms / File Picker (Inline)",
};

const Template = (args) => <FilePickerInline {...args} />;

export const Default = Template.bind({});
export const Button = Template.bind({});
Button.args = {
  variant: "button",
  btnText: "+ Upload front of driver's license",
};
export const Error = Template.bind({});
Error.args = {
  errorMessage: "This is a random error",
};
export const OneMb = Template.bind({});
OneMb.args = {
  fileMaxSize: 1,
};

export const Image = Template.bind({});
Image.args = {
  accepts: "image",
};

export const Document = Template.bind({});
Document.args = {
  accepts: "document",
};

export const Csv = Template.bind({});
Csv.args = {
  accepts: "csv",
};
