import Avatar from "..";

export default {
	component: Avatar,
	title: "Avatar/Letter Solid Avatar Status",
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


// Letter solid avatars with status and no image

// Cyan
export const LetterAvatarSmallCyanBoldStatus = Template.bind({});
LetterAvatarSmallCyanBoldStatus.args = {
	name: "Copper Unix",
	colorScheme: "cyan-bold",
	size: "small",
	status: "true",
	statusColor: "green",
};

export const LetterAvatarMediumCyanBoldStatus = Template.bind({});
LetterAvatarMediumCyanBoldStatus.args = {
	name: "Copper Unix",
	colorScheme: "cyan-bold",
	size: "medium",
	status: "true",
	statusColor: "green",
};

export const LetterAvatarLargeCyanBoldStatus = Template.bind({});
LetterAvatarLargeCyanBoldStatus.args = {
	name: "Copper Unix",
	colorScheme: "cyan-bold",
	size: "large",
	status: "true",
	statusColor: "green",
};

// Green

export const LetterAvatarSmallGreenBoldStatus = Template.bind({});
LetterAvatarSmallGreenBoldStatus.args = {
	name: "Stephen Thomas",
	colorScheme: "green-bold",
	size: "small",
	status: "true",
	statusColor: "green",
};

export const LetterAvatarMediumGreenBoldStatus = Template.bind({});
LetterAvatarMediumGreenBoldStatus.args = {
	name: "Stephen Thomas",
	colorScheme: "green-bold",
	size: "medium",
	status: "true",
	statusColor: "green",
};

export const LetterAvatarLargeGreenBoldStatus = Template.bind({});
LetterAvatarLargeGreenBoldStatus.args = {
	name: "Stephen Thomas",
	colorScheme: "green-bold",
	size: "large",
	status: "true",
	statusColor: "green",
};

// Orange

export const LetterAvatarSmallOrangeBoldStatus = Template.bind({});
LetterAvatarSmallOrangeBoldStatus.args = {
	name: "John Doe",
	colorScheme: "orange-bold",
	size: "small",
	status: "true",
	statusColor: "green",
};

export const LetterAvatarMediumOrangeBoldStatus = Template.bind({});
LetterAvatarMediumOrangeBoldStatus.args = {
	name: "John Doe",
	colorScheme: "orange-bold",
	size: "medium",
	status: "true",
	statusColor: "green",
};

export const LetterAvatarLargeOrangeBoldStatus = Template.bind({});
LetterAvatarLargeOrangeBoldStatus.args = {
	name: "John Doe",
	colorScheme: "orange-bold",
	size: "large",
	status: "true",
	statusColor: "green",
};

// Red

export const LetterAvatarSmallRedBoldStatus = Template.bind({});
LetterAvatarSmallRedBoldStatus.args = {
	name: "Christopher King",
	colorScheme: "red-bold",
	size: "small",
	status: "true",
	statusColor: "green",
};

export const LetterAvatarMediumRedBoldStatus = Template.bind({});
LetterAvatarMediumRedBoldStatus.args = {
	name: "Christopher King",
	colorScheme: "red-bold",
	size: "medium",
	status: "true",
	statusColor: "green",
};

export const LetterAvatarLargeRedBoldStatus = Template.bind({});
LetterAvatarLargeRedBoldStatus.args = {
	name: "Christopher King",
	colorScheme: "red-bold",
	size: "large",
	status: "true",
	statusColor: "green",
};

// Gray

export const LetterAvatarSmallGrayBoldStatus = Template.bind({});
LetterAvatarSmallGrayBoldStatus.args = {
	name: "Younghoon Bingo Larry",
	colorScheme: "gray-bold",
	size: "small",
	status: "true",
	statusColor: "green",
};

export const LetterAvatarMediumGrayBoldStatus = Template.bind({});
LetterAvatarMediumGrayBoldStatus.args = {
	name: "Younghoon Bingo Larry",
	colorScheme: "gray-bold",
	size: "medium",
	status: "true",
	statusColor: "green",
};

export const LetterAvatarLargeGrayBoldStatus = Template.bind({});
LetterAvatarLargeGrayBoldStatus.args = {
	name: "Younghoon Bingo Larry",
	colorScheme: "gray-bold",
	size: "large",
	status: "true",
	statusColor: "green",
};



// blue

export const LetterAvatarSmallBlueBoldStatus = Template.bind({});
LetterAvatarSmallBlueBoldStatus.args = {
	name: "Michael Jackson",
	colorScheme: "blue-bold",
	size: "small",
	status: "true",
	statusColor: "green",
};

export const LetterAvatarMediumBlueBoldStatus = Template.bind({});
LetterAvatarMediumBlueBoldStatus.args = {
	name: "Michael Jackson",
	colorScheme: "blue-bold",
	size: "medium",
	status: "true",
	statusColor: "green",
};

export const LetterAvatarLargeBlueBoldStatus = Template.bind({});
LetterAvatarLargeBlueBoldStatus.args = {
	name: "Michael Jackson",
	colorScheme: "blue-bold",
	size: "large",
	status: "true",
	statusColor: "green",
};



