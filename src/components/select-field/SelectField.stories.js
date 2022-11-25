import React from "react";
import SelectField from "./index";
import Search from "../icons/Search";

export default {
    title: "Forms/Select Field",
    component: SelectField,
};

const Template = (props) => <SelectField {...props} />;

export const Default = Template.bind({});
Default.args = {
    placeholder: "Input placeholder",
    label: "Form Label",
};

export const Disabled = Template.bind({});
Disabled.args = {
    placeholder: "Input placeholder",
    label: "Form Label",
    disabled: true,
};

export const Error = Template.bind({});
Error.args = {
    placeholder: "Input placeholder",
    label: "Form Label",
    errorMessage: "Error Message",
};

export const LeftIcon = Template.bind({});
LeftIcon.args = {
    placeholder: "Input placeholder",
    label: "Form Label",
    leftIcon: Search,
};

export const DropDown = Template.bind({});
DropDown.args = {
    placeholder: "Input placeholder",
    label: "Form Label",
    dropDown: true,
};

export const LeftIconAndDropDown = Template.bind({});
LeftIconAndDropDown.args = {
    placeholder: "Input placeholder",
    label: "Form Label",
    dropDown: true,
    leftIcon: Search,
};

export const SizeMassive = Template.bind({});
SizeMassive.args = {
    placeholder: "Input placeholder",
    label: "Form Label",
    dropDown: true,
    leftIcon: Search,
    size: "massive",
};

export const SizeHuge = Template.bind({});
SizeHuge.args = {
    placeholder: "Input placeholder",
    label: "Form Label",
    dropDown: true,
    leftIcon: Search,
    size: "huge",
};

export const SizeXLarge = Template.bind({});
SizeXLarge.args = {
    placeholder: "Input placeholder",
    label: "Form Label",
    dropDown: true,
    leftIcon: Search,
    size: "xlarge",
};

export const SizeLarge = Template.bind({})
SizeLarge.args = {
    placeholder: "Input placeholder",
    label: "Form Label",
    dropDown: true,
    leftIcon: Search,
    size: "large",
}

export const SizeMedium = Template.bind({})
SizeMedium.args = {
    placeholder: "Input placeholder",
    label: "Form Label",
    dropDown: true,
    leftIcon: Search,
    size: "medium",
}

export const SizeSmall = Template.bind({})
SizeSmall.args = {
    placeholder: "Input placeholder",
    label: "Form Label",
    dropDown: true,
    leftIcon: Search,
    size: "small",
}
