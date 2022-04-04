"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Login2Component = _ref => {
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
    d: "M12.038 20.3669H19.4531C19.8477 20.3669 20.226 20.2102 20.5051 19.9312C20.7841 19.6521 20.9411 19.2735 20.9411 18.8789V5.48792C20.9411 5.09327 20.7841 4.71485 20.5051 4.43579C20.226 4.15674 19.8477 4 19.4531 4H12.038M8.0199 17.834L13.67 12.184L8.0199 6.53394M3 12.1829H13.432",
    stroke: smartColor || stroke,
    strokeWidth: strokeWidth,
    strokeLinecap: strokeLineCap,
    strokeLinejoin: strokeLineJoin
  }));
};

const Login2 = {
  component: Login2Component,
  viewBox: "0 0 24 24",
  fill: "none"
};
Login2Component.propTypes = {
  fill: _propTypes.default.string,
  stroke: _propTypes.default.string,
  strokeWidth: _propTypes.default.string,
  strokeLineCap: _propTypes.default.string,
  strokeLineJoin: _propTypes.default.string,
  smartColor: _propTypes.default.string
};
Login2Component.defaultProps = {
  stroke: "black",
  strokeWidth: "1.5",
  strokeLineCap: "round",
  strokeLineJoin: "round"
};
var _default = Login2;
exports.default = _default;