import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Box from "../box";
import "./PinInput.scss";
import inputPropTypes, { defaultProps } from "../../utils/inputPropTypes";
import classNames from "../../utils/classNames";
import Text from "../text";
import uniqueRandomString from "../../utils/uniqueRandomString";
import TextField from "../text-field";
import ErrorIcon from "../icons/Error";
import Icon from "../icon";

const PinInput = ({
  label,
  size,
  labelClass,
  labelFontFace,
  spacing,
  errorMessage,
  invisible,
  noOfCharacters,
  initialValue,
  placeholder,
  password,
  onlyNumbers,
  onChange,
  ...props
}) => {
  const [data, setData] = useState([]);
  const [initialized, setInitialized] = useState(false);
  const [initiated, setInitiated] = useState(false);

  const updateValue = (e, index) => {
    const cloneData = [...data];
    const value = e.target.value;
    if (value) {
      // We are changing an empty field
      if (index < data.length - 1) {
        let nextInput = document.getElementById(data[index + 1].id);
        nextInput.focus();
        setTimeout(() => {
          nextInput.select();
        });
      }
    } else if (!value) {
      if (index > 0) {
        let nextInput = document.getElementById(data[index - 1].id);
        nextInput.focus();
        setTimeout(() => {
          nextInput.select();
        });
      }
    }
    cloneData[index].value = value;

    setData(cloneData);

    if (onChange && typeof onChange === "function") {
      onChange(
        data.reduce(
          (prev, curr) =>
            (typeof prev === "string" ? prev : prev.value) + curr.value
        ),
        ""
      );
    }
  };

  useEffect(() => {
    if (!initialized) {
      for (let i = 0; i < noOfCharacters; i++) {
        setData((data) => {
          data.push({
            value: "",
            id: uniqueRandomString(19, 8),
          });
          return data;
        });
        setInitialized(true);
      }
    }
    if (initialized && !initiated && initialValue.length === data.length) {
      setData((data) =>
        data.map((datum, index) => ({
          ...datum,
          value: initialValue[index],
        }))
      );
      setInitiated(true);
    }
  }, [data, initialValue, initialized, initiated, noOfCharacters]);

  const handleKeyDown = async (e, index) => {
    if (e.key === "ArrowLeft") {
      if (index !== 0) {
        let nextInput = document.getElementById(data[index - 1].id);
        nextInput.focus();
        setTimeout(() => {
          nextInput.select();
        });
      }
    }
    if (e.key === "ArrowRight") {
      if (index !== data.length - 1) {
        let nextInput = document.getElementById(data[index + 1].id);
        nextInput.focus();
        setTimeout(() => {
          nextInput.select();
        });
      }
    }
  };

  const textFields = data.map((item, index) => (
    <TextField
      id={item.id}
      key={`item__${index}`}
      placeholder={placeholder}
      onlyNumbers={onlyNumbers}
      type={password ? "password" : "text"}
      oneCharWide
      maxLength={"1"}
      minLength={"1"}
      showError={!!errorMessage}
      value={item.value}
      onInput={(e) => updateValue(e, index)}
      onKeyDown={(e) => handleKeyDown(e, index)}
    />
  ));
  return (
    <Box className={classNames(["ui-text-field__wrapper", `size__${size}`])}>
      {label && (
        <Box is={"label"}>
          <Text
            marginTop={0}
            className={classNames({
              "ui-text-field__label": true,
              labelClass,
            })}
            fontFace={labelFontFace}
          >
            {label}
          </Text>
        </Box>
      )}
      <Box
        display={"inline-flex"}
        className={"ui-pin-input-container"}
        style={{ "--spacing": spacing }}
      >
        {textFields}
      </Box>
      {errorMessage && !invisible && (
        <Box className={"ui-text-field__error"}>
          <Icon icon={ErrorIcon} className={"ui-text-field__error-icon"} />
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

export default PinInput;

PinInput.propTypes = {
  ...inputPropTypes,
  noOfCharacters: PropTypes.number,
  placeholder: PropTypes.string,
  password: PropTypes.bool,
  spacing: PropTypes.string,
  onChange: PropTypes.func,
  errorMessage: PropTypes.string,
};

PinInput.defaultProps = {
  ...defaultProps,
  noOfCharacters: 6,
  placeholder: "-",
  spacing: "8px",
};
