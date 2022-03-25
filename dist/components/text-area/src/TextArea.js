"use strict";

require("core-js/modules/es.object.assign.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _box = _interopRequireDefault(require("../../box"));

var _text = _interopRequireDefault(require("../../text"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _icon = _interopRequireDefault(require("../../icon"));

var _Error = _interopRequireDefault(require("../../icons/Error"));

var _classNames = _interopRequireDefault(require("../../../utils/classNames"));

require("./textarea.css");

const _excluded = ["label", "errorMessage", "textAreaClassName", "className"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

const TextArea = _ref => {
  let {
    label,
    errorMessage,
    textAreaClassName,
    className
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const generateTextAreaClasses = (0, _classNames.default)({
    "ui-text-area__textarea": true,
    "has-error": errorMessage
  }, textAreaClassName);
  const wrapperClasses = (0, _classNames.default)(["ui-text-area__wrapper"], className);
  return /*#__PURE__*/_react.default.createElement(_box.default, null, /*#__PURE__*/_react.default.createElement(_box.default, {
    is: "label",
    className: wrapperClasses
  }, /*#__PURE__*/_react.default.createElement(_text.default, {
    scale: "subhead",
    className: "ui-text-area__label"
  }, label)), /*#__PURE__*/_react.default.createElement(_box.default, _extends({
    className: generateTextAreaClasses,
    is: "textarea"
  }, props)), errorMessage && /*#__PURE__*/_react.default.createElement("div", {
    className: "ui-text-area__error"
  }, /*#__PURE__*/_react.default.createElement(_icon.default, {
    icon: _Error.default,
    className: "ui-text-area__error-icon"
  }), /*#__PURE__*/_react.default.createElement(_text.default, {
    className: "ui-text-area__error-text",
    scale: "footnote",
    fontFace: "circularSTD"
  }, errorMessage)));
};

var _default = TextArea;
exports.default = _default;
TextArea.propTypes = {
  label: _propTypes.default.string,
  disabled: _propTypes.default.bool
};
TextArea.defaultProps = {
  label: "Form Label",
  disabled: false
};