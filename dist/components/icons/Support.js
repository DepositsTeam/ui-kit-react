"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const SupportComponent = _ref => {
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
    d: "M14.0361 20.5952C12.6519 20.9429 11.2032 20.9429 9.81904 20.5952V15.4622M14.0361 20.5952C15.625 20.2076 17.0768 19.3909 18.2333 18.2344C19.3898 17.0779 20.2066 15.626 20.5941 14.0371M14.0361 20.5952L14.036 15.4619M14.0361 3.26076C12.6519 2.91308 11.2032 2.91308 9.81904 3.26076M14.0361 3.26076C15.6251 3.64823 17.077 4.46484 18.2335 5.62134C19.39 6.77784 20.2075 8.23011 20.5949 9.81909M14.0361 3.26076V8.39185M9.81904 3.26076C8.23011 3.64833 6.77826 4.46534 5.62178 5.62183C4.46529 6.77831 3.64851 8.23016 3.26094 9.81909M9.81904 3.26076V8.39185M20.5949 9.81909C20.9429 11.2032 20.9429 12.6518 20.5949 14.0359L15.463 14.0361M20.5949 9.81909H15.463C15.8459 10.4557 16.0482 11.1846 16.0482 11.9275C16.0482 12.6704 15.8459 13.3995 15.463 14.0361M3.26094 9.81909C2.91292 11.2032 2.91307 12.6518 3.26108 14.0359H8.3921C8.00951 13.3991 7.80738 12.6704 7.80738 11.9275C7.80738 11.1846 8.00951 10.4559 8.3921 9.81909H3.26094ZM9.82197 20.5933C8.23309 20.2056 6.78117 19.3889 5.62471 18.2324C4.46824 17.076 3.65179 15.624 3.26411 14.0352M14.0361 8.39185C13.3995 8.00873 12.6704 7.8064 11.9274 7.8064C11.1845 7.8064 10.4556 8.00873 9.81904 8.39185M14.0361 8.39185C14.6223 8.74188 15.1126 9.23186 15.463 9.81787M9.81904 8.39185C9.23294 8.74208 8.74274 9.23201 8.3921 9.81787M14.036 15.4619C14.6223 15.1119 15.1126 14.6222 15.463 14.0361M14.036 15.4619C13.3994 15.845 12.6704 16.0476 11.9274 16.0476C11.1845 16.0476 10.4556 15.8453 9.81904 15.4622M9.81904 15.4622C9.23289 15.112 8.74268 14.623 8.3921 14.0371",
    stroke: smartColor || stroke,
    strokeWidth: strokeWidth,
    strokeLinecap: strokeLineCap,
    strokeLinejoin: strokeLineJoin
  }));
};

const Support = {
  component: SupportComponent,
  viewBox: "0 0 24 24",
  fill: "none"
};
SupportComponent.propTypes = {
  fill: _propTypes.default.string,
  stroke: _propTypes.default.string,
  strokeWidth: _propTypes.default.string,
  strokeLineCap: _propTypes.default.string,
  strokeLineJoin: _propTypes.default.string,
  smartColor: _propTypes.default.string
};
SupportComponent.defaultProps = {
  stroke: "black",
  strokeWidth: "1.5",
  strokeLineCap: "round",
  strokeLineJoin: "round"
};
var _default = Support;
exports.default = _default;