"use strict";

require("core-js/modules/es.object.assign.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./text.css");

var _box = _interopRequireDefault(require("../../box"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classNames = _interopRequireDefault(require("../../../utils/classNames"));

const _excluded = ["className", "scale", "uppercase", "equalLineHeight"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

const Text = _ref => {
  var _props$is;

  let {
    className,
    scale,
    uppercase,
    equalLineHeight
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const is = (_props$is = props.is) !== null && _props$is !== void 0 ? _props$is : "p";
  const generatedClass = (0, _classNames.default)({
    [scale]: scale,
    uppercase,
    "equal-line-height": equalLineHeight,
    "ui-text": true
  }, className);
  return /*#__PURE__*/_react.default.createElement(_box.default, _extends({
    is: is
  }, props, {
    "data-testid": "text",
    className: generatedClass
  }), props.children);
};

Text.propTypes = {
  is: _propTypes.default.oneOf(["p", "span", "small", "sub", "sup"]),
  scale: _propTypes.default.oneOf(["body", "subhead", "p-18", "overline", "footnote", "overline", "footnote-caps"]),
  uppercase: _propTypes.default.bool,
  equalLineHeight: _propTypes.default.bool
};
Text.defaultProps = {
  is: "p",
  scale: "body",
  uppercase: false,
  equalLineHeight: false
};
var _default = Text;
exports.default = _default;