import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import "../../scss/textfield.scss";
import "./FilePickerInline.scss";
import Box from "../box";
import Text from "../text";
import classNames from "../../utils/classNames";
import inputPropTypes, { defaultProps } from "../../utils/inputPropTypes";
import ErrorIcon from "../icons/Error";
import Icon from "../icon";
import { useFilePicker } from "../../utils/hooks/useFilePicker.hook";
import Button from "../button";

const FilePickerInline = ({
  size,
  labelFontFace,
  labelClass,
  variant,
  label,
  disabled,
  fontFace,
  btnText,
  placeholder,
  onChange,
  onCleared,
  accepts,
  errorMessage,
  maxFiles,
  fileMaxSize,
  ...props
}) => {
  const file = useRef(null);
  const [inputIsHovered, setInputIsHovered] = useState(false);

  const {
    updateName,
    computedErrorMessage,
    computedAccepts,
    selectedFileName,
  } = useFilePicker(
    {
      accepts,
      errorMessage,
      onChange,
      onCleared,
      maxFiles,
      fileMaxSize,
    },
    file
  );

  return variant === "inline" ? (
    <Box
      className={classNames([
        "ui-text-field__wrapper d-file-picker-inline",
        `size__${size}`,
        `variant__${variant}`,
      ])}
    >
      {!!label && variant !== "button" && (
        <Box is={"label"}>
          <Text
            marginTop={0}
            scale={"subhead"}
            fontFace={labelFontFace}
            className={classNames(["ui-text-field__label", labelClass])}
          >
            {label}
          </Text>
        </Box>
      )}
      <Box display="inline-flex" className={`pseudo-input ${disabled}`}>
        <Box
          is={"input"}
          ref={file}
          {...props}
          disabled={disabled}
          onChange={updateName}
          accept={computedAccepts}
          type={"file"}
        />
        <Box
          display={"flex"}
          alignItems={"center"}
          className={classNames({
            "ui-text-field__input": true,
            "has-error": computedErrorMessage,
          })}
        >
          <Text
            marginY={0}
            scale={"subhead"}
            fontFace={fontFace}
            className={classNames({
              placeholder: selectedFileName === placeholder,
            })}
          >
            {selectedFileName}
          </Text>
        </Box>
        <Box className={"pseudo-button"}>
          <Text scale={"subhead"} fontFace={"hero-new"} marginY={0}>
            {btnText}
          </Text>
        </Box>
      </Box>
      {computedErrorMessage && (
        <Box className={"ui-text-field__error"}>
          <Icon icon={ErrorIcon} className={"ui-text-area__error-icon"} />
          <Text
            className={"ui-text-field__error-text"}
            scale={"subhead"}
            fontFace={"circularSTD"}
          >
            {computedErrorMessage}
          </Text>
        </Box>
      )}
    </Box>
  ) : (
    <Box className={"ui-text-field__wrapper d-file-picker-inline-btn"}>
      <Box
        is={"input"}
        ref={file}
        disabled={disabled}
        onChange={updateName}
        accept={computedAccepts}
        onMouseEnter={() => setInputIsHovered(true)}
        onMouseLeave={() => setInputIsHovered(false)}
        type={"file"}
      />
      <Button className={classNames({ hover: inputIsHovered })} {...props}>
        {btnText}
      </Button>
    </Box>
  );
};

export default FilePickerInline;

FilePickerInline.propTypes = {
  ...inputPropTypes,
  placeholder: PropTypes.string,
  btnText: PropTypes.string,
  fileMaxSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  accepts: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.oneOf(["image", "document", "csv"]),
  ]),
  variant: PropTypes.oneOf(["inline", "button"]),
  onChange: PropTypes.func,
  onCleared: PropTypes.func,
};

FilePickerInline.defaultProps = {
  ...defaultProps,
  placeholder: "No file selected...",
  btnText: "Choose File",
  fileMaxSize: 100,
  accepts: [".csv", ".xls", ".xlsx", ".pdf"],
  variant: "inline",
};
