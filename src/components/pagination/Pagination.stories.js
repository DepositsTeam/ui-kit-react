import Pagination from "./Pagination";
import ThemeProvider from "../providers/ThemeProvider";
import DarkModeProvider from "../providers/DarkModeProvider";

export default {
  title: "Pagination",
  component: Pagination,
};

const Template = (args) => (
  <ThemeProvider>
    <Pagination {...args} />
  </ThemeProvider>
);

const DarkModeTemplate = (args) => (
  <ThemeProvider>
    <div style={{ padding: "3em", background: "#121A26" }}>
      <DarkModeProvider darkMode={true}>
        <Pagination {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>
);

export const PaginationOne = Template.bind({});
PaginationOne.args = {
  currentPage: 5,
  totalPages: 100,
  currentPageSiblings: 4,
};

export const PaginationOneSibling = Template.bind({});
PaginationOne.args = {
  currentPage: 1,
  totalPages: 100,
  currentPageSiblings: 1,
};

export const PaginationTwo = Template.bind({});
PaginationTwo.args = {
  currentPage: 5,
  totalPages: 5,
};

export const DarkModePaginationOne = DarkModeTemplate.bind({});
DarkModePaginationOne.args = {
  currentPage: 5,
  totalPages: 100,
  currentPageSiblings: 4,
};

export const DarkModePaginationOneSibling = DarkModeTemplate.bind({});
DarkModePaginationOne.args = {
  currentPage: 1,
  totalPages: 100,
  currentPageSiblings: 1,
};

export const DarkModePaginationTwo = DarkModeTemplate.bind({});
DarkModePaginationTwo.args = {
  currentPage: 5,
  totalPages: 5,
};
