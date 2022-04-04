"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const IncreaseComponent = _ref => {
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
    d: "M19.9999 19H15.9246C15.1723 18.9999 14.4275 18.8515 13.7326 18.5637C13.0377 18.2759 12.4061 17.8543 11.8745 17.3227C11.3428 16.791 10.9212 16.1598 10.6338 15.4653C10.3464 14.7708 10.1988 14.0264 10.1995 13.2749L10.2096 4.00195",
    stroke: smartColor || stroke,
    strokeWidth: strokeWidth,
    strokeLinecap: strokeLineCap,
    strokeLinejoin: strokeLineJoin
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M5 9.20708L10.2128 4L15.4255 9.20708",
    stroke: smartColor || stroke,
    strokeWidth: strokeWidth,
    strokeLinecap: strokeLineCap,
    strokeLinejoin: strokeLineJoin
  }));
};

const Increase = {
  component: IncreaseComponent,
  viewBox: "0 0 24 24",
  fill: "none"
};
IncreaseComponent.propTypes = {
  fill: _propTypes.default.string,
  stroke: _propTypes.default.string,
  strokeWidth: _propTypes.default.string,
  strokeLineCap: _propTypes.default.string,
  strokeLineJoin: _propTypes.default.string,
  smartColor: _propTypes.default.string
};
IncreaseComponent.defaultProps = {
  stroke: "black",
  strokeWidth: "1.5",
  strokeLineCap: "round",
  strokeLineJoin: "round"
};
var _default = Increase;
exports.default = _default;