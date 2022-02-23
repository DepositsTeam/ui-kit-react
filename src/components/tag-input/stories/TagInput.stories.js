import React, { useState } from "react";
import TagInput from "../src/TagInput";

export default {
	title: "Tag-Input",
	component: TagInput,
};

const Template = (props) => <TagInput {...props} />;

export const ExampleTagInputStory = (args) => {
	const [input, setInput] = useState(["Option one", "Option 2", "Option 3"]);

	return (
		<TagInput
			values={input}
			tagProps={{style: {backgroundColor: "red"}}}
			inputProps={{ placeholder: "Enter new tag" }}
            onTagAdded={(newTag, tagsArray) => {
                console.log(newTag, tagsArray)
            } }
            onTagDeleted={(deletedTag,tagsArray) => {
                console.log(deletedTag,tagsArray)
            }}
			onTextChanged={(value) => {
				console.log(value);
			}}
		/>
	);
};
ExampleTagInputStory.parameters = {
	docs: { source: { type: "code" } },
};
ExampleTagInputStory.storyname = "Tag Input Story Example";

export const SizeMassive = Template.bind({});
SizeMassive.args = {
	label: "Form Label",
	size: "massive",
};

export const SizeHuge = Template.bind({});
SizeHuge.args = {
	label: "Form Label",
	size: "huge",
};

export const SizeXLarge = Template.bind({});
SizeXLarge.args = {
	label: "Form Label",
	size: "xlarge",
};

export const SizeLarge = Template.bind({});
SizeLarge.args = {
	label: "Form Label",
	size: "large",
};

export const SizeMedium = Template.bind({});
SizeMedium.args = {
	label: "Form Label",
	size: "medium",
};

export const SizeSmall = Template.bind({});
SizeSmall.args = {
	label: "Form Label",
	size: "small",
};
