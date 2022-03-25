"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Signature = exports.Default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Modals = _interopRequireDefault(require("../src/Modals"));

var _Search = _interopRequireDefault(require("../../icons/Search"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: "Modals",
  component: _Modals.default
};
exports.default = _default;

const Template = props => /*#__PURE__*/_react.default.createElement(_Modals.default, props);

const Default = Template.bind({});
exports.Default = Default;
Default.args = {
  placeholder: "Input placeholder",
  label: "Form Label",
  formTitle: "Title",
  buttonLabel: "Primary Button"
};
const Signature = Template.bind({});
exports.Signature = Signature;
Signature.args = {
  // placeholder: "Input placeholder",
  // label: "Form Label",
  signatureTitle: "Sign Contract",
  signatureContent: ""
};