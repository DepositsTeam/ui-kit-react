import React from "react";
import { StackedLetterLargeSubtleAvatar, StackedLetterMediumSubtleAvatar, StackedLetterSmallSubtleAvatar } from "../subtle avatars/StackedSubtleAvatars.stories";

export default {
	title: "Stacked Avatar/Subtle",
};

export const SubtleAvatarStacked = () => (
	<div>
		<small style={styles.heading}>40</small>
		<div style={styles.container}>
			<StackedLetterLargeSubtleAvatar
				avatars={[
                    { name: "Copper Unix", colorScheme: "cyan-light" },
                    { name: "Stephen Thomas", colorScheme: "green-light" },
                    { name: "John Doe", colorScheme: "orange-light" },
                    { name: "Christopher King", colorScheme: "red-light" },
                    { name: "Younghoon Bingo Larry", colorScheme: "gray-light" },
                    { name: "Michael Jackson", colorScheme: "blue-light" },
                    { name: "Christopher King", colorScheme: "red-light" },
                    { name: "Younghoon Bingo Larry", colorScheme: "gray-light" },
                    { name: "Michael Jackson", colorScheme: "blue-light" },
                ]}
				size="large"
				visibleAvatars={4}
			/>
		</div>

		<small style={styles.heading}>32</small>
		<div style={styles.container}>
			<StackedLetterMediumSubtleAvatar
				avatars={[
                    { name: "Copper Unix", colorScheme: "cyan-light" },
                    { name: "Stephen Thomas", colorScheme: "green-light" },
                    { name: "John Doe", colorScheme: "orange-light" },
                    { name: "Christopher King", colorScheme: "red-light" },
                    { name: "Younghoon Bingo Larry", colorScheme: "gray-light" },
                    { name: "Michael Jackson", colorScheme: "blue-light" },
                    { name: "Christopher King", colorScheme: "red-light" },
                    { name: "Younghoon Bingo Larry", colorScheme: "gray-light" },
                    { name: "Michael Jackson", colorScheme: "blue-light" },
                ]}
				size="medium"
				visibleAvatars={4}
			/>
		</div>

		<small style={styles.heading}>24</small>
		<div style={styles.container}>
			<StackedLetterSmallSubtleAvatar
				avatars={[
                    { name: "Copper Unix", colorScheme: "cyan-light" },
                    { name: "Stephen Thomas", colorScheme: "green-light" },
                    { name: "John Doe", colorScheme: "orange-light" },
                    { name: "Christopher King", colorScheme: "red-light" },
                    { name: "Younghoon Bingo Larry", colorScheme: "gray-light" },
                    { name: "Michael Jackson", colorScheme: "blue-light" },
                    { name: "Christopher King", colorScheme: "red-light" },
                    { name: "Younghoon Bingo Larry", colorScheme: "gray-light" },
                    { name: "Michael Jackson", colorScheme: "blue-light" },
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
