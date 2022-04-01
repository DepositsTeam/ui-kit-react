"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const RotateLeftComponent = _ref => {
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
    d: "M20.8872 19.8799V15.8428C20.8872 15.0968 20.7402 14.3583 20.4546 13.6692C20.169 12.9801 19.7503 12.3539 19.2227 11.8267C18.695 11.2994 18.0685 10.8814 17.3792 10.5964C16.6898 10.3114 15.951 10.1651 15.2051 10.1658L6 10.1748M11.1692 5L6 10.1689L11.1692 15.3379",
    stroke: smartColor || stroke,
    strokeWidth: strokeWidth,
    strokeLinecap: strokeLineCap,
    strokeLinejoin: strokeLineJoin
  }));
};

const RotateLeft = {
  component: RotateLeftComponent,
  viewBox: "0 0 24 24",
  fill: "none"
};
RotateLeftComponent.propTypes = {
  fill: _propTypes.default.string,
  stroke: _propTypes.default.string,
  strokeWidth: _propTypes.default.string,
  strokeLineCap: _propTypes.default.string,
  strokeLineJoin: _propTypes.default.string,
  smartColor: _propTypes.default.string
};
RotateLeftComponent.defaultProps = {
  stroke: "black",
  strokeWidth: "1.5",
  strokeLineCap: "round",
  strokeLineJoin: "round"
};
var _default = RotateLeft;
exports.default = _default;