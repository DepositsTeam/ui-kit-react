"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ChevronFilledUpComponent = _ref => {
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
    d: "M6.64017 14.3598L11.7349 9.26517C11.8813 9.11872 12.1188 9.11872 12.2652 9.26517L17.3598 14.3598C17.596 14.5961 17.4288 15 17.0946 15H6.90534C6.57125 15 6.40394 14.5961 6.64017 14.3598Z",
    fill: smartColor || fill
  }));
};

const ChevronFilledUp = {
  component: ChevronFilledUpComponent,
  viewBox: "0 0 24 24",
  fill: "none"
};
ChevronFilledUpComponent.propTypes = {
  fill: _propTypes.default.string,
  stroke: _propTypes.default.string,
  strokeWidth: _propTypes.default.string,
  strokeLineCap: _propTypes.default.string,
  strokeLineJoin: _propTypes.default.string,
  smartColor: _propTypes.default.string
};
ChevronFilledUpComponent.defaultProps = {
  stroke: "black",
  strokeWidth: "1.5",
  strokeLineCap: "round",
  strokeLineJoin: "round"
};
var _default = ChevronFilledUp;
exports.default = _default;