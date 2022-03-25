"use strict";

require("core-js/modules/es.object.assign.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _classNames = _interopRequireDefault(require("../../../utils/classNames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _text = _interopRequireDefault(require("../../text"));

var _box = _interopRequireDefault(require("../../box"));

require("./Pagination.css");

var _icon = _interopRequireDefault(require("../../icon"));

var _ArrowRight = _interopRequireDefault(require("../../icons/ArrowRight"));

var _ArrowLeft = _interopRequireDefault(require("../../icons/ArrowLeft"));

var _pagination = require("../../../utils/hooks/pagination.hook");

const _excluded = ["totalPage", "currentPage", "visiblePage", "className", "siblingCount", "onPageChange"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

const Pagination = _ref => {
  let {
    totalPage,
    currentPage,
    visiblePage,
    className,
    siblingCount,
    onPageChange
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const [page, setPage] = (0, _react.useState)(1);
  const paginationRange = (0, _pagination.usePagination)({
    totalPage,
    visiblePage,
    page,
    currentPage,
    siblingCount
  });

  const invokeFunction = function invokeFunction(func) {
    if (typeof func === "function") {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      return func(...args);
    }
  };

  const handleNextPage = () => {
    if (page >= totalPage) {
      return;
    } else {
      setPage(prev => prev + 1);
    }

    ;
    setPage(prev => {
      invokeFunction(onPageChange, prev);
      return prev;
    });
  };

  const handlePreviousPage = () => {
    if (page === 1) {
      return;
    } else {
      setPage(prev => prev - 1);
    }

    setPage(prev => {
      invokeFunction(onPageChange, prev);
      return prev;
    });
  };

  const handlePageChange = pageNumber => {
    if (pageNumber !== '...') {
      setPage(pageNumber);
      setPage(prev => {
        invokeFunction(onPageChange, prev);
        return prev;
      });
    }
  };

  const generatedClassName = (0, _classNames.default)({
    "ui-pagination": true
  }, className);

  const generatedPageNumberClassName = function generatedPageNumberClassName(pageNumber) {
    let index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    return (0, _classNames.default)({
      "ui-pagination__page-number__active": pageNumber === page
    }, "ui-pagination__page-number");
  };

  const generatedPageNumbers = paginationRange === null || paginationRange === void 0 ? void 0 : paginationRange.map((pageNumber, index) => /*#__PURE__*/_react.default.createElement(_box.default, {
    className: generatedPageNumberClassName(pageNumber, index),
    key: index,
    onClick: () => handlePageChange(pageNumber)
  }, /*#__PURE__*/_react.default.createElement(_text.default, {
    scale: "subhead",
    fontFace: "circularSTD"
  }, pageNumber)));
  return /*#__PURE__*/_react.default.createElement(_box.default, _extends({
    is: "button"
  }, props, {
    className: generatedClassName
  }), /*#__PURE__*/_react.default.createElement(_box.default, {
    className: "ui-pagination__control",
    onClick: handlePreviousPage
  }, /*#__PURE__*/_react.default.createElement(_icon.default, {
    className: "ui-pagination__left-arrow",
    smartColor: "currentcolor",
    icon: _ArrowLeft.default
  }), /*#__PURE__*/_react.default.createElement(_text.default, {
    className: "ui-pagination__text-previous ui-pagination__text",
    scale: "subhead",
    fontFace: "circularSTD"
  }, "Previous")), generatedPageNumbers, /*#__PURE__*/_react.default.createElement(_box.default, {
    is: "button",
    className: "ui-pagination__control",
    onClick: handleNextPage
  }, /*#__PURE__*/_react.default.createElement(_text.default, {
    className: "ui-pagination__text-next ui-pagination__text",
    scale: "subhead",
    fontFace: "circularSTD"
  }, "Next"), /*#__PURE__*/_react.default.createElement(_icon.default, {
    className: "ui-pagination__right-arrow",
    smartColor: "#0DB9E9",
    icon: _ArrowRight.default
  })));
};

var _default = Pagination;
exports.default = _default;
Pagination.propTypes = {
  visiblePage: _propTypes.default.number,

  /** The total number of pages. */
  totalPage: _propTypes.default.number,
  // currentPage: PropTypes.number,

  /** Number of always visible pages before and after the current page. */
  siblingCount: _propTypes.default.number,

  /** Callback fired when the page is changed. */
  onPageChange: _propTypes.default.func
};
Pagination.defaultProps = {
  visiblePage: 5,
  siblingCount: 1
}; // import React, {useState} from "react";
// import classNames from "../../../utils/classNames";
// import PropTypes from "prop-types";
// import Text from "../../text";
// import Box from "../../box";
// import "./Pagination.css";
// import Icon from "../../icon";
// import ArrowRight from "../../icons/ArrowRight";
// import ArrowLeft from "../../icons/ArrowLeft";
// const Pagination = ({ totalPage, currentPage, visiblePage, className, ...props }) => {
//   const [page, setPage] = useState(1);
//   const handleNextPage = () => {
//     if (page >= totalPage) {
//       return
//     }else{
//       setPage(prev => prev + 1)
//     }
//   }
//   const handlePreviousPage = () => {
//     if (page === 1) {
//       return
//     }else{
//       setPage(prev => prev - 1)
//     }
//   }
//   const totalPageArray = Array.from(
//     Array(totalPage),
//     (_, index) => index + 1
//   );
//   const generatedClassName = classNames(
//     {
//       "ui-pagination": true,
//     },
//     className
//   );
//   const generatedPageNumberClassName = (totalPageArray, index = 0) =>
//     classNames(
//       {
//         "ui-pagination__page-number__active": index + 1 === page,
//       },
//       "ui-pagination__page-number"
//     );
//   const generatedPageNumbers =
//     totalPageArray.length <= visiblePage ? (
//       totalPageArray.map((pageNumber, index) => (
//         <Box
//           className={generatedPageNumberClassName(totalPageArray, index)}
//           key={index}
//         >
//           <Text scale={"subhead"} fontFace={"circularSTD"}>
//             {pageNumber}
//           </Text>
//         </Box>
//       ))
//     ) : (
//       <>
//         {totalPageArray.slice(0, visiblePage).map((pageNumber, index) => (
//           <Box
//             className={generatedPageNumberClassName(totalPageArray, index)}
//             key={index}
//           >
//             <Text scale={"subhead"} fontFace={"circularSTD"}>
//               {pageNumber}
//             </Text>
//           </Box>
//         ))}
//         ...
//         <Box className="ui-pagination__page-number_last">
//           <Text scale={"subhead"} fontFace={"circularSTD"}>
//             {totalPageArray.slice(currentPage)}
//           </Text>
//         </Box>
//       </>
//     );
//   return (
//     <Box is="div" {...props} className={generatedClassName}>
//       <Box className={"ui-pagination__control"} onClick={handlePreviousPage}>
//         <Icon
//           className="ui-pagination__left-arrow"
//           smartColor="currentcolor"
//           icon={ArrowLeft}
//         />
//         <Text
//           className="ui-pagination__text-previous ui-pagination__text"
//           scale={"subhead"}
//           fontFace={"circularSTD"}
//         >
//           Previous
//         </Text>
//       </Box>
//       {generatedPageNumbers}
//       <Box className={"ui-pagination__control"} onClick={handleNextPage}>
//         <Text
//           className="ui-pagination__text-next ui-pagination__text"
//           scale={"subhead"}
//           fontFace={"circularSTD"}
//         >
//           Next
//         </Text>
//         <Icon
//           className="ui-pagination__right-arrow"
//           smartColor="#0DB9E9"
//           icon={ArrowRight}
//         />
//       </Box>
//     </Box>
//   );
// };
// export default Pagination;
// Pagination.propTypes = {
//   currentPage: PropTypes.number,
//   visiblePage: PropTypes.number,
//   totalPage: PropTypes.number,
// };
// Pagination.defaultProps = {
//   visiblePage: 5,
// };