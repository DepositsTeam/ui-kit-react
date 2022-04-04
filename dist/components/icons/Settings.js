"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const SettingsComponent = _ref => {
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
    d: "M11.922 14.8101C13.5137 14.8101 14.804 13.5198 14.804 11.9281C14.804 10.3365 13.5137 9.04614 11.922 9.04614C10.3304 9.04614 9.04004 10.3365 9.04004 11.9281C9.04004 13.5198 10.3304 14.8101 11.922 14.8101Z",
    stroke: smartColor || stroke,
    strokeWidth: strokeWidth,
    strokeLinecap: strokeLineCap,
    strokeLinejoin: strokeLineJoin
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M20.8489 13.6101V10.2471H18.1489C18.0052 9.71112 17.7924 9.19615 17.5159 8.71509L19.426 6.80505L17.0481 4.427L15.1379 6.33801C14.6566 6.06076 14.1418 5.84641 13.606 5.70007V3H10.2429V5.70007C9.70703 5.84624 9.19217 6.0606 8.71094 6.33801L6.80103 4.427L4.4231 6.80505L6.33301 8.71509C6.05677 9.19629 5.84395 9.71122 5.69995 10.2471H3V13.6101H5.69995C5.84395 14.146 6.05677 14.6609 6.33301 15.1421L4.4231 17.052L6.80103 19.4301L8.71094 17.519C9.19217 17.7965 9.70703 18.0109 10.2429 18.1571V20.8571H13.606V18.1571C14.1418 18.0108 14.6566 17.7963 15.1379 17.519L17.0481 19.4301L19.426 17.052L17.5159 15.1421C17.7924 14.661 18.0052 14.1461 18.1489 13.6101H20.8489Z",
    stroke: smartColor || stroke,
    strokeWidth: strokeWidth,
    strokeLinecap: strokeLineCap,
    strokeLinejoin: strokeLineJoin
  }));
};

const Settings = {
  component: SettingsComponent,
  viewBox: "0 0 24 24",
  fill: "none"
};
SettingsComponent.propTypes = {
  fill: _propTypes.default.string,
  stroke: _propTypes.default.string,
  strokeWidth: _propTypes.default.string,
  strokeLineCap: _propTypes.default.string,
  strokeLineJoin: _propTypes.default.string,
  smartColor: _propTypes.default.string
};
SettingsComponent.defaultProps = {
  stroke: "black",
  strokeWidth: "1.5",
  strokeLineCap: "round",
  strokeLineJoin: "round"
};
var _default = Settings;
exports.default = _default;