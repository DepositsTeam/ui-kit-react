"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const FolderComponent = _ref => {
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
    d: "M3 11.327V6.98401C3 6.45782 3.20898 5.95313 3.58105 5.58105C3.95313 5.20898 4.45794 5 4.98413 5H9.98999C10.5054 5.00017 11.0007 5.20057 11.3711 5.55896L12.5591 6.70996C12.929 7.06847 13.4238 7.26903 13.939 7.26904H18.8721C19.3983 7.26904 19.9028 7.47803 20.2749 7.8501C20.647 8.22217 20.856 8.72686 20.856 9.25305V17.453C20.856 17.9792 20.647 18.4839 20.2749 18.856C19.9028 19.228 19.3983 19.437 18.8721 19.437H4.98511C4.45892 19.437 3.9541 19.228 3.58203 18.856C3.20996 18.4839 3.00098 17.9792 3.00098 17.453V14.067",
    stroke: smartColor || stroke,
    strokeWidth: strokeWidth,
    strokeLinecap: strokeLineCap,
    strokeLinejoin: strokeLineJoin
  }));
};

const Folder = {
  component: FolderComponent,
  viewBox: "0 0 24 24",
  fill: "none"
};
FolderComponent.propTypes = {
  fill: _propTypes.default.string,
  stroke: _propTypes.default.string,
  strokeWidth: _propTypes.default.string,
  strokeLineCap: _propTypes.default.string,
  strokeLineJoin: _propTypes.default.string,
  smartColor: _propTypes.default.string
};
FolderComponent.defaultProps = {
  stroke: "black",
  strokeWidth: "1.5",
  strokeLineCap: "round",
  strokeLineJoin: "round"
};
var _default = Folder;
exports.default = _default;