import React from "react";
import Table from "../src/Table";

export default {
    title: "Table",
    component: Table,
};

const h = ['name', 'city', 'company', 'country', 'qty', 'state']


const state = ['Completed', 'Pending Review', 'Rejected', 'Postponed']
const data = [
    { [h[0]]: 'Kristen Watson', [h[1]]: 'Text', [h[2]]: 'abel', [h[3]]: 'Text', [h[4]]: '445', [h[5]]: state[0] },
    { [h[0]]: 'Kristen Watson', [h[1]]: 'Text', [h[2]]: 'Johnson & Johnso', [h[3]]: 'Text', [h[4]]: '445', [h[5]]: state[0] }
]

const Template = (args) => <Table {...args} />;

export const Default = Template.bind({});
Default.args = {
    headings: h,
    data: data
};
