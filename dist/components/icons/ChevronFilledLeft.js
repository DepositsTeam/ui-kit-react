"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ChevronFilledLeftComponent = _ref => {
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
    d: "M14.3598 6.64019L9.26517 11.7349C9.11873 11.8814 9.11873 12.1188 9.26517 12.2652L14.3598 17.3598C14.5961 17.5961 15 17.4288 15 17.0948V6.90536C15 6.57126 14.5961 6.40395 14.3598 6.64019Z",
    fill: smartColor || fill
  }));
};

const ChevronFilledLeft = {
  component: ChevronFilledLeftComponent,
  viewBox: "0 0 24 24",
  fill: "none"
};
ChevronFilledLeftComponent.propTypes = {
  fill: _propTypes.default.string,
  stroke: _propTypes.default.string,
  strokeWidth: _propTypes.default.string,
  strokeLineCap: _propTypes.default.string,
  strokeLineJoin: _propTypes.default.string,
  smartColor: _propTypes.default.string
};
ChevronFilledLeftComponent.defaultProps = {
  stroke: "black",
  strokeWidth: "1.5",
  strokeLineCap: "round",
  strokeLineJoin: "round"
};
var _default = ChevronFilledLeft;
exports.default = _default;