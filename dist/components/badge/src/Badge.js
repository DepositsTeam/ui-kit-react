"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _box = _interopRequireDefault(require("../../box"));

require("./badge.css");

var _classNames = _interopRequireDefault(require("../../../utils/classNames"));

var _text = _interopRequireDefault(require("../../text"));

const _excluded = ["children", "colorScheme", "className", "subtle", "size"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

const Badge = _ref => {
  let {
    children,
    colorScheme,
    className,
    subtle,
    size
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const generatedClassName = (0, _classNames.default)({
    ["color-scheme__".concat(colorScheme)]: true,
    subtle,
    ["size__".concat(size)]: true,
    "ui-badge": true
  }, className);
  return /*#__PURE__*/_react.default.createElement(_box.default, {
    className: generatedClassName
  }, /*#__PURE__*/_react.default.createElement(_text.default, {
    equalLineHeight: true,
    className: "ui-badge__text",
    scale: size === "large" ? "footnote" : "overline"
  }, children));
};

var _default = Badge;
exports.default = _default;
Badge.propTypes = {
  colorScheme: _propTypes.default.oneOf(["neutral", "green", "red", "yellow", "cyan", "blue"]).isRequired,
  subtle: _propTypes.default.bool,
  size: _propTypes.default.oneOf(["small", "medium", "large"]).isRequired
};
Badge.defaultProps = {
  colorScheme: "neutral",
  subtle: false,
  size: "small"
};