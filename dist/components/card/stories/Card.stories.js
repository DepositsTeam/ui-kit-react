"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.RadioIcon = exports.Radio = exports.NoDescRadioIcon = exports.NoDescRadio = exports.NoDescIcon = exports.NoDescCheckIcon = exports.NoDescCheckBox = exports.NoDesc = exports.Icon = exports.Default = exports.CheckIcon = exports.CheckBox = void 0;

var _react = _interopRequireDefault(require("react"));

var _Card = _interopRequireDefault(require("../src/Card"));

const _excluded = ["children"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var _default = {
  title: "Card",
  component: _Card.default
};
exports.default = _default;

const Template = _ref => {
  let {
    children
  } = _ref,
      args = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/_react.default.createElement(_Card.default, args, " ", children, " ");
};

const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu ac consectetur mauris in ipsum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu ac tr yi ng sth consectetur mauris in ipsum.';
const Default = Template.bind({});
exports.Default = Default;
Default.args = {
  children: text
};
const Icon = Template.bind({});
exports.Icon = Icon;
Icon.args = {
  children: text,
  icon: true
};
Icon.storyName = "Icon";
const Radio = Template.bind({});
exports.Radio = Radio;
Radio.args = {
  children: text,
  radio: true
};
Radio.storyName = "Radio";
const CheckBox = Template.bind({});
exports.CheckBox = CheckBox;
CheckBox.args = {
  children: text,
  checkbox: true
};
CheckBox.storyName = "Checkbox";
const RadioIcon = Template.bind({});
exports.RadioIcon = RadioIcon;
RadioIcon.args = {
  children: text,
  radio: true,
  icon: true
};
RadioIcon.storyName = "Radio & Icon";
const CheckIcon = Template.bind({});
exports.CheckIcon = CheckIcon;
CheckIcon.args = {
  children: text,
  checkbox: true,
  icon: true
};
CheckIcon.storyName = "Checkbox & Icon";
const NoDesc = Template.bind({});
exports.NoDesc = NoDesc;
NoDesc.storyName = "No Description";
const NoDescIcon = Template.bind({});
exports.NoDescIcon = NoDescIcon;
NoDescIcon.args = {
  icon: true
};
NoDescIcon.storyName = "Icon - No description";
const NoDescRadio = Template.bind({});
exports.NoDescRadio = NoDescRadio;
NoDescRadio.args = {
  radio: true
};
NoDescRadio.storyName = "Radio - No description";
const NoDescCheckBox = Template.bind({});
exports.NoDescCheckBox = NoDescCheckBox;
NoDescCheckBox.args = {
  checkbox: true
};
NoDescCheckBox.storyName = "Checkbox - No description";
const NoDescRadioIcon = Template.bind({});
exports.NoDescRadioIcon = NoDescRadioIcon;
NoDescRadioIcon.args = {
  radio: true,
  icon: true
};
NoDescRadioIcon.storyName = "Radio & Icon - No description";
const NoDescCheckIcon = Template.bind({});
exports.NoDescCheckIcon = NoDescCheckIcon;
NoDescCheckIcon.args = {
  checkbox: true,
  icon: true
};
NoDescCheckIcon.storyName = "Checkbox & Icon - No description";