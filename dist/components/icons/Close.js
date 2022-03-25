"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const CloseComponent = _ref => {
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
    d: "M6 6L18 18M6 18L18 6L6 18Z",
    stroke: smartColor || stroke,
    "stroke-width": strokeWidth,
    "stroke-linecap": strokeLineCap,
    "stroke-linejoin": strokeLineJoin
  }));
};

CloseComponent.propTypes = {
  fill: _propTypes.default.string,
  stroke: _propTypes.default.string,
  strokeWidth: _propTypes.default.string,
  strokeLineCap: _propTypes.default.string,
  strokeLineJoin: _propTypes.default.string,
  smartColor: _propTypes.default.string
};
CloseComponent.defaultProps = {
  stroke: "black",
  strokeLineCap: "round",
  strokeLineJoin: "round",
  strokeWidth: "1.5"
};
const Close = {
  component: CloseComponent,
  viewBox: "0 0 24 24",
  fill: "none"
};
var _default = Close;
exports.default = _default;