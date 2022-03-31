import React from "react";
import Table from "../src/Table";

export default {
    title: "Table",
    component: Table,
};

const BadgeComponent = ({ content, color, background }) => (
    <div style={{ width: 'max-content', color, background, padding: '4px 8px', borderRadius: '18px', }} >{content}</div>
)

const h = ['name', 'city', 'company', 'country', 'qty', 'state']


const state = [
    { component: <BadgeComponent background='#C4EFDF' color='green' content='Completed' />, alt: 'Completed' },
    { component: <BadgeComponent background='#FFF0DB' color='#E08304' content='Pending Review' />, alt: 'Pending Review' },
    { component: <BadgeComponent background='#FCC5CE' color='#842432' content='Rejected' />, alt: 'Rejected' },
    { component: <BadgeComponent background='#DDEFFF' color='#0059AC' content='Postponed' />, alt: 'Postponed' },
]

const data = [
    { [h[0]]: 'first', [h[1]]: 'Text', [h[2]]: 'Abel', [h[3]]: 'Text', [h[4]]: '445', [h[5]]: state[0] },
    { [h[0]]: 'second', [h[1]]: 'Text', [h[2]]: 'Johnson & Johnson', [h[3]]: 'Text', [h[4]]: '445', [h[5]]: state[0] },
    { [h[0]]: 'Kristen Watson', [h[1]]: 'Text', [h[2]]: 'Johnson & Johnson', [h[3]]: 'Text', [h[4]]: '445', [h[5]]: state[0] },
    { [h[0]]: 'Kristen Watson', [h[1]]: 'Text', [h[2]]: 'Johnson & Johnson', [h[3]]: 'Text', [h[4]]: '445', [h[5]]: state[1] },
    { [h[0]]: 'Kristen Watson', [h[1]]: 'Text', [h[2]]: 'Johnson & Johnson', [h[3]]: 'Text', [h[4]]: '445', [h[5]]: state[3] },
    { [h[0]]: 'Kristen Watson', [h[1]]: 'Text', [h[2]]: 'Johnson & Johnson', [h[3]]: 'Text', [h[4]]: '442', [h[5]]: state[1] },
    { [h[0]]: 'Kristen Watson', [h[1]]: 'Text', [h[2]]: 'Johnson & Johnson', [h[3]]: 'Text', [h[4]]: '445', [h[5]]: state[1] },
    { [h[0]]: 'Kainy', [h[1]]: 'Call', [h[2]]: 'Johnson & Johnson', [h[3]]: 'Text', [h[4]]: '445', [h[5]]: state[2] },
    { [h[0]]: 'Kristen Watson', [h[1]]: 'Text', [h[2]]: 'Johnson & Johnson', [h[3]]: 'Text', [h[4]]: '445', [h[5]]: state[1] },
/*10*/{ [h[0]]: 'tenth', [h[1]]: 'Text', [h[2]]: 'Johnson & Johnso', [h[3]]: 'Text', [h[4]]: '445', [h[5]]: state[0] },
    { [h[0]]: 'eleven', [h[1]]: 'Text', [h[2]]: 'Johnson & Johnson', [h[3]]: 'Text', [h[4]]: '445', [h[5]]: state[0] },
    { [h[0]]: 'Kainy', [h[1]]: 'Text', [h[2]]: 'Johnson & Johnson', [h[3]]: 'Text', [h[4]]: '445', [h[5]]: state[0] },
    { [h[0]]: 'Kristen Watson', [h[1]]: 'Text', [h[2]]: 'Johnson & Johnson', [h[3]]: 'Text', [h[4]]: '445', [h[5]]: state[0] },
    { [h[0]]: 'Kristen Watson', [h[1]]: 'Text', [h[2]]: 'Johnson & Johnson', [h[3]]: 'Text', [h[4]]: '445', [h[5]]: state[0] },
    { [h[0]]: 'Kristen Watson', [h[1]]: 'Text', [h[2]]: 'Johnson & Johnson', [h[3]]: 'Text', [h[4]]: '445', [h[5]]: state[0] },
    { [h[0]]: 'Kristen Watson', [h[1]]: 'Text', [h[2]]: 'Johnson & Johnson', [h[3]]: 'Text', [h[4]]: '445', [h[5]]: state[0] },
    { [h[0]]: 'Kristen Watson', [h[1]]: 'Text', [h[2]]: 'Johnson & Johnson', [h[3]]: 'Text', [h[4]]: '445', [h[5]]: state[0] },
    { [h[0]]: 'Kristen Watson', [h[1]]: 'Text', [h[2]]: 'Johnson & Johnson', [h[3]]: 'Text', [h[4]]: '445', [h[5]]: state[0] },
    { [h[0]]: 'Kristen Watson', [h[1]]: 'Text', [h[2]]: 'Johnson & Johnson', [h[3]]: 'Text', [h[4]]: '445', [h[5]]: state[0] },
    { [h[0]]: 'twenty', [h[1]]: 'Text', [h[2]]: 'Johnson & Johnson', [h[3]]: 'Text', [h[4]]: '445', [h[5]]: state[0] },
    { [h[0]]: 'twenty-one', [h[1]]: 'Text', [h[2]]: 'Johnson & Johnson', [h[3]]: 'Text', [h[4]]: '445', [h[5]]: state[0] },
    { [h[0]]: 'Kristen Watson', [h[1]]: 'Text', [h[2]]: 'Johnson & Johnson', [h[3]]: 'Text', [h[4]]: '445', [h[5]]: state[0] },
    { [h[0]]: 'Kristen Watson', [h[1]]: 'Text', [h[2]]: 'Johnson & Johnson', [h[3]]: 'Text', [h[4]]: '445', [h[5]]: state[0] },
    { [h[0]]: 'Kristen Watson', [h[1]]: 'Text', [h[2]]: 'Johnson & Johnson', [h[3]]: 'Text', [h[4]]: '445', [h[5]]: state[0] },
    { [h[0]]: 'Kristen Watson', [h[1]]: 'Text', [h[2]]: 'Johnson & Johnson', [h[3]]: 'Text', [h[4]]: '445', [h[5]]: state[0] },
   
    { [h[0]]: 'Kristen Watson', [h[1]]: 'Text', [h[2]]: 'Johnson & Johnson', [h[3]]: 'Text', [h[4]]: '445', [h[5]]: state[0] },
    { [h[0]]: 'Kristen Watson', [h[1]]: 'Text', [h[2]]: 'Johnson & Johnson', [h[3]]: 'Text', [h[4]]: '445', [h[5]]: state[0] },
    { [h[0]]: 'Kristen Watson', [h[1]]: 'Text', [h[2]]: 'Johnson & Johnson', [h[3]]: 'Text', [h[4]]: '445', [h[5]]: state[0] },
    { [h[0]]: 'Kristen Watson', [h[1]]: 'Text', [h[2]]: 'Johnson & Johnson', [h[3]]: 'Text', [h[4]]: '445', [h[5]]: state[0] },
  
    { [h[0]]: 'Kristen Watson', [h[1]]: 'Text', [h[2]]: 'Johnson & Johnson', [h[3]]: 'Text', [h[4]]: '445', [h[5]]: state[0] },
    { [h[0]]: 'Kristen Watson', [h[1]]: 'Text', [h[2]]: 'Johnson & Johnson', [h[3]]: 'Text', [h[4]]: '445', [h[5]]: state[0] },
    { [h[0]]: 'Kristen Watson', [h[1]]: 'Text', [h[2]]: 'Johnson & Johnson', [h[3]]: 'Text', [h[4]]: '445', [h[5]]: state[0] },
    { [h[0]]: 'Kristen Watson', [h[1]]: 'Text', [h[2]]: 'Johnson & Johnson', [h[3]]: 'Text', [h[4]]: '445', [h[5]]: state[0] },
    { [h[0]]: 'Last', [h[1]]: 'Text', [h[2]]: 'Johnson & ', [h[3]]: 'Text', [h[4]]: '445', [h[5]]: state[0] },
]

const Template = (args) => <Table {...args} />;

export const Default = Template.bind({});
Default.args = {
    headings: h,
    data: data,
    itemsPerPage: 10,
};
