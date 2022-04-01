"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const AnnounceComponent = _ref => {
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
    d: "M10.3101 10.0508L3.83725 13.982C3.44252 14.2219 3.15917 14.6089 3.04965 15.0577C2.94013 15.5064 3.01344 15.9803 3.25326 16.3751L4.41415 18.2891C4.6541 18.6838 5.0409 18.967 5.48959 19.0767C5.93828 19.1864 6.41224 19.1135 6.80722 18.8741L13.3412 14.9048M13.3412 14.9048L20.3683 15.7159C20.4492 15.7253 20.5312 15.7117 20.6048 15.6768C20.6784 15.6419 20.7408 15.5872 20.7848 15.5186C20.8287 15.45 20.8524 15.3706 20.8534 15.2891C20.8543 15.2077 20.8324 15.1278 20.7901 15.0582L13.5902 3.20904C13.5476 3.13913 13.4861 3.08258 13.4129 3.04595C13.3397 3.00932 13.2578 2.99418 13.1764 3.00201C13.0949 3.00983 13.0171 3.04049 12.9522 3.09039C12.8873 3.14028 12.8377 3.20701 12.8092 3.28375L11.2313 7.54986M13.3412 14.9048L10.3331 10.052M10.0633 19.3017L10.3062 19.7021C10.3994 19.8559 10.522 19.9897 10.667 20.0961C10.812 20.2025 10.9764 20.2795 11.1511 20.3222C11.3259 20.3649 11.5073 20.3726 11.6851 20.3452C11.8628 20.3177 12.0336 20.2555 12.1873 20.162C12.3411 20.0689 12.4749 19.9462 12.5813 19.8012C12.6877 19.6562 12.7644 19.4915 12.8071 19.3168C12.8499 19.1421 12.8578 18.9609 12.8303 18.7831C12.8029 18.6054 12.7407 18.4344 12.6472 18.2807L11.3372 16.123L8.99513 17.5439",
    stroke: smartColor || stroke,
    strokeWidth: strokeWidth,
    strokeLinecap: strokeLineCap,
    strokeLinejoin: strokeLineJoin
  }));
};

const Announce = {
  component: AnnounceComponent,
  viewBox: "0 0 24 24",
  fill: "none"
};
AnnounceComponent.propTypes = {
  fill: _propTypes.default.string,
  stroke: _propTypes.default.string,
  strokeWidth: _propTypes.default.string,
  strokeLineCap: _propTypes.default.string,
  strokeLineJoin: _propTypes.default.string,
  smartColor: _propTypes.default.string
};
AnnounceComponent.defaultProps = {
  stroke: "black",
  strokeWidth: "1.5",
  strokeLineCap: "round",
  strokeLineJoin: "round"
};
var _default = Announce;
exports.default = _default;