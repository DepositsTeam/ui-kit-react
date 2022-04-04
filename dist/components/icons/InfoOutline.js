"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const InfoOutlineComponent = _ref => {
  let {
    fill,
    stroke,
    smartColor,
    strokeWidth,
    strokeLineCap,
    strokeLineJoin,
    fillRule,
    clipRule,
    props
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("path", {
    d: "M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z",
    stroke: smartColor || stroke,
    strokeWidth: strokeWidth,
    strokeLinecap: strokeLineCap,
    strokeLinejoin: strokeLineJoin
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M11.8646 11.0753V15.5834",
    stroke: smartColor || stroke,
    strokeWidth: strokeWidth,
    strokeLinecap: strokeLineCap,
    strokeLinejoin: strokeLineJoin
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M11.8557 9.43359C12.3506 9.43359 12.7517 9.03242 12.7517 8.53754C12.7517 8.04266 12.3506 7.64148 11.8557 7.64148C11.3608 7.64148 10.9596 8.04266 10.9596 8.53754C10.9596 9.03242 11.3608 9.43359 11.8557 9.43359Z",
    fill: smartColor || fill
  }));
};

const InfoOutline = {
  component: InfoOutlineComponent,
  viewBox: "0 0 24 24",
  fill: "none"
};
InfoOutlineComponent.propTypes = {
  fill: _propTypes.default.string,
  stroke: _propTypes.default.string,
  strokeWidth: _propTypes.default.string,
  strokeLineCap: _propTypes.default.string,
  strokeLineJoin: _propTypes.default.string,
  smartColor: _propTypes.default.string,
  fillRule: _propTypes.default.string,
  clipRule: _propTypes.default.string
};
InfoOutlineComponent.defaultProps = {
  stroke: "black",
  strokeWidth: "1.5",
  strokeLineCap: "round",
  strokeLineJoin: "round",
  fillRule: "evenodd",
  clipRule: "evenodd"
};
var _default = InfoOutline;
exports.default = _default;