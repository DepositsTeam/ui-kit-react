"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _box = _interopRequireDefault(require("../../box"));

require("./Table.css");

var _checkbox = _interopRequireDefault(require("../../checkbox"));

var _Pagination = _interopRequireDefault(require("../../pagination/src/Pagination"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const TableContent = _ref => {
  let {
    data,
    itemsPerPage,
    siblingCount,
    nullify,
    checkbox
  } = _ref;
  const noOfPages = Math.ceil(data.length / itemsPerPage);
  const [newData, setNewData] = (0, _react.useState)(data.slice(0, itemsPerPage)); // Once data changes (or items per page) from filter or sort fxn , change the total data to the new data and display the first page of the new data

  (0, _react.useEffect)(() => {
    setNewData(data.slice(0, itemsPerPage));
  }, [data, itemsPerPage]); // Once page change is triggered, decide the section of the array to display

  const onPageChange = page => {
    let start = (page - 1) * itemsPerPage;
    setNewData(data.slice(start, start + itemsPerPage));
  };

  return /*#__PURE__*/_react.default.createElement(_box.default, {
    is: "div",
    onClick: () => nullify(),
    className: "ui-table__content"
  }, newData.map((item, itemIdx) => /*#__PURE__*/_react.default.createElement(_box.default, {
    key: itemIdx,
    is: "div",
    className: "ui-table__content-item-container"
  }, checkbox && /*#__PURE__*/_react.default.createElement(_checkbox.default, {
    className: "ui-table__checkbox"
  }), Object.values(item).map((value, valueIdx) => /*#__PURE__*/_react.default.createElement(_box.default, {
    key: valueIdx,
    is: "div",
    className: "ui-table__content-item"
  }, value.component || value)))), /*#__PURE__*/_react.default.createElement(_box.default, {
    className: "ui-table__pagination"
  }, /*#__PURE__*/_react.default.createElement(_Pagination.default, {
    totalPage: noOfPages,
    siblingCount: siblingCount,
    onPageChange: onPageChange
  })));
};

var _default = TableContent;
exports.default = _default;