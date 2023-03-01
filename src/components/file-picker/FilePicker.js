import React, { useRef } from "react";
import PropTypes from "prop-types";
import Box from "../box";
import Text from "../text";
import AutoLayout from "../auto-layout";
import classNames from "../../utils/classNames";
import CloseIcon from "../icons/Close";
import CloudUploadFilledIcon from "../icons/filled/CloudUploadFilledIcon";
import ErrorIcon from "../icons/Error";
import { useFilePicker } from "../../utils/hooks/useFilePicker.hook";
import Icon from "../icon";
import "./FilePicker.scss";
import Heading from "../heading";

const FilePicker = ({
  label,
  disabled,
  labelClass,
  accepts,
  errorMessage,
  onChange,
  onCleared,
  maxFiles,
  fileMaxSize,
  children,
  btnText,
  title,
  primaryColorScheme,
  description,
  ...props
}) => {
  const file = useRef(null);

  const {
    emptyFile,
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
  return (
    <Box className={"ui-file-picker-box__wrapper"}>
      {label && (
        <Box is={"label"}>
          <Text
            marginTop="0px"
            className={classNames(
              {
                labelClass,
              },
              "ui-text-field__label"
            )}
            scale="subhead"
            fontFace="labelFontFace"
          >
            {label}
          </Text>
        </Box>
      )}
      <Box
        className={classNames({
          "ui-file-picker-box": true,
          primaryColorScheme,
        })}
      >
        <Box
          type="file"
          className="ui-file-picker-input"
          is="input"
          ref={file}
          {...props}
          disabled={disabled}
          onChange={updateName}
          accept={computedAccepts}
        ></Box>
        {selectedFileName && (
          <Box className="close-btn" onClick={emptyFile}>
            <Icon icon={CloseIcon} />
          </Box>
        )}

        <Box
          className={classNames({
            "file-picker__icon-wrapper": true,
            primaryColorScheme,
          })}
        >
          <Icon height={"32px"} width={"32px"} icon={CloudUploadFilledIcon} />
        </Box>
        {selectedFileName ? (
          ""
        ) : children ? (
          children
        ) : (
          <AutoLayout
            className="placeholder"
            marginTop="16px"
            alignment="center"
            direction="vertical"
          >
            {title && (
              <Heading
                center
                marginTop={"0px"}
                scale={"h5"}
                color={"#1B1E21"}
                fontFace={"circularSTD"}
              >
                {title}
              </Heading>
            )}
            {description ? (
              description
            ) : (
              <>
                <Text center marginY="0" fontFace="circularSTD">
                  Drag & Drop to upload or{" "}
                  <Box is={"span"} className="blue">
                    browse
                  </Box>{" "}
                  to choose files
                </Text>
                <Text center marginY="0" fontFace="circularSTD">
                  {computedAccepts ? (
                    <Box is={"span"}>
                      Supported file types ({computedAccepts}).
                    </Box>
                  ) : (
                    <Box is={"span"}>(</Box>
                  )}
                  Max upload size: (MB)
                </Text>
              </>
            )}
          </AutoLayout>
        )}
        {selectedFileName && (
          <Text fontFace="circularSTD" marginTop="16px">
            {selectedFileName}
          </Text>
        )}
      </Box>
      {computedErrorMessage && (
        <Box className="ui-text-field__error">
          <ErrorIcon className="ui-text-field__error-icon" />
          <Box
            className="ui-text-field__error-text"
            scale="subhead"
            fontFace="circularSTD"
          >
            {computedErrorMessage}
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default FilePicker;

FilePicker.propTypes = {
  btnText: PropTypes.string,
  fileMaxSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  accepts: (props, propName) => {
    const value = props[propName];
    if (typeof value === "string" || Array.isArray(value)) {
      if (typeof value === "string") {
        if (value === "image" && value === "document" && value === "csv") {
          throw new Error(
            "The only allowed string values for `accepts` are: 'image', 'document' and 'csv"
          );
        }
      } else {
        if ([...new Set(value)].length !== value.length) {
          throw new Error(
            "`accepts` prop can only accept an array of unique mimetypes"
          );
        }
      }
    } else {
      throw new Error("`accepts` prop must be either a string or an array");
    }
  },
  label: PropTypes.string,
  errorMessage: PropTypes.string,
  disabled: PropTypes.bool,
  labelFontFace: PropTypes.string,
  labelClass: PropTypes.string,
  maxFiles: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  title: PropTypes.string,
  primaryColorScheme: PropTypes.bool,
  description: PropTypes.string,
};

FilePicker.defaultProps = {
  btnText: "Choose File",
  fileMaxSize: 100,
  maxFiles: 1,
  accepts: [".csv", ".xls", ".xlsx", ".pdf"],
};
