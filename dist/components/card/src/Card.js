"use strict";

require("core-js/modules/es.object.assign.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

require("./Card.css");

var _box = _interopRequireDefault(require("../../box"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classNames = _interopRequireDefault(require("../../../utils/classNames"));

var _icon = _interopRequireDefault(require("../../icon"));

var _radio = _interopRequireDefault(require("../../radio"));

var _checkbox = _interopRequireDefault(require("../../checkbox"));

var _Card2 = _interopRequireDefault(require("../../icons/Card"));

const _excluded = ["is", "title", "desc", "children", "radio", "checkbox", "icon", "select", "className"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

const Card = _ref => {
  let {
    is,
    title,
    desc,
    children,
    radio,
    checkbox,
    icon,
    select,
    className
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const [selected, setSelected] = (0, _react.useState)(select);
  const generatedClassName = (0, _classNames.default)({
    "ui-card": true,
    ["state__selected"]: selected
  }, className);
  return (
    /*#__PURE__*/
    // <Box is={is} >
    _react.default.createElement(_box.default, {
      is: "label",
      className: generatedClassName
    }, radio && /*#__PURE__*/_react.default.createElement(_radio.default, _extends({
      is: "input",
      className: "ui-radio",
      type: "radio",
      onClick: e => {
        setSelected(() => e.target.checked);
      }
    }, props)) || checkbox && /*#__PURE__*/_react.default.createElement(_checkbox.default, _extends({
      is: "input",
      className: "ui-checkbox",
      type: "checkbox",
      onClick: e => {
        setSelected(() => e.target.checked);
      }
    }, props)), /*#__PURE__*/_react.default.createElement("div", {
      className: "ui-card__content"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "ui-card__title"
    }, title), (desc || children) && /*#__PURE__*/_react.default.createElement("div", {
      className: "ui-card__card-text"
    }, desc || children)), icon && /*#__PURE__*/_react.default.createElement(_icon.default, {
      className: "ui-card__icon",
      icon: _Card2.default
    })) // </Box>

  );
};

Card.propTypes = {
  title: _propTypes.default.string,
  icon: _propTypes.default.bool,
  selected: _propTypes.default.bool,
  radio: _propTypes.default.bool,
  checkbox: _propTypes.default.bool
};
Card.defaultProps = {
  title: "Title",
  icon: false,
  selected: false,
  radio: false,
  checkbox: false // icon: ChevronFilledDown

};
var _default = Card;
exports.default = _default;