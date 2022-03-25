"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Subtitle2 = exports.Subtitle1 = exports.Subhead = exports.H6 = exports.H5 = exports.H4 = exports.H3 = exports.H2 = exports.H1 = void 0;

var _react = _interopRequireDefault(require("react"));

var _Heading = _interopRequireDefault(require("../src/Heading"));

const _excluded = ["children"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var _default = {
  title: "Heading",
  component: _Heading.default
};
exports.default = _default;

const Template = _ref => {
  let {
    children
  } = _ref,
      args = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/_react.default.createElement(_Heading.default, args, children);
};

const H1 = Template.bind({});
exports.H1 = H1;
H1.args = {
  children: "H1"
};
const H2 = Template.bind({});
exports.H2 = H2;
H2.args = {
  children: "H2"
};
const H3 = Template.bind({});
exports.H3 = H3;
H3.args = {
  children: "H3"
};
const H4 = Template.bind({});
exports.H4 = H4;
H4.args = {
  children: "H4"
};
const H5 = Template.bind({});
exports.H5 = H5;
H5.args = {
  children: "H5"
};
const H6 = Template.bind({});
exports.H6 = H6;
H6.args = {
  children: "H6"
};
const Subtitle1 = Template.bind({});
exports.Subtitle1 = Subtitle1;
Subtitle1.args = {
  children: "Subtitle1",
  scale: "subtitle-1"
};
const Subtitle2 = Template.bind({});
exports.Subtitle2 = Subtitle2;
Subtitle2.args = {
  children: "Subtitle2",
  scale: "subtitle-2"
};
const Subhead = Template.bind({});
exports.Subhead = Subhead;
Subhead.args = {
  children: "Subhead",
  scale: "subhead"
};