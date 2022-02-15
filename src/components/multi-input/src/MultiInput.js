import React, { useState } from "react";
import Box from "../../box";
import Text from "../../text";
import "./multiInput.css";
import classNames from "../../../utils/classNames";
import Icon from "../../icon";
import Close from "../../icons/Close";
import PropTypes from "prop-types";

const MultiInput = ({ label, className, size, values, ...props }) => {
	const [input, setInput] = useState("");
	const [inputTags, setInputTags] = useState(values || []);
	const [isKeyReleased, setIsKeyReleased] = useState(false);

	const generatedMultiInputClasses = classNames({
		"ui-multi-input__input": true,
	});

	const wrapperClasses = classNames(
		[`size__${size}`, "ui-multi-input__wrapper"],
		className
	);

	const handleTextChange = (event) => {
		setInput(event.target.value);
	};

	const handleKeyDown = (event) => {
		const trimmedInput = input.trim();
		if (
			event.key === "Enter" &&
			trimmedInput.length &&
			!inputTags.includes(trimmedInput)
		) {
			event.preventDefault();
			setInputTags((prev) => [...prev, trimmedInput]);
			setInput("");
		}

		if (
			event.key === "Backspace" &&
			!input.length &&
			inputTags.length &&
			isKeyReleased
		) {
			event.preventDefault();
			const _inputTags = [...inputTags];
			const poppedTag = _inputTags.pop();
			setInputTags(_inputTags);
			setInput(poppedTag);
		}
		setIsKeyReleased(false);
	};

	const handleDeleteTag = (index) => {
		setInputTags((prev) => prev.filter((tag, i) => i !== index));
	};

	return (
		<Box className={wrapperClasses}>
			<Box is={"label"}>
				<Text className={"ui-multi-input__label"} scale={"subhead"}>
					{label}
				</Text>
			</Box>
			<div className="ui-multi-input__input-wrapper">
				{inputTags.map((tag, index) => (
					<div className="ui-multi-input__input-tag">
						<Text
							className="ui-multi-input__input-tag-text"
							scale={"subhead"}
							fontFace={"circularSTD"}
						>
							{tag}
						</Text>
						<Icon
							icon={Close}
							onClick={() => handleDeleteTag(index)}
							className="ui-multi-input__close-icon"
						/>
					</div>
				))}
				<Box
					className={generatedMultiInputClasses}
					is="input"
					{...props}
					onKeyDown={handleKeyDown}
					onKeyUp={() => setIsKeyReleased(true)}
					value={input}
					onChange={handleTextChange}
					autoFocus
                    onFocus={e => e.currentTarget.select()}
				/>
			</div>
		</Box>
	);
};

export default MultiInput;

MultiInput.propTypes = {
	label: PropTypes.string,
	size: PropTypes.oneOf([
		"small",
		"medium",
		"large",
		"xlarge",
		"huge",
		"massive",
	]),
	values: PropTypes.array,
};

MultiInput.defaultProps = {
	label: "Form Label",
	size: "medium",
	values: ["Option 1", "Option 2", "Option 3"],
};
