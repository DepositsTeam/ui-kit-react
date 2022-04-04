"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ProfileComponent = _ref => {
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
    d: "M11.9987 13.0811C14.5073 13.0811 16.5409 11.0482 16.5409 8.54054C16.5409 6.03287 14.5073 4 11.9987 4C9.49014 4 7.45654 6.03287 7.45654 8.54054C7.45654 11.0482 9.49014 13.0811 11.9987 13.0811Z",
    stroke: smartColor || stroke,
    strokeWidth: strokeWidth,
    strokeLinecap: strokeLineCap,
    strokeLinejoin: strokeLineJoin
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M20 20.0001C19.9997 18.1655 19.2707 16.4062 17.9728 15.109C16.675 13.8118 14.9148 13.083 13.0795 13.083H10.9205C9.08523 13.083 7.32522 13.8118 6.0274 15.109C4.72958 16.4062 4.00025 18.1655 4 20.0001",
    stroke: smartColor || stroke,
    strokeWidth: strokeWidth,
    strokeLinecap: strokeLineCap,
    strokeLinejoin: strokeLineJoin
  }));
};

const Profile = {
  component: ProfileComponent,
  viewBox: "0 0 24 24",
  fill: "none"
};
ProfileComponent.propTypes = {
  fill: _propTypes.default.string,
  stroke: _propTypes.default.string,
  strokeWidth: _propTypes.default.string,
  strokeLineCap: _propTypes.default.string,
  strokeLineJoin: _propTypes.default.string,
  smartColor: _propTypes.default.string
};
ProfileComponent.defaultProps = {
  stroke: "black",
  strokeWidth: "1.5",
  strokeLineCap: "round",
  strokeLineJoin: "round"
};
var _default = Profile;
exports.default = _default;