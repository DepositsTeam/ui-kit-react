import Pagination from "../src/Pagination";

export default {
    title: "Pagination",
    component: Pagination,
}

const Template = (args) => <Pagination {...args} />;

export const PaginationOne = Template.bind({});
