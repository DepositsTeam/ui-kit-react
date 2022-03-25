"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Warning = exports.Search = exports.ScanCard = exports.Info = exports.Error = exports.Close = exports.ChevronFilledDown = exports.Check = exports.Card = exports.ArrowRight = exports.ArrowLeft = void 0;

var _react = _interopRequireDefault(require("react"));

var _Icon = _interopRequireDefault(require("../src/Icon"));

var _Search = _interopRequireDefault(require("../../icons/Search"));

var _ChevronFilledDown = _interopRequireDefault(require("../../icons/ChevronFilledDown"));

var _Info = _interopRequireDefault(require("../../icons/Info"));

var _Warning = _interopRequireDefault(require("../../icons/Warning"));

var _Error = _interopRequireDefault(require("../../icons/Error"));

var _Check = _interopRequireDefault(require("../../icons/Check"));

var _Close = _interopRequireDefault(require("../../icons/Close"));

var _ScanCard = _interopRequireDefault(require("../../icons/ScanCard"));

var _Card = _interopRequireDefault(require("../../icons/Card"));

var _ArrowLeft = _interopRequireDefault(require("../../icons/ArrowLeft"));

var _ArrowRight = _interopRequireDefault(require("../../icons/ArrowRight"));

const _excluded = ["children"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var _default = {
  title: "Icons",
  component: _Icon.default,
  argTypes: {
    fill: {
      control: "color"
    },
    smartColor: {
      control: "color"
    },
    stroke: {
      control: "color"
    }
  }
};
exports.default = _default;

const Template = _ref => {
  let {
    children
  } = _ref,
      args = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/_react.default.createElement(_Icon.default, args);
};

const Search = Template.bind({});
exports.Search = Search;
Search.args = {
  icon: _Search.default
};
const ChevronFilledDown = Template.bind({});
exports.ChevronFilledDown = ChevronFilledDown;
ChevronFilledDown.args = {
  icon: _ChevronFilledDown.default
};
const Info = Template.bind({});
exports.Info = Info;
Info.args = {
  icon: _Info.default
};
const Warning = Template.bind({});
exports.Warning = Warning;
Warning.args = {
  icon: _Warning.default
};
const Error = Template.bind({});
exports.Error = Error;
Error.args = {
  icon: _Error.default
};
const Check = Template.bind({});
exports.Check = Check;
Check.args = {
  icon: _Check.default
};
const Close = Template.bind({});
exports.Close = Close;
Close.args = {
  icon: _Close.default
};
const ScanCard = Template.bind({});
exports.ScanCard = ScanCard;
ScanCard.args = {
  icon: _ScanCard.default
};
const Card = Template.bind({});
exports.Card = Card;
Card.args = {
  icon: _Card.default
};
const ArrowLeft = Template.bind({});
exports.ArrowLeft = ArrowLeft;
ArrowLeft.args = {
  icon: _ArrowLeft.default
};
const ArrowRight = Template.bind({});
exports.ArrowRight = ArrowRight;
ArrowRight.args = {
  icon: _ArrowRight.default
};