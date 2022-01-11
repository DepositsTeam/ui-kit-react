import Avatar from "..";

export default {
	component: Avatar,
	title: "Avatar/Letter Solid Avatar",
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
export const LetterAvatarSmallCyanBold = Template.bind({});
LetterAvatarSmallCyanBold.args = {
	name: "Copper Unix",
	colorScheme: "cyan-bold",
	size: "small",
};

export const LetterAvatarMediumCyanBold = Template.bind({});
LetterAvatarMediumCyanBold.args = {
	name: "Copper Unix",
	colorScheme: "cyan-bold",
	size: "medium",
};

export const LetterAvatarLargeCyanBold = Template.bind({});
LetterAvatarLargeCyanBold.args = {
	name: "Copper Unix",
	colorScheme: "cyan-bold",
	size: "large",
};


// Green

export const LetterAvatarSmallGreenBold = Template.bind({});
LetterAvatarSmallGreenBold.args = {
	name: "Stephen Thomas",
	colorScheme: "green-bold",
	size: "small",
};

export const LetterAvatarMediumGreenBold = Template.bind({});
LetterAvatarMediumGreenBold.args = {
	name: "Stephen Thomas",
	colorScheme: "green-bold",
	size: "medium",
};

export const LetterAvatarLargeGreenBold = Template.bind({});
LetterAvatarLargeGreenBold.args = {
	name: "Stephen Thomas",
	colorScheme: "green-bold",
	size: "large",
};

// Orange

export const LetterAvatarSmallOrangeBold = Template.bind({});
LetterAvatarSmallOrangeBold.args = {
	name: "John Doe",
	colorScheme: "orange-bold",
	size: "small",
};

export const LetterAvatarMediumOrangeBold = Template.bind({});
LetterAvatarMediumOrangeBold.args = {
	name: "John Doe",
	colorScheme: "orange-bold",
	size: "medium",
};

export const LetterAvatarLargeOrangeBold = Template.bind({});
LetterAvatarLargeOrangeBold.args = {
	name: "John Doe",
	colorScheme: "orange-bold",
	size: "large",
};

// Red

export const LetterAvatarSmallRedBold = Template.bind({});
LetterAvatarSmallRedBold.args = {
	name: "Christopher King",
	colorScheme: "red-bold",
	size: "small",
};

export const LetterAvatarMediumRedBold = Template.bind({});
LetterAvatarMediumRedBold.args = {
	name: "Christopher King",
	colorScheme: "red-bold",
	size: "medium",
};

export const LetterAvatarLargeRedBold = Template.bind({});
LetterAvatarLargeRedBold.args = {
	name: "Christopher King",
	colorScheme: "red-bold",
	size: "large",
};

// Gray

export const LetterAvatarSmallGrayBold = Template.bind({});
LetterAvatarSmallGrayBold.args = {
	name: "Younghoon Bingo Larry",
	colorScheme: "gray-bold",
	size: "small",
};

export const LetterAvatarMediumGrayBold = Template.bind({});
LetterAvatarMediumGrayBold.args = {
	name: "Younghoon Bingo Larry",
	colorScheme: "gray-bold",
	size: "medium",
};

export const LetterAvatarLargeGrayBold = Template.bind({});
LetterAvatarLargeGrayBold.args = {
	name: "Younghoon Bingo Larry",
	colorScheme: "gray-bold",
	size: "large",
};



//Blue

export const LetterAvatarSmallBlueBold = Template.bind({});
LetterAvatarSmallBlueBold.args = {
	name: "Michael Jackson",
	colorScheme: "blue-bold",
	size: "small",
};

export const LetterAvatarMediumBlueBold = Template.bind({});
LetterAvatarMediumBlueBold.args = {
	name: "Michael Jackson",
	colorScheme: "blue-bold",
	size: "medium",
};

export const LetterAvatarLargeBlueBold = Template.bind({});
LetterAvatarLargeBlueBold.args = {
	name: "Michael Jackson",
	colorScheme: "blue-bold",
	size: "large",
};

