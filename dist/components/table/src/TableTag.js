"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _box = _interopRequireDefault(require("../../box"));

var _button = _interopRequireDefault(require("../../button"));

var _Icon = _interopRequireDefault(require("../../icon/src/Icon"));

var _Close = _interopRequireDefault(require("../../icons/Close"));

var _Radio = _interopRequireDefault(require("../../radio/src/Radio"));

var _SelectField = _interopRequireDefault(require("../../select-field/src/SelectField"));

var _TextField = _interopRequireDefault(require("../../text-field/src/TextField"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const TableTag = _ref => {
  let {
    filterTag,
    closeTag,
    filterLabel,
    nullify
  } = _ref;
  const [showModal, setShowModal] = (0, _react.useState)(false);
  const [secondFilter, setSecondFilter] = (0, _react.useState)(false);
  const [joinType, setJoinType] = (0, _react.useState)(null);

  const triggerModal = () => {
    showModal && setShowModal(() => false);
    !showModal && setShowModal(() => true);
    setSecondFilter(() => false);
  };

  const applyFilter2 = e => {
    nullify();
    setShowModal(() => true);
  };

  const joinFilter = (e, type) => {
    type === 'and' && setJoinType(() => type);
    type === 'or' && setJoinType(() => type);
  };

  return /*#__PURE__*/_react.default.createElement(_box.default, {
    is: "div",
    className: "ui-table__filter-tag-container"
  }, /*#__PURE__*/_react.default.createElement(_box.default, {
    is: "div",
    className: "ui-table__filter-tag",
    onClick: triggerModal
  }, filterTag[0], /*#__PURE__*/_react.default.createElement(_box.default, {
    is: "span"
  }, " ", filterTag[1], " "), filterTag[2], /*#__PURE__*/_react.default.createElement(_box.default, {
    is: "span",
    onClick: closeTag,
    className: "close"
  }, /*#__PURE__*/_react.default.createElement(_Icon.default, {
    icon: _Close.default
  }))), showModal && /*#__PURE__*/_react.default.createElement(_box.default, {
    is: "div",
    className: "ui-table__filter-tag-field  ".concat(!showModal && 'hide', " ")
  }, /*#__PURE__*/_react.default.createElement(_box.default, {
    is: "div"
  }, /*#__PURE__*/_react.default.createElement(_SelectField.default, {
    label: "Filter",
    size: "small",
    defaultValue: filterTag[1],
    options: filterLabel,
    dropDown: true
  }), /*#__PURE__*/_react.default.createElement(_TextField.default, {
    label: "Value",
    size: "small"
  })), /*#__PURE__*/_react.default.createElement(_box.default, {
    is: "form",
    onClick: () => setSecondFilter(() => true)
  }, /*#__PURE__*/_react.default.createElement(_Radio.default, {
    label: "And",
    name: "join-type",
    onClick: e => joinFilter(e, 'and')
  }), /*#__PURE__*/_react.default.createElement(_Radio.default, {
    label: "Or",
    name: "join-type"
  })), secondFilter && /*#__PURE__*/_react.default.createElement(_box.default, {
    is: "div",
    className: "extra-filter"
  }, /*#__PURE__*/_react.default.createElement(_SelectField.default, {
    label: 'Filter',
    size: 'small',
    options: filterLabel,
    dropDown: true
  }), /*#__PURE__*/_react.default.createElement(_TextField.default, {
    label: "Value",
    size: "small"
  }), /*#__PURE__*/_react.default.createElement(_Icon.default, {
    className: "close",
    icon: _Close.default,
    onClick: () => setSecondFilter(() => null)
  })), /*#__PURE__*/_react.default.createElement(_box.default, {
    is: "div"
  }, /*#__PURE__*/_react.default.createElement(_button.default, {
    children: "Apply Filter",
    colorScheme: 'primary',
    onClick: applyFilter2
  }), /*#__PURE__*/_react.default.createElement(_button.default, {
    onClick: () => setShowModal(() => true)
  }, "Cancel"))));
};

var _default = TableTag;
exports.default = _default;