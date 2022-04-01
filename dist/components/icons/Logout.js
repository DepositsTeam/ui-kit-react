"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const LogoutComponent = _ref => {
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
    d: "M12.0338 20.3669H19.4488C19.8435 20.3669 20.222 20.2102 20.5011 19.9312C20.7801 19.6521 20.9369 19.2735 20.9369 18.8789V5.48792C20.9369 5.09327 20.7801 4.71485 20.5011 4.43579C20.222 4.15674 19.8435 4 19.4488 4H12.0338M8.6499 17.834L3 12.184L8.6499 6.53394M13.6669 12.1829H3.23489",
    stroke: smartColor || stroke,
    strokeWidth: strokeWidth,
    strokeLinecap: strokeLineCap,
    strokeLinejoin: strokeLineJoin
  }));
};

const Logout = {
  component: LogoutComponent,
  viewBox: "0 0 24 24",
  fill: "none"
};
LogoutComponent.propTypes = {
  fill: _propTypes.default.string,
  stroke: _propTypes.default.string,
  strokeWidth: _propTypes.default.string,
  strokeLineCap: _propTypes.default.string,
  strokeLineJoin: _propTypes.default.string,
  smartColor: _propTypes.default.string
};
LogoutComponent.defaultProps = {
  stroke: "black",
  strokeWidth: "1.5",
  strokeLineCap: "round",
  strokeLineJoin: "round"
};
var _default = Logout;
exports.default = _default;