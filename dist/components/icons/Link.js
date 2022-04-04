"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const LinkComponent = _ref => {
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
    d: "M8.06177 10.6437L4.08691 14.6188C3.39101 15.3147 3 16.2581 3 17.2423C3 18.2265 3.39101 19.1704 4.08691 19.8663C4.78294 20.5617 5.72659 20.9523 6.71045 20.9523C7.69431 20.9523 8.63771 20.5617 9.33374 19.8663L13.3088 15.8917M16.0087 13.1904L19.8649 9.33447C20.5605 8.63857 20.9511 7.69488 20.9511 6.71094C20.9511 5.727 20.5605 4.7833 19.8649 4.0874C19.5204 3.74271 19.1113 3.46927 18.6611 3.28271C18.2108 3.09616 17.7283 3 17.2409 3C16.7536 3 16.271 3.09616 15.8207 3.28271C15.3705 3.46927 14.9614 3.74271 14.6169 4.0874L10.7609 7.94336M9.69086 14.2615L14.2609 9.69153",
    stroke: smartColor || stroke,
    strokeWidth: strokeWidth,
    strokeLinecap: strokeLineCap,
    strokeLinejoin: strokeLineJoin
  }));
};

const Link = {
  component: LinkComponent,
  viewBox: "0 0 24 24",
  fill: "none"
};
LinkComponent.propTypes = {
  fill: _propTypes.default.string,
  stroke: _propTypes.default.string,
  strokeWidth: _propTypes.default.string,
  strokeLineCap: _propTypes.default.string,
  strokeLineJoin: _propTypes.default.string,
  smartColor: _propTypes.default.string
};
LinkComponent.defaultProps = {
  stroke: "black",
  strokeWidth: "1.5",
  strokeLineCap: "round",
  strokeLineJoin: "round"
};
var _default = Link;
exports.default = _default;