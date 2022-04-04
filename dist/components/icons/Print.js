"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const PrintComponent = _ref => {
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
    d: "M4.98389 16.6428C4.4577 16.6428 3.95313 16.4338 3.58105 16.0618C3.20898 15.6897 3 15.1851 3 14.6589V9.19702C3 8.93653 3.05116 8.6784 3.15088 8.43774C3.2506 8.19709 3.39681 7.97834 3.58105 7.79419C3.7653 7.61004 3.98391 7.4641 4.22461 7.3645C4.46531 7.26491 4.72339 7.21398 4.98389 7.21411H18.8708C19.1313 7.21398 19.3894 7.26491 19.6301 7.3645C19.8708 7.4641 20.0894 7.61004 20.2737 7.79419C20.4579 7.97834 20.6041 8.19709 20.7039 8.43774C20.8036 8.6784 20.855 8.93653 20.855 9.19702V14.6589C20.855 15.1851 20.6458 15.6897 20.2737 16.0618C19.9016 16.4338 19.397 16.6428 18.8708 16.6428",
    stroke: smartColor || stroke,
    strokeWidth: strokeWidth,
    strokeLinecap: strokeLineCap,
    strokeLinejoin: strokeLineJoin
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M6.13379 7.21289V3H17.7219V7.21289",
    stroke: smartColor || stroke,
    strokeWidth: strokeWidth,
    strokeLinecap: strokeLineCap,
    strokeLinejoin: strokeLineJoin
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M9.03687 11.2341H17.7229V20.4269H6.13477V11.2341",
    stroke: smartColor || stroke,
    strokeWidth: strokeWidth,
    strokeLinecap: strokeLineCap,
    strokeLinejoin: strokeLineJoin
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M9.61182 14.5939H14.4998",
    stroke: smartColor || stroke,
    strokeWidth: strokeWidth,
    strokeLinecap: strokeLineCap,
    strokeLinejoin: strokeLineJoin
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M9.61182 16.9589H14.4998",
    stroke: smartColor || stroke,
    strokeWidth: strokeWidth,
    strokeLinecap: strokeLineCap,
    strokeLinejoin: strokeLineJoin
  }));
};

const Print = {
  component: PrintComponent,
  viewBox: "0 0 24 24",
  fill: "none"
};
PrintComponent.propTypes = {
  fill: _propTypes.default.string,
  stroke: _propTypes.default.string,
  strokeWidth: _propTypes.default.string,
  strokeLineCap: _propTypes.default.string,
  strokeLineJoin: _propTypes.default.string,
  smartColor: _propTypes.default.string
};
PrintComponent.defaultProps = {
  stroke: "black",
  strokeWidth: "1.5",
  strokeLineCap: "round",
  strokeLineJoin: "round"
};
var _default = Print;
exports.default = _default;