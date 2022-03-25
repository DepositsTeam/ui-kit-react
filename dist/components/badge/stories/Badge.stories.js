"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.SubtleSmallYellow = exports.SubtleSmallRed = exports.SubtleSmallNeutral = exports.SubtleSmallGreen = exports.SubtleSmallCyan = exports.SubtleSmallBlue = exports.SubtleMediumYellow = exports.SubtleMediumRed = exports.SubtleMediumNeutral = exports.SubtleMediumGreen = exports.SubtleMediumCyan = exports.SubtleMediumBlue = exports.SubtleLargeYellow = exports.SubtleLargeRed = exports.SubtleLargeNeutral = exports.SubtleLargeGreen = exports.SubtleLargeCyan = exports.SubtleLargeBlue = exports.SmallYellow = exports.SmallRed = exports.SmallNeutral = exports.SmallGreen = exports.SmallCyan = exports.SmallBlue = exports.MediumYellow = exports.MediumRed = exports.MediumNeutral = exports.MediumGreen = exports.MediumCyan = exports.MediumBlue = exports.LargeYellow = exports.LargeRed = exports.LargeNeutral = exports.LargeGreen = exports.LargeCyan = exports.LargeBlue = void 0;

var _react = _interopRequireDefault(require("react"));

var _Badge = _interopRequireDefault(require("../src/Badge"));

const _excluded = ["children"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var _default = {
  title: "Badge",
  component: _Badge.default
};
exports.default = _default;

const Template = _ref => {
  let {
    children
  } = _ref,
      args = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/_react.default.createElement(_Badge.default, args, children);
};

const SmallNeutral = Template.bind({});
exports.SmallNeutral = SmallNeutral;
SmallNeutral.args = {
  children: "Neutral"
};
const SmallGreen = Template.bind({});
exports.SmallGreen = SmallGreen;
SmallGreen.args = {
  children: "Green",
  colorScheme: "green"
};
const SmallRed = Template.bind({});
exports.SmallRed = SmallRed;
SmallRed.args = {
  children: "Red",
  colorScheme: "red"
};
const SmallYellow = Template.bind({});
exports.SmallYellow = SmallYellow;
SmallYellow.args = {
  children: "Yellow",
  colorScheme: "yellow"
};
const SmallCyan = Template.bind({});
exports.SmallCyan = SmallCyan;
SmallCyan.args = {
  children: "Cyan",
  colorScheme: "cyan"
};
const SmallBlue = Template.bind({});
exports.SmallBlue = SmallBlue;
SmallBlue.args = {
  children: "Blue",
  colorScheme: "blue"
};
const MediumNeutral = Template.bind({});
exports.MediumNeutral = MediumNeutral;
MediumNeutral.args = {
  children: "Neutral",
  size: "medium"
};
const MediumGreen = Template.bind({});
exports.MediumGreen = MediumGreen;
MediumGreen.args = {
  children: "Green",
  colorScheme: "green",
  size: "medium"
};
const MediumRed = Template.bind({});
exports.MediumRed = MediumRed;
MediumRed.args = {
  children: "Red",
  colorScheme: "red",
  size: "medium"
};
const MediumYellow = Template.bind({});
exports.MediumYellow = MediumYellow;
MediumYellow.args = {
  children: "Yellow",
  colorScheme: "yellow",
  size: "medium"
};
const MediumCyan = Template.bind({});
exports.MediumCyan = MediumCyan;
MediumCyan.args = {
  children: "Cyan",
  colorScheme: "cyan",
  size: "medium"
};
const MediumBlue = Template.bind({});
exports.MediumBlue = MediumBlue;
MediumBlue.args = {
  children: "Blue",
  colorScheme: "blue",
  size: "large"
};
const LargeNeutral = Template.bind({});
exports.LargeNeutral = LargeNeutral;
LargeNeutral.args = {
  children: "Neutral",
  size: "large"
};
const LargeGreen = Template.bind({});
exports.LargeGreen = LargeGreen;
LargeGreen.args = {
  children: "Green",
  colorScheme: "green",
  size: "large"
};
const LargeRed = Template.bind({});
exports.LargeRed = LargeRed;
LargeRed.args = {
  children: "Red",
  colorScheme: "red",
  size: "large"
};
const LargeYellow = Template.bind({});
exports.LargeYellow = LargeYellow;
LargeYellow.args = {
  children: "Yellow",
  colorScheme: "yellow",
  size: "large"
};
const LargeCyan = Template.bind({});
exports.LargeCyan = LargeCyan;
LargeCyan.args = {
  children: "Cyan",
  colorScheme: "cyan",
  size: "large"
};
const LargeBlue = Template.bind({});
exports.LargeBlue = LargeBlue;
LargeBlue.args = {
  children: "Blue",
  colorScheme: "blue",
  size: "large"
};
const SubtleSmallNeutral = Template.bind({});
exports.SubtleSmallNeutral = SubtleSmallNeutral;
SubtleSmallNeutral.args = {
  children: "Neutral",
  subtle: true
};
const SubtleSmallGreen = Template.bind({});
exports.SubtleSmallGreen = SubtleSmallGreen;
SubtleSmallGreen.args = {
  children: "Green",
  subtle: true,
  colorScheme: "green"
};
const SubtleSmallRed = Template.bind({});
exports.SubtleSmallRed = SubtleSmallRed;
SubtleSmallRed.args = {
  children: "Red",
  subtle: true,
  colorScheme: "red"
};
const SubtleSmallYellow = Template.bind({});
exports.SubtleSmallYellow = SubtleSmallYellow;
SubtleSmallYellow.args = {
  children: "Yellow",
  subtle: true,
  colorScheme: "yellow"
};
const SubtleSmallCyan = Template.bind({});
exports.SubtleSmallCyan = SubtleSmallCyan;
SubtleSmallCyan.args = {
  children: "Cyan",
  subtle: true,
  colorScheme: "cyan"
};
const SubtleSmallBlue = Template.bind({});
exports.SubtleSmallBlue = SubtleSmallBlue;
SubtleSmallBlue.args = {
  children: "Blue",
  subtle: true,
  colorScheme: "blue"
};
const SubtleMediumNeutral = Template.bind({});
exports.SubtleMediumNeutral = SubtleMediumNeutral;
SubtleMediumNeutral.args = {
  children: "Neutral",
  subtle: true,
  size: "medium"
};
const SubtleMediumGreen = Template.bind({});
exports.SubtleMediumGreen = SubtleMediumGreen;
SubtleMediumGreen.args = {
  children: "Green",
  subtle: true,
  colorScheme: "green",
  size: "medium"
};
const SubtleMediumRed = Template.bind({});
exports.SubtleMediumRed = SubtleMediumRed;
SubtleMediumRed.args = {
  children: "Red",
  subtle: true,
  colorScheme: "red",
  size: "medium"
};
const SubtleMediumYellow = Template.bind({});
exports.SubtleMediumYellow = SubtleMediumYellow;
SubtleMediumYellow.args = {
  children: "Yellow",
  subtle: true,
  colorScheme: "yellow",
  size: "medium"
};
const SubtleMediumCyan = Template.bind({});
exports.SubtleMediumCyan = SubtleMediumCyan;
SubtleMediumCyan.args = {
  children: "Cyan",
  subtle: true,
  colorScheme: "cyan",
  size: "medium"
};
const SubtleMediumBlue = Template.bind({});
exports.SubtleMediumBlue = SubtleMediumBlue;
SubtleMediumBlue.args = {
  children: "Blue",
  subtle: true,
  colorScheme: "blue",
  size: "large"
};
const SubtleLargeNeutral = Template.bind({});
exports.SubtleLargeNeutral = SubtleLargeNeutral;
SubtleLargeNeutral.args = {
  children: "Neutral",
  subtle: true,
  size: "large"
};
const SubtleLargeGreen = Template.bind({});
exports.SubtleLargeGreen = SubtleLargeGreen;
SubtleLargeGreen.args = {
  children: "Green",
  subtle: true,
  colorScheme: "green",
  size: "large"
};
const SubtleLargeRed = Template.bind({});
exports.SubtleLargeRed = SubtleLargeRed;
SubtleLargeRed.args = {
  children: "Red",
  subtle: true,
  colorScheme: "red",
  size: "large"
};
const SubtleLargeYellow = Template.bind({});
exports.SubtleLargeYellow = SubtleLargeYellow;
SubtleLargeYellow.args = {
  children: "Yellow",
  subtle: true,
  colorScheme: "yellow",
  size: "large"
};
const SubtleLargeCyan = Template.bind({});
exports.SubtleLargeCyan = SubtleLargeCyan;
SubtleLargeCyan.args = {
  children: "Cyan",
  subtle: true,
  colorScheme: "cyan",
  size: "large"
};
const SubtleLargeBlue = Template.bind({});
exports.SubtleLargeBlue = SubtleLargeBlue;
SubtleLargeBlue.args = {
  children: "Blue",
  subtle: true,
  colorScheme: "blue",
  size: "large"
};