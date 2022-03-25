"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Error = exports.Disabled = exports.Default = void 0;

var _react = _interopRequireDefault(require("react"));

var _PhoneField = _interopRequireDefault(require("../src/PhoneField"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: "PhoneField",
  component: _PhoneField.default
};
exports.default = _default;

const Template = args => /*#__PURE__*/_react.default.createElement(_PhoneField.default, args);

const Default = Template.bind({});
exports.Default = Default;
Default.args = {
  label: "Form Label"
};
Default.args = {
  placeholder: "Input placeholder",
  label: "Form Label"
};
const Disabled = Template.bind({});
exports.Disabled = Disabled;
Disabled.args = {
  placeholder: "Input placeholder",
  label: "Form Label",
  disabled: true
};
const Error = Template.bind({});
exports.Error = Error;
Error.args = {
  placeholder: "Input placeholder",
  label: "Form Label",
  errorMessage: "Error Message"
};