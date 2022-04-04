"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ChevronFilledDown = _interopRequireDefault(require("../../icons/ChevronFilledDown"));

var _checkbox = _interopRequireDefault(require("../../checkbox"));

var _box = _interopRequireDefault(require("../../box"));

require("./Table.css");

var _icon = _interopRequireDefault(require("../../icon"));

var _sortAscending = _interopRequireDefault(require("../assets/sort-ascending.svg"));

var _sortDescending = _interopRequireDefault(require("../assets/sort-descending.svg"));

var _funnel = _interopRequireDefault(require("../assets/funnel.svg"));

var _rightArrow = _interopRequireDefault(require("../assets/right-arrow.svg"));

var _Radio = _interopRequireDefault(require("../../radio/src/Radio"));

var _TextField = _interopRequireDefault(require("../../text-field/src/TextField"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const TableHeader = _ref => {
  let {
    headings,
    sortIndex,
    handleSort,
    sortModalTrigger,
    filterIndex,
    filterModalTrigger,
    setFilterIndex,
    handleChange,
    applyFilter,
    filterCriteria,
    setFilterCriteria,
    filterLabel,
    checkbox
  } = _ref;
  return /*#__PURE__*/React.createElement(_box.default, {
    is: "div",
    className: "ui-table__header"
  }, checkbox && /*#__PURE__*/React.createElement(_checkbox.default, {
    className: "ui-table__checkbox"
  }), headings.map((item, idx) => /*#__PURE__*/React.createElement(_box.default, {
    key: item,
    is: "div",
    className: "ui-table__header-item "
  }, /*#__PURE__*/React.createElement(_box.default, {
    is: "div",
    className: "ui-table__header-item-inner ".concat(sortIndex === idx && 'sorting', " "),
    onClick: e => sortModalTrigger(idx, e)
  }, item, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(_icon.default, {
    className: "ui-button__dropdown-icon",
    icon: _ChevronFilledDown.default
  }))), sortIndex === idx && /*#__PURE__*/React.createElement(_box.default, {
    is: "div",
    className: "ui-table__header-sort_modal"
  }, /*#__PURE__*/React.createElement(_box.default, {
    className: "ui-table__header-sort_modal-item",
    onClick: () => handleSort(idx, 'asc')
  }, /*#__PURE__*/React.createElement("img", {
    alt: "ascending",
    src: _sortAscending.default
  }), " Sort Ascending"), /*#__PURE__*/React.createElement(_box.default, {
    className: "ui-table__header-sort_modal-item",
    onClick: () => handleSort(idx, 'desc')
  }, /*#__PURE__*/React.createElement("img", {
    alt: "descending",
    src: _sortDescending.default
  }), " Sort Descending"), /*#__PURE__*/React.createElement(_box.default, {
    className: "ui-table__header-sort_modal-item ".concat(filterIndex === idx && 'filter-bg', " "),
    onClick: e => filterModalTrigger(idx, e)
  }, /*#__PURE__*/React.createElement(_box.default, {
    className: "ui-table__header-sort_modal-item filter "
  }, /*#__PURE__*/React.createElement("img", {
    alt: "filter",
    src: _funnel.default
  }), " Filter"), " ", /*#__PURE__*/React.createElement("img", {
    alt: "right-arrow",
    src: _rightArrow.default
  }))), filterIndex === idx && /*#__PURE__*/React.createElement(_box.default, {
    is: "div",
    className: "ui-table__header-filter_modal"
  }, /*#__PURE__*/React.createElement(_box.default, {
    is: "div",
    className: "ui-table__header-filter_modal-actions"
  }, /*#__PURE__*/React.createElement(_box.default, {
    is: "div",
    className: "filter-cancel",
    onClick: e => setFilterIndex(() => null)
  }, "Cancel"), /*#__PURE__*/React.createElement(_box.default, {
    is: "div",
    className: "filter-apply",
    onClick: () => {
      //  reset other states and filter 
      applyFilter();
    }
  }, "Apply Filter")), filterLabel.map((label, ind) => /*#__PURE__*/React.createElement(_box.default, {
    key: ind,
    is: "div",
    className: ""
  }, /*#__PURE__*/React.createElement(_Radio.default, {
    label: label,
    name: "filter-label",
    onClick: () => setFilterCriteria(filterLabel[ind])
  }), filterCriteria === label && /*#__PURE__*/React.createElement(_TextField.default, {
    label: "Value",
    onChange: e => handleChange(e),
    onKeyDown: e => e.keyCode === 13 && applyFilter(e)
  })))))));
};

var _default = TableHeader;
exports.default = _default;