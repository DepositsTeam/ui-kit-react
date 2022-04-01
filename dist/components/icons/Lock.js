"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const LockComponent = _ref => {
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
    d: "M15.0996 8.10577H9.90036C7.19397 8.10577 5 10.3624 5 13.1461V15.9596C5 18.7433 7.19397 20.9999 9.90036 20.9999H15.0996C17.806 20.9999 20 18.7433 20 15.9596V13.1461C20 10.3624 17.806 8.10577 15.0996 8.10577Z",
    stroke: smartColor || stroke,
    strokeWidth: strokeWidth,
    strokeLinecap: strokeLineCap,
    strokeLinejoin: strokeLineJoin
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M8.76715 8.1048V6.83882C8.76715 5.82073 9.16049 4.84413 9.8604 4.12423C10.5603 3.40433 11.5095 3 12.4994 3C13.4892 3 14.4384 3.40433 15.1383 4.12423C15.8382 4.84413 16.2313 5.82073 16.2313 6.83882V8.1048",
    stroke: smartColor || stroke,
    strokeWidth: strokeWidth,
    strokeLinecap: strokeLineCap,
    strokeLinejoin: strokeLineJoin
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M12.4994 12.9849V15.8781",
    stroke: smartColor || stroke,
    strokeWidth: strokeWidth,
    strokeLinecap: strokeLineCap,
    strokeLinejoin: strokeLineJoin
  }));
};

const Lock = {
  component: LockComponent,
  viewBox: "0 0 24 24",
  fill: "none"
};
LockComponent.propTypes = {
  fill: _propTypes.default.string,
  stroke: _propTypes.default.string,
  strokeWidth: _propTypes.default.string,
  strokeLineCap: _propTypes.default.string,
  strokeLineJoin: _propTypes.default.string,
  smartColor: _propTypes.default.string
};
LockComponent.defaultProps = {
  stroke: "black",
  strokeWidth: "1.5",
  strokeLineCap: "round",
  strokeLineJoin: "round"
};
var _default = Lock;
exports.default = _default;