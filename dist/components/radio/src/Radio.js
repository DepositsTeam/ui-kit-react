"use strict";

require("core-js/modules/es.object.assign.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./Radio.css");

var _box = _interopRequireDefault(require("../../box"));

var _text = _interopRequireDefault(require("../../text"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classNames = _interopRequireDefault(require("../../../utils/classNames"));

const _excluded = ["className", "ringed", "alignToTop", "label"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

const Radio = _ref => {
  let {
    className,
    ringed,
    alignToTop,
    label
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const generateRadioClassName = (0, _classNames.default)({
    ringed,
    "ui-radio__wrapper": true,
    alignToTop
  }, className);
  return /*#__PURE__*/_react.default.createElement(_box.default, {
    is: "label",
    className: generateRadioClassName
  }, /*#__PURE__*/_react.default.createElement("input", _extends({
    className: "ui-radio",
    type: "radio"
  }, props)), /*#__PURE__*/_react.default.createElement(_text.default, {
    className: "ui-radio__label-text"
  }, label));
};

var _default = Radio;
exports.default = _default;
Radio.defaultProps = {
  ringed: false,
  alignToTop: false
};
Radio.propTypes = {
  ringed: _propTypes.default.bool,
  alignToTop: _propTypes.default.bool
};