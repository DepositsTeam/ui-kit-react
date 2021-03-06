"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const BookmarkComponent = _ref => {
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
    d: "M18.9991 4.49984C18.9992 4.30283 18.9607 4.10773 18.8857 3.92569C18.8107 3.74365 18.7008 3.57834 18.5622 3.43904C18.4235 3.29973 18.2589 3.18915 18.0777 3.11382C17.8965 3.03849 17.7024 2.99987 17.5063 3H7.99042C7.46256 3 6.95615 3.21066 6.5829 3.58571C6.20964 3.96076 6 4.4695 6 4.9999V21L12.4995 17.4357L19 20.9999V4.50168",
    stroke: smartColor || stroke,
    strokeWidth: strokeWidth,
    strokeLinecap: strokeLineCap,
    strokeLinejoin: strokeLineJoin
  }));
};

const Bookmark = {
  component: BookmarkComponent,
  viewBox: "0 0 24 24",
  fill: "none"
};
BookmarkComponent.propTypes = {
  fill: _propTypes.default.string,
  stroke: _propTypes.default.string,
  strokeWidth: _propTypes.default.string,
  strokeLineCap: _propTypes.default.string,
  strokeLineJoin: _propTypes.default.string,
  smartColor: _propTypes.default.string
};
BookmarkComponent.defaultProps = {
  stroke: "black",
  strokeWidth: "1.5",
  strokeLineCap: "round",
  strokeLineJoin: "round"
};
var _default = Bookmark;
exports.default = _default;