"use strict";

require("core-js/modules/es.object.assign.js");

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

require("../../../styles/textfield.css");

require("./PhoneField.css");

var _box = _interopRequireDefault(require("../../box"));

var _text = _interopRequireDefault(require("../../text"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _icon = _interopRequireDefault(require("../../icon"));

var _Error = _interopRequireDefault(require("../../icons/Error"));

var _classNames = _interopRequireDefault(require("../../../utils/classNames"));

const _excluded = ["label", "leftIcon", "size", "dropDown", "rightIcon", "errorMessage", "inputClassName", "className", "disabled"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

const PhoneField = _ref => {
  let {
    label,
    leftIcon,
    size,
    dropDown,
    rightIcon,
    errorMessage,
    inputClassName,
    className,
    disabled
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const phoneInputRef = (0, _react.useRef)();
  (0, _react.useLayoutEffect)(() => {
    const elem = phoneInputRef.current;
    console.log(phoneInputRef);
    const value = elem.value;
    elem.style.width = "calc(" + value.length + "ch + 4px)";
    const wrapper = elem.closest(".ui-text-field__wrapper");
    let offset;

    if (wrapper.classList.contains("size__small")) {
      offset = 16;
    } else if (wrapper.classList.contains("size__xlarge")) {
      offset = 20;
    } else {
      offset = 26;
    }

    elem.nextSibling.style.paddingLeft = "calc(" + (value.length <= 2 ? 2 : value.length) + "ch + " + offset + "px)";
  }, []);
  const generateInputFieldClasses = (0, _classNames.default)({
    "ui-text-field__input": true,
    "has-error": errorMessage,
    "has-left-icon": leftIcon,
    "has-right-icon": dropDown || rightIcon
  }, inputClassName);
  const wrapperClasses = (0, _classNames.default)({
    ["size__".concat(size)]: true,
    "ui-text-field__wrapper": true,
    "has-error": errorMessage,
    disabled
  }, className);

  const resizeCountryCode = elem => {
    const value = elem.target.value;
    elem.target.style.width = "calc(" + value.length + "ch + 4px)";
    const wrapper = elem.target.closest(".ui-text-field__wrapper");
    let offset;

    if (wrapper.classList.contains("size__small")) {
      offset = 16;
    } else if (wrapper.classList.contains("size__xlarge")) {
      offset = 20;
    } else {
      offset = 26;
    }

    elem.target.nextSibling.style.paddingLeft = "calc(" + (value.length <= 2 ? 2 : value.length) + "ch + " + offset + "px)";
  };

  return /*#__PURE__*/_react.default.createElement(_box.default, {
    className: wrapperClasses
  }, /*#__PURE__*/_react.default.createElement(_box.default, {
    is: "label"
  }, /*#__PURE__*/_react.default.createElement(_text.default, {
    className: "ui-text-field__label",
    scale: "subhead"
  }, label)), /*#__PURE__*/_react.default.createElement("div", {
    className: "ui-text-field__input-wrapper ui-text-field__phone-input"
  }, /*#__PURE__*/_react.default.createElement(_box.default, {
    onInput: resizeCountryCode,
    className: "ui-text-field__country-code",
    placeholder: "+1",
    ref: phoneInputRef,
    maxLength: 4,
    is: "input",
    disabled: disabled
  }), /*#__PURE__*/_react.default.createElement(_box.default, _extends({
    className: generateInputFieldClasses,
    disabled: disabled,
    is: "input"
  }, props))), errorMessage && /*#__PURE__*/_react.default.createElement("div", {
    className: "ui-text-field__error"
  }, /*#__PURE__*/_react.default.createElement(_icon.default, {
    icon: _Error.default,
    className: "ui-text-field__error-icon"
  }), /*#__PURE__*/_react.default.createElement(_text.default, {
    className: "ui-text-field__error-text",
    scale: "subhead",
    fontFace: "circularSTD"
  }, errorMessage)));
};

var _default = PhoneField;
exports.default = _default;
PhoneField.propTypes = {
  label: _propTypes.default.string,
  dropDown: _propTypes.default.bool,
  size: _propTypes.default.oneOf(["small", "medium", "large", "xlarge", "huge", "massive"])
};
PhoneField.defaultProps = {
  size: "medium"
};