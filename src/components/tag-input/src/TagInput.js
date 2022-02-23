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
	onTagAdded,
	onTagDeleted,
	inputProps,
	tagProps={},
	tagClassname,
	onTextChanged,
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
		invokeFunction(onTextChanged, event.target.value);
	};

	const handleKeyDown = (event) => {
		const newTag = input.trim();
		const key = _tagDelimiterKey[tagDelimiterKey];
		if (
			event.key === key &&
			newTag.length &&
			!inputTags.includes(newTag)
		) {
			event.preventDefault();
			setInputTags((prev) => [...prev, newTag]);
			const tagsArray = [...inputTags, newTag];
			setInput("");
			invokeFunction(onTagAdded, newTag, tagsArray);
		}

		if (
			event.key === "Backspace" &&
			!input.length &&
			inputTags.length &&
			isKeyReleased
		) {
			event.preventDefault();
			const tagsArray = [...inputTags];
			const deletedTag = tagsArray.pop();
			setInputTags(tagsArray);
			setInput(deletedTag);
			invokeFunction(onTagDeleted, inputTags);
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
					<Box is='div'
						className={`ui-tag-input__input-tag ${tagClassname}`}
						key={`ui-tag-input${keyGen()}`}
						{...tagProps}
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
					</Box>
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
	/** Function to be called when a new tag is added. it contains the added tag and all the tags currently available as its arguments*/
	onTagAdded: PropTypes.func,
	/** Function to be called when a tag is deleted. it contains the deleted tag and all the tags currently available as its arguments*/
	onTagDeleted: PropTypes.func,
	onTextChanged: PropTypes.func,
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
