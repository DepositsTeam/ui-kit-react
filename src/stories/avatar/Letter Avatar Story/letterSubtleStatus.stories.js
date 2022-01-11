import Avatar from "..";

export default {
	component: Avatar,
	title: "Avatar/Letter Subtle Avatar Status",
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
export const LetterAvatarSmallCyanLightStatus = Template.bind({});
LetterAvatarSmallCyanLightStatus.args = {
	name: "Copper Unix",
	colorScheme: "cyan-light",
	size: "small",
	status: "true",
	statusColor: "green",
};

export const LetterAvatarMediumCyanLightStatus = Template.bind({});
LetterAvatarMediumCyanLightStatus.args = {
	name: "Copper Unix",
	colorScheme: "cyan-light",
	size: "medium",
	status: "true",
	statusColor: "green",
};

export const LetterAvatarLargeCyanLightStatus = Template.bind({});
LetterAvatarLargeCyanLightStatus.args = {
	name: "Copper Unix",
	colorScheme: "cyan-light",
	size: "large",
	status: "true",
	statusColor: "green",
};


// Green

export const LetterAvatarSmallGreenLightStatus = Template.bind({});
LetterAvatarSmallGreenLightStatus.args = {
	name: "Stephen Thomas",
	colorScheme: "green-light",
	size: "small",
	status: "true",
	statusColor: "green",
};

export const LetterAvatarMediumGreenLightStatus = Template.bind({});
LetterAvatarMediumGreenLightStatus.args = {
	name: "Stephen Thomas",
	colorScheme: "green-light",
	size: "medium",
	status: "true",
	statusColor: "green",
};

export const LetterAvatarLargeGreenLightStatus = Template.bind({});
LetterAvatarLargeGreenLightStatus.args = {
	name: "Stephen Thomas",
	colorScheme: "green-light",
	size: "large",
	status: "true",
	statusColor: "green",
};

// Orange

export const LetterAvatarSmallOrangeLightStatus = Template.bind({});
LetterAvatarSmallOrangeLightStatus.args = {
	name: "John Doe",
	colorScheme: "orange-light",
	size: "small",
	status: "true",
	statusColor: "green",
};

export const LetterAvatarMediumOrangeLightStatus = Template.bind({});
LetterAvatarMediumOrangeLightStatus.args = {
	name: "John Doe",
	colorScheme: "orange-light",
	size: "medium",
	status: "true",
	statusColor: "green",
};

export const LetterAvatarLargeOrangeLightStatus = Template.bind({});
LetterAvatarLargeOrangeLightStatus.args = {
	name: "John Doe",
	colorScheme: "orange-light",
	size: "large",
	status: "true",
	statusColor: "green",
};

// Red
export const LetterAvatarSmallRedLightStatus = Template.bind({});
LetterAvatarSmallRedLightStatus.args = {
	name: "Christopher King",
	colorScheme: "red-light",
	size: "small",
	status: "true",
	statusColor: "green",
};

export const LetterAvatarMediumRedLightStatus = Template.bind({});
LetterAvatarMediumRedLightStatus.args = {
	name: "Christopher King",
	colorScheme: "red-light",
	size: "medium",
	status: "true",
	statusColor: "green",
};

export const LetterAvatarLargeRedLightStatus = Template.bind({});
LetterAvatarLargeRedLightStatus.args = {
	name: "Christopher King",
	colorScheme: "red-light",
	size: "large",
	status: "true",
	statusColor: "green",
};

// Gray
export const LetterAvatarSmallGrayLightStatus = Template.bind({});
LetterAvatarSmallGrayLightStatus.args = {
	name: "Younghoon Bingo Larry",
	colorScheme: "gray-light",
	size: "small",
	status: "true",
	statusColor: "green",
};

export const LetterAvatarMediumGrayLightStatus = Template.bind({});
LetterAvatarMediumGrayLightStatus.args = {
	name: "Younghoon Bingo Larry",
	colorScheme: "gray-light",
	size: "medium",
	status: "true",
	statusColor: "green",
};

export const LetterAvatarLargeGrayLightStatus = Template.bind({});
LetterAvatarLargeGrayLightStatus.args = {
	name: "Younghoon Bingo Larry",
	colorScheme: "gray-light",
	size: "large",
	status: "true",
	statusColor: "green",
};

// Blue

export const LetterAvatarSmallBlueLightStatus = Template.bind({});
LetterAvatarSmallBlueLightStatus.args = {
	name: "Michael Jackson",
	colorScheme: "blue-light",
	size: "small",
	status: "true",
	statusColor: "green",
};

export const LetterAvatarMediumBlueLightStatus = Template.bind({});
LetterAvatarMediumBlueLightStatus.args = {
	name: "Michael Jackson",
	colorScheme: "blue-light",
	size: "medium",
	status: "true",
	statusColor: "green",
};

export const LetterAvatarLargeBlueLightStatus = Template.bind({});
LetterAvatarLargeBlueLightStatus.args = {
	name: "Michael Jackson",
	colorScheme: "blue-light",
	size: "large",
	status: "true",
	statusColor: "green",
};