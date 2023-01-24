import Table from "./Table";
import ThemeProvider from "../providers/ThemeProvider";
import DarkModeProvider from "../providers/DarkModeProvider";

import {
  columns,
  data,
  paginatedData,
  customComponentData,
} from "./data/sitcom-data";

export default {
  title: "Table",
  component: Table,
};

const Template = (args) => (
  <ThemeProvider>
    <Table {...args} />
  </ThemeProvider>
);

const DarkModeTemplate = (args) => (
  <ThemeProvider>
    <div style={{ padding: "3em", background: "#121A26" }}>
      <DarkModeProvider darkMode={true}>
        <Table {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  columns,
  data,
};

export const Search = Template.bind({});
Search.args = {
  search: true,
  data,
  columns,
};

export const Checkboxes = Template.bind({});
Checkboxes.args = {
  search: true,
  columns,
  data,
  showCheckboxes: true,
};

export const ButtonActions = Template.bind({});
ButtonActions.args = {
  search: true,
  enableCsvExport: true,
  enableCustomizeView: true,
  columns,
  data,
};

export const RightPagination = Template.bind({});
RightPagination.args = {
  search: true,
  enableCsvExport: true,
  enableCustomizeView: true,
  columns,
  data: paginatedData,
  paginate: true,
  paginateRight: true,
};

export const CustomComponent = Template.bind({});
CustomComponent.args = {
  search: true,
  enableCsvExport: true,
  enableCustomizeView: true,
  columns,
  data: customComponentData,
  paginate: true,
};

export const DarkModeDefault = DarkModeTemplate.bind({});
DarkModeDefault.args = {
  columns,
  data,
};

export const DarkModeSearch = DarkModeTemplate.bind({});
DarkModeSearch.args = {
  search: true,
  data,
  columns,
};

export const DarkModeCheckboxes = DarkModeTemplate.bind({});
DarkModeCheckboxes.args = {
  search: true,
  columns,
  data,
  showCheckboxes: true,
};

export const DarkModeButtonActions = DarkModeTemplate.bind({});
DarkModeButtonActions.args = {
  search: true,
  enableCsvExport: true,
  enableCustomizeView: true,
  columns,
  data,
};

export const DarkModeRightPagination = DarkModeTemplate.bind({});
DarkModeRightPagination.args = {
  search: true,
  enableCsvExport: true,
  enableCustomizeView: true,
  columns,
  data: paginatedData,
  paginate: true,
  paginateRight: true,
};

export const DarkModeCustomComponent = DarkModeTemplate.bind({});
DarkModeCustomComponent.args = {
  search: true,
  enableCsvExport: true,
  enableCustomizeView: true,
  columns,
  data: customComponentData,
  paginate: true,
};
