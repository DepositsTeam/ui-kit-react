import React from "react";
import Box from "../box";
import Text from "../text";
import PropTypes from "prop-types";
import Icon from "../icon";
import Error from "../icons/Error";
import classNames from "../../utils/classNames";
import "./Textarea.scss";

const TextArea = ({
  label,
  errorMessage,
  textAreaClassName,
  className,
  isHookForm,
  ...props
}) => {
  const generateTextAreaClasses = classNames(
    {
      "ui-text-area__textarea": true,
      "has-error": errorMessage,
    },
    textAreaClassName
  );

  const wrapperClasses = classNames(["ui-text-area__wrapper"], className);
  return isHookForm ? (
    React.forwardRef(({ onChange, onBlur, name, label }, ref) => (
      <Box>
        <Box is="label" className={wrapperClasses}>
          <Text scale={"subhead"} className="ui-text-area__label">
            {label}
          </Text>
        </Box>
        <Box
          className={generateTextAreaClasses}
          is="textarea"
          {...props}
          ref={ref}
          onChange={onChange}
          onBlur={onBlur}
          name={name}
        ></Box>
        {errorMessage && (
          <Box className="ui-text-area__error">
            <Icon icon={Error} className="ui-text-area__error-icon" />
            <Text
              className="ui-text-area__error-text"
              scale="footnote"
              fontFace="circularSTD"
            >
              {errorMessage}
            </Text>
          </Box>
        )}
      </Box>
    ))
  ) : (
    <Box>
      <Box is="label" className={wrapperClasses}>
        <Text scale={"subhead"} className="ui-text-area__label">
          {label}
        </Text>
      </Box>
      <Box className={generateTextAreaClasses} is="textarea" {...props}></Box>
      {errorMessage && (
        <Box className="ui-text-area__error">
          <Icon icon={Error} className="ui-text-area__error-icon" />
          <Text
            className="ui-text-area__error-text"
            scale="footnote"
            fontFace="circularSTD"
          >
            {errorMessage}
          </Text>
        </Box>
      )}
    </Box>
  );
};

export default TextArea;

TextArea.propTypes = {
  label: PropTypes.string,
  disabled: PropTypes.bool,
};

TextArea.defaultProps = {
  label: "Form Label",
  disabled: false,
};
