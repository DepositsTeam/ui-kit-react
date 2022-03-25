"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Default = exports.Dashed = void 0;

var _react = _interopRequireDefault(require("react"));

var _Checkbox = _interopRequireDefault(require("../src/Checkbox"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: "Checkbox",
  component: _Checkbox.default
};
exports.default = _default;

const Template = args => /*#__PURE__*/_react.default.createElement(_Checkbox.default, args);

const Default = Template.bind({});
exports.Default = Default;
Default.args = {
  label: "I agree to the terms and conditions"
};
const Dashed = Template.bind({});
exports.Dashed = Dashed;
Dashed.args = {
  label: "I agree to the terms and conditions",
  dashed: true
};