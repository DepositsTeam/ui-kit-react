"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Error = exports.Disabled = exports.Default = void 0;

var _TextArea = _interopRequireDefault(require("../src/TextArea"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: "Text-Area",
  component: _TextArea.default
};
exports.default = _default;

const Template = props => /*#__PURE__*/React.createElement(_TextArea.default, props);

const Default = Template.bind({});
exports.Default = Default;
Default.args = {
  label: "Form Label",
  placeholder: "Input placeholder"
};
const Disabled = Template.bind({});
exports.Disabled = Disabled;
Disabled.args = {
  label: "Form Label",
  placeholder: "Input placeholder",
  disabled: true
};
const Error = Template.bind({});
exports.Error = Error;
Error.args = {
  label: "Form Label",
  placeholder: "Input placeholder",
  errorMessage: "Error message"
};