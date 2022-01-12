import Avatar from "..";

export default {
	component: Avatar,
	title: "Avatar Arrow/Letter Subtle",
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
			description: "shows a drop down icon",
		},
	},
};

const Template = (args) => <Avatar {...args} />;

// Letter avatars without status or image

// Cyan
export const LetterAvatarArrowSmallCyanLight = Template.bind({});
LetterAvatarArrowSmallCyanLight.args = {
	name: "Copper Unix",
	colorScheme: "cyan-light",
	size: "small",
	icon: true,
};

export const LetterAvatarArrowMediumCyanLight = Template.bind({});
LetterAvatarArrowMediumCyanLight.args = {
	name: "Copper Unix",
	colorScheme: "cyan-light",
	size: "medium",
	icon: true,
};

export const LetterAvatarArrowLargeCyanLight = Template.bind({});
LetterAvatarArrowLargeCyanLight.args = {
	name: "Copper Unix",
	colorScheme: "cyan-light",
	size: "large",
	icon: true,
};
