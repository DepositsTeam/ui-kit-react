import React from 'react'
import FlatAlert from './FlatAlert'

export default{
    title: 'FlatAlert',
    component: FlatAlert 
}

function Template(args) {
    return <FlatAlert {...args} />
}

export const NeutralAlert =  Template.bind({})
export const GreenAlert = Template.bind({})
export const RedAlert = Template.bind({})
export const YellowAlert = Template.bind({})
export const BlueAlert = Template.bind({})
export const BlueAlertDesc = Template.bind({})
export const RedAlertDesc = Template.bind({})
export const YellowAlertDesc = Template.bind({})
export const GreenAlertDesc = Template.bind({})
export const NeutralAlertDesc = Template.bind({})
export const InlineAlertWarning = Template.bind({})
export const InlineAlertSuccess = Template.bind({})
export const InlineAlertInfo = Template.bind({})
export const InlineAlertError = Template.bind({})

NeutralAlert.args = {
    label:'A simple general message',
    variant : 'neutral-alert',
    primary:true
}

BlueAlert.args = {
    label:'This is an info alert',
    variant : 'blue-alert',
    primary:false
}

RedAlert.args = {
    label:'This is an error alert',
    variant : 'red-alert',
    primary:false
}

YellowAlert.args = {
    label:'This is a warning alert',
    variant : 'yellow-alert',
    primary:false
}

GreenAlert.args = {
    label: 'This is a success alert',
    variant: 'green-alert',
    primary: false 
}

BlueAlertDesc.args = {
    label: 'This is an info alert',
    variant: 'blue-alert',
    primary: false,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
}

RedAlertDesc.args = {
    label: 'This is an error alert',
    variant: 'red-alert',
    primary: false,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
}

YellowAlertDesc.args = {
    label: 'This is a warning alert',
    variant: 'yellow-alert',
    primary: false,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
}

GreenAlertDesc.args = {
    label: 'This is success alert',
    variant: 'green-alert',
    primary: false,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
}

NeutralAlertDesc.args = {
    label: 'A simple general message',
    variant: 'neutral-alert',
    primary: false,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
}

InlineAlertWarning.args = {
    variant: "inline-warning-alert",
    label: 'This is a warning alert'
}

InlineAlertError.args = {
    variant: "inline-error-alert",
    label: 'This is an error alert'
}

InlineAlertSuccess.args = {
    variant: "inline-success-alert",
    label: 'This is success alert'
}

InlineAlertInfo.args = {
    variant: "inline-info-alert",
    label: 'This is an info alert'
}