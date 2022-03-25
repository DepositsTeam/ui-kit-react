"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Ringed = exports.Default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Radio = _interopRequireDefault(require("../src/Radio"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: "Radio",
  component: _Radio.default
};
exports.default = _default;

const Template = args => /*#__PURE__*/_react.default.createElement(_Radio.default, args);

const Default = Template.bind({});
exports.Default = Default;
Default.args = {
  label: "Checking"
};
const Ringed = Template.bind({});
exports.Ringed = Ringed;
Ringed.args = {
  label: "Checking",
  ringed: true
};