import React from "react";
import { StackedLetterLargeSolidAvatar, StackedLetterMediumSolidAvatar, StackedLetterSmallSolidAvatar } from "../solid avatars/StackedSolidAvatars.stories";

export default {
	title: "Stacked Avatar/Solid",
};

export const SolidAvatarStacked = () => (
	<div>
		<small style={styles.heading}>40</small>
		<div style={styles.container}>
			<StackedLetterLargeSolidAvatar
				avatars={[
                    { name: "Copper Unix", colorScheme: "cyan-bold" },
                    { name: "Stephen Thomas", colorScheme: "green-bold" },
                    { name: "John Doe", colorScheme: "orange-bold" },
                    { name: "Christopher King", colorScheme: "red-bold" },
                    { name: "Younghoon Bingo Larry", colorScheme: "gray-bold" },
                    { name: "Michael Jackson", colorScheme: "blue-bold" },
                    { name: "Christopher King", colorScheme: "red-bold" },
                    { name: "Younghoon Bingo Larry", colorScheme: "gray-bold" },
                    { name: "Michael Jackson", colorScheme: "blue-bold" },
                ]}
				size="large"
				visibleAvatars={4}
			/>
		</div>

		<small style={styles.heading}>32</small>
		<div style={styles.container}>
			<StackedLetterMediumSolidAvatar
				avatars={[
                    { name: "Copper Unix", colorScheme: "cyan-bold" },
                    { name: "Stephen Thomas", colorScheme: "green-bold" },
                    { name: "John Doe", colorScheme: "orange-bold" },
                    { name: "Christopher King", colorScheme: "red-bold" },
                    { name: "Younghoon Bingo Larry", colorScheme: "gray-bold" },
                    { name: "Michael Jackson", colorScheme: "blue-bold" },
                    { name: "Christopher King", colorScheme: "red-bold" },
                    { name: "Younghoon Bingo Larry", colorScheme: "gray-bold" },
                    { name: "Michael Jackson", colorScheme: "blue-bold" },
                ]}
				size="medium"
				visibleAvatars={4}
			/>
		</div>

		<small style={styles.heading}>24</small>
		<div style={styles.container}>
			<StackedLetterSmallSolidAvatar
				avatars={[
                    { name: "Copper Unix", colorScheme: "cyan-bold" },
                    { name: "Stephen Thomas", colorScheme: "green-bold" },
                    { name: "John Doe", colorScheme: "orange-bold" },
                    { name: "Christopher King", colorScheme: "red-bold" },
                    { name: "Younghoon Bingo Larry", colorScheme: "gray-bold" },
                    { name: "Michael Jackson", colorScheme: "blue-bold" },
                    { name: "Christopher King", colorScheme: "red-bold" },
                    { name: "Younghoon Bingo Larry", colorScheme: "gray-bold" },
                    { name: "Michael Jackson", colorScheme: "blue-bold" },
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
