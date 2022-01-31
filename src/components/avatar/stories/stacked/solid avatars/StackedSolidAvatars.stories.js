import Avatar from "../../../src/Avatar";

export default {
	component: Avatar,
	title: "Stacked/ Letter Solid Avatars",
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
			description: "An array of avatar.",
		},
		visibleAvatars: {
			description:
				"A number presenting the number of avatar to be visible before adding a final avatar presenting the number of omitted avatar",
		},
	},
};

const Template = (args) => <Avatar {...args} />;

export const StackedLetterLargeSolidAvatar = Template.bind({});
StackedLetterLargeSolidAvatar.args = {
	avatars: [
		{ name: "Copper Unix", colorScheme: "cyan-bold" },
		{ name: "Stephen Thomas", colorScheme: "green-bold" },
		{ name: "John Doe", colorScheme: "orange-bold" },
		{ name: "Christopher King", colorScheme: "red-bold" },
		{ name: "Younghoon Bingo Larry", colorScheme: "gray-bold" },
		{ name: "Michael Jackson", colorScheme: "blue-bold" },
		{ name: "Christopher King", colorScheme: "red-bold" },
		{ name: "Younghoon Bingo Larry", colorScheme: "gray-bold" },
		{ name: "Michael Jackson", colorScheme: "blue-bold" },
	],
	size: "large",
	visibleAvatars: 4,
};

export const StackedLetterMediumSolidAvatar = Template.bind({});
StackedLetterMediumSolidAvatar.args = {
	avatars: [
		{ name: "Copper Unix", colorScheme: "cyan-bold" },
		{ name: "Stephen Thomas", colorScheme: "green-bold" },
		{ name: "John Doe", colorScheme: "orange-bold" },
		{ name: "Christopher King", colorScheme: "red-bold" },
		{ name: "Younghoon Bingo Larry", colorScheme: "gray-bold" },
		{ name: "Michael Jackson", colorScheme: "blue-bold" },
		{ name: "Christopher King", colorScheme: "red-bold" },
		{ name: "Younghoon Bingo Larry", colorScheme: "gray-bold" },
		{ name: "Michael Jackson", colorScheme: "blue-bold" },
	],
	size: "medium",
	visibleAvatars: 4,
};

export const StackedLetterSmallSolidAvatar = Template.bind({});
StackedLetterSmallSolidAvatar.args = {
	avatars: [
		{ name: "Copper Unix", colorScheme: "cyan-bold" },
		{ name: "Stephen Thomas", colorScheme: "green-bold" },
		{ name: "John Doe", colorScheme: "orange-bold" },
		{ name: "Christopher King", colorScheme: "red-bold" },
		{ name: "Younghoon Bingo Larry", colorScheme: "gray-bold" },
		{ name: "Michael Jackson", colorScheme: "blue-bold" },
		{ name: "Christopher King", colorScheme: "red-bold" },
		{ name: "Younghoon Bingo Larry", colorScheme: "gray-bold" },
		{ name: "Michael Jackson", colorScheme: "blue-bold" },
	],
	size: "small",
	visibleAvatars: 4,
};
