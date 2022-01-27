import Avatar from "../../src/Avatar";
import Lady from "../../../../assets/avatar/lady.png"

export default {
	component: Avatar,
	title: "Avatar/Image Avatar Status",
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
// image avatar with status icon
export const ImageAvatarSmallStatus = Template.bind({});
ImageAvatarSmallStatus.args = {
	size: "small",
	src: Lady,
    status: true,
}

export const ImageAvatarMediumStatus = Template.bind({});
ImageAvatarMediumStatus.args = {
	size: "medium",
	src: Lady,
    status: true,
}

export const ImageAvatarLargeStatus = Template.bind({});
ImageAvatarLargeStatus.args = {
	size: "large",
	src: Lady,
    status: true,
}