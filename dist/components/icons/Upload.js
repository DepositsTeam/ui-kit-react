"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const UploadComponent = _ref => {
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
    d: "M4.69312 10.03L3.47412 8.63C3.16854 8.27784 3.00012 7.82722 3 7.36096V4.58301C3 4.16317 3.16675 3.76049 3.46362 3.46362C3.76049 3.16675 4.16317 3 4.58301 3H18.8281C19.248 3 19.6506 3.16675 19.9475 3.46362C20.2444 3.76049 20.4111 4.16317 20.4111 4.58301V7.36096C20.4111 7.82724 20.2427 8.27789 19.937 8.63L18.718 10.03M7.07599 14.2091L11.7032 9.58105L16.3311 14.2091M11.7041 20.8532V9.81519",
    stroke: smartColor || stroke,
    strokeWidth: strokeWidth,
    strokeLinecap: strokeLineCap,
    strokeLinejoin: strokeLineJoin
  }));
};

const Upload = {
  component: UploadComponent,
  viewBox: "0 0 24 24",
  fill: "none"
};
UploadComponent.propTypes = {
  fill: _propTypes.default.string,
  stroke: _propTypes.default.string,
  strokeWidth: _propTypes.default.string,
  strokeLineCap: _propTypes.default.string,
  strokeLineJoin: _propTypes.default.string,
  smartColor: _propTypes.default.string
};
UploadComponent.defaultProps = {
  stroke: "black",
  strokeWidth: "1.5",
  strokeLineCap: "round",
  strokeLineJoin: "round"
};
var _default = Upload;
exports.default = _default;