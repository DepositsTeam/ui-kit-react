import Avatar from "../../src/Avatar";
import Lady from "../../../../assets/avatar/lady.png"

export default {

	component: Avatar,
	title: "Avatar Arrow/Image Avatar",

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
		},
        icon: {
            description: "Displays a drop down icon.",
            defaultValue: false,
        }
    
	}
};

const Template = (args) => <Avatar {...args} />;
// image avatar
export const ImageAvatarArrowSmall = Template.bind({});
ImageAvatarArrowSmall.args = {
	size: "small",
	src: Lady,
    icon: true,
}

export const ImageAvatarArrowMedium = Template.bind({});
ImageAvatarArrowMedium.args = {
	size: "medium",
	src: Lady,
    icon: true,
}

export const ImageAvatarArrowLarge = Template.bind({});
ImageAvatarArrowLarge.args = {
	size: "large",
	src: Lady,
    icon: true,
}