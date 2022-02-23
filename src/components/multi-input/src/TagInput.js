import React, { useState } from "react";
import Box from "../../box";
import Text from "../../text";
import "./taginput.css";
import classNames from "../../../utils/classNames";
import Icon from "../../icon";
import Close from "../../icons/Close";
import PropTypes from "prop-types";
import keyGen from "../../../utils/keyGen";

const TagInput = ({
	label,
	className,
	size,
	tagDelimiterKey,
	values,
	onTagAdd,
	onTagDelete,
	inputProps,
	tagProps={},
	tagClassname,
	...props
}) => {
	const [input, setInput] = useState("");
	const [inputTags, setInputTags] = useState(values || []);
	const [isKeyReleased, setIsKeyReleased] = useState(false);

	const invokeFunction = (func, ...args) => {
		if (typeof func === "function") {
			return func(...args);
		}
	};

	const _tagDelimiterKey = {
		space: " ",
		enter: "Enter",
		comma: ",",
	};

	const generatedTagInputClasses = classNames({
		"ui-tag-input__input": true,
	});

	const wrapperClasses = classNames(
		[`size__${size}`, "ui-tag-input__wrapper"],
		className
	);

	const handleTextChange = (event) => {
		setInput(event.target.value);
	};

	const handleKeyDown = (event) => {
		const trimmedInput = input.trim();
		const key = _tagDelimiterKey[tagDelimiterKey];
		if (
			event.key === key &&
			trimmedInput.length &&
			!inputTags.includes(trimmedInput)
		) {
			event.preventDefault();
			setInputTags((prev) => [...prev, trimmedInput]);
			invokeFunction(onTagAdd,trimmedInput, inputTags);
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
			invokeFunction(onTagDelete, poppedTag);
		}
		setIsKeyReleased(false);
	};

	const handleDeleteTag = (index, onTagDelete) => {
		setInputTags((prev) => prev.filter((tag, i) => i !== index));
		invokeFunction(onTagDelete, index);
	};

	return (
		<Box className={wrapperClasses}>
			<Box is={"label"}>
				<Text className={"ui-tag-input__label"} scale={"subhead"}>
					{label}
				</Text>
			</Box>
			<div className="ui-tag-input__input-wrapper">
				{inputTags.map((tag, index) => (
					<div
						className={`ui-tag-input__input-tag ${tagClassname}`}
						key={`ui-tag-input${keyGen()}`}
						style={tagProps}
					>
						<Text
							className="ui-tag-input__input-tag-text"
							scale={"subhead"}
							fontFace={"circularSTD"}
						>
							{tag}
						</Text>
						<Icon
							icon={Close}
							onClick={() => handleDeleteTag(index)}
							className="ui-tag-input__close-icon"
						/>
					</div>
				))}
				<Box
					className={generatedTagInputClasses}
					is="input"
					{...props}
					{...inputProps}
					onKeyDown={handleKeyDown}
					onKeyUp={() => setIsKeyReleased(true)}
					value={input}
					onChange={handleTextChange}
					autoFocus
					onFocus={(e) => e.currentTarget.select()}
				/>
			</div>
		</Box>
	);
};

export default TagInput;

TagInput.propTypes = {
	/** The label used above the input element. */
	label: PropTypes.string,
	size: PropTypes.oneOf([
		"small",
		"medium",
		"large",
		"xlarge",
		"huge",
		"massive",
	]),
	/** Each value is rendered inside a tag. */
	values: PropTypes.array,
	/** Key to press in order to submit a new tag while typing. */
	tagDelimiterKey: PropTypes.oneOf(["enter", "comma", "space"]),
	onTagAdd: PropTypes.func,
	onTagDelete: PropTypes.func,
	/** Props to pass to the input component. */
	inputProps: PropTypes.object,
	/** Props to change the css properties of the tag component*/
	tagProps: PropTypes.object,
	/** The class name to apply to the container of the tag component. */
	tagClassname: PropTypes.string,
};

TagInput.defaultProps = {
	label: "Form Label",
	size: "medium",
	values: ["Option 1", "Option 2", "Option 3"],
	tagDelimiterKey: "enter",
	inputProps: { placeholder: "Add tag" },
	onTagDelete: (index) => {
		console.log(index)}
};
