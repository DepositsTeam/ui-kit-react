import React from "react";
import MultiInput from "../src/MultiInput";

export default {
    title: "Multi-Input",
    component: MultiInput,
}

const Template = (props) => <MultiInput {...props} />;

export const SizeMassive = Template.bind({});
SizeMassive.args = {
    label: "Form Label",
    size: "massive",
}

export const SizeHuge = Template.bind({});
SizeHuge.args = {
    label: "Form Label",
    size: "huge",
}

export const SizeXLarge = Template.bind({});
SizeXLarge.args = {
    label: "Form Label",
    size: "xlarge",
}

export const SizeLarge = Template.bind({});
SizeLarge.args = {
    label: "Form Label",
    size: "large",
}

export const SizeMedium = Template.bind({});
SizeMedium.args = {
    label: "Form Label",
    size: "medium",
}

export const SizeSmall = Template.bind({});
SizeSmall.args = {
    label: "Form Label",
    size: "small",
}