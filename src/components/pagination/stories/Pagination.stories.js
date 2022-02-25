import Pagination from "../src/Pagination";

export default {
    title: "Pagination",
    component: Pagination,
}

const Template = (args) => <Pagination {...args} />;

export const PaginationOne = Template.bind({});
PaginationOne.args = {
    maxPageNumber: 5,
    numberOfPage: 5,
}

export const PaginationTwo = Template.bind({});
PaginationTwo.args = {
    maxPageNumber: 5,
    numberOfPage: 100,
}