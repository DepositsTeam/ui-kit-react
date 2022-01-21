import React from 'react';
import SolidBadge from './SolidBadge';

export default {
    title: 'SolidBadge',
    component: SolidBadge
}

const Template = (args)=><SolidBadge  {...args}/>

export const Neutral =  Template.bind({})
export const Green = Template.bind({})
export const Red = Template.bind({})
export const Yellow = Template.bind({})
export const Cyan = Template.bind({})
export const Blue = Template.bind({})


Neutral.args = {
    label:'Neutral',
    variant : 'solid-neutral',
    size: "",
    primary:true
}

Green.args = {
    label:'Green',
    variant : 'solid-green',
    primary:false
}

Red.args = {
    label:'Red',
    variant : 'solid-red',
    primary:false
}

Yellow.args = {
    label:'Yellow',
    variant : 'solid-yellow',
    primary:false
}

Cyan.args = {
    label:'Cyan',
    variant : 'solid-cyan',
    primary:false
}

Blue.args = {
    label:'Blue',
    variant : 'solid-blue',
    primary:false
}