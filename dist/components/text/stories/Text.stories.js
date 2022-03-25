"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Paragraph18 = exports.Overline = exports.FootnoteCaps = exports.Footnote = exports.Body = void 0;

var _react = _interopRequireDefault(require("react"));

var _Text = _interopRequireDefault(require("../src/Text"));

const _excluded = ["children"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var _default = {
  title: "Text",
  component: _Text.default
};
exports.default = _default;

const Template = _ref => {
  let {
    children
  } = _ref,
      args = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/_react.default.createElement(_Text.default, args, children);
};

const Body = Template.bind({});
exports.Body = Body;
Body.args = {
  children: "Body"
};
const Paragraph18 = Template.bind({});
exports.Paragraph18 = Paragraph18;
Paragraph18.args = {
  children: "Paragraph18",
  scale: "p-18"
};
const Footnote = Template.bind({});
exports.Footnote = Footnote;
Footnote.args = {
  children: "Footnote",
  scale: "footnote"
};
const Overline = Template.bind({});
exports.Overline = Overline;
Overline.args = {
  children: "Overline",
  scale: "overline"
};
const FootnoteCaps = Template.bind({});
exports.FootnoteCaps = FootnoteCaps;
FootnoteCaps.args = {
  children: "Footnote All Caps",
  scale: "footnote-caps"
};
FootnoteCaps.storyName = "Footnote All Caps";