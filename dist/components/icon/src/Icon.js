"use strict";

require("core-js/modules/es.object.assign.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./icon.css");

var _box = _interopRequireDefault(require("../../box"));

var _classNames = _interopRequireDefault(require("../../../utils/classNames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

const _excluded = ["className", "icon", "children"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

const Icon = _ref => {
  let {
    className,
    icon,
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const defaultViewBox = "0 0 24 24";
  const IconComponent = icon.component;
  const generatedClassName = (0, _classNames.default)({
    "ui-svg": true
  }, className);
  return /*#__PURE__*/_react.default.createElement(_box.default, _extends({
    viewBox: icon.viewBox || defaultViewBox,
    className: generatedClassName,
    is: "svg",
    fill: props.fill || icon.fill
  }, props), /*#__PURE__*/_react.default.createElement(IconComponent, _extends({
    smartColor: "currentcolor"
  }, props)));
};

var _default = Icon;
exports.default = _default;
Icon.propTypes = {
  icon: _propTypes.default.object.isRequired,
  fill: _propTypes.default.string,
  stroke: _propTypes.default.string,
  strokeWidth: _propTypes.default.string,
  strokeLineCap: _propTypes.default.string,
  strokeLineJoin: _propTypes.default.string,
  width: _propTypes.default.string,
  height: _propTypes.default.string
};