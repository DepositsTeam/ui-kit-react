import Avatar from "../..";
import Lady from "../../../../assets/avatar/lady.png";
import Lady2 from "../../../../assets/avatar/lady2.png";
import Man from "../../../../assets/avatar/man.png";
import Lady3 from "../../../../assets/avatar/lady3.png";
import Man2 from "../../../../assets/avatar/man2.png";

export default {
	component: Avatar,
	title: "Stacked/ Image Avatars",
	argTypes: {
		name: {
			description: "The name used for the initials and title attribute.",
		},
		src: {
			description:
				"The src attribute for the img element. When it's not available, render initials instead.",
		},
		colorScheme: {
			description: "The color scheme of the avatar.",
			defaultValue: "green-light",
		},
		size: {
			description: "The size of the avatar.",
			defaultValue: "small",
		},
		status: {
			description: "Display the status of the avatar.",
		},
		statusColor: {
			description: "The color of the status.",
		},
		icon: {
			description: "Displays a drop down icon.",
			defaultValue: false,
		},
		avatars: {
			description: "An array of avatars.",
		},
		visibleAvatars: {
			description:
				"A number presenting the number of avatars to be visible before adding a final avatar presenting the number of omitted avatars",
		},
	},
};

const Template = (args) => <Avatar {...args} />;

export const StackedLargeImageAvatar = Template.bind({});
StackedLargeImageAvatar.args = {
	avatars:[
		{ imageSrc: Lady},
		{ imageSrc:  Lady2},
		{ imageSrc:  Man},
		{ imageSrc:  Lady3},
		{ imageSrc:  Lady},
		{ imageSrc:  Lady2},
		{ imageSrc:  Man},
		{ imageSrc:  Lady3},
		{ imageSrc:  Man},
	],
	size:"large",
	visibleAvatars:4,
}
export const StackedMediumImageAvatar = Template.bind({});
StackedMediumImageAvatar.args = {
	avatars:[
		{ imageSrc: Lady},
		{ imageSrc:  Lady2},
		{ imageSrc:  Man},
		{ imageSrc:  Lady3},
		{ imageSrc:  Lady},
		{ imageSrc:  Lady2},
		{ imageSrc:  Man},
		{ imageSrc:  Lady3},
		{ imageSrc:  Man},
	],
	size:"medium",
	visibleAvatars:4,
}
export const StackedSmallImageAvatar = Template.bind({});
StackedSmallImageAvatar.args = {
	avatars:[
		{ imageSrc: Lady},
		{ imageSrc:  Lady2},
		{ imageSrc:  Man},
		{ imageSrc:  Lady3},
		{ imageSrc:  Lady},
		{ imageSrc:  Lady2},
		{ imageSrc:  Man},
		{ imageSrc:  Lady3},
		{ imageSrc:  Man},
	],
	size:"small",
	visibleAvatars:4,
}

