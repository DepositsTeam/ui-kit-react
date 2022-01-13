import React from "react";
import Lady from "../../../assets/avatar/lady.png";
import {
	ImageAvatarLarge,
	ImageAvatarMedium,
	ImageAvatarSmall,
} from "../Image Avatar Story/imageAvatar.stories";

export default {
	title: "Avatars/Image Avatars",
};

export const ImageAvatars = () => (
	<div>
		<small style={styles.heading}>40</small>
		<div style={styles.container}>
			<ImageAvatarLarge size="large" src={Lady} />
		</div>

		<small style={styles.heading}>32</small>
		<div style={styles.container}>
			<ImageAvatarMedium size="medium" src={Lady} />
		</div>
		<small style={styles.heading}>24</small>
		<div style={styles.container}>
			<ImageAvatarSmall size="small" src={Lady} />
		</div>
	</div>
);

const styles = {
	container: {
		display: "flex",
		justifyContent: "space-between",
		width: "300px",
		marginTop: "16px",
		marginBottom: "35px",
	},
	heading: {
		fontSize: "10px",
		lineHeight: "16px",
	},
};
