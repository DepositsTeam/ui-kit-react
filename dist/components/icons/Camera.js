"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const CameraComponent = _ref => {
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
    d: "M15.8411 6.63501L15.541 6.06604C15.3734 5.74465 15.121 5.47542 14.811 5.28748C14.5011 5.09954 14.1454 5.00004 13.783 5H10.083C9.72039 4.99997 9.3648 5.09942 9.05469 5.28735C8.74457 5.47529 8.49176 5.74457 8.32397 6.06604L8.02417 6.63501C7.85652 6.95666 7.60383 7.22619 7.2937 7.41431C6.98358 7.60243 6.62786 7.70196 6.26514 7.70203H4.98413C4.45794 7.70203 3.95313 7.91113 3.58105 8.2832C3.20898 8.65528 3 9.15985 3 9.68604V17.4191C3 17.9453 3.20898 18.4498 3.58105 18.8219C3.95313 19.194 4.45794 19.4031 4.98413 19.4031H18.8721C19.3983 19.4031 19.9028 19.194 20.2749 18.8219C20.647 18.4498 20.856 17.9453 20.856 17.4191V9.68604C20.856 9.15985 20.647 8.65528 20.2749 8.2832C19.9028 7.91113 19.3983 7.70203 18.8721 7.70203H17.592C17.2307 7.7005 16.8767 7.60039 16.5681 7.41235C16.2595 7.22431 16.0081 6.95546 15.8411 6.63501Z",
    stroke: smartColor || stroke,
    strokeWidth: strokeWidth,
    strokeLinecap: strokeLineCap,
    strokeLinejoin: strokeLineJoin
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M11.9382 16.205C13.7729 16.205 15.2602 14.7177 15.2602 12.883C15.2602 11.0483 13.7729 9.56104 11.9382 9.56104C10.1035 9.56104 8.61621 11.0483 8.61621 12.883C8.61621 14.7177 10.1035 16.205 11.9382 16.205Z",
    stroke: smartColor || stroke,
    strokeWidth: strokeWidth,
    strokeLinecap: strokeLineCap,
    strokeLinejoin: strokeLineJoin
  }));
};

const Camera = {
  component: CameraComponent,
  viewBox: "0 0 24 24",
  fill: "none"
};
CameraComponent.propTypes = {
  fill: _propTypes.default.string,
  stroke: _propTypes.default.string,
  strokeWidth: _propTypes.default.string,
  strokeLineCap: _propTypes.default.string,
  strokeLineJoin: _propTypes.default.string,
  smartColor: _propTypes.default.string
};
CameraComponent.defaultProps = {
  stroke: "black",
  strokeWidth: "1.5",
  strokeLineCap: "round",
  strokeLineJoin: "round"
};
var _default = Camera;
exports.default = _default;