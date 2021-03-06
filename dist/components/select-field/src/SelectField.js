"use strict";

require("core-js/modules/es.object.assign.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("../../../styles/textfield.css");

require("./SelectField.css");

var _classNames = _interopRequireDefault(require("../../../utils/classNames"));

var _box = _interopRequireDefault(require("../../box"));

var _text = _interopRequireDefault(require("../../text"));

var _icon = _interopRequireDefault(require("../../icon"));

var _ChevronFilledDown = _interopRequireDefault(require("../../icons/ChevronFilledDown"));

var _Error = _interopRequireDefault(require("../../icons/Error"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _keyGen = _interopRequireDefault(require("../../../utils/keyGen"));

const _excluded = ["label", "leftIcon", "size", "dropDown", "rightIcon", "errorMessage", "inputClassName", "options", "className"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

const SelectField = _ref => {
  let {
    label,
    leftIcon,
    size,
    dropDown,
    rightIcon,
    errorMessage,
    inputClassName,
    options,
    className
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const generateInputFieldClasses = (0, _classNames.default)({
    "ui-text-field__input": true,
    "has-error": errorMessage,
    "has-left-icon": leftIcon,
    "has-right-icon": dropDown || rightIcon
  }, inputClassName);
  const selectWrapperClasses = (0, _classNames.default)({
    "ui-text-field__input-wrapper": true,
    "ui-select-field__wrapper": true,
    "has-error": errorMessage
  });
  const wrapperClasses = (0, _classNames.default)(["size__".concat(size), "ui-text-field__wrapper"], className);
  const mappedOptions = options.map(option => /*#__PURE__*/_react.default.createElement("option", {
    key: (0, _keyGen.default)(),
    value: typeof option === "string" ? option : option.value ? option.value : option.text
  }, typeof option === "string" ? option : option.text));
  return /*#__PURE__*/_react.default.createElement(_box.default, {
    className: wrapperClasses
  }, /*#__PURE__*/_react.default.createElement(_box.default, {
    is: "label"
  }, /*#__PURE__*/_react.default.createElement(_text.default, {
    className: "ui-text-field__label",
    scale: "subhead"
  }, label)), /*#__PURE__*/_react.default.createElement("div", {
    className: selectWrapperClasses
  }, leftIcon && /*#__PURE__*/_react.default.createElement(_icon.default, {
    icon: leftIcon,
    className: "ui-text-field__left-icon"
  }), /*#__PURE__*/_react.default.createElement(_box.default, _extends({
    className: generateInputFieldClasses,
    is: "select"
  }, props), mappedOptions), /*#__PURE__*/_react.default.createElement(_icon.default, {
    icon: _ChevronFilledDown.default,
    className: "ui-text-field__right-icon"
  })), errorMessage && /*#__PURE__*/_react.default.createElement("div", {
    className: "ui-text-field__error"
  }, /*#__PURE__*/_react.default.createElement(_icon.default, {
    icon: _Error.default,
    className: "ui-text-field__error-icon"
  }), /*#__PURE__*/_react.default.createElement(_text.default, {
    className: "ui-text-field__error-text",
    scale: "subhead",
    fontFace: "circularSTD"
  }, errorMessage)));
};

var _default = SelectField;
exports.default = _default;
SelectField.propTypes = {
  label: _propTypes.default.string,
  dropDown: _propTypes.default.bool,
  size: _propTypes.default.oneOf(["small", "medium", "large", "xlarge", "huge", "massive"]),
  options: _propTypes.default.array
};
SelectField.defaultProps = {
  size: "medium",
  options: ["Item 1", "Item 2", "item 3"]
};