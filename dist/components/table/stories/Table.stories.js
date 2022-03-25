"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Table = _interopRequireDefault(require("../src/Table"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: "Table",
  component: _Table.default
};
exports.default = _default;
const h = ['name', 'city', 'company', 'country', 'qty', 'state'];
const state = ['Completed', 'Pending Review', 'Rejected', 'Postponed'];
const data = [{
  [h[0]]: 'Kristen Watson',
  [h[1]]: 'Text',
  [h[2]]: 'abel',
  [h[3]]: 'Text',
  [h[4]]: '445',
  [h[5]]: state[0]
}, {
  [h[0]]: 'Kristen Watson',
  [h[1]]: 'Text',
  [h[2]]: 'Johnson & Johnso',
  [h[3]]: 'Text',
  [h[4]]: '445',
  [h[5]]: state[0]
}];

const Template = args => /*#__PURE__*/_react.default.createElement(_Table.default, args);

const Default = Template.bind({});
exports.Default = Default;
Default.args = {
  headings: h,
  data: data
};