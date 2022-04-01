"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const NextComponent = _ref => {
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
    d: "M18.6979 3L18.6989 20.359M6.02783 3.64386L17.8069 11.1138C17.9021 11.1743 17.9806 11.2579 18.0349 11.3568C18.0892 11.4556 18.1177 11.5667 18.1177 11.6795C18.1177 11.7923 18.0892 11.9032 18.0349 12.002C17.9806 12.1009 17.9021 12.1844 17.8069 12.2449L6.02783 19.7139C5.92652 19.778 5.80999 19.8136 5.69019 19.8172C5.57038 19.8208 5.45168 19.7922 5.34668 19.7344C5.24168 19.6766 5.15427 19.5918 5.09326 19.4886C5.03225 19.3854 5.00006 19.2679 5 19.148V4.21002C5.00006 4.09016 5.03225 3.97238 5.09326 3.8692C5.15427 3.76603 5.24168 3.68116 5.34668 3.62335C5.45168 3.56554 5.57038 3.53697 5.69019 3.54059C5.80999 3.54421 5.92652 3.57982 6.02783 3.64386Z",
    stroke: smartColor || stroke,
    strokeWidth: strokeWidth,
    strokeLinecap: strokeLineCap,
    strokeLinejoin: strokeLineJoin
  }));
};

const Next = {
  component: NextComponent,
  viewBox: "0 0 24 24",
  fill: "none"
};
NextComponent.propTypes = {
  fill: _propTypes.default.string,
  stroke: _propTypes.default.string,
  strokeWidth: _propTypes.default.string,
  strokeLineCap: _propTypes.default.string,
  strokeLineJoin: _propTypes.default.string,
  smartColor: _propTypes.default.string
};
NextComponent.defaultProps = {
  stroke: "black",
  strokeWidth: "1.5",
  strokeLineCap: "round",
  strokeLineJoin: "round"
};
var _default = Next;
exports.default = _default;