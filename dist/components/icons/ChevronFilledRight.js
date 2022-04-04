"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ChevronFilledRightComponent = _ref => {
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
    d: "M9.65718 7.11118L14.8872 12.2335C15.0376 12.3807 15.0376 12.6194 14.8872 12.7667L9.65718 17.8888C9.41466 18.1263 9 17.9582 9 17.6223V7.37779C9 7.04189 9.41467 6.87367 9.65718 7.11118Z",
    fill: smartColor || fill
  }));
};

const ChevronFilledRight = {
  component: ChevronFilledRightComponent,
  viewBox: "0 0 24 24",
  fill: "none"
};
ChevronFilledRightComponent.propTypes = {
  fill: _propTypes.default.string,
  stroke: _propTypes.default.string,
  strokeWidth: _propTypes.default.string,
  strokeLineCap: _propTypes.default.string,
  strokeLineJoin: _propTypes.default.string,
  smartColor: _propTypes.default.string
};
ChevronFilledRightComponent.defaultProps = {
  stroke: "black",
  strokeWidth: "1.5",
  strokeLineCap: "round",
  strokeLineJoin: "round"
};
var _default = ChevronFilledRight;
exports.default = _default;