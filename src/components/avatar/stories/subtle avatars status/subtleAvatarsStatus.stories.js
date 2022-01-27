import React from "react";
import { LetterAvatarLargeBlueLightStatus, LetterAvatarLargeCyanLightStatus, LetterAvatarLargeGrayLightStatus, LetterAvatarLargeGreenLightStatus, LetterAvatarLargeOrangeLightStatus, LetterAvatarLargeRedLightStatus, LetterAvatarMediumBlueLightStatus, LetterAvatarMediumCyanLightStatus, LetterAvatarMediumGrayLightStatus, LetterAvatarMediumGreenLightStatus, LetterAvatarMediumOrangeLightStatus, LetterAvatarMediumRedLightStatus, LetterAvatarSmallBlueLightStatus, LetterAvatarSmallCyanLightStatus, LetterAvatarSmallGrayLightStatus, LetterAvatarSmallGreenLightStatus, LetterAvatarSmallOrangeLightStatus, LetterAvatarSmallRedLightStatus } from "../Letter Avatar Story/letterSubtleStatus.stories";

export default {
	title: "Avatars/Subtle Avatars with status",
};

export const SubtleAvatarsStatus = () => (
	<div>
		<small style={styles.heading}>40</small>
		<div style={styles.container}>
			<LetterAvatarLargeCyanLightStatus
				name="Copper Unix"
				colorScheme="cyan-light"
				size="large"
                status="true"
				statusColor="green"
			/>
			<LetterAvatarLargeGreenLightStatus
				name="Stephen Thomas"
				colorScheme="green-light"
				size="large"
                status="true"
				statusColor="green"
			/>
			<LetterAvatarLargeOrangeLightStatus
				name="John Doe"
				colorScheme="orange-light"
				size="large"
                status="true"
				statusColor="green"
			/>
			<LetterAvatarLargeRedLightStatus
				name="Christopher King"
				colorScheme="red-light"
				size="large"
                status="true"
				statusColor="green"
			/>
			<LetterAvatarLargeGrayLightStatus
				name="Younghoon Bingo Larry"
				colorScheme="gray-light"
				size="large"
                status="true"
				statusColor="green"
			/>
			<LetterAvatarLargeBlueLightStatus
				name="Michael Jackson"
				colorScheme="blue-light"
				size="large"
                status="true"
				statusColor="green"
			/>
		</div>

		<small style={styles.heading}>32</small>
		<div style={styles.container}>
			<LetterAvatarMediumCyanLightStatus
				name="Copper Unix"
				colorScheme="cyan-light"
				size="medium"
                status="true"
				statusColor="green"
			/>
			<LetterAvatarMediumGreenLightStatus
				name="Stephen Thomas"
				colorScheme="green-light"
				size="medium"
                status="true"
				statusColor="green"
			/>
			<LetterAvatarMediumOrangeLightStatus
				name="John Doe"
				colorScheme="orange-light"
				size="medium"
                status="true"
				statusColor="green"
			/>
			<LetterAvatarMediumRedLightStatus
				name="Christopher King"
				colorScheme="red-light"
				size="medium"
                status="true"
				statusColor="green"
			/>
			<LetterAvatarMediumGrayLightStatus
				name="Younghoon Bingo Larry"
				colorScheme="gray-light"
				size="medium"
                status="true"
				statusColor="green"
			/>
			<LetterAvatarMediumBlueLightStatus
				name="Michael Jackson"
				colorScheme="blue-light"
				size="medium"
                status="true"
				statusColor="green"
			/>
		</div>

		<small style={styles.heading}>24</small>
		<div style={styles.container}>
			<LetterAvatarSmallCyanLightStatus
				name="Copper Unix"
				colorScheme="cyan-light"
				size="small"
                status="true"
				statusColor="green"
			/>
			<LetterAvatarSmallGreenLightStatus
				name="Stephen Thomas"
				colorScheme="green-light"
				size="small"
                status="true"
				statusColor="green"
			/>
			<LetterAvatarSmallOrangeLightStatus
				name="John Doe"
				colorScheme="orange-light"
				size="small"
                status="true"
				statusColor="green"
			/>
			<LetterAvatarSmallRedLightStatus
				name="Christopher King"
				colorScheme="red-light"
				size="small"
                status="true"
				statusColor="green"
			/>
			<LetterAvatarSmallGrayLightStatus
				name="Younghoon Bingo Larry"
				colorScheme="gray-light"
				size="small"
                status="true"
				statusColor="green"
			/>
			<LetterAvatarSmallBlueLightStatus
				name="Michael Jackson"
				colorScheme="blue-light"
				size="small"
                status="true"
				statusColor="green"
			/>
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
