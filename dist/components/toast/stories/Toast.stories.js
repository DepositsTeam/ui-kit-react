"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Toast = _interopRequireWildcard(require("../src/Toast"));

var _button = _interopRequireDefault(require("../../button"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: "Toast",
  component: _Toast.default
};
exports.default = _default;

const Template = props => /*#__PURE__*/_react.default.createElement(_Toast.default, props);

const Default = Template.bind({});
exports.Default = Default;
Default.count = 1;
Default.decorators = [Story => /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(Story, null), /*#__PURE__*/_react.default.createElement(_button.default, {
  onClick: () => {
    Default.count += 1;
    (0, _Toast.pushToast)({
      colorScheme: "info",
      message: "I am a tooltip no " + Default.count,
      autoClose: 3
    });
  }
}, "Trigger toast"))];