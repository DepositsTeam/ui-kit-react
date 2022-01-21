import React from "react";
import SubtleBadge from "./SubtleBadge";
import Badge from "./SubtleBadge";

export default{
    title: 'Badge',
    component: Badge
}

const Template = (args) => <SubtleBadge {...args}/>
export const Neutral = Template.bind({})
export const Green = Template.bind({})
export const Red = Template.bind({})
export const Yellow = Template.bind({})
export const Cyan = Template.bind({})
export const Blue = Template.bind({})

Neutral.args = {
    label:'Neutral',
    variant: 'neutral',
    primary: true
}

Green.args = {
    label: 'Green',
    variant: 'green',
    primary: false
}

Red.args = {
    label: 'Red',
    variant: 'red',
    primary: false
}

Yellow.args = {
    label: 'Yellow',
    variant: 'yellow',
    primary: false
}

Cyan.args = {
    label: 'Cyan',
    variant: 'cyan',
    primary: false
}

Blue.args = {
    label: 'Blue',
    variant: 'blue',
    primary: false
}

