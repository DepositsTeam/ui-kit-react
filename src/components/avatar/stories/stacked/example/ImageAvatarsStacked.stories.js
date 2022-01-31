import React from "react";
import Lady from "../../../../../assets/avatar/lady.png";
import Lady2 from "../../../../../assets/avatar/lady2.png";
import Man from "../../../../../assets/avatar/man.png";
import Lady3 from "../../../../../assets/avatar/lady3.png";
import { StackedLargeImageAvatar, StackedMediumImageAvatar, StackedSmallImageAvatar } from "../image avatars/StackedImageAvatar.stories";

export default {
	title: "Stacked Avatar/Image",
};

export const ImageAvatarStacked = () => (
	<div>
		<small style={styles.heading}>40</small>
		<div style={styles.container}>
			<StackedLargeImageAvatar
				avatars={[
					{ imageSrc: Lady },
					{ imageSrc: Lady2 },
					{ imageSrc: Man },
					{ imageSrc: Lady3 },
					{ imageSrc: Lady },
					{ imageSrc: Lady2 },
					{ imageSrc: Man },
					{ imageSrc: Lady3 },
					{ imageSrc: Man },
				]}
				size="large"
				visibleAvatars={4}
			/>
		</div>

		<small style={styles.heading}>32</small>
		<div style={styles.container}>
			<StackedMediumImageAvatar
				avatars={[
					{ imageSrc: Lady },
					{ imageSrc: Lady2 },
					{ imageSrc: Man },
					{ imageSrc: Lady3 },
					{ imageSrc: Lady },
					{ imageSrc: Lady2 },
					{ imageSrc: Man },
					{ imageSrc: Lady3 },
					{ imageSrc: Man },
				]}
				size="medium"
				visibleAvatars={4}
			/>
		</div>

		<small style={styles.heading}>24</small>
		<div style={styles.container}>
			<StackedSmallImageAvatar
				avatars={[
					{ imageSrc: Lady },
					{ imageSrc: Lady2 },
					{ imageSrc: Man },
					{ imageSrc: Lady3 },
					{ imageSrc: Lady },
					{ imageSrc: Lady2 },
					{ imageSrc: Man },
					{ imageSrc: Lady3 },
					{ imageSrc: Man },
				]}
				size="small"
				visibleAvatars={4}
			/>
		</div>
	</div>
);

const styles = {
	container: {
		marginTop: "16px",
		marginBottom: "35px",
	},
	heading: {
		fontSize: "10px",
		lineHeight: "16px",
	},
};
