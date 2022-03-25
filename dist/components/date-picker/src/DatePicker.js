"use strict";

require("core-js/modules/es.object.assign.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

require("./DatePicker.css");

require("./Calendar.css");

var _box = _interopRequireDefault(require("../../box"));

var _text = _interopRequireDefault(require("../../text"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _icon = _interopRequireDefault(require("../../icon"));

var _Calendar2 = _interopRequireDefault(require("../../icons/Calendar"));

var _Error = _interopRequireDefault(require("../../icons/Error"));

var _classNames = _interopRequireDefault(require("../../../utils/classNames"));

var _entry = _interopRequireDefault(require("react-date-picker/dist/entry.nostyle"));

const _excluded = ["label", "leftIcon", "size", "dropDown", "rightIcon", "errorMessage", "inputClassName", "className", "format", "noCalendarIcon"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

const DatePickerField = _ref => {
  let {
    label,
    leftIcon,
    size,
    dropDown,
    rightIcon,
    errorMessage,
    inputClassName,
    className,
    format,
    noCalendarIcon
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const [value, onChange] = (0, _react.useState)(new Date());
  const generateInputFieldClasses = (0, _classNames.default)({
    "ui-text-field__input": true,
    "has-error": errorMessage,
    "has-left-icon": leftIcon,
    "has-right-icon": dropDown || rightIcon,
    "ui-date-picker": true
  }, inputClassName);
  const wrapperClasses = (0, _classNames.default)(["size__".concat(size), "ui-text-field__wrapper"], className);
  return /*#__PURE__*/_react.default.createElement(_box.default, {
    className: wrapperClasses
  }, /*#__PURE__*/_react.default.createElement(_box.default, {
    is: "label"
  }, /*#__PURE__*/_react.default.createElement(_text.default, {
    className: "ui-text-field__label",
    scale: "subhead"
  }, label)), /*#__PURE__*/_react.default.createElement("div", {
    className: "ui-text-field__input-wrapper"
  }, leftIcon && /*#__PURE__*/_react.default.createElement(_icon.default, {
    icon: leftIcon,
    className: "ui-text-field__left-icon"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: generateInputFieldClasses
  }, /*#__PURE__*/_react.default.createElement(_entry.default, _extends({
    format: "MM-dd-yyyy",
    onChange: onChange,
    value: value,
    calendarIcon: null
  }, props, {
    clearIcon: null
  }))), !noCalendarIcon && /*#__PURE__*/_react.default.createElement(_icon.default, {
    icon: _Calendar2.default,
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

var _default = DatePickerField;
exports.default = _default;
DatePickerField.propTypes = {
  label: _propTypes.default.string,
  dropDown: _propTypes.default.bool,
  size: _propTypes.default.oneOf(["small", "medium", "large", "xlarge", "huge", "massive"]),
  errorMessage: _propTypes.default.string,
  format: _propTypes.default.string,
  noCalendarIcon: _propTypes.default.bool
};
DatePickerField.defaultProps = {
  size: "medium",
  format: "MM-dd-yyyy"
};