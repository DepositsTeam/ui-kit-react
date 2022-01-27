// test if avatar or letter avatar renders
// test if avatar or letter avatar with status renders

import { render } from "@testing-library/react";
import Avatar from "../src/Avatar";
import Lady from "../../../assets/avatar/lady.png";

describe("Avatar Component", () => {
	it("renders letter avatar", () => {
		const { getByTestId } = render(<Avatar name="Michael Jackson" />);
		expect(getByTestId("letter-avatar")).toBeTruthy();
	});

	it("renders letter avatar with initials", () => {
		const { getByTestId } = render(<Avatar name="Michael Jackson" />);
		expect(getByTestId("letter-avatar")).toHaveTextContent("MJ");
	});

	it("renders letter avatar with status", () => {
		const { getByTestId } = render(
			<Avatar name="Michael Jackson" status={true} />
		);
		const statusDiv = getByTestId("status");
		expect(statusDiv).toBeTruthy();
	});

	it("renders letter avatar without status", () => {
		const { queryByTestId } = render(
			<Avatar name="Michael Jackson" status={false} />
		);
		const statusDiv = queryByTestId("status");
		expect(statusDiv).toBeFalsy();
	});

	it("renders image avatar", () => {
		const { getByTestId, queryByTestId } = render(
			<Avatar name="Michael Jackson" src={Lady} />
		);
		const image = getByTestId("avatar");
		const letterAvatar = queryByTestId("letter-avatar");
		expect(image).toBeTruthy();
		expect(letterAvatar).toBeFalsy();
	});

	it("renders image avatar with status", () => {
		const { getByTestId, queryByTestId } = render(
			<Avatar name="Michael Jackson" src={Lady} status={true} />
		);
		const image = getByTestId("avatar");
		const statusDiv = getByTestId("status");
		const letterAvatar = queryByTestId("letter-avatar");
		expect(image).toBeTruthy();
		expect(letterAvatar).toBeFalsy();
		expect(statusDiv).toBeTruthy();
	});

	it("renders image avatar without status", () => {
		const { getByTestId, queryByTestId } = render(
			<Avatar name="Michael Jackson" src={Lady} status={false} />
		);
		const image = getByTestId("avatar");
		const statusDiv = queryByTestId("status");
		const letterAvatar = queryByTestId("letter-avatar");
		expect(image).toBeTruthy();
		expect(letterAvatar).toBeFalsy();
		expect(statusDiv).toBeFalsy();
	});

	it("renders stacked letter avatar", () => {
		const { getAllByTestId } = render(
			<Avatar
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
                visibleAvatars={4}
			/>
		);
        const visibleAvatars = 4
        const stackedAvatarList = getAllByTestId("stack-letter-avatar-item")
        expect(stackedAvatarList).toHaveLength(visibleAvatars)

	});
});
