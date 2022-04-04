"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const CircleComponent = _ref => {
  let {
    fill,
    stroke,
    smartColor,
    strokeWidth,
    strokeLineCap,
    strokeLineJoin,
    fillRule,
    clipRule,
    props
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("g", {
    clipPath: "url(#clip0_379_504)"
  }, /*#__PURE__*/_react.default.createElement("path", {
    fillRule: fillRule,
    clipRule: clipRule,
    fill: smartColor || fill,
    d: "M7.40381 7.40381C4.8654 9.94221 4.8654 14.0578 7.40381 16.5962C9.94221 19.1346 14.0578 19.1346 16.5962 16.5962C19.1346 14.0578 19.1346 9.94221 16.5962 7.40381C14.0578 4.8654 9.94221 4.8654 7.40381 7.40381ZM6.34315 17.6569C3.21895 14.5327 3.21895 9.46734 6.34315 6.34315C9.46734 3.21895 14.5327 3.21895 17.6569 6.34315C20.781 9.46734 20.781 14.5327 17.6569 17.6569C14.5327 20.781 9.46734 20.781 6.34315 17.6569Z"
  })), /*#__PURE__*/_react.default.createElement("defs", null, /*#__PURE__*/_react.default.createElement("clipPath", {
    id: "clip0_379_504"
  }, /*#__PURE__*/_react.default.createElement("rect", {
    width: "16",
    height: "16",
    fill: "white",
    transform: "translate(4 4)"
  }))), /*#__PURE__*/_react.default.createElement("path", {
    d: "M3.73396 15.2779L8.72224 20.2663C9.19206 20.736 9.82939 21 10.4938 21C11.1581 21 11.7952 20.736 12.265 20.2663L19.5595 12.9717C19.8412 12.6897 19.9996 12.3075 20 11.909V4H12.0914C11.6928 4.00009 11.3105 4.15856 11.0287 4.44048L3.73396 11.7351C3.50124 11.9676 3.3166 12.2438 3.19064 12.5477C3.06469 12.8517 3 13.1774 3 13.5064C3 13.8354 3.06469 14.1613 3.19064 14.4653C3.3166 14.7692 3.50124 15.0454 3.73396 15.2779Z",
    stroke: smartColor || stroke,
    strokeWidth: strokeWidth,
    strokeLinecap: strokeLineCap,
    strokeLinejoin: strokeLineJoin
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M15.1222 10.0612C15.6801 10.0612 16.1324 9.60889 16.1324 9.05097C16.1324 8.49305 15.6801 8.04077 15.1222 8.04077C14.5643 8.04077 14.112 8.49305 14.112 9.05097C14.112 9.60889 14.5643 10.0612 15.1222 10.0612Z",
    stroke: smartColor || stroke,
    strokeWidth: strokeWidth,
    strokeLinecap: strokeLineCap,
    strokeLinejoin: strokeLineJoin
  }));
};

const Circle = {
  component: CircleComponent,
  viewBox: "0 0 24 24",
  fill: "none"
};
CircleComponent.propTypes = {
  fill: _propTypes.default.string,
  stroke: _propTypes.default.string,
  strokeWidth: _propTypes.default.string,
  strokeLineCap: _propTypes.default.string,
  strokeLineJoin: _propTypes.default.string,
  smartColor: _propTypes.default.string,
  fillRule: _propTypes.default.string,
  clipRule: _propTypes.default.string
};
CircleComponent.defaultProps = {
  stroke: "black",
  strokeWidth: "1.5",
  strokeLineCap: "round",
  strokeLineJoin: "round",
  fillRule: "evenodd",
  clipRule: "evenodd"
};
var _default = Circle;
exports.default = _default;