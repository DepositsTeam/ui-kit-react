"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const RocketComponent = _ref => {
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
    d: "M11.1521 19.553L12.7842 21.1849L13.5371 20.4319C14.0838 19.8851 14.396 19.1469 14.408 18.3738L14.459 15.1419L17.0161 12.5862C17.9502 12.3734 18.81 11.9137 19.5063 11.2557C20.2027 10.5977 20.71 9.76508 20.9753 8.84454C21.2407 7.924 21.2546 6.94947 21.0154 6.02179C20.7762 5.09411 20.2927 4.24756 19.6152 3.57013C18.9378 2.8927 18.0913 2.40896 17.1636 2.16974C16.2359 1.93052 15.2609 1.94441 14.3403 2.20978C13.4198 2.47515 12.5872 2.98221 11.9292 3.67853C11.2712 4.37485 10.812 5.23517 10.5991 6.16925L8.04199 8.72492L4.81006 8.77618C4.03731 8.78841 3.29973 9.10038 2.75317 9.64679L2 10.4002L3.66699 12.0672M15.5291 7.6521C15.7148 7.83845 15.8537 8.06624 15.9344 8.31665C16.015 8.56706 16.035 8.83333 15.993 9.09302C15.9509 9.3527 15.848 9.59864 15.6924 9.81079C15.5369 10.0229 15.3332 10.195 15.0982 10.3132C14.8689 10.4321 14.6145 10.4944 14.3562 10.4944C14.098 10.4944 13.8433 10.4321 13.614 10.3132C13.3791 10.1949 13.1757 10.0225 13.0203 9.8103C12.8648 9.5981 12.7617 9.3522 12.7198 9.09253C12.6778 8.83285 12.6981 8.56701 12.7788 8.31665C12.8595 8.06629 12.9984 7.83839 13.1841 7.6521C13.2285 7.60799 13.2754 7.56627 13.3242 7.5271M7.16709 13.4182L4.24109 16.3442M9.73309 16.0522L7.45309 18.3322",
    stroke: smartColor || stroke,
    strokeWidth: strokeWidth,
    strokeLinecap: strokeLineCap,
    strokeLinejoin: strokeLineJoin
  }));
};

const Rocket = {
  component: RocketComponent,
  viewBox: "0 0 24 24",
  fill: "none"
};
RocketComponent.propTypes = {
  fill: _propTypes.default.string,
  stroke: _propTypes.default.string,
  strokeWidth: _propTypes.default.string,
  strokeLineCap: _propTypes.default.string,
  strokeLineJoin: _propTypes.default.string,
  smartColor: _propTypes.default.string
};
RocketComponent.defaultProps = {
  stroke: "black",
  strokeWidth: "1.5",
  strokeLineCap: "round",
  strokeLineJoin: "round"
};
var _default = Rocket;
exports.default = _default;