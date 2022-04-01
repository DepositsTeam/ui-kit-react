"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const TableComponent = _ref => {
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
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("path", {
    fillRule: fillRule,
    clipRule: clipRule,
    fill: smartColor || fill,
    d: "M2.25 5.25C2.25 4.83579 2.58579 4.5 3 4.5H21C21.4142 4.5 21.75 4.83579 21.75 5.25V18C21.75 18.3978 21.592 18.7794 21.3107 19.0607C21.0294 19.342 20.6478 19.5 20.25 19.5H3.75C3.35218 19.5 2.97065 19.342 2.68934 19.0607C2.40804 18.7794 2.25 18.3978 2.25 18V5.25ZM3.75 10.5V13.5H7.50001V10.5H3.75ZM3.75 9V6H20.25V9H3.75ZM9.00001 10.5V13.5H20.25V10.5H9.00001ZM20.25 15H9.00001V18H20.25V15ZM7.50001 18V15H3.75V18H7.50001Z"
  }));
};

const Table = {
  component: TableComponent,
  viewBox: "0 0 24 24",
  fill: "none"
};
TableComponent.propTypes = {
  fill: _propTypes.default.string,
  stroke: _propTypes.default.string,
  strokeWidth: _propTypes.default.string,
  strokeLineCap: _propTypes.default.string,
  strokeLineJoin: _propTypes.default.string,
  smartColor: _propTypes.default.string,
  fillRule: _propTypes.default.string,
  clipRule: _propTypes.default.string
};
TableComponent.defaultProps = {
  stroke: "black",
  strokeWidth: "1.5",
  strokeLineCap: "round",
  strokeLineJoin: "round",
  fillRule: "evenodd",
  clipRule: "evenodd"
};
var _default = Table;
exports.default = _default;