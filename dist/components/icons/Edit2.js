"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Edit2Component = _ref => {
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
    d: "M10.3262 11.1715L9.53613 14.4085L12.7892 13.6226L19.4903 6.95737C19.8167 6.63235 20.0001 6.19174 20.0001 5.73228C20.0001 5.27282 19.8167 4.83221 19.4903 4.50719V4.50719C19.1635 4.18243 18.7206 4 18.2587 4C17.7969 4 17.354 4.18243 17.0272 4.50719L10.3262 11.1715Z",
    stroke: smartColor || stroke,
    strokeWidth: strokeWidth,
    strokeLinecap: strokeLineCap,
    strokeLinejoin: strokeLineJoin
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M16.9046 6.0863L18.2461 7.42078",
    stroke: smartColor || stroke,
    strokeWidth: strokeWidth,
    strokeLinecap: strokeLineCap,
    strokeLinejoin: strokeLineJoin
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M18.695 11.4376V18.2221C18.695 18.6937 18.5067 19.1459 18.1715 19.4793C17.8363 19.8128 17.3817 20.0003 16.9076 20.0003H5.78754C5.31349 20.0003 4.85869 19.8128 4.52348 19.4793C4.18828 19.1459 4 18.6937 4 18.2221V6.71447C4 6.36078 4.14121 6.02174 4.39261 5.77164C4.64402 5.52155 4.98506 5.38107 5.3406 5.38107L12.2526 5.33075",
    stroke: smartColor || stroke,
    strokeWidth: strokeWidth,
    strokeLinecap: strokeLineCap,
    strokeLinejoin: strokeLineJoin
  }));
};

const Edit2 = {
  component: Edit2Component,
  viewBox: "0 0 24 24",
  fill: "none"
};
Edit2Component.propTypes = {
  fill: _propTypes.default.string,
  stroke: _propTypes.default.string,
  strokeWidth: _propTypes.default.string,
  strokeLineCap: _propTypes.default.string,
  strokeLineJoin: _propTypes.default.string,
  smartColor: _propTypes.default.string
};
Edit2Component.defaultProps = {
  stroke: "black",
  strokeWidth: "1.5",
  strokeLineCap: "round",
  strokeLineJoin: "round"
};
var _default = Edit2;
exports.default = _default;