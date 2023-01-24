import FilePickerInline from "./FilePickerInline";
import DarkModeProvider from "../providers/DarkModeProvider";
import ThemeProvider from "../providers/ThemeProvider";
import FilePicker from "../file-picker";

export default {
  title: "Forms/File Picker (Inline)",
  component: FilePickerInline,
  argTypes: {},
};

const Template = (args) => (
  <ThemeProvider>
    <FilePickerInline {...args} />
  </ThemeProvider>
);

const DarkModeTemplate = (args) => (
  <ThemeProvider>
    <div style={{ padding: "3em", background: "#121A26" }}>
      <DarkModeProvider darkMode={true}>
        <FilePickerInline {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>
);

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

export const DarkMode = DarkModeTemplate.bind({});
export const ErrorDark = DarkModeTemplate.bind({});
ErrorDark.args = {
  errorMessage: "This is a random error",
};
export const OneMbDark = DarkModeTemplate.bind({});
OneMbDark.args = {
  fileMaxSize: 1,
};

export const ImageDark = DarkModeTemplate.bind({});
ImageDark.args = {
  accepts: "image",
};

export const DocumentDark = DarkModeTemplate.bind({});
DocumentDark.args = {
  accepts: "document",
};

export const CsvDark = DarkModeTemplate.bind({});
CsvDark.args = {
  accepts: "csv",
};
