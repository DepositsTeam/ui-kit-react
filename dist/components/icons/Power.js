"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const PowerComponent = _ref => {
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
    d: "M16.5844 5.01849C17.9661 6.01285 19.0072 7.43129 19.5591 9.07088C20.1111 10.7105 20.1457 12.4875 19.6578 14.1484C19.17 15.8094 18.1847 17.2694 16.8428 18.3199C15.5008 19.3703 13.8708 19.9576 12.1853 19.9978C10.4997 20.038 8.84482 19.5288 7.45704 18.5435C6.06926 17.5581 5.01944 16.1466 4.45744 14.5106C3.89543 12.8747 3.85018 11.0981 4.32779 9.43399C4.80539 7.76986 5.78161 6.30357 7.1171 5.24445",
    stroke: smartColor || stroke,
    strokeWidth: strokeWidth,
    strokeLinecap: strokeLineCap,
    strokeLinejoin: strokeLineJoin
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M12.0001 10.4775V3",
    stroke: smartColor || stroke,
    strokeWidth: strokeWidth,
    strokeLinecap: strokeLineCap,
    strokeLinejoin: strokeLineJoin
  }));
};

const Power = {
  component: PowerComponent,
  viewBox: "0 0 24 24",
  fill: "none"
};
PowerComponent.propTypes = {
  fill: _propTypes.default.string,
  stroke: _propTypes.default.string,
  strokeWidth: _propTypes.default.string,
  strokeLineCap: _propTypes.default.string,
  strokeLineJoin: _propTypes.default.string,
  smartColor: _propTypes.default.string
};
PowerComponent.defaultProps = {
  stroke: "black",
  strokeWidth: "1.5",
  strokeLineCap: "round",
  strokeLineJoin: "round"
};
var _default = Power;
exports.default = _default;