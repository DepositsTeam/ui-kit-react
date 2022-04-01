"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const FlameComponent = _ref => {
  let {
    fill,
    stroke,
    smartColor,
    strokeWidth,
    strokeLineCap,
    strokeLineJoin,
    props
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("path", {
    d: "M13.4128 3C11.853 3.90947 10.6799 5.35839 10.1147 7.07324C9.54958 8.78809 9.63156 10.6504 10.345 12.3091C8.95144 11.5933 7.84434 10.4222 7.20776 8.99072C7.11976 8.79072 7.04192 8.59086 6.97192 8.38086C5.92442 9.72763 5.26898 11.3378 5.07788 13.0332C5.02827 13.3576 5.00232 13.6851 5 14.0132C5 14.0422 5 14.0711 5 14.0991C5.0221 15.898 5.752 17.6155 7.03174 18.8799C8.31148 20.1443 10.0379 20.8536 11.8369 20.854M11.8409 20.854C13.6406 20.8557 15.3681 20.1472 16.6483 18.8823C17.9285 17.6175 18.6578 15.8987 18.6779 14.0991C18.6779 14.0701 18.6779 14.0422 18.6779 14.0132C18.672 13.6852 18.646 13.358 18.6 13.0332C18.589 12.9392 18.5738 12.846 18.5548 12.751C18.4144 12.0542 18.1318 11.3941 17.7247 10.8115C17.3176 10.2289 16.7948 9.73664 16.1888 9.36523C15.1342 8.71181 14.3036 7.75265 13.807 6.61572C13.3104 5.4788 13.1714 4.21772 13.4088 3",
    stroke: smartColor || stroke,
    strokeWidth: strokeWidth,
    strokeLinecap: strokeLineCap,
    strokeLinejoin: strokeLineJoin
  }));
};

const Flame = {
  component: FlameComponent,
  viewBox: "0 0 24 24",
  fill: "none"
};
FlameComponent.propTypes = {
  fill: _propTypes.default.string,
  stroke: _propTypes.default.string,
  strokeWidth: _propTypes.default.string,
  strokeLineCap: _propTypes.default.string,
  strokeLineJoin: _propTypes.default.string,
  smartColor: _propTypes.default.string
};
FlameComponent.defaultProps = {
  stroke: "black",
  strokeWidth: "1.5",
  strokeLineCap: "round",
  strokeLineJoin: "round"
};
var _default = Flame;
exports.default = _default;