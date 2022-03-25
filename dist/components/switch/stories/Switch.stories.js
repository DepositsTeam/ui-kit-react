"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Switch = _interopRequireDefault(require("../src/Switch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: "Switch",
  component: _Switch.default
};
exports.default = _default;

const Template = args => /*#__PURE__*/_react.default.createElement(_Switch.default, args);

const Default = Template.bind({});
exports.Default = Default;
Default.args = {
  label: "I agree to the terms and conditions"
};