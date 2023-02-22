import PropTypes from "prop-types";

export default {
  label: PropTypes.string,
  fontFace: PropTypes.string,
  size: PropTypes.oneOf([
    "small",
    "medium",
    "large",
    "xlarge",
    "huge",
    "massive",
  ]),
  errorMessage: PropTypes.string,
  showError: PropTypes.bool,
  modelValue: PropTypes.string,
  onlyNumbers: PropTypes.bool,
  wrapperClass: PropTypes.string,
  invisible: PropTypes.bool,
  labelClass: PropTypes.oneOf([String, Object, Array]),
  leftIcon: PropTypes.object,
  rightIcon: PropTypes.object,
  disabled: PropTypes.bool,
  labelFontFace: PropTypes.string,
  autocomplete: PropTypes.string,
  form: PropTypes.string,
  list: PropTypes.string,
  minlength: PropTypes.string,
  max: PropTypes.string,
  min: PropTypes.string,
  multiple: PropTypes.string,
  name: PropTypes.string,
  pattern: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  step: PropTypes.string,
  autofocus: PropTypes.string,
};

export const defaultProps = {
  size: "huge",
};
