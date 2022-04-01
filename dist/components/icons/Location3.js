"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Location3Component = _ref => {
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
    d: "M12.225 16.831V10.386M6.45801 14.698C6.04635 14.9367 5.69874 15.2716 5.44482 15.6741C5.1909 16.0765 5.03823 16.5347 5 17.009C5 19.134 8.23507 20.8562 12.2261 20.8562C16.2171 20.8562 19.4509 19.133 19.4509 17.009C19.4161 16.544 19.2702 16.094 19.0254 15.697C18.7805 15.3001 18.4439 14.9676 18.0439 14.7278C18.0299 14.7178 18.013 14.708 17.999 14.699M15.808 6.583C15.808 8.56184 14.2039 10.166 12.225 10.166C10.2462 10.166 8.64203 8.56184 8.64203 6.583C8.64203 4.60416 10.2462 3 12.225 3C14.2039 3 15.808 4.60416 15.808 6.583Z",
    stroke: smartColor || stroke,
    strokeWidth: strokeWidth,
    strokeLinecap: strokeLineCap,
    strokeLinejoin: strokeLineJoin
  }));
};

const Location3 = {
  component: Location3Component,
  viewBox: "0 0 24 24",
  fill: "none"
};
Location3Component.propTypes = {
  fill: _propTypes.default.string,
  stroke: _propTypes.default.string,
  strokeWidth: _propTypes.default.string,
  strokeLineCap: _propTypes.default.string,
  strokeLineJoin: _propTypes.default.string,
  smartColor: _propTypes.default.string
};
Location3Component.defaultProps = {
  stroke: "black",
  strokeWidth: "1.5",
  strokeLineCap: "round",
  strokeLineJoin: "round"
};
var _default = Location3;
exports.default = _default;