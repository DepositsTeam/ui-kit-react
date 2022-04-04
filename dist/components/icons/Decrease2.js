"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Decrease2Component = _ref => {
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
    d: "M19.8829 5H15.8409C15.0951 5 14.3566 5.147 13.6676 5.43262C12.9786 5.71824 12.3525 6.13685 11.8253 6.66455C11.2982 7.19225 10.8802 7.81872 10.5953 8.50806C10.3104 9.19739 10.1644 9.936 10.1652 10.6819L10.174 19.8821M5 14.72L10.1689 19.8889L15.3381 14.72",
    stroke: smartColor || stroke,
    strokeWidth: strokeWidth,
    strokeLinecap: strokeLineCap,
    strokeLinejoin: strokeLineJoin
  }));
};

const Decrease2 = {
  component: Decrease2Component,
  viewBox: "0 0 24 24",
  fill: "none"
};
Decrease2Component.propTypes = {
  fill: _propTypes.default.string,
  stroke: _propTypes.default.string,
  strokeWidth: _propTypes.default.string,
  strokeLineCap: _propTypes.default.string,
  strokeLineJoin: _propTypes.default.string,
  smartColor: _propTypes.default.string
};
Decrease2Component.defaultProps = {
  stroke: "black",
  strokeWidth: "1.5",
  strokeLineCap: "round",
  strokeLineJoin: "round"
};
var _default = Decrease2;
exports.default = _default;