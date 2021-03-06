"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const CartComponent = _ref => {
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
    d: "M10.3519 18C10.4925 18 10.6064 17.8925 10.6064 17.7599C10.6064 17.6273 10.4925 17.5198 10.3519 17.5198C10.2114 17.5198 10.0974 17.6273 10.0974 17.7599C10.0974 17.8925 10.2114 18 10.3519 18Z",
    stroke: smartColor || stroke,
    strokeWidth: strokeWidth,
    strokeLinecap: strokeLineCap,
    strokeLinejoin: strokeLineJoin
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M17.5523 18C17.6929 18 17.8068 17.8925 17.8068 17.7599C17.8068 17.6273 17.6929 17.5198 17.5523 17.5198C17.4117 17.5198 17.2978 17.6273 17.2978 17.7599C17.2978 17.8925 17.4117 18 17.5523 18Z",
    stroke: smartColor || stroke,
    strokeWidth: strokeWidth,
    strokeLinecap: strokeLineCap,
    strokeLinejoin: strokeLineJoin
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M3.00006 5.07068H4.87588C5.23051 5.07064 5.57417 5.18707 5.84774 5.39995C6.12132 5.61283 6.30794 5.90896 6.37539 6.23743L7.65392 12.4754C7.72136 12.8038 7.90798 13.1 8.18156 13.3129C8.45514 13.5257 8.79855 13.6422 9.15317 13.6421H18.3073C18.6619 13.642 19.0054 13.5255 19.2789 13.3126C19.5524 13.0998 19.7389 12.8038 19.8066 12.4754L20.9723 6.7844C21.015 6.57592 21.0084 6.36115 20.9528 6.1554C20.8972 5.94966 20.7939 5.758 20.6506 5.59425C20.5074 5.4305 20.3276 5.29876 20.124 5.20825C19.9204 5.11773 19.6981 5.07068 19.4731 5.07068L9.01988 5",
    stroke: smartColor || stroke,
    strokeWidth: strokeWidth,
    strokeLinecap: strokeLineCap,
    strokeLinejoin: strokeLineJoin
  }));
};

const Cart = {
  component: CartComponent,
  viewBox: "0 0 24 24",
  fill: "none"
};
CartComponent.propTypes = {
  fill: _propTypes.default.string,
  stroke: _propTypes.default.string,
  strokeWidth: _propTypes.default.string,
  strokeLineCap: _propTypes.default.string,
  strokeLineJoin: _propTypes.default.string,
  smartColor: _propTypes.default.string
};
CartComponent.defaultProps = {
  stroke: "black",
  strokeWidth: "1.5",
  strokeLineCap: "round",
  strokeLineJoin: "round"
};
var _default = Cart;
exports.default = _default;