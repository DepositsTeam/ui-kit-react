import Avatar from "..";

export default {
	component: Avatar,
	title: "Avatar Arrow/Letter Solid",
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
        }
	},
};

const Template = (args) => <Avatar {...args} />;

// blue

export const LetterAvatarArrowSmallBlueBoldStatus = Template.bind({});
LetterAvatarArrowSmallBlueBoldStatus.args = {
	name: "Michael Jackson",
	colorScheme: "blue-bold",
	size: "small",
	icon: true,
};

export const LetterAvatarArrowMediumBlueBoldStatus = Template.bind({});
LetterAvatarArrowMediumBlueBoldStatus.args = {
	name: "Michael Jackson",
	colorScheme: "blue-bold",
	size: "medium",
	icon: true,
};

export const LetterAvatarArrowLargeBlueBoldStatus = Template.bind({});
LetterAvatarArrowLargeBlueBoldStatus.args = {
	name: "Michael Jackson",
	colorScheme: "blue-bold",
	size: "large",
	icon: true,
};
