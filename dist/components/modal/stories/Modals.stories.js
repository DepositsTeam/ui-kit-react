"use strict";

require("core-js/modules/es.object.assign.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.GreyBody = exports.Default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _Modal = _interopRequireDefault(require("../src/Modal"));

var _textField = _interopRequireDefault(require("../../text-field"));

var _button = _interopRequireDefault(require("../../button"));

const _excluded = ["children"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var _default = {
  title: "Modal",
  component: _Modal.default
};
exports.default = _default;

const Template = _ref => {
  let {
    children
  } = _ref,
      args = _objectWithoutProperties(_ref, _excluded);

  const [show, setShow] = (0, _react.useState)(false);

  const closeModal = () => setShow(false);

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Modal.default, _extends({
    show: show,
    requestClose: closeModal
  }, args), children), /*#__PURE__*/_react.default.createElement(_button.default, {
    onClick: () => {
      setShow(true);
    }
  }, "Toggle Modal"));
};

const Default = Template.bind({});
exports.Default = Default;
Default.args = {
  heading: "Title",
  children: /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_textField.default, {
    width: "900px",
    label: "Form label"
  }), /*#__PURE__*/_react.default.createElement(_textField.default, {
    label: "Form label"
  }), /*#__PURE__*/_react.default.createElement(_textField.default, {
    label: "Form label"
  }), /*#__PURE__*/_react.default.createElement(_button.default, {
    responsive: true,
    size: "huge",
    marginTop: "2rem",
    colorScheme: "primary"
  }, "Primary Button"))
};
const GreyBody = Template.bind({});
exports.GreyBody = GreyBody;
GreyBody.args = {
  heading: "Title",
  greyContent: true,
  show: false,
  children: /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_textField.default, {
    label: "Form label"
  }), /*#__PURE__*/_react.default.createElement(_textField.default, {
    label: "Form label"
  }), /*#__PURE__*/_react.default.createElement(_textField.default, {
    label: "Form label"
  }), /*#__PURE__*/_react.default.createElement(_button.default, {
    marginTop: "2rem",
    responsive: true,
    size: "huge",
    colorScheme: "primary"
  }, "Primary Button"))
};
Default.decorators = [(Story, args) => /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(Story, null))];