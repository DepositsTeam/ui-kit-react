"use strict";

require("core-js/modules/es.object.assign.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.symbol.description.js");

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _box = _interopRequireDefault(require("../../box"));

require("./alert.css");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _text = _interopRequireDefault(require("../../text"));

var _classNames = _interopRequireDefault(require("../../../utils/classNames"));

var _button = _interopRequireDefault(require("../../button"));

var _icon = _interopRequireDefault(require("../../icon"));

var _Check = _interopRequireDefault(require("../../icons/Check"));

var _Error = _interopRequireDefault(require("../../icons/Error"));

var _Warning = _interopRequireDefault(require("../../icons/Warning"));

var _Info = _interopRequireDefault(require("../../icons/Info"));

var _Close = _interopRequireDefault(require("../../icons/Close"));

var _heading = _interopRequireDefault(require("../../heading"));

const _excluded = ["message", "description", "colorScheme", "theme", "button", "buttonAction", "onAction", "className", "closable"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

const Alert = _ref => {
  let {
    message,
    description,
    colorScheme,
    theme,
    button,
    buttonAction,
    onAction,
    className,
    closable
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const [showAlert, setShowAlert] = (0, _react.useState)(true);
  const generateAlertClassName = (0, _classNames.default)({
    ["theme__".concat(theme)]: true,
    ["color-scheme__".concat(colorScheme)]: true,
    "ui-alert": true,
    "is-toast": closable
  }, className);
  const schemeIcons = {
    info: _Info.default,
    warning: _Warning.default,
    error: _Error.default,
    success: _Check.default
  };

  const remove = () => {
    setShowAlert(false);
  };

  return showAlert ? /*#__PURE__*/_react.default.createElement(_box.default, _extends({
    className: generateAlertClassName
  }, props), /*#__PURE__*/_react.default.createElement("div", {
    className: "ui-alert__content-wrapper"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "ui-alert__content"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "ui-alert__text"
  }, /*#__PURE__*/_react.default.createElement(_box.default, {
    className: "ui-alert__header"
  }, /*#__PURE__*/_react.default.createElement(_heading.default, {
    scale: "subtitle-2",
    className: "ui-alert__header-text"
  }, message)), description && theme !== "inline" && /*#__PURE__*/_react.default.createElement(_text.default, {
    scale: "subhead",
    className: "ui-alert__body"
  }, description), button && theme !== "inline" && /*#__PURE__*/_react.default.createElement(_button.default, _extends({
    className: "ui-alert__call-to-action"
  }, button))))), closable && theme !== "inline" && /*#__PURE__*/_react.default.createElement(_icon.default, {
    smartColor: "currentcolor",
    className: "ui-alert__close-icon",
    icon: _Close.default,
    onClick: props.onClick || remove
  })) : /*#__PURE__*/_react.default.createElement("div", null);
};

var _default = Alert;
exports.default = _default;
Alert.propTypes = {
  message: _propTypes.default.string.isRequired,
  description: _propTypes.default.string,
  colorScheme: _propTypes.default.oneOf(["default", "info", "warning", "error", "success"]).isRequired,
  theme: _propTypes.default.oneOf(["flat", "filled", "inline"]).isRequired,
  button: _propTypes.default.object,
  action: _propTypes.default.func,
  closable: _propTypes.default.bool
};
Alert.defaultProps = {
  message: "This is a simple message",
  colorScheme: "default",
  theme: "flat",
  closable: false
};