import Avatar from "../../src/Avatar"
import Lady from "../../../../assets/avatar/lady.png"

export default {

	component: Avatar,
	title: "Avatar/Image Avatar",

	argTypes:{
		name: {
			description:"The name used for the initials and title attribute."
		},
		src:{
			description: "The src attribute for the img element. When it's not available, render initials instead."
		},
		colorScheme:{
			description: "The color scheme of the avatar.",
		},
		size:{
			description: "The size of the avatar.",
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
// image avatar
export const ImageAvatarSmall = Template.bind({});
ImageAvatarSmall.args = {
	size: "small",
	src: Lady,
}

export const ImageAvatarMedium = Template.bind({});
ImageAvatarMedium.args = {
	size: "medium",
	src: Lady,
}

export const ImageAvatarLarge = Template.bind({});
ImageAvatarLarge.args = {
	size: "large",
	src: Lady,
}