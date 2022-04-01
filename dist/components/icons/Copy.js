"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const CopyComponent = _ref => {
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
    d: "M8.48309 8.37329H14.1976C14.5473 8.37329 14.8828 8.51352 15.1301 8.76317C15.3773 9.01282 15.5162 9.35149 15.5162 9.70456V15.6253",
    stroke: smartColor || stroke,
    strokeWidth: strokeWidth,
    strokeLinecap: strokeLineCap,
    strokeLinejoin: strokeLineJoin
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M8.48279 8.37329H5.31864C4.96894 8.37329 4.6335 8.51352 4.38622 8.76317C4.13895 9.01282 4.00006 9.35149 4.00006 9.70456V18.6689C4.00006 19.022 4.13895 19.3604 4.38622 19.6101C4.6335 19.8598 4.96894 20 5.31864 20H14.1976C14.5473 20 14.8825 19.8598 15.1298 19.6101C15.377 19.3604 15.5159 19.022 15.5159 18.6689V15.627",
    stroke: smartColor || stroke,
    strokeWidth: strokeWidth,
    strokeLinecap: strokeLineCap,
    strokeLinejoin: strokeLineJoin
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M8.48309 8.37326V5.33133C8.48333 4.97834 8.62225 4.63998 8.86947 4.39038C9.1167 4.14077 9.45204 4.0003 9.80167 4.00006H18.6815C19.0312 4.00006 19.3666 4.1405 19.6139 4.39016C19.8611 4.63981 20 4.97826 20 5.33133V14.2957C20 14.6488 19.8611 14.9874 19.6139 15.2371C19.3666 15.4867 19.0312 15.627 18.6815 15.627H15.5171",
    stroke: smartColor || stroke,
    strokeWidth: strokeWidth,
    strokeLinecap: strokeLineCap,
    strokeLinejoin: strokeLineJoin
  }));
};

const Component = {
  component: CopyComponent,
  viewBox: "0 0 24 24",
  fill: "none"
};
CopyComponent.propTypes = {
  fill: _propTypes.default.string,
  stroke: _propTypes.default.string,
  strokeWidth: _propTypes.default.string,
  strokeLineCap: _propTypes.default.string,
  strokeLineJoin: _propTypes.default.string,
  smartColor: _propTypes.default.string
};
CopyComponent.defaultProps = {
  stroke: "black",
  strokeWidth: "1.5",
  strokeLineCap: "round",
  strokeLineJoin: "round"
};
var _default = Component;
exports.default = _default;