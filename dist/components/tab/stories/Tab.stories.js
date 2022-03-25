"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Tab = _interopRequireDefault(require("../src/Tab"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: "Tabs",
  component: _Tab.default
};
exports.default = _default;

const Template = args => /*#__PURE__*/_react.default.createElement(_Tab.default, args);

const Default = Template.bind({});
exports.Default = Default;
Default.args = {
  tabs: [{
    text: "Test link",
    href: "#"
  }, {
    text: "Test link",
    href: "#"
  }, {
    text: "Test link",
    href: "#"
  }, {
    text: "Test link",
    href: "#"
  }, {
    text: "Test link",
    href: "#"
  }]
};