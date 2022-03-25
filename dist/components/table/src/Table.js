"use strict";

require("core-js/modules/es.object.assign.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.string.trim.js");

require("core-js/modules/es.array.sort.js");

require("core-js/modules/es.string.starts-with.js");

require("core-js/modules/es.string.ends-with.js");

require("core-js/modules/es.string.includes.js");

var _react = _interopRequireWildcard(require("react"));

require("./Table.css");

var _box = _interopRequireDefault(require("../../box"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classNames = _interopRequireDefault(require("../../../utils/classNames"));

var _TableContent = _interopRequireDefault(require("./TableContent"));

var _TableHeader = _interopRequireDefault(require("./TableHeader"));

var _TableTag = _interopRequireDefault(require("./TableTag"));

const _excluded = ["data", "headings", "columns", "className"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

const Table = _ref => {
  let {
    data,
    headings,
    columns,
    className
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  // const cols = Object.entries(dataCopy[0]).length
  const switchClassName = (0, _classNames.default)({
    "ui-table__wrapper": true // "ui-table__header": true,
    // "ui-table__content": true,

  }, className);
  const [sortIndex, setSortIndex] = (0, _react.useState)(null);
  const [filterIndex, setFilterIndex] = (0, _react.useState)(null);
  const [filterText, setFilterText] = (0, _react.useState)('');
  const [dataCopy, setDataCopy] = (0, _react.useState)(data);
  const [filterCriteria, setFilterCriteria] = (0, _react.useState)('Is');
  const filterLabel = ['Is', 'Is not', 'Is empty', 'Is not empty', 'Is equal to', 'Is not equal to', 'Begins with', 'Ends with', 'Contains', 'Does not contain'];
  const [filterTag, setFilterTag] = (0, _react.useState)([]); // set Filter text to input value

  const handleChange = (e, ind) => setFilterText(() => e.target.value.trim().toLowerCase()); // reset all states


  const nullify = () => {
    setFilterIndex(() => null);
    setSortIndex(() => null);
    setFilterText(() => '');
  }; // trigger the sort modal


  const sortModalTrigger = (idx, e) => {
    setFilterIndex(() => null);
    setSortIndex(() => idx);
    sortIndex !== null && setSortIndex(() => null);
  }; // trigger the filter modal


  const filterModalTrigger = (idx, e) => {
    setFilterIndex(() => idx);
    filterIndex !== null && setFilterIndex(() => null);
  }; // get all values of the selected column of array of objects


  const getArr = data => Object.values(data)[sortIndex]; // sort column ascending or descending 


  const handleSort = (idx, type) => {
    nullify();
    setDataCopy(() => [...data].sort((a, b) => {
      let x = Object.values(a)[idx];
      let y = Object.values(b)[idx];

      if (type === 'asc') {
        if (x < y) {
          return -1;
        }

        if (y < x) {
          return 1;
        }
      }

      if (type === 'desc') {
        if (x > y) {
          return -1;
        }

        if (y > x) {
          return 1;
        }
      }

      return 0;
    }));
  }; // // filter function running conditionally
  // const filte = (num) => {
  //     setDataCopy(() => data.filter(item => {
  //         if (num === 0) return getArr(item).toLowerCase() === filterText.toLowerCase().trim();
  //         if (num === 1) return getArr(item).toLowerCase() !== filterText.toLowerCase().trim()
  //         if (num === 2) return getArr(item) === ''
  //         if (num === 3) return getArr(item) !== ''
  //         if (num === 4) return getArr(item) === filterText
  //         if (num === 5) return getArr(item) !== filterText
  //         if (num === 6) return getArr(item).toLowerCase().startsWith(filterText.toLowerCase().trim())
  //         if (num === 7) return getArr(item).toLowerCase().endsWith(filterText.toLowerCase().trim())
  //         if (num === 9) return !getArr(item).toLowerCase().includes(filterText.toLowerCase().trim())
  //         return getArr(item).toLowerCase().includes(filterText.toLowerCase().trim())
  //     }))
  // }


  const applyFilter = e => {
    filter[filterCriteria]();

    if (filterText && filterText !== '' && filterText !== ' ') {
      setFilterTag(() => [headings[sortIndex], filterCriteria, filterText]);
    }

    nullify();
  }; // main object of filter functions


  const filter = {
    [filterLabel[0]]: () => setDataCopy(() => data.filter(item => getArr(item).toLowerCase() === filterText.toLowerCase().trim())),
    [filterLabel[1]]: () => setDataCopy(() => data.filter(item => getArr(item).toLowerCase() !== filterText.toLowerCase().trim())),
    [filterLabel[2]]: () => setDataCopy(() => data.filter(item => getArr(item) === '')),
    [filterLabel[3]]: () => setDataCopy(() => data.filter(item => getArr(item) !== '')),
    [filterLabel[4]]: () => setDataCopy(() => data.filter(item => getArr(item) === filterText)),
    [filterLabel[5]]: () => setDataCopy(() => data.filter(item => getArr(item) !== filterText)),
    [filterLabel[6]]: () => setDataCopy(() => data.filter(item => getArr(item).toLowerCase().startsWith(filterText.toLowerCase().trim()))),
    [filterLabel[7]]: () => setDataCopy(() => data.filter(item => getArr(item).toLowerCase().endsWith(filterText.toLowerCase().trim()))),
    [filterLabel[8]]: () => setDataCopy(() => data.filter(item => getArr(item).toLowerCase().includes(filterText.toLowerCase().trim()))),
    [filterLabel[9]]: () => setDataCopy(() => data.filter(item => !getArr(item).toLowerCase().includes(filterText.toLowerCase().trim())))
  };

  const closeTag = () => {
    setFilterTag([]);
    setDataCopy(() => data);
    nullify();
  };

  return /*#__PURE__*/_react.default.createElement(_box.default, _extends({
    is: "div",
    className: switchClassName
  }, props), filterTag.length !== 0 && /*#__PURE__*/_react.default.createElement(_TableTag.default, {
    filterTag: filterTag,
    closeTag: closeTag
  }), /*#__PURE__*/_react.default.createElement(_TableHeader.default, {
    headings: headings,
    sortIndex: sortIndex,
    setSortIndex: setSortIndex,
    sortModalTrigger: sortModalTrigger,
    filterModalTrigger: filterModalTrigger,
    handleSort: handleSort,
    filterIndex: filterIndex,
    setFilterIndex: setFilterIndex,
    handleChange: handleChange,
    filterText: filterText,
    applyFilter: applyFilter,
    nullify: nullify,
    filterCriteria: filterCriteria,
    setFilterCriteria: setFilterCriteria,
    filterLabel: filterLabel
  }), /*#__PURE__*/_react.default.createElement(_TableContent.default, {
    data: dataCopy,
    nullify: nullify
  }));
};

var _default = Table;
exports.default = _default;
Table.propTypes = {
  headings: _propTypes.default.array,
  data: _propTypes.default.array,
  cols: _propTypes.default.number
};
Table.defaultProps = {
  columns: 6
};