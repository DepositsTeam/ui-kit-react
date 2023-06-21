import React from "react";
import FilePicker from "./FilePicker.jsx";
import DarkModeProvider from "../providers/DarkModeProvider.jsx";
import ThemeProvider from "../providers/ThemeProvider.jsx";

export default {
  title: "Forms/File Picker",
  component: FilePicker,
  argTypes: {},
};

const Template = (args) => (
  <ThemeProvider>
    <FilePicker {...args} />
  </ThemeProvider>
);

const DarkModeTemplate = (args) => (
  <ThemeProvider>
    <div style={{ padding: "3em", background: "#121A26" }}>
      <DarkModeProvider darkMode={true}>
        <FilePicker {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>
);

export const Default = Template.bind({});

export const Title = Template.bind({});
Title.args = {
  title: "Upload beneficiary list",
};

export const Primary = Template.bind({});
Primary.args = {
  title: "Upload beneficiary list",
  primaryColorScheme: true,
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

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: "Upload a file",
};

export const DarkMode = DarkModeTemplate.bind({});

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
