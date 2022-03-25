"use strict";

require("core-js/modules/es.object.assign.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.string.trim.js");

require("core-js/modules/es.string.includes.js");

var _react = _interopRequireWildcard(require("react"));

var _box = _interopRequireDefault(require("../../box"));

var _text = _interopRequireDefault(require("../../text"));

require("./taginput.css");

var _classNames = _interopRequireDefault(require("../../../utils/classNames"));

var _icon = _interopRequireDefault(require("../../icon"));

var _Close = _interopRequireDefault(require("../../icons/Close"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _keyGen = _interopRequireDefault(require("../../../utils/keyGen"));

const _excluded = ["label", "className", "size", "tagDelimiterKey", "values", "onTagAdded", "onTagDeleted", "inputProps", "tagProps", "tagClassname", "onTextChanged", "onTagChanged"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

const TagInput = _ref => {
  let {
    label,
    className,
    size,
    tagDelimiterKey,
    values,
    onTagAdded,
    onTagDeleted,
    inputProps,
    tagProps = {},
    tagClassname,
    onTextChanged,
    onTagChanged
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const [input, setInput] = (0, _react.useState)("");
  const [inputTags, setInputTags] = (0, _react.useState)(values || []);
  const [isKeyReleased, setIsKeyReleased] = (0, _react.useState)(false);

  const invokeFunction = function invokeFunction(func) {
    if (typeof func === "function") {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      return func(...args);
    }
  };

  const _tagDelimiterKey = {
    space: " ",
    enter: "Enter",
    comma: ","
  };
  const generatedTagInputClasses = (0, _classNames.default)({
    "ui-tag-input__input": true
  });
  const wrapperClasses = (0, _classNames.default)(["size__".concat(size), "ui-tag-input__wrapper"], className);

  const handleTextChange = event => {
    setInput(event.target.value);
    invokeFunction(onTextChanged, event.target.value);
  };

  const handleKeyDown = event => {
    const newTag = input.trim();
    let oldTagArray = inputTags;
    const key = _tagDelimiterKey[tagDelimiterKey];

    if (event.key === key && newTag.length && !inputTags.includes(newTag)) {
      event.preventDefault();
      setInputTags(prev => [...prev, newTag]);
      setInputTags(state => {
        invokeFunction(onTagAdded, newTag, state);
        invokeFunction(onTagChanged, oldTagArray, state);
        return state;
      });
      setInput("");
    }

    if (event.key === "Backspace" && !input.length && inputTags.length && isKeyReleased) {
      event.preventDefault();
      const tagsArray = [...inputTags];
      const deletedTag = tagsArray.pop();
      setInputTags(tagsArray);
      setInput(deletedTag);
      setInputTags(state => {
        invokeFunction(onTagDeleted, deletedTag, state);
        invokeFunction(onTagChanged, oldTagArray, state);
        return state;
      });
    }

    setIsKeyReleased(false);
  };

  const handleDeleteTag = index => {
    const deletedTag = inputTags[index];
    let oldTagArray = inputTags;
    setInputTags(prev => prev.filter((tag, i) => i !== index));
    setInputTags(state => {
      invokeFunction(onTagDeleted, deletedTag, state);
      invokeFunction(onTagChanged, oldTagArray, state);
      return state;
    });
  };

  return /*#__PURE__*/_react.default.createElement(_box.default, {
    className: wrapperClasses
  }, /*#__PURE__*/_react.default.createElement(_box.default, {
    is: "label"
  }, /*#__PURE__*/_react.default.createElement(_text.default, {
    className: "ui-tag-input__label",
    scale: "subhead"
  }, label)), /*#__PURE__*/_react.default.createElement("div", {
    className: "ui-tag-input__input-wrapper"
  }, inputTags.map((tag, index) => /*#__PURE__*/_react.default.createElement(_box.default, _extends({
    is: "div",
    className: "ui-tag-input__input-tag ".concat(tagClassname),
    key: "ui-tag-input".concat((0, _keyGen.default)())
  }, tagProps), /*#__PURE__*/_react.default.createElement(_text.default, {
    className: "ui-tag-input__input-tag-text",
    scale: "subhead",
    fontFace: "circularSTD"
  }, tag), /*#__PURE__*/_react.default.createElement(_icon.default, {
    icon: _Close.default,
    onClick: () => handleDeleteTag(index),
    className: "ui-tag-input__close-icon"
  }))), /*#__PURE__*/_react.default.createElement(_box.default, _extends({
    className: generatedTagInputClasses,
    is: "input"
  }, props, inputProps, {
    onKeyDown: handleKeyDown,
    onKeyUp: () => setIsKeyReleased(true),
    value: input,
    onChange: handleTextChange,
    autoFocus: true,
    onFocus: e => e.currentTarget.select()
  }))));
};

var _default = TagInput;
exports.default = _default;
TagInput.propTypes = {
  /** The label used above the input element. */
  label: _propTypes.default.string,
  size: _propTypes.default.oneOf(["small", "medium", "large", "xlarge", "huge", "massive"]),

  /** Each value is rendered inside a tag. */
  values: _propTypes.default.array,

  /** Key to press in order to submit a new tag while typing. */
  tagDelimiterKey: _propTypes.default.oneOf(["enter", "comma", "space"]),

  /** Function to be called when a new tag is added. it contains the added tag and all the tags currently available as its arguments*/
  onTagAdded: _propTypes.default.func,

  /** Function to be called when a tag is deleted. it contains the deleted tag and all the tags currently available as its arguments*/
  onTagDeleted: _propTypes.default.func,
  onTextChanged: _propTypes.default.func,
  onTagChanged: _propTypes.default.func,

  /** Props to pass to the input component. */
  inputProps: _propTypes.default.object,

  /** Props to change the css properties of the tag component*/
  tagProps: _propTypes.default.object,

  /** The class name to apply to the container of the tag component. */
  tagClassname: _propTypes.default.string
};
TagInput.defaultProps = {
  label: "Form Label",
  size: "medium",
  values: ["Option 1", "Option 2", "Option 3"],
  tagDelimiterKey: "enter",
  inputProps: {
    placeholder: "Add tag"
  },
  onTagDelete: index => {
    console.log(index);
  }
};