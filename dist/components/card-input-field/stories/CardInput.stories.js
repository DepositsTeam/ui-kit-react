"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Default = void 0;

var _react = _interopRequireDefault(require("react"));

var _CardInputField = _interopRequireDefault(require("../src/CardInputField"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: "Card Input Field",
  component: _CardInputField.default
};
exports.default = _default;

const Template = args => /*#__PURE__*/_react.default.createElement(_CardInputField.default, args);

const Default = Template.bind({});
exports.Default = Default;