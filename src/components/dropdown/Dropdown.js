import React, { useState, useEffect } from "react";
import "./Dropdown.scss";
import PropTypes from "prop-types";
import Box from "../box";
import TextField from "../text-field";
import inputPropTypes, { defaultProps } from "../../utils/inputPropTypes";
import classNames from "../../utils/classNames";
import Text from "../text";

const Dropdown = ({ options, onChange, returnObjModel, ...props }) => {
  const [inputValue, setInputValue] = useState("");
  const [showOptions, setShowOptions] = useState(false);
  const [computedOptions, setComputedOptions] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isBlur, setIsBlur] = useState(true);

  const returnOptionValue = (option) =>
    typeof option === "object" ? option.value : option;

  const returnOptionText = (option) =>
    typeof option === "object" ? option.text : option;

  useEffect(() => {
    if (selectedOption) {
      if (inputValue !== returnOptionText(selectedOption)) {
        setSelectedOption(null);
      }
    } else {
      if (inputValue) {
        setComputedOptions(
          [...options].filter((option) => {
            if (typeof option === "string") {
              return option.toLowerCase().includes(inputValue.toLowerCase());
            } else {
              return option.text
                .toLowerCase()
                .includes(inputValue.toLowerCase());
            }
          })
        );
      } else {
        setComputedOptions([...options]);
      }
    }
  }, [options, inputValue, selectedOption]);

  useEffect(() => {
    if (onChange && typeof onChange === "function") {
      onChange(returnObjModel ? selectedOption : selectedOption?.value);
    }
  }, [selectedOption]);

  useEffect(() => {
    if (isBlur && !selectedOption) {
      let exactMatch = false;
      for (let option of computedOptions) {
        if (typeof option === "string") {
          if (option.toLowerCase() === inputValue.toLowerCase()) {
            exactMatch = true;
            setInputValue(option);
            setSelectedOption(option);
            break;
          }
        } else {
          if (option.text.toLowerCase() === inputValue.toLowerCase()) {
            exactMatch = true;
            setInputValue(option.text);
            setSelectedOption(option);
            break;
          }
        }
      }
      if (!exactMatch) {
        setInputValue("");
        setSelectedOption(null);
      }
    }
  }, [isBlur]);

  const handleFocus = () => {
    setIsBlur(false);
    setShowOptions(true);
  };

  const handleBlur = async () => {
    setIsBlur(true);
    setTimeout(() => {
      setShowOptions(false);
    }, 300);
  };

  const handleClickedOption = async (option) => {
    if (typeof option === "string") {
      setInputValue(option);
    } else {
      setInputValue(option.text);
    }
    setSelectedOption(option);
    setTimeout(() => {
      setShowOptions(false);
    }, 300);
  };

  const handleLeave = (e) => {
    if (!e.target.closest(".ui-dropdown")) {
      handleBlur();
    }
  };

  const handleKeyDown = (e) => {
    switch (e.key) {
      case "ArrowDown":
        if (selectedIndex + 1 <= computedOptions.length - 1)
          setSelectedIndex(selectedIndex + 1);
        else setSelectedIndex(0);
        break;
      case "ArrowUp":
        if (selectedIndex - 1 >= 0) setSelectedIndex(selectedIndex - 1);
        else setSelectedIndex(computedOptions.length - 1);
        break;
      case "Enter":
        handleClickedOption(computedOptions[selectedIndex]);
        break;
      case "Escape":
        handleBlur();
        e.target.blur();
        break;
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleLeave);
    return () => {
      window.removeEventListener("click", handleLeave);
    };
  }, []);

  const mappedComputedOptions = computedOptions.map((option, index) => (
    <Box
      className={classNames({
        "ui-dropdown__option": true,
        active: selectedIndex === index,
      })}
      onMouseEnter={() => setSelectedIndex(index)}
      onClick={() => handleClickedOption(option)}
      key={`option-${index}`}
    >
      {typeof option === "object" && option.icon && (
        <Box className={"ui-dropdown__icon"}>
          <Box is={"img"} alt={option.text} src={option.icon} />
        </Box>
      )}
      <Text marginY={0} scale={"subhead"} fontFace={"circularSTD"}>
        {typeof option === "string" ? option : option.text}
      </Text>
    </Box>
  ));

  return (
    <Box className={"ui-dropdown"}>
      <TextField
        dropDown
        {...props}
        value={inputValue}
        onKeyDown={handleKeyDown}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={(e) => setInputValue(e.target.value)}
        onRightIconClick={() => setShowOptions(!showOptions)}
      />
      {showOptions && (
        <Box className={"ui-dropdown__options"}>{mappedComputedOptions}</Box>
      )}
    </Box>
  );
};

export default Dropdown;

Dropdown.defaultProps = {
  ...defaultProps,
};

Dropdown.propTypes = {
  ...inputPropTypes,
  options: PropTypes.array,
  returnObjModel: PropTypes.bool,
  onChange: PropTypes.func,
};