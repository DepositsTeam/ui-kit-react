import React from "react";
import {
	LetterAvatarLargeBlueBold,
	LetterAvatarLargeCyanBold,
	LetterAvatarLargeGrayBold,
	LetterAvatarLargeGreenBold,
	LetterAvatarLargeOrangeBold,
	LetterAvatarLargeRedBold,
	LetterAvatarMediumBlueBold,
	LetterAvatarMediumCyanBold,
	LetterAvatarMediumGrayBold,
	LetterAvatarMediumGreenBold,
	LetterAvatarMediumOrangeBold,
	LetterAvatarMediumRedBold,
	LetterAvatarSmallBlueBold,
	LetterAvatarSmallCyanBold,
	LetterAvatarSmallGrayBold,
	LetterAvatarSmallGreenBold,
	LetterAvatarSmallOrangeBold,
	LetterAvatarSmallRedBold,
} from "../Letter Avatar Story/letterSolidAvatar.stories";

export default {
	title: "Avatars/Solid Avatars",
};

export const SolidAvatars = () => (
	<div>
		<small style={styles.heading}>40</small>
		<div style={styles.container}>
			<LetterAvatarLargeCyanBold
				name="Copper Unix"
				colorScheme="cyan-bold"
				size="large"
			/>
			<LetterAvatarLargeGreenBold
				name="Stephen Thomas"
				colorScheme="green-bold"
				size="large"
			/>
			<LetterAvatarLargeOrangeBold
				name="John Doe"
				colorScheme="orange-bold"
				size="large"
			/>
			<LetterAvatarLargeRedBold
				name="Christopher King"
				colorScheme="red-bold"
				size="large"
			/>
			<LetterAvatarLargeGrayBold
				name="Younghoon Bingo Larry"
				colorScheme="gray-bold"
				size="large"
			/>
			<LetterAvatarLargeBlueBold
				name="Michael Jackson"
				colorScheme="blue-bold"
				size="large"
			/>
		</div>

		<small style={styles.heading}>32</small>
		<div style={styles.container}>
			<LetterAvatarMediumCyanBold
				name="Copper Unix"
				colorScheme="cyan-bold"
				size="medium"
			/>
			<LetterAvatarMediumGreenBold
				name="Stephen Thomas"
				colorScheme="green-bold"
				size="medium"
			/>
			<LetterAvatarMediumOrangeBold
				name="John Doe"
				colorScheme="orange-bold"
				size="medium"
			/>
			<LetterAvatarMediumRedBold
				name="Christopher King"
				colorScheme="red-bold"
				size="medium"
			/>
			<LetterAvatarMediumGrayBold
				name="Younghoon Bingo Larry"
				colorScheme="gray-bold"
				size="medium"
			/>
			<LetterAvatarMediumBlueBold
				name="Michael Jackson"
				colorScheme="blue-bold"
				size="medium"
			/>
		</div>

		<small style={styles.heading}>24</small>
		<div style={styles.container}>
			<LetterAvatarSmallCyanBold
				name="Copper Unix"
				colorScheme="cyan-bold"
				size="small"
			/>
			<LetterAvatarSmallGreenBold
				name="Stephen Thomas"
				colorScheme="green-bold"
				size="small"
			/>
			<LetterAvatarSmallOrangeBold
				name="John Doe"
				colorScheme="orange-bold"
				size="small"
			/>
			<LetterAvatarSmallRedBold
				name="Christopher King"
				colorScheme="red-bold"
				size="small"
			/>
			<LetterAvatarSmallGrayBold
				name="Younghoon Bingo Larry"
				colorScheme="gray-bold"
				size="small"
			/>
			<LetterAvatarSmallBlueBold
				name="Michael Jackson"
				colorScheme="blue-bold"
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
