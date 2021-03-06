"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const MicOffComponent = _ref => {
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
    d: "M9.89197 13.9686C10.2551 14.3833 10.7362 14.6778 11.2709 14.8119C11.8056 14.946 12.3685 14.9138 12.8844 14.7196C13.4003 14.5254 13.8448 14.1784 14.1583 13.725C14.4718 13.2716 14.6395 12.7333 14.639 12.182V9.22205M20.855 3.00287L3 20.8579M14.5831 5.32056V5.16773C14.4484 4.5094 14.074 3.92457 13.5325 3.52662C12.9911 3.12866 12.3212 2.94591 11.6527 3.01392C10.9841 3.08193 10.3646 3.39546 9.91437 3.89429C9.46415 4.39313 9.21521 5.04167 9.21588 5.71363V10.5916M18.314 12.2156C18.314 13.9094 17.6412 15.534 16.4436 16.7318C15.246 17.9295 13.6217 18.6026 11.928 18.6028V20.8579M11.9321 18.6019C11.0596 18.6022 10.1962 18.423 9.39594 18.0755C8.59564 17.728 7.87539 17.2196 7.27997 16.5818M5.54102 12.2156C5.54049 12.8001 5.62029 13.3819 5.77808 13.9446",
    stroke: smartColor || stroke,
    strokeWidth: strokeWidth,
    strokeLinecap: strokeLineCap,
    strokeLinejoin: strokeLineJoin
  }));
};

const MicOff = {
  component: MicOffComponent,
  viewBox: "0 0 24 24",
  fill: "none"
};
MicOffComponent.propTypes = {
  fill: _propTypes.default.string,
  stroke: _propTypes.default.string,
  strokeWidth: _propTypes.default.string,
  strokeLineCap: _propTypes.default.string,
  strokeLineJoin: _propTypes.default.string,
  smartColor: _propTypes.default.string
};
MicOffComponent.defaultProps = {
  stroke: "black",
  strokeWidth: "1.5",
  strokeLineCap: "round",
  strokeLineJoin: "round"
};
var _default = MicOff;
exports.default = _default;