import Pagination from "../src/Pagination";

export default {
    title: "Pagination",
    component: Pagination,
}

const Template = (args) => <Pagination {...args} />;

export const ExamplePaginationStory = (args) => {

	return (
		<Pagination
			totalPage={100}
            visiblePage={5}
            siblingCount={1}
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
    visiblePage: 5,
    totalPage: 100,
    siblingCount: 4,
}

export const PaginationTwo = Template.bind({});
PaginationTwo.args = {
    visiblePage: 5,
    totalPage: 5,
}