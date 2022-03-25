"use strict";

require("core-js/modules/es.object.assign.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./button.css");

var _box = _interopRequireDefault(require("../../box"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classNames = _interopRequireDefault(require("../../../utils/classNames"));

var _icon = _interopRequireDefault(require("../../icon"));

var _ChevronFilledDown = _interopRequireDefault(require("../../icons/ChevronFilledDown"));

const _excluded = ["is", "leftIcon", "dropDown", "disabled", "size", "className", "colorScheme"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

const Button = _ref => {
  let {
    is,
    leftIcon,
    dropDown,
    disabled,
    size,
    className,
    colorScheme
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const generatedClassName = (0, _classNames.default)({
    "ui-button": true,
    ["semantic__".concat(colorScheme)]: colorScheme,
    ["state__disabled"]: disabled,
    ["size__".concat(size)]: size
  }, className);
  return /*#__PURE__*/_react.default.createElement(_box.default, _extends({
    is: is
  }, props, {
    className: generatedClassName
  }), leftIcon && /*#__PURE__*/_react.default.createElement(_icon.default, {
    className: "ui-button__left-icon",
    smartColor: "currentcolor",
    icon: leftIcon
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "ui-button__button-text"
  }, props.text || props.children), dropDown && /*#__PURE__*/_react.default.createElement(_icon.default, {
    className: "ui-button__dropdown-icon",
    smartColor: "currentcolor",
    icon: _ChevronFilledDown.default
  }));
};

Button.propTypes = {
  is: _propTypes.default.oneOf(["button", "a", "span", "div"]),
  colorScheme: _propTypes.default.oneOf(["primary", "danger", "success", "outline", "invisible"]),
  disabled: _propTypes.default.bool,
  size: _propTypes.default.oneOf(["small", "medium", "large", "xlarge", "huge", "massive"]),
  leftIcon: _propTypes.default.object,
  dropDown: _propTypes.default.bool
};
Button.defaultProps = {
  is: "button",
  dropDown: false,
  leftIcon: null,
  size: "small"
};
var _default = Button;
exports.default = _default;