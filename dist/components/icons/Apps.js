"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const AppsComponent = _ref => {
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
    d: "M12.444 5.5C12.8582 5.5 13.194 5.16421 13.194 4.75C13.194 4.33579 12.8582 4 12.444 4C12.0298 4 11.694 4.33579 11.694 4.75C11.694 5.16421 12.0298 5.5 12.444 5.5Z",
    stroke: smartColor || stroke,
    strokeWidth: strokeWidth,
    strokeLinecap: strokeLineCap,
    strokeLinejoin: strokeLineJoin
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M12.444 13.194C12.8582 13.194 13.194 12.8582 13.194 12.444C13.194 12.0298 12.8582 11.694 12.444 11.694C12.0298 11.694 11.694 12.0298 11.694 12.444C11.694 12.8582 12.0298 13.194 12.444 13.194Z",
    stroke: smartColor || stroke,
    strokeWidth: strokeWidth,
    strokeLinecap: strokeLineCap,
    strokeLinejoin: strokeLineJoin
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M12.444 20.889C12.8582 20.889 13.194 20.5532 13.194 20.139C13.194 19.7248 12.8582 19.389 12.444 19.389C12.0298 19.389 11.694 19.7248 11.694 20.139C11.694 20.5532 12.0298 20.889 12.444 20.889Z",
    stroke: smartColor || stroke,
    strokeWidth: strokeWidth,
    strokeLinecap: strokeLineCap,
    strokeLinejoin: strokeLineJoin
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M20.139 5.5C20.5532 5.5 20.889 5.16421 20.889 4.75C20.889 4.33579 20.5532 4 20.139 4C19.7248 4 19.389 4.33579 19.389 4.75C19.389 5.16421 19.7248 5.5 20.139 5.5Z",
    stroke: smartColor || stroke,
    strokeWidth: strokeWidth,
    strokeLinecap: strokeLineCap,
    strokeLinejoin: strokeLineJoin
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M20.139 13.194C20.5532 13.194 20.889 12.8582 20.889 12.444C20.889 12.0298 20.5532 11.694 20.139 11.694C19.7248 11.694 19.389 12.0298 19.389 12.444C19.389 12.8582 19.7248 13.194 20.139 13.194Z",
    stroke: smartColor || stroke,
    strokeWidth: strokeWidth,
    strokeLinecap: strokeLineCap,
    strokeLinejoin: strokeLineJoin
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M20.139 20.889C20.5532 20.889 20.889 20.5532 20.889 20.139C20.889 19.7248 20.5532 19.389 20.139 19.389C19.7248 19.389 19.389 19.7248 19.389 20.139C19.389 20.5532 19.7248 20.889 20.139 20.889Z",
    stroke: smartColor || stroke,
    strokeWidth: strokeWidth,
    strokeLinecap: strokeLineCap,
    strokeLinejoin: strokeLineJoin
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M4.75 5.5C5.16421 5.5 5.5 5.16421 5.5 4.75C5.5 4.33579 5.16421 4 4.75 4C4.33579 4 4 4.33579 4 4.75C4 5.16421 4.33579 5.5 4.75 5.5Z",
    stroke: smartColor || stroke,
    strokeWidth: strokeWidth,
    strokeLinecap: strokeLineCap,
    strokeLinejoin: strokeLineJoin
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M4.75 13.194C5.16421 13.194 5.5 12.8582 5.5 12.444C5.5 12.0298 5.16421 11.694 4.75 11.694C4.33579 11.694 4 12.0298 4 12.444C4 12.8582 4.33579 13.194 4.75 13.194Z",
    stroke: smartColor || stroke,
    strokeWidth: strokeWidth,
    strokeLinecap: strokeLineCap,
    strokeLinejoin: strokeLineJoin
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M4.75 20.889C5.16421 20.889 5.5 20.5532 5.5 20.139C5.5 19.7248 5.16421 19.389 4.75 19.389C4.33579 19.389 4 19.7248 4 20.139C4 20.5532 4.33579 20.889 4.75 20.889Z",
    stroke: smartColor || stroke,
    strokeWidth: strokeWidth,
    strokeLinecap: strokeLineCap,
    strokeLinejoin: strokeLineJoin
  }));
};

const Apps = {
  component: AppsComponent,
  viewBox: "0 0 24 24",
  fill: "none"
};
AppsComponent.propTypes = {
  fill: _propTypes.default.string,
  stroke: _propTypes.default.string,
  strokeWidth: _propTypes.default.string,
  strokeLineCap: _propTypes.default.string,
  strokeLineJoin: _propTypes.default.string,
  smartColor: _propTypes.default.string
};
AppsComponent.defaultProps = {
  stroke: "black",
  strokeWidth: "1.5",
  strokeLineCap: "round",
  strokeLineJoin: "round"
};
var _default = Apps;
exports.default = _default;