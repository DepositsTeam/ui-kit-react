import React, { useState, useEffect, useRef } from "react";
import Box from "../box";
import Text from "../text";
import PropTypes from "prop-types";
import inputPropTypes, { defaultProps } from "../../utils/inputPropTypes";
import classNames from "../../utils/classNames";
import keyGen from "../../utils/keyGen";
import Icon from "../icon";
import Close from "../icons/Close";
import ChevronFilledDown from "../icons/ChevronFilledDown";
import TextField from "../text-field";
import Search from "../icons/Search";
import Checkbox from "../checkbox";
import Error from "../icons/Error";
import "./TagDropdown.scss";

const TagDropdown = ({
  size,
  options,
  labelClass,
  labelFontFace,
  label,
  errorMessage,
  leftIcon,
  rightIcon,
  onChange,
  placeholder,
  showCheckboxes,
  initiallySelectedTags,
  maxDropdownHeight,
  ...props
}) => {
  const [inputTags, setInputTags] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [showOptions, setShowOptions] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [availableOptions, setAvailableOptions] = useState([]);
  const validInput = useRef();

  useEffect(() => {
    setInputTags(
      [...options].filter((option) => {
        if (typeof option === "string") {
          return selectedTags.includes(option);
        } else {
          return selectedTags.includes(option.value);
        }
      })
    );
  }, [options, selectedTags]);

  useEffect(() => {
    if (initiallySelectedTags && Array.isArray(initiallySelectedTags)) {
      options.forEach((option) => {
        const optionValue = returnOptionValue(option);
        if (initiallySelectedTags.includes(optionValue)) {
          setSelectedTags((tags) => {
            const localTags = [...tags];
            localTags.push(optionValue);
            return localTags;
          });
        }
      });
    }
  }, []);

  useEffect(() => {
    onChange(selectedTags);
  }, [selectedTags, onChange]);

  const hideOptionsOnOutsideClick = (e) => {
    if (!e.target.closest(".ui-tag-dropdown__wrapper")) {
      setShowOptions(false);
    }
  };

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const returnOptionValue = (option) =>
    typeof option === "object" ? option.value : option;

  const returnOptionText = (option) =>
    typeof option === "object" ? option.text : option;

  useEffect(() => {
    if (showOptions) {
      validInput.current.getElementsByTagName("input")[0].focus();
    }
  });

  useEffect(() => {
    window.addEventListener("click", hideOptionsOnOutsideClick);

    return () => {
      window.removeEventListener("click", hideOptionsOnOutsideClick);
    };
  }, []);

  useEffect(() => {
    const unSelectedOptions = [...options];
    setAvailableOptions(
      unSelectedOptions.filter((option) =>
        typeof option === "string"
          ? option.toLowerCase().includes(inputValue.toLowerCase())
          : option.text.toLowerCase().includes(inputValue.toLowerCase())
      )
    );
  }, [options, selectedTags, inputValue]);

  const handleDeleteTag = (currentTag) => {
    setSelectedTags(
      [...selectedTags].filter((tag) => {
        return typeof currentTag === "string"
          ? tag !== currentTag
          : tag !== currentTag.value;
      })
    );
  };

  const switchOptionInTags = (option) => {
    const optionValue = returnOptionValue(option);
    const clonedTags = [...selectedTags];
    if (clonedTags.includes(optionValue)) {
      clonedTags.splice(selectedTags.indexOf(optionValue), 1);
    } else {
      clonedTags.push(optionValue);
    }
    setSelectedTags(clonedTags);
  };

  const mappedInputTags = inputTags.map((tag, index) => (
    <Box
      className={"ui-tag-dropdown__input-tag"}
      key={`ui-tag-dropdown${keyGen()}_${index}`}
    >
      <Text
        className={"ui-tag-dropdown__input-tag-text"}
        scale={"subhead"}
        fontFace={"circularSTD"}
      >
        {typeof tag === "string" ? tag : tag.text}
      </Text>
      <Icon
        icon={Close}
        className={"ui-tag-dropdown__close-icon"}
        height="16px"
        width="16px"
        onClick={() => handleDeleteTag(tag)}
      />
    </Box>
  ));

  const mappedAvailableOptions = availableOptions.map((option, index) => (
    <Box
      className={classNames({
        "ui-tag-dropdown__dropdown__option": true,
        dropdownMode: !showCheckboxes,
        selected: selectedTags.includes(returnOptionValue(option)),
      })}
      cursor={showCheckboxes ? "auto" : "pointer"}
      key={`option-${index}`}
    >
      {showCheckboxes ? (
        <Checkbox
          checked={selectedTags.includes(returnOptionValue(option))}
          value={returnOptionValue(option)}
          onChange={() => switchOptionInTags(option)}
        >
          <Text marginY={0} fontFace={"circularSTD"} scale={"subhead"}>
            {returnOptionText(option)}
          </Text>
        </Checkbox>
      ) : (
        <Text
          marginY={0}
          fontFace={"circularSTD"}
          marginLeft={8}
          scale={"subhead"}
        >
          {returnOptionText(option)}
        </Text>
      )}
    </Box>
  ));

  return (
    <Box
      className={classNames({
        "ui-tag-dropdown__wrapper": true,
        [`size__${size}`]: true,
      })}
      style={{ "--dropdown-content-height": maxDropdownHeight }}
    >
      <Box is={"label"}>
        <Text
          className={classNames({
            [labelClass]: labelClass,
            "ui-tag-dropdown__label": true,
          })}
          fontFace={labelFontFace}
          scale={"subhead"}
        >
          {label}
        </Text>
      </Box>
      <Box
        className={classNames({
          "ui-tag-dropdown__input-wrapper": true,
          hasError: !!errorMessage,
        })}
        onClick={toggleOptions}
      >
        {leftIcon && (
          <Box className={"ui-tag-dropdown__left-icon"}>{leftIcon}</Box>
        )}
        <Box className={"ui-tag-dropdown__input-wrapper__left"}>
          {mappedInputTags}
          {placeholder && !inputTags.length && (
            <Text className={"ui-tag-dropdown__placeholder"} marginY={0}>
              {placeholder}
            </Text>
          )}
        </Box>
        <Box className={"ui-tag-dropdown__input-wrapper__right"}>
          {rightIcon || <Icon icon={ChevronFilledDown} />}
        </Box>
      </Box>
      {showOptions && (
        <Box className={"ui-tag-dropdown__dropdown"}>
          <Box className={"ui-tag-dropdown__dropdown__header"}>
            <TextField
              ref={validInput}
              invisible
              search
              leftIcon={Search}
              placeholder={placeholder}
              size={"large"}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </Box>
          <Box className={"ui-tag-dropdown__dropdown__options"}>
            {mappedAvailableOptions}
          </Box>
        </Box>
      )}
      {errorMessage && (
        <Box className={"ui-text-field__error"}>
          <Icon icon={Error} className={"ui-text-field__error-icon"} />
          <Text
            className={"ui-text-field__error-text"}
            scale={"subhead"}
            fontFace={"circularSTD"}
          >
            {errorMessage}
          </Text>
        </Box>
      )}
    </Box>
  );
};

export default TagDropdown;

TagDropdown.propTypes = {
  ...inputPropTypes,
  placeholder: PropTypes.string,
  options: PropTypes.array,
  modelValue: PropTypes.array,
  showCheckboxes: PropTypes.bool,
  onChange: PropTypes.func,
  initiallySelectedTags: PropTypes.array,
  maxDropdownHeight: PropTypes.string,
};

TagDropdown.defaultProps = {
  ...defaultProps,
  showCheckboxes: true,
  maxDropdownHeight: "250px",
};
