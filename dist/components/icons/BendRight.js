"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const BendRightComponent = _ref => {
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
    d: "M4 5V9.04102C4 9.78703 4.14695 10.5257 4.43262 11.2148C4.71829 11.904 5.137 12.5301 5.66479 13.0574C6.19259 13.5846 6.81909 14.0027 7.50854 14.2876C8.198 14.5725 8.93684 14.7188 9.68286 14.718L18.8879 14.709M15.6139 9.40088L20.7828 14.5698L15.6139 19.7388",
    stroke: smartColor || stroke,
    strokeWidth: strokeWidth,
    strokeLinecap: strokeLineCap,
    strokeLinejoin: strokeLineJoin
  }));
};

const BendRight = {
  component: BendRightComponent,
  viewBox: "0 0 24 24",
  fill: "none"
};
BendRightComponent.propTypes = {
  fill: _propTypes.default.string,
  stroke: _propTypes.default.string,
  strokeWidth: _propTypes.default.string,
  strokeLineCap: _propTypes.default.string,
  strokeLineJoin: _propTypes.default.string,
  smartColor: _propTypes.default.string
};
BendRightComponent.defaultProps = {
  stroke: "black",
  strokeWidth: "1.5",
  strokeLineCap: "round",
  strokeLineJoin: "round"
};
var _default = BendRight;
exports.default = _default;