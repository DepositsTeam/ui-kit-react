"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Certificate2Component = _ref => {
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
    d: "M15.258 9.38721L11.157 13.4882L8.89099 11.4222M3 11.9282C3 13.0742 4.13192 13.9893 4.54492 14.9863C4.97392 16.0203 4.83501 17.4632 5.61401 18.2412C6.39301 19.0192 7.8359 18.8811 8.8689 19.3101C9.8689 19.7241 10.779 20.855 11.927 20.855C13.075 20.855 13.9869 19.7231 14.9839 19.3101C16.0179 18.8811 17.461 19.0202 18.24 18.2412C19.019 17.4622 18.8801 16.0203 19.3091 14.9863C19.7231 13.9863 20.855 13.0752 20.855 11.9282C20.855 10.7812 19.7231 9.86812 19.3091 8.87012C18.8801 7.83612 19.019 6.39423 18.24 5.61523C17.461 4.83623 16.0181 4.9739 14.9851 4.5459C13.9851 4.1329 13.075 3 11.928 3C10.781 3 9.86812 4.1329 8.87012 4.5459C7.83612 4.9749 6.39299 4.83723 5.61499 5.61523C4.83699 6.39323 4.9739 7.83612 4.5459 8.87012C4.1319 9.86812 3 10.7812 3 11.9282Z",
    stroke: smartColor || stroke,
    strokeWidth: strokeWidth,
    strokeLinecap: strokeLineCap,
    strokeLinejoin: strokeLineJoin
  }));
};

const Certificate2 = {
  component: Certificate2Component,
  viewBox: "0 0 24 24",
  fill: "none"
};
Certificate2Component.propTypes = {
  fill: _propTypes.default.string,
  stroke: _propTypes.default.string,
  strokeWidth: _propTypes.default.string,
  strokeLineCap: _propTypes.default.string,
  strokeLineJoin: _propTypes.default.string,
  smartColor: _propTypes.default.string
};
Certificate2Component.defaultProps = {
  stroke: "black",
  strokeWidth: "1.5",
  strokeLineCap: "round",
  strokeLineJoin: "round"
};
var _default = Certificate2;
exports.default = _default;