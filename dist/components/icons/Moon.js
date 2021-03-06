"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const MoonComponent = _ref => {
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
    d: "M11.9347 11.9237C11.13 10.5283 10.804 8.90801 11.0062 7.30993C11.2084 5.71185 11.9279 4.22362 13.0548 3.07263C11.4051 2.86082 9.72906 3.11447 8.21594 3.80505C6.70282 4.49563 5.41299 5.5958 4.49206 6.98083C3.57113 8.36586 3.05572 9.98048 3.00427 11.6429C2.95282 13.3054 3.36729 14.9492 4.2008 16.3885V16.3885C5.03048 17.8301 6.24662 19.011 7.71203 19.7977C9.17745 20.5845 10.8338 20.9456 12.4938 20.8407C14.1537 20.7357 15.7512 20.169 17.1058 19.204C18.4605 18.2389 19.5183 16.9143 20.1598 15.3798C18.5995 15.78 16.9512 15.6585 15.4662 15.0345C13.9812 14.4106 12.7409 13.3182 11.9347 11.9237V11.9237Z",
    stroke: smartColor || stroke,
    strokeWidth: strokeWidth,
    strokeLinecap: strokeLineCap,
    strokeLinejoin: strokeLineJoin
  }));
};

const Moon = {
  component: MoonComponent,
  viewBox: "0 0 24 24",
  fill: "none"
};
MoonComponent.propTypes = {
  fill: _propTypes.default.string,
  stroke: _propTypes.default.string,
  strokeWidth: _propTypes.default.string,
  strokeLineCap: _propTypes.default.string,
  strokeLineJoin: _propTypes.default.string,
  smartColor: _propTypes.default.string
};
MoonComponent.defaultProps = {
  stroke: "black",
  strokeWidth: "1.5",
  strokeLineCap: "round",
  strokeLineJoin: "round"
};
var _default = Moon;
exports.default = _default;