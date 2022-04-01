"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const MenuHComponent = _ref => {
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
    d: "M20.139 12.5C20.5532 12.5 20.889 12.1642 20.889 11.75C20.889 11.3358 20.5532 11 20.139 11C19.7248 11 19.389 11.3358 19.389 11.75C19.389 12.1642 19.7248 12.5 20.139 12.5Z",
    stroke: smartColor || stroke,
    strokeWidth: strokeWidth,
    strokeLinecap: strokeLineCap,
    strokeLinejoin: strokeLineJoin
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M12.444 12.5C12.8582 12.5 13.194 12.1642 13.194 11.75C13.194 11.3358 12.8582 11 12.444 11C12.0298 11 11.694 11.3358 11.694 11.75C11.694 12.1642 12.0298 12.5 12.444 12.5Z",
    stroke: smartColor || stroke,
    strokeWidth: strokeWidth,
    strokeLinecap: strokeLineCap,
    strokeLinejoin: strokeLineJoin
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M4.75 12.5C5.16421 12.5 5.5 12.1642 5.5 11.75C5.5 11.3358 5.16421 11 4.75 11C4.33579 11 4 11.3358 4 11.75C4 12.1642 4.33579 12.5 4.75 12.5Z",
    stroke: smartColor || stroke,
    strokeWidth: strokeWidth,
    strokeLinecap: strokeLineCap,
    strokeLinejoin: strokeLineJoin
  }));
};

const MenuH = {
  component: MenuHComponent,
  viewBox: "0 0 24 24",
  fill: "none"
};
MenuHComponent.propTypes = {
  fill: _propTypes.default.string,
  stroke: _propTypes.default.string,
  strokeWidth: _propTypes.default.string,
  strokeLineCap: _propTypes.default.string,
  strokeLineJoin: _propTypes.default.string,
  smartColor: _propTypes.default.string
};
MenuHComponent.defaultProps = {
  stroke: "black",
  strokeWidth: "1.5",
  strokeLineCap: "round",
  strokeLineJoin: "round"
};
var _default = MenuH;
exports.default = _default;