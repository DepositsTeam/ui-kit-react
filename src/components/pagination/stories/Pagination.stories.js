import Pagination from "../src/Pagination";

export default {
    title: "Pagination",
    component: Pagination,
}

const Template = (args) => <Pagination {...args} />;

export const ExamplePaginationStory = (args) => {

	return (
		<Pagination
			totalPages={100}
            currentPageSiblings={4}  
            currentPage={1} 
            onPageChange={(page) => {
                console.log("page changed to: ", page);
            } }
		/>
	);
};
ExamplePaginationStory.parameters = {
	docs: { source: { type: "code" } },
};
ExamplePaginationStory.storyname = "Pagination Story Example";

export const PaginationOne = Template.bind({});
PaginationOne.args = {
    currentPage: 5,
    totalPages: 100,
    currentPageSiblings: 4,
}

export const PaginationOneSibling = Template.bind({})
PaginationOne.args = {
    currentPage: 1,
    totalPages: 100,
    currentPageSiblings: 1,
}

export const PaginationTwo = Template.bind({});
PaginationTwo.args = {
    currentPage: 5,
    totalPages: 5,
}