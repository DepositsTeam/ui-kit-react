import Avatar from "..";

export default {
	component: Avatar,
	title: "Avatar/Letter Subtle Avatar",
	argTypes:{
		name: {
			description:"The name used for the initials and title attribute."
		},
		src:{
			description: "The src attribute for the img element. When it's not available, render initials instead."
		},
		colorScheme:{
			description: "The color scheme of the avatar.",
			defaultValue: "green-light",
		},
		size:{
			description: "The size of the avatar.",
			defaultValue: "small",
		},
		status:{
			description: "Display the status of the avatar."
		},
		statusColor:{
			description: "The color of the status."
		}
	}
};

const Template = (args) => <Avatar {...args} />;

// Letter avatars without status or image


// Cyan
export const LetterAvatarSmallCyanLight = Template.bind({});
LetterAvatarSmallCyanLight.args = {
	name: "Copper Unix",
	colorScheme: "cyan-light",
	size: "small",
};

export const LetterAvatarMediumCyanLight = Template.bind({});
LetterAvatarMediumCyanLight.args = {
	name: "Copper Unix",
	colorScheme: "cyan-light",
	size: "medium",
};

export const LetterAvatarLargeCyanLight = Template.bind({});
LetterAvatarLargeCyanLight.args = {
	name: "Copper Unix",
	colorScheme: "cyan-light",
	size: "large",
};

// Green

export const LetterAvatarSmallGreenLight = Template.bind({});
LetterAvatarSmallGreenLight.args = {
	name: "Stephen Thomas",
	colorScheme: "green-light",
	size: "small",
};

export const LetterAvatarMediumGreenLight = Template.bind({});
LetterAvatarMediumGreenLight.args = {
	name: "Stephen Thomas",
	colorScheme: "green-light",
	size: "medium",
};

export const LetterAvatarLargeGreenLight = Template.bind({});
LetterAvatarLargeGreenLight.args = {
	name: "Stephen Thomas",
	colorScheme: "green-light",
	size: "large",
};

// Orange

export const LetterAvatarSmallOrangeLight = Template.bind({});
LetterAvatarSmallOrangeLight.args = {
	name: "John Doe",
	colorScheme: "orange-light",
	size: "small",
};

export const LetterAvatarMediumOrangeLight = Template.bind({});
LetterAvatarMediumOrangeLight.args = {
	name: "John Doe",
	colorScheme: "orange-light",
	size: "medium",
};

export const LetterAvatarLargeOrangeLight = Template.bind({});
LetterAvatarLargeOrangeLight.args = {
	name: "John Doe",
	colorScheme: "orange-light",
	size: "large",
};


// Red

export const LetterAvatarSmallRedLight = Template.bind({});
LetterAvatarSmallRedLight.args = {
	name: "Christopher King",
	colorScheme: "red-light",
	size: "small",
};

export const LetterAvatarMediumRedLight = Template.bind({});
LetterAvatarMediumRedLight.args = {
	name: "Christopher King",
	colorScheme: "red-light",
	size: "medium",
};

export const LetterAvatarLargeRedLight = Template.bind({});
LetterAvatarLargeRedLight.args = {
	name: "Christopher King",
	colorScheme: "red-light",
	size: "large",
};

// Gray

export const LetterAvatarSmallGrayLight = Template.bind({});
LetterAvatarSmallGrayLight.args = {
	name: "Younghoon Bingo Larry",
	colorScheme: "gray-light",
	size: "small",
};

export const LetterAvatarMediumGrayLight = Template.bind({});
LetterAvatarMediumGrayLight.args = {
	name: "Younghoon Bingo Larry",
	colorScheme: "gray-light",
	size: "medium",
};

export const LetterAvatarLargeGrayLight = Template.bind({});
LetterAvatarLargeGrayLight.args = {
	name: "Younghoon Bingo Larry",
	colorScheme: "gray-light",
	size: "large",
};

// Blue

export const LetterAvatarSmallBlueLight = Template.bind({});
LetterAvatarSmallBlueLight.args = {
	name: "Michael Jackson",
	colorScheme: "blue-light",
	size: "small",
};

export const LetterAvatarMediumBlueLight = Template.bind({});
LetterAvatarMediumBlueLight.args = {
	name: "Michael Jackson",
	colorScheme: "blue-light",
	size: "medium",
};

export const LetterAvatarLargeBlueLight = Template.bind({});
LetterAvatarLargeBlueLight.args = {
	name: "Michael Jackson",
	colorScheme: "blue-light",
	size: "large",
};






