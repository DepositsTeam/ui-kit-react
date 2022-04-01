"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const DeleteComponent = _ref => {
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
    d: "M9.162 6.33105H20.855M9.162 6.33105L14.692 6.331V5.765C14.692 5.03168 14.4007 4.32839 13.8822 3.80985C13.3636 3.29131 12.6603 3 11.927 3C11.1937 3 10.4904 3.29131 9.97185 3.80985C9.45331 4.32839 9.162 5.03168 9.162 5.765L9.162 6.33105ZM3 6.33105H6.82M19.218 6.33099V18.872C19.218 19.3982 19.009 19.9028 18.637 20.2748C18.2649 20.6469 17.7601 20.8559 17.2339 20.8559H6.67701C6.15082 20.8559 5.64625 20.6469 5.27417 20.2748C4.9021 19.9028 4.69312 19.3982 4.69312 18.872V6.33099M15.6 10.0191V17.1681M8.312 10.0191V17.1681M11.965 10.0191V17.1681",
    stroke: smartColor || stroke,
    strokeWidth: strokeWidth,
    strokeLinecap: strokeLineCap,
    strokeLinejoin: strokeLineJoin
  }));
};

const Delete = {
  component: DeleteComponent,
  viewBox: "0 0 24 24",
  fill: "none"
};
DeleteComponent.propTypes = {
  fill: _propTypes.default.string,
  stroke: _propTypes.default.string,
  strokeWidth: _propTypes.default.string,
  strokeLineCap: _propTypes.default.string,
  strokeLineJoin: _propTypes.default.string,
  smartColor: _propTypes.default.string
};
DeleteComponent.defaultProps = {
  stroke: "black",
  strokeWidth: "1.5",
  strokeLineCap: "round",
  strokeLineJoin: "round"
};
var _default = Delete;
exports.default = _default;