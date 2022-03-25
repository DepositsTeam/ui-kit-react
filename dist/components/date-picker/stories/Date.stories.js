"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.SizeXLarge = exports.SizeSmall = exports.SizeMedium = exports.SizeMassive = exports.SizeLarge = exports.SizeHuge = exports.LeftIconAndDropDown = exports.LeftIcon = exports.Error = exports.DropDown = exports.Disabled = exports.Default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Date = _interopRequireDefault(require("../src/Date"));

var _Search = _interopRequireDefault(require("../../icons/Search"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: "Date Picker",
  component: _Date.default
};
exports.default = _default;

const Template = props => /*#__PURE__*/_react.default.createElement(_Date.default, props);

const Default = Template.bind({});
exports.Default = Default;
Default.args = {
  label: "Date Title",
  placeholder: "Input placeholder"
};
const Disabled = Template.bind({});
exports.Disabled = Disabled;
Disabled.args = {
  placeholder: "Input placeholder",
  label: "Date Title",
  disabled: true
};
const Error = Template.bind({});
exports.Error = Error;
Error.args = {
  placeholder: "Input placeholder",
  label: "Date Title",
  errorMessage: "Error Message"
};
const LeftIcon = Template.bind({});
exports.LeftIcon = LeftIcon;
LeftIcon.args = {
  placeholder: "Input placeholder",
  label: "Date Title",
  leftIcon: _Search.default
};
const DropDown = Template.bind({});
exports.DropDown = DropDown;
DropDown.args = {
  placeholder: "Input placeholder",
  label: "Date Title",
  dropDown: true
};
const LeftIconAndDropDown = Template.bind({});
exports.LeftIconAndDropDown = LeftIconAndDropDown;
LeftIconAndDropDown.args = {
  placeholder: "Input placeholder",
  label: "Date Title",
  dropDown: true,
  leftIcon: _Search.default
};
const SizeMassive = Template.bind({});
exports.SizeMassive = SizeMassive;
SizeMassive.args = {
  placeholder: "Input placeholder",
  label: "Date Title",
  dropDown: true,
  leftIcon: _Search.default,
  size: "massive"
};
const SizeHuge = Template.bind({});
exports.SizeHuge = SizeHuge;
SizeHuge.args = {
  placeholder: "Input placeholder",
  label: "Date Title",
  dropDown: true,
  leftIcon: _Search.default,
  size: "huge"
};
const SizeXLarge = Template.bind({});
exports.SizeXLarge = SizeXLarge;
SizeXLarge.args = {
  placeholder: "Input placeholder",
  label: "Date Title",
  dropDown: true,
  leftIcon: _Search.default,
  size: "xlarge"
};
const SizeLarge = Template.bind({});
exports.SizeLarge = SizeLarge;
SizeLarge.args = {
  placeholder: "Input placeholder",
  label: "Date Title",
  dropDown: true,
  leftIcon: _Search.default,
  size: "large"
};
const SizeMedium = Template.bind({});
exports.SizeMedium = SizeMedium;
SizeMedium.args = {
  placeholder: "Input placeholder",
  label: "Date Title",
  dropDown: true,
  leftIcon: _Search.default,
  size: "medium"
};
const SizeSmall = Template.bind({});
exports.SizeSmall = SizeSmall;
SizeSmall.args = {
  placeholder: "Input placeholder",
  label: "Date Title",
  dropDown: true,
  leftIcon: _Search.default,
  size: "small"
};