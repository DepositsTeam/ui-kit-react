import Avatar from "../..";

export default {
	component: Avatar,
	title: "Stacked/ Letter Subtle Avatars",
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

export const StackedLetterLargeSubtleAvatar = Template.bind({});
StackedLetterLargeSubtleAvatar.args = {
	avatars: [
		{ name: "Copper Unix", colorScheme: "cyan-light" },
		{ name: "Stephen Thomas", colorScheme: "green-light" },
		{ name: "John Doe", colorScheme: "orange-light" },
		{ name: "Christopher King", colorScheme: "red-light" },
		{ name: "Younghoon Bingo Larry", colorScheme: "gray-light" },
		{ name: "Michael Jackson", colorScheme: "blue-light" },
		{ name: "Christopher King", colorScheme: "red-light" },
		{ name: "Younghoon Bingo Larry", colorScheme: "gray-light" },
		{ name: "Michael Jackson", colorScheme: "blue-light" },
	],
	size: "large",
	visibleAvatars: 4,
};

export const StackedLetterMediumSubtleAvatar = Template.bind({});
StackedLetterMediumSubtleAvatar.args = {
	avatars: [
		{ name: "Copper Unix", colorScheme: "cyan-light" },
		{ name: "Stephen Thomas", colorScheme: "green-light" },
		{ name: "John Doe", colorScheme: "orange-light" },
		{ name: "Christopher King", colorScheme: "red-light" },
		{ name: "Younghoon Bingo Larry", colorScheme: "gray-light" },
		{ name: "Michael Jackson", colorScheme: "blue-light" },
		{ name: "Christopher King", colorScheme: "red-light" },
		{ name: "Younghoon Bingo Larry", colorScheme: "gray-light" },
		{ name: "Michael Jackson", colorScheme: "blue-light" },
	],
	size: "medium",
	visibleAvatars: 4,
};

export const StackedLetterSmallSubtleAvatar = Template.bind({});
StackedLetterSmallSubtleAvatar.args = {
	avatars: [
		{ name: "Copper Unix", colorScheme: "cyan-light" },
		{ name: "Stephen Thomas", colorScheme: "green-light" },
		{ name: "John Doe", colorScheme: "orange-light" },
		{ name: "Christopher King", colorScheme: "red-light" },
		{ name: "Younghoon Bingo Larry", colorScheme: "gray-light" },
		{ name: "Michael Jackson", colorScheme: "blue-light" },
		{ name: "Christopher King", colorScheme: "red-light" },
		{ name: "Younghoon Bingo Larry", colorScheme: "gray-light" },
		{ name: "Michael Jackson", colorScheme: "blue-light" },
	],
	size: "small",
	visibleAvatars: 4,
};
