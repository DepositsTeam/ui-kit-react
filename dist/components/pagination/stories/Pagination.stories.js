"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.PaginationTwo = exports.PaginationOne = exports.ExamplePaginationStory = void 0;

var _Pagination = _interopRequireDefault(require("../src/Pagination"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: "Pagination",
  component: _Pagination.default
};
exports.default = _default;

const Template = args => /*#__PURE__*/React.createElement(_Pagination.default, args);

const ExamplePaginationStory = args => {
  return /*#__PURE__*/React.createElement(_Pagination.default, {
    totalPage: 100,
    visiblePage: 5,
    siblingCount: 1,
    onPageChange: page => {
      console.log("page changed to: ", page);
    }
  });
};

exports.ExamplePaginationStory = ExamplePaginationStory;
ExamplePaginationStory.parameters = {
  docs: {
    source: {
      type: "code"
    }
  }
};
ExamplePaginationStory.storyname = "Pagination Story Example";
const PaginationOne = Template.bind({});
exports.PaginationOne = PaginationOne;
PaginationOne.args = {
  visiblePage: 5,
  totalPage: 100,
  siblingCount: 4
};
const PaginationTwo = Template.bind({});
exports.PaginationTwo = PaginationTwo;
PaginationTwo.args = {
  visiblePage: 5,
  totalPage: 5
};