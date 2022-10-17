import React from "react";
import "../../../styles/textfield.scss";
import Box from "../../box";
import Text from "../../text";
import { propTypes, defaultProps } from "./textFieldProps";
import Icon from "../../icon";
import ChevronFilledDown from "../../icons/ChevronFilledDown";
import Error from "../../icons/Error";
import classNames from "../../../utils/classNames";
import { useField } from "formik";

const FormikTextField = ({
  label,
  leftIcon,
  size,
  dropDown,
  rightIcon,
  errorMessage,
  inputClassName,
  className,
  ...props
}) => {
  const [field, meta, helpers] = useField(props);

  const generateInputFieldClasses = classNames(
    {
      "ui-text-field__input": true,
      "has-error": errorMessage,
      "has-left-icon": leftIcon,
      "has-right-icon": dropDown || rightIcon,
    },
    inputClassName
  );

  const wrapperClasses = classNames(
    [`size__${size}`, "ui-text-field__wrapper"],
    className
  );

  return (
    <Box className={wrapperClasses}>
      <Box is={"label"}>
        <Text className={"ui-text-field__label"} scale={"subhead"}>
          {label}
        </Text>
      </Box>
      <Box className={"ui-text-field__input-wrapper"}>
        {leftIcon && (
          <Icon icon={leftIcon} className={"ui-text-field__left-icon"} />
        )}
        <Box
          {...field}
          {...props}
          className={generateInputFieldClasses}
          is={"input"}
        />
        {(dropDown || rightIcon) && (
          <Icon
            icon={dropDown ? ChevronFilledDown : rightIcon}
            className={"ui-text-field__right-icon"}
          />
        )}
      </Box>
      {(errorMessage || (meta.touched && meta.error)) && (
        <Box className={"ui-text-field__error"}>
          <Icon icon={Error} className={"ui-text-field__error-icon"} />
          <Text
            className={"ui-text-field__error-text"}
            scale={"subhead"}
            fontFace={"circularSTD"}
          >
            {errorMessage ? errorMessage : meta.error}
          </Text>
        </Box>
      )}
    </Box>
  );
};

export default FormikTextField;

FormikTextField.propTypes = { ...propTypes };

FormikTextField.defaultProps = { ...defaultProps };
