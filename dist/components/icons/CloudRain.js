"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const CloudRainComponent = _ref => {
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
    d: "M15.5991 16.8917H17.6321C18.4262 16.8909 19.1919 16.5968 19.7825 16.066C20.3731 15.5352 20.747 14.8052 20.8323 14.0157C20.9176 13.2262 20.7083 12.4328 20.2446 11.7882C19.781 11.1435 19.0957 10.6929 18.3201 10.5226C18.558 9.1148 18.2483 7.66925 17.4546 6.48251C16.6609 5.29577 15.4432 4.4579 14.0513 4.14023C12.6593 3.82256 11.1985 4.04915 9.96851 4.77402C8.73849 5.49889 7.83245 6.66709 7.43604 8.03866H7.427C6.25289 8.03866 5.12685 8.50532 4.29663 9.33554C3.46641 10.1658 3 11.2913 3 12.4654C3 13.6395 3.46641 14.7656 4.29663 15.5958C5.12685 16.426 6.25289 16.8927 7.427 16.8927M8.27206 15.2355V19.6465M15.6171 14.3485V18.9495M11.9441 16.5015V20.5805",
    stroke: smartColor || stroke,
    strokeWidth: strokeWidth,
    strokeLinecap: strokeLineCap,
    strokeLinejoin: strokeLineJoin
  }));
};

const CloudRain = {
  component: CloudRainComponent,
  viewBox: "0 0 24 24",
  fill: "none"
};
CloudRainComponent.propTypes = {
  fill: _propTypes.default.string,
  stroke: _propTypes.default.string,
  strokeWidth: _propTypes.default.string,
  strokeLineCap: _propTypes.default.string,
  strokeLineJoin: _propTypes.default.string,
  smartColor: _propTypes.default.string
};
CloudRainComponent.defaultProps = {
  stroke: "black",
  strokeWidth: "1.5",
  strokeLineCap: "round",
  strokeLineJoin: "round"
};
var _default = CloudRain;
exports.default = _default;