"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const KeyComponent = _ref => {
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
    d: "M10.6243 11.6885C11.3516 12.4158 11.8054 13.3717 11.9093 14.395C12.0131 15.4183 11.7607 16.4461 11.1944 17.3047C10.6281 18.1633 9.78285 18.8004 8.80134 19.1079C7.81984 19.4154 6.76216 19.3747 5.8072 18.9927C4.85224 18.6106 4.05847 17.9104 3.55989 17.0107C3.06131 16.1111 2.88841 15.067 3.07063 14.0547C3.25284 13.0424 3.77889 12.1244 4.55989 11.4551C5.34088 10.7858 6.32901 10.4064 7.35725 10.3813M16.9852 9.30322L17.8182 10.1362L20.8541 7.1001L17.7542 4L10.3311 11.4233",
    stroke: smartColor || stroke,
    strokeWidth: strokeWidth,
    strokeLinecap: strokeLineCap,
    strokeLinejoin: strokeLineJoin
  }));
};

const Key = {
  component: KeyComponent,
  viewBox: "0 0 24 24",
  fill: "none"
};
KeyComponent.propTypes = {
  fill: _propTypes.default.string,
  stroke: _propTypes.default.string,
  strokeWidth: _propTypes.default.string,
  strokeLineCap: _propTypes.default.string,
  strokeLineJoin: _propTypes.default.string,
  smartColor: _propTypes.default.string
};
KeyComponent.defaultProps = {
  stroke: "black",
  strokeWidth: "1.5",
  strokeLineCap: "round",
  strokeLineJoin: "round"
};
var _default = Key;
exports.default = _default;