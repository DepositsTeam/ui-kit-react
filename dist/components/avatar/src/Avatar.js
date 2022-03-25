"use strict";

require("core-js/modules/es.object.assign.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./avatar.css");

var _box = _interopRequireDefault(require("../../box"));

var _classNames = _interopRequireDefault(require("../../../utils/classNames"));

var _getInitials = _interopRequireDefault(require("../utils/getInitials"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _text = _interopRequireDefault(require("../../text"));

var _icon = _interopRequireDefault(require("../../icon"));

var _ChevronFilledDown = _interopRequireDefault(require("../../icons/ChevronFilledDown"));

var _keyGen = _interopRequireDefault(require("../../../utils/keyGen"));

const _excluded = ["avatar", "subtle", "dropdown", "size", "visibleAvatars", "stacked", "avatars", "className"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

const colorSchemes = ["cyan", "green", "orange", "red", "gray", "blue"];

const generateAvatarColorScheme = (avatar, index) => {
  return avatar.colorScheme || (index < colorSchemes.length ? colorSchemes[index] : colorSchemes[index % colorSchemes.length]);
};

const generateAvatarClassName = function generateAvatarClassName(avatar) {
  let index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return (0, _classNames.default)({
    ["background__".concat(generateAvatarColorScheme(avatar, index))]: !avatar.imgURL,
    ["status__".concat(avatar.status)]: avatar.status
  }, "ui-avatar");
};

const Avatar = _ref => {
  let {
    avatar,
    subtle,
    dropdown,
    size,
    visibleAvatars,
    stacked,
    avatars,
    className
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const wrapperClassName = (0, _classNames.default)({
    "ui-avatars__wrapper": true,
    subtle,
    ["size__".concat(size)]: true,
    padded: avatars.length & !stacked,
    stacked: avatars.length && stacked
  }, className);
  const extraAvatars = avatars && avatars.length ? avatars.length - visibleAvatars : 0;

  const avatarFactory = function avatarFactory(avatar) {
    let index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
      style: _objectSpread({}, avatar.imgURL ? {
        backgroundImage: "url(".concat(avatar.imgURL, ")")
      } : {}),
      className: generateAvatarClassName(avatar, index)
    }, !avatar.imgURL && /*#__PURE__*/_react.default.createElement(_text.default, {
      equalLineHeight: true,
      scale: size === "small" ? "overline" : "footnote"
    }, (0, _getInitials.default)(avatar.name)), avatar.status && !stacked && /*#__PURE__*/_react.default.createElement("div", {
      className: "ui-avatar__avatar-status"
    })), dropdown && !stacked && /*#__PURE__*/_react.default.createElement(_icon.default, {
      className: "ui-avatar__dropdown-icon",
      icon: _ChevronFilledDown.default
    }));
  };

  const generatedAvatars = avatars.length ? avatars.slice(0, visibleAvatars).map((avatar, index) => /*#__PURE__*/_react.default.createElement("div", {
    key: "ui-avatar__".concat((0, _keyGen.default)()),
    className: "ui-avatar__wrapper"
  }, avatarFactory(avatar, index))) : /*#__PURE__*/_react.default.createElement("div", {
    className: "ui-avatar__wrapper"
  }, avatarFactory(avatar));
  return /*#__PURE__*/_react.default.createElement(_box.default, _extends({
    is: "div",
    className: wrapperClassName
  }, props), generatedAvatars, extraAvatars > 0 && /*#__PURE__*/_react.default.createElement("div", {
    className: "ui-avatar__wrapper"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "ui-avatar background__extra"
  }, /*#__PURE__*/_react.default.createElement(_text.default, {
    scale: size === "small" ? "overline" : "footnote"
  }, "+", extraAvatars))));
};

Avatar.propTypes = {
  subtle: _propTypes.default.bool,
  stacked: _propTypes.default.bool,
  size: _propTypes.default.oneOf(["small", "medium", "large"]),
  avatar: _propTypes.default.object,
  avatars: _propTypes.default.array,
  dropdown: _propTypes.default.bool,
  visibleAvatars: _propTypes.default.number
};
Avatar.defaultProps = {
  subtle: false,
  stacked: false,
  size: "large",
  avatar: {
    name: "Eric Aprioku"
  },
  dropdown: false,
  visibleAvatars: 6,
  avatars: []
};
var _default = Avatar;
exports.default = _default;