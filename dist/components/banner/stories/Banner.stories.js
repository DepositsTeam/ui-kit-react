"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.WarningRemovable = exports.Warning = exports.SuccessRemovable = exports.Success = exports.InfoRemovable = exports.Info = exports.ErrorRemovable = exports.Error = exports.DefaultRemovable = exports.Default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Banner = _interopRequireDefault(require("../src/Banner"));

const _excluded = ["children"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var _default = {
  title: "Banner",
  component: _Banner.default
};
exports.default = _default;

const Template = _ref => {
  let {
    children
  } = _ref,
      args = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/_react.default.createElement(_Banner.default, args, children);
};

const Default = Template.bind({});
exports.Default = Default;
Default.args = {
  title: "Title",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la."
};
const Success = Template.bind({});
exports.Success = Success;
Success.args = {
  title: "Title",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",
  colorScheme: "success"
};
const Error = Template.bind({});
exports.Error = Error;
Error.args = {
  title: "Title",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",
  colorScheme: "error"
};
const Warning = Template.bind({});
exports.Warning = Warning;
Warning.args = {
  title: "Title",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",
  colorScheme: "warning"
};
const Info = Template.bind({});
exports.Info = Info;
Info.args = {
  title: "Title",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",
  colorScheme: "info"
};
const DefaultRemovable = Template.bind({});
exports.DefaultRemovable = DefaultRemovable;
DefaultRemovable.args = {
  title: "Title",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",
  removable: true
};
const SuccessRemovable = Template.bind({});
exports.SuccessRemovable = SuccessRemovable;
SuccessRemovable.args = {
  title: "Title",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",
  colorScheme: "success",
  removable: true
};
const ErrorRemovable = Template.bind({});
exports.ErrorRemovable = ErrorRemovable;
ErrorRemovable.args = {
  title: "Title",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",
  colorScheme: "error",
  removable: true
};
const WarningRemovable = Template.bind({});
exports.WarningRemovable = WarningRemovable;
WarningRemovable.args = {
  title: "Title",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",
  colorScheme: "warning",
  removable: true
};
const InfoRemovable = Template.bind({});
exports.InfoRemovable = InfoRemovable;
InfoRemovable.args = {
  title: "Title",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",
  colorScheme: "info",
  removable: true
};