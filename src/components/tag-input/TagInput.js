import React, { useState } from "react";
import Box from "../box";
import Text from "../text";
import "./Taginput.scss";
import classNames from "../../utils/classNames";
import Icon from "../icon";
import Close from "../icons/Close";
import PropTypes from "prop-types";
import keyGen from "../../utils/keyGen";

const TagInput = ({
  label,
  className,
  size,
  tagDelimiterKey,
  values,
  onTagAdded,
  onTagDeleted,
  inputProps,
  tagProps = {},
  tagClassname,
  onTextChanged,
  onTagChanged,
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
    let oldTagArray = inputTags;
    const key = _tagDelimiterKey[tagDelimiterKey];
    if (event.key === key && newTag.length && !inputTags.includes(newTag)) {
      event.preventDefault();
      setInputTags((prev) => [...prev, newTag]);
      setInputTags((state) => {
        invokeFunction(onTagAdded, newTag, state);
        invokeFunction(onTagChanged, oldTagArray, state);
        return state;
      });
      setInput("");
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
      setInputTags((state) => {
        invokeFunction(onTagDeleted, deletedTag, state);
        invokeFunction(onTagChanged, oldTagArray, state);
        return state;
      });
    }
    setIsKeyReleased(false);
  };

  const handleDeleteTag = (index) => {
    const deletedTag = inputTags[index];
    let oldTagArray = inputTags;
    setInputTags((prev) => prev.filter((tag, i) => i !== index));
    setInputTags((state) => {
      invokeFunction(onTagDeleted, deletedTag, state);
      invokeFunction(onTagChanged, oldTagArray, state);
      return state;
    });
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
          <Box
            is="div"
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
  tagDelimiterKey: PropTypes.oneOf(["enter", "comma", "space"]),
  onTagAdded: PropTypes.func,
  onTagDeleted: PropTypes.func,
  onTextChanged: PropTypes.func,
  onTagChanged: PropTypes.func,
  inputProps: PropTypes.object,
  tagProps: PropTypes.object,
  tagClassname: PropTypes.string,
};

TagInput.defaultProps = {
  label: "Form Label",
  size: "medium",
  values: [],
  tagDelimiterKey: "enter",
  inputProps: { placeholder: "Add tag" },
  onTagDelete: (index) => {
    console.log(index);
  },
};
