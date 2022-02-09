import React from "react"
import Checkbox from "../src/Checkbox"

export default {
    title: "Checkbox",
    component: Checkbox
}

const Template = args => <Checkbox {...args} />

export const Default = Template.bind({})
Default.args = {
    label: "I agree to the terms and conditions"
}