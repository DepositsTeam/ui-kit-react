"use strict";

require("core-js/modules/es.object.assign.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _box = _interopRequireDefault(require("../../box"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classNames = _interopRequireDefault(require("../../../utils/classNames"));

var _icon = _interopRequireDefault(require("../../icon"));

var _ChevronFilledDown = _interopRequireDefault(require("../../icons/ChevronFilledDown"));

var _Error = _interopRequireDefault(require("../../icons/Error"));

var _text = _interopRequireDefault(require("../../text"));

require("./modal.css");

var _TextField = _interopRequireDefault(require("../../text-field/src/TextField"));

var _Close = _interopRequireDefault(require("../../icons/Close"));

var _Button = _interopRequireDefault(require("../../button/src/Button"));

var _Button2 = require("../../button/stories/Button.stories");

const _excluded = ["formTitle", "placeHolder", "label", "buttonLabel", "signatureTitle", "signatureContent", "leftIcon", "size", "dropDown", "rightIcon", "errorMessage", "inputClassName", "className"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

const Modals = _ref => {
  let {
    formTitle,
    placeHolder,
    label,
    buttonLabel,
    signatureTitle,
    signatureContent,
    leftIcon,
    size,
    dropDown,
    rightIcon,
    errorMessage,
    inputClassName,
    className
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const generateInputFieldClasses = (0, _classNames.default)({
    "ui-modal": true,
    "ui-modalSignature": true // "has-error": errorMessage,
    // "has-left-icon": leftIcon,
    // "has-right-icon": dropDown || rightIcon,

  }, inputClassName);
  const wrapperClasses = (0, _classNames.default)(["size__".concat(size), "ui-modal__wrapper", "ui-modal-signature__wrapper"], className);
  return /*#__PURE__*/_react.default.createElement(_box.default, {
    className: "ui-modal"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "ui-modal__header"
  }, /*#__PURE__*/_react.default.createElement(_text.default, {
    className: "ui-modal__title"
  }, formTitle), signatureTitle && /*#__PURE__*/_react.default.createElement("div", {
    className: "ui-modal__signatureheader"
  }, /*#__PURE__*/_react.default.createElement(_text.default, {
    className: "ui-modal__title"
  }, signatureTitle)), /*#__PURE__*/_react.default.createElement(_icon.default, {
    className: "ui-modal__close",
    icon: _Close.default
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "ui-modal__field"
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_box.default, {
    is: "label"
  }, /*#__PURE__*/_react.default.createElement(_text.default, {
    className: "ui-text-field__label",
    scale: "subhead"
  }, label)), /*#__PURE__*/_react.default.createElement(_box.default, _extends({
    className: "ui-modal__inputfield",
    is: "input"
  }, props)), /*#__PURE__*/_react.default.createElement(_box.default, {
    is: "label"
  }, /*#__PURE__*/_react.default.createElement(_text.default, {
    className: "ui-text-field__label",
    scale: "subhead"
  }, label)), /*#__PURE__*/_react.default.createElement(_box.default, _extends({
    className: "ui-modal__inputfield",
    is: "input"
  }, props)), /*#__PURE__*/_react.default.createElement(_box.default, {
    is: "label"
  }, /*#__PURE__*/_react.default.createElement(_text.default, {
    className: "ui-text-field__label",
    scale: "subhead"
  }, label)), /*#__PURE__*/_react.default.createElement(_box.default, _extends({
    className: "ui-modal__inputfield",
    is: "input"
  }, props)), /*#__PURE__*/_react.default.createElement(_box.default, {
    className: "ui-modal__button"
  }, buttonLabel)), signatureContent && /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_text.default, {
    className: "ui-text-field__label",
    scale: "subhead"
  }, signatureContent))));
};

Modals.propTypes = {
  // title: PropTypes.string,
  label: _propTypes.default.string,
  // dropDown: PropTypes.bool,
  // size: PropTypes.oneOf([
  //   "small",
  //   "medium",
  //   "large",
  //   "xlarge",
  //   "huge",
  //   "massive",
  // ]),
  errorMessage: _propTypes.default.string
}; // Modals.defaultProps = {
//   size: "medium",
// };

var _default = Modals;
exports.default = _default;