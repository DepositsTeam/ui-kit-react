"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _box = _interopRequireDefault(require("../../box"));

var _Icon = _interopRequireDefault(require("../../icon/src/Icon"));

var _Close = _interopRequireDefault(require("../../icons/Close"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const TableTag = _ref => {
  let {
    filterTag,
    closeTag
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_box.default, {
    is: "div",
    className: "ui-table__filter-tag"
  }, filterTag[0], /*#__PURE__*/_react.default.createElement(_box.default, {
    is: "span"
  }, " ", filterTag[1], " "), filterTag[2], /*#__PURE__*/_react.default.createElement(_box.default, {
    is: "span",
    onClick: closeTag,
    className: "close"
  }, /*#__PURE__*/_react.default.createElement(_Icon.default, {
    icon: _Close.default
  })));
};

var _default = TableTag;
exports.default = _default;