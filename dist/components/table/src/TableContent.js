"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _box = _interopRequireDefault(require("../../box"));

require("./Table.css");

var _checkbox = _interopRequireDefault(require("../../checkbox"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const TableContent = _ref => {
  let {
    data,
    nullify
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_box.default, {
    is: "div",
    onClick: () => nullify(),
    className: "ui-table__content"
  }, data.map((item, itemIdx) => /*#__PURE__*/_react.default.createElement(_box.default, {
    key: itemIdx,
    is: "div",
    className: "ui-table__content-item-container"
  }, /*#__PURE__*/_react.default.createElement(_checkbox.default, {
    className: "ui-table__checkbox"
  }), Object.values(item).map((value, valueIdx) => /*#__PURE__*/_react.default.createElement(_box.default, {
    key: valueIdx,
    is: "div",
    className: "ui-table__content-item"
  }, value)))));
};

var _default = TableContent;
exports.default = _default;