"use strict";

require("core-js/modules/es.object.assign.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./heading.css");

var _box = _interopRequireDefault(require("../../box"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classNames = _interopRequireDefault(require("../../../utils/classNames"));

const _excluded = ["className", "equalLineHeight", "scale", "uppercase"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

const Heading = _ref => {
  var _props$is;

  let {
    className,
    equalLineHeight,
    scale,
    uppercase
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const is = (_props$is = props.is) !== null && _props$is !== void 0 ? _props$is : "h2";
  const generatedClass = (0, _classNames.default)({
    [scale]: scale,
    [is]: is,
    uppercase,
    "ui-heading": true,
    "equal-line-height": equalLineHeight
  }, className);
  return /*#__PURE__*/_react.default.createElement(_box.default, _extends({
    is: is
  }, props, {
    "data-testid": "heading",
    className: generatedClass
  }), props.children);
};

Heading.propTypes = {
  is: _propTypes.default.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]),
  scale: _propTypes.default.oneOf(["subtitle-1", "subtitle-2", "subhead"]),
  uppercase: _propTypes.default.bool,
  equalLineHeight: _propTypes.default.bool
};
Heading.defaultProps = {
  is: "h2",
  scale: null,
  uppercase: false,
  equalLineHeight: false
};
var _default = Heading;
exports.default = _default;