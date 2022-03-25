"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.XLarge = exports.SuccessIconXLargeButton = exports.SuccessIconMassiveButton = exports.SuccessIconHugeButton = exports.SuccessIconButton = exports.Success = exports.Small = exports.PrimaryIconButton = exports.Primary = exports.OutlineLeftIcon = exports.OutlineDropdown = exports.Outline = exports.Medium = exports.Massive = exports.Large = exports.InvisibleLeftIconDropdown = exports.InvisibleLeftIcon = exports.Invisible = exports.IconButton = exports.Huge = exports.Dropdown = exports.Default = exports.Danger = void 0;

var _react = _interopRequireDefault(require("react"));

var _Button = _interopRequireDefault(require("../src/Button"));

var _Search = _interopRequireDefault(require("../../icons/Search"));

const _excluded = ["children"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var _default = {
  title: "Button",
  component: _Button.default
};
exports.default = _default;

const Template = _ref => {
  let {
    children
  } = _ref,
      args = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/_react.default.createElement(_Button.default, args, children);
};

const Default = Template.bind({});
exports.Default = Default;
Default.args = {
  children: "Default Button"
};
const Primary = Template.bind({});
exports.Primary = Primary;
Primary.args = {
  children: "Primary Button",
  colorScheme: "primary"
}; // Primary.storyName = "Primary";

const Danger = Template.bind({});
exports.Danger = Danger;
Danger.args = {
  children: "Danger Button",
  colorScheme: "danger"
};
const Success = Template.bind({});
exports.Success = Success;
Success.args = {
  children: "Success Button",
  colorScheme: "success"
};
const Outline = Template.bind({});
exports.Outline = Outline;
Outline.args = {
  children: "Outline Button",
  colorScheme: "outline"
};
const OutlineLeftIcon = Template.bind({});
exports.OutlineLeftIcon = OutlineLeftIcon;
OutlineLeftIcon.args = {
  children: "Outline Button",
  colorScheme: "outline",
  leftIcon: _Search.default
};
const OutlineDropdown = Template.bind({});
exports.OutlineDropdown = OutlineDropdown;
OutlineDropdown.args = {
  children: "Outline Button",
  colorScheme: "outline",
  dropDown: true
};
const Invisible = Template.bind({});
exports.Invisible = Invisible;
Invisible.args = {
  children: "Invisible Button",
  colorScheme: "invisible"
};
const InvisibleLeftIcon = Template.bind({});
exports.InvisibleLeftIcon = InvisibleLeftIcon;
InvisibleLeftIcon.args = {
  children: "Invisible Button",
  colorScheme: "invisible",
  leftIcon: _Search.default
};
const InvisibleLeftIconDropdown = Template.bind({});
exports.InvisibleLeftIconDropdown = InvisibleLeftIconDropdown;
InvisibleLeftIconDropdown.args = {
  children: "Invisible Button",
  colorScheme: "invisible",
  dropDown: true
};
const Small = Template.bind({});
exports.Small = Small;
Small.args = {
  children: "Small Button",
  size: "small"
};
const Medium = Template.bind({});
exports.Medium = Medium;
Medium.args = {
  children: "Medium Button",
  size: "medium"
};
const Large = Template.bind({});
exports.Large = Large;
Large.args = {
  children: "Large Button",
  size: "large"
};
const XLarge = Template.bind({});
exports.XLarge = XLarge;
XLarge.args = {
  children: "X-Large Button",
  size: "xlarge"
};
XLarge.storyName = "X-Large";
const Huge = Template.bind({});
exports.Huge = Huge;
Huge.args = {
  children: "Huge Button",
  size: "huge"
};
const Massive = Template.bind({});
exports.Massive = Massive;
Massive.args = {
  children: "Massive Button",
  size: "massive"
};
const Dropdown = Template.bind({});
exports.Dropdown = Dropdown;
Dropdown.args = {
  children: "Dropdown Button",
  dropDown: true
};
Dropdown.storyName = "Dropdown Button";
const IconButton = Template.bind({});
exports.IconButton = IconButton;
IconButton.args = {
  children: "Icon Button",
  leftIcon: _Search.default
};
const PrimaryIconButton = Template.bind({});
exports.PrimaryIconButton = PrimaryIconButton;
PrimaryIconButton.args = {
  children: "Primary Icon Button",
  colorScheme: "primary",
  leftIcon: _Search.default
};
const SuccessIconButton = Template.bind({});
exports.SuccessIconButton = SuccessIconButton;
SuccessIconButton.args = {
  children: "Success Icon Button",
  colorScheme: "success",
  leftIcon: _Search.default
};
const SuccessIconXLargeButton = Template.bind({});
exports.SuccessIconXLargeButton = SuccessIconXLargeButton;
SuccessIconXLargeButton.args = {
  children: "Success Icon XLarge Button",
  colorScheme: "success",
  leftIcon: _Search.default,
  size: "xlarge"
};
const SuccessIconHugeButton = Template.bind({});
exports.SuccessIconHugeButton = SuccessIconHugeButton;
SuccessIconHugeButton.args = {
  children: "Success Icon Huge Button",
  colorScheme: "success",
  leftIcon: _Search.default,
  size: "huge"
};
const SuccessIconMassiveButton = Template.bind({});
exports.SuccessIconMassiveButton = SuccessIconMassiveButton;
SuccessIconMassiveButton.args = {
  children: "Success Icon Massive Button",
  colorScheme: "success",
  leftIcon: _Search.default,
  size: "massive"
};