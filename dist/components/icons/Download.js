"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const DownloadComponent = _ref => {
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
    d: "M5.65325 13.3083L4.46296 14.6411C4.16465 14.9764 4.0002 15.4054 4 15.8492V18.493C4 18.8926 4.16283 19.276 4.45271 19.5586C4.74259 19.8412 5.13578 20 5.54574 20H19.4543C19.8642 20 20.2574 19.8412 20.5473 19.5586C20.8372 19.276 21 18.8926 21 18.493V15.8492C21.0001 15.4053 20.8358 14.9763 20.5373 14.6411L19.347 13.3083M7.98002 9.32613L12.498 13.731L17.0172 9.32613M12.4982 3V13.5083",
    stroke: smartColor || stroke,
    strokeWidth: strokeWidth,
    strokeLinecap: strokeLineCap,
    strokeLinejoin: strokeLineJoin
  }));
};

const Download = {
  component: DownloadComponent,
  viewBox: "0 0 24 24",
  fill: "none"
};
DownloadComponent.propTypes = {
  fill: _propTypes.default.string,
  stroke: _propTypes.default.string,
  strokeWidth: _propTypes.default.string,
  strokeLineCap: _propTypes.default.string,
  strokeLineJoin: _propTypes.default.string,
  smartColor: _propTypes.default.string
};
DownloadComponent.defaultProps = {
  stroke: "black",
  strokeWidth: "1.5",
  strokeLineCap: "round",
  strokeLineJoin: "round"
};
var _default = Download;
exports.default = _default;