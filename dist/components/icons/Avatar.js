"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const AvatarComponent = _ref => {
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
    d: "M17.3061 18.5508C17.3061 17.3173 16.816 16.1344 15.9438 15.2622C15.0715 14.39 13.8885 13.8999 12.6549 13.8999H11.2001C9.96667 13.9002 8.78371 14.3905 7.91154 15.2627C7.03936 16.1349 6.54925 17.3173 6.54899 18.5508M14.981 10.8469C14.981 12.5331 13.6141 13.8999 11.928 13.8999C10.2419 13.8999 8.87501 12.5331 8.87501 10.8469C8.87501 9.16082 10.2419 7.79395 11.928 7.79395C13.6141 7.79395 14.981 9.16082 14.981 10.8469ZM20.856 11.928C20.856 16.8588 16.8588 20.856 11.928 20.856C6.9972 20.856 3 16.8588 3 11.928C3 6.9972 6.9972 3 11.928 3C16.8588 3 20.856 6.9972 20.856 11.928Z",
    stroke: smartColor || stroke,
    strokeWidth: strokeWidth,
    strokeLinecap: strokeLineCap,
    strokeLinejoin: strokeLineJoin
  }));
};

const Avatar = {
  component: AvatarComponent,
  viewBox: "0 0 24 24",
  fill: "none"
};
AvatarComponent.propTypes = {
  fill: _propTypes.default.string,
  stroke: _propTypes.default.string,
  strokeWidth: _propTypes.default.string,
  strokeLineCap: _propTypes.default.string,
  strokeLineJoin: _propTypes.default.string,
  smartColor: _propTypes.default.string
};
AvatarComponent.defaultProps = {
  stroke: "black",
  strokeWidth: "1.5",
  strokeLineCap: "round",
  strokeLineJoin: "round"
};
var _default = Avatar;
exports.default = _default;