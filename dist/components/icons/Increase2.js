"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Increase2Component = _ref => {
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
    d: "M5 19.887H9.04102C9.78695 19.887 10.5255 19.74 11.2146 19.4543C11.9037 19.1687 12.5297 18.7501 13.0569 18.2224C13.5841 17.6947 14.0024 17.0682 14.2874 16.3789C14.5724 15.6896 14.7187 14.951 14.718 14.2051L14.708 5.00488M19.8789 10.1689L14.71 5L9.54102 10.1689",
    stroke: smartColor || stroke,
    strokeWidth: strokeWidth,
    strokeLinecap: strokeLineCap,
    strokeLinejoin: strokeLineJoin
  }));
};

const Increase2 = {
  component: Increase2Component,
  viewBox: "0 0 24 24",
  fill: "none"
};
Increase2Component.propTypes = {
  fill: _propTypes.default.string,
  stroke: _propTypes.default.string,
  strokeWidth: _propTypes.default.string,
  strokeLineCap: _propTypes.default.string,
  strokeLineJoin: _propTypes.default.string,
  smartColor: _propTypes.default.string
};
Increase2Component.defaultProps = {
  stroke: "black",
  strokeWidth: "1.5",
  strokeLineCap: "round",
  strokeLineJoin: "round"
};
var _default = Increase2;
exports.default = _default;