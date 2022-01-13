import React from "react";
import {
	LetterAvatarLargeBlueLight,
	LetterAvatarLargeCyanLight,
	LetterAvatarLargeGrayLight,
	LetterAvatarLargeGreenLight,
	LetterAvatarLargeOrangeLight,
	LetterAvatarLargeRedLight,
	LetterAvatarMediumBlueLight,
	LetterAvatarMediumCyanLight,
	LetterAvatarMediumGrayLight,
	LetterAvatarMediumGreenLight,
	LetterAvatarMediumOrangeLight,
	LetterAvatarMediumRedLight,
	LetterAvatarSmallBlueLight,
	LetterAvatarSmallCyanLight,
	LetterAvatarSmallGrayLight,
	LetterAvatarSmallGreenLight,
	LetterAvatarSmallOrangeLight,
	LetterAvatarSmallRedLight,
} from "../Letter Avatar Story/letterSubtleAvatar.stories";

export default {
	title: "Avatars/Subtle Avatars",
};

export const SubtleAvatars = () => (
	<div>
		<small style={styles.heading}>40</small>
		<div style={styles.container}>
			<LetterAvatarLargeCyanLight
				name="Copper Unix"
				colorScheme="cyan-light"
				size="large"
			/>
			<LetterAvatarLargeGreenLight
				name="Stephen Thomas"
				colorScheme="green-light"
				size="large"
			/>
			<LetterAvatarLargeOrangeLight
				name="John Doe"
				colorScheme="orange-light"
				size="large"
			/>
			<LetterAvatarLargeRedLight
				name="Christopher King"
				colorScheme="red-light"
				size="large"
			/>
			<LetterAvatarLargeGrayLight
				name="Younghoon Bingo Larry"
				colorScheme="gray-light"
				size="large"
			/>
			<LetterAvatarLargeBlueLight
				name="Michael Jackson"
				colorScheme="blue-light"
				size="large"
			/>
		</div>

		<small style={styles.heading}>32</small>
		<div style={styles.container}>
			<LetterAvatarMediumCyanLight
				name="Copper Unix"
				colorScheme="cyan-light"
				size="medium"
			/>
			<LetterAvatarMediumGreenLight
				name="Stephen Thomas"
				colorScheme="green-light"
				size="medium"
			/>
			<LetterAvatarMediumOrangeLight
				name="John Doe"
				colorScheme="orange-light"
				size="medium"
			/>
			<LetterAvatarMediumRedLight
				name="Christopher King"
				colorScheme="red-light"
				size="medium"
			/>
			<LetterAvatarMediumGrayLight
				name="Younghoon Bingo Larry"
				colorScheme="gray-light"
				size="medium"
			/>
			<LetterAvatarMediumBlueLight
				name="Michael Jackson"
				colorScheme="blue-light"
				size="medium"
			/>
		</div>

		<small style={styles.heading}>24</small>
		<div style={styles.container}>
			<LetterAvatarSmallCyanLight
				name="Copper Unix"
				colorScheme="cyan-light"
				size="small"
			/>
			<LetterAvatarSmallGreenLight
				name="Stephen Thomas"
				colorScheme="green-light"
				size="small"
			/>
			<LetterAvatarSmallOrangeLight
				name="John Doe"
				colorScheme="orange-light"
				size="small"
			/>
			<LetterAvatarSmallRedLight
				name="Christopher King"
				colorScheme="red-light"
				size="small"
			/>
			<LetterAvatarSmallGrayLight
				name="Younghoon Bingo Larry"
				colorScheme="gray-light"
				size="small"
			/>
			<LetterAvatarSmallBlueLight
				name="Michael Jackson"
				colorScheme="blue-light"
				size="small"
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
