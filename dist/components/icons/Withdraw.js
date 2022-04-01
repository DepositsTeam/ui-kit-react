"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const WithdrawComponent = _ref => {
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
    d: "M12.0001 9.51472V20.4853",
    stroke: smartColor || stroke,
    strokeWidth: strokeWidth,
    strokeLinecap: strokeLineCap,
    strokeLinejoin: strokeLineJoin
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M7 12.75C7.41421 12.75 7.75 12.4142 7.75 12C7.75 11.5858 7.41421 11.25 7 11.25V12.75ZM17 11.25C16.5858 11.25 16.25 11.5858 16.25 12C16.25 12.4142 16.5858 12.75 17 12.75V11.25ZM6 4.75H18V3.25H6V4.75ZM19.25 6V10H20.75V6H19.25ZM4.75 10V6H3.25V10H4.75ZM7 11.25H6V12.75H7V11.25ZM18 11.25H17V12.75H18V11.25ZM3.25 10C3.25 11.5188 4.48122 12.75 6 12.75V11.25C5.30964 11.25 4.75 10.6904 4.75 10H3.25ZM19.25 10C19.25 10.6904 18.6904 11.25 18 11.25V12.75C19.5188 12.75 20.75 11.5188 20.75 10H19.25ZM18 4.75C18.6904 4.75 19.25 5.30964 19.25 6H20.75C20.75 4.48122 19.5188 3.25 18 3.25V4.75ZM6 3.25C4.48122 3.25 3.25 4.48122 3.25 6H4.75C4.75 5.30964 5.30964 4.75 6 4.75V3.25Z",
    stroke: smartColor || fill
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M16.2427 16.2426L12.0001 20.4852L7.75742 16.2426",
    stroke: smartColor || stroke,
    strokeWidth: strokeWidth,
    strokeLinecap: strokeLineCap,
    strokeLinejoin: strokeLineJoin
  }));
};

const Withdraw = {
  component: WithdrawComponent,
  viewBox: "0 0 24 24",
  fill: "none"
};
WithdrawComponent.propTypes = {
  fill: _propTypes.default.string,
  stroke: _propTypes.default.string,
  strokeWidth: _propTypes.default.string,
  strokeLineCap: _propTypes.default.string,
  strokeLineJoin: _propTypes.default.string,
  smartColor: _propTypes.default.string
};
WithdrawComponent.defaultProps = {
  stroke: "black",
  strokeWidth: "1.5",
  strokeLineCap: "round",
  strokeLineJoin: "round"
};
var _default = Withdraw;
exports.default = _default;