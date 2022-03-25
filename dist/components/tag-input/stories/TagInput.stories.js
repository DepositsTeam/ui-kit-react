"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.SizeXLarge = exports.SizeSmall = exports.SizeMedium = exports.SizeMassive = exports.SizeLarge = exports.SizeHuge = exports.ExampleTagInputStory = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _TagInput = _interopRequireDefault(require("../src/TagInput"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var _default = {
  title: "Tag-Input",
  component: _TagInput.default
};
exports.default = _default;

const Template = props => /*#__PURE__*/_react.default.createElement(_TagInput.default, props);

const ExampleTagInputStory = args => {
  const [input, setInput] = (0, _react.useState)(["Option one", "Option 2", "Option 3"]);
  return /*#__PURE__*/_react.default.createElement(_TagInput.default, {
    values: input,
    inputProps: {
      placeholder: "Enter new tag"
    },
    onTagAdded: (newTag, tagsArray) => {
      console.log(newTag, tagsArray);
    },
    onTagChanged: (oldTagsArray, newTagsArray) => {
      console.log(oldTagsArray, newTagsArray);
    },
    onTagDeleted: (deletedTag, tagsArray) => {
      console.log(deletedTag, tagsArray);
    },
    onTextChanged: value => {
      console.log(value);
    }
  });
};

exports.ExampleTagInputStory = ExampleTagInputStory;
ExampleTagInputStory.parameters = {
  docs: {
    source: {
      type: "code"
    }
  }
};
ExampleTagInputStory.storyname = "Tag Input Story Example";
const SizeMassive = Template.bind({});
exports.SizeMassive = SizeMassive;
SizeMassive.args = {
  label: "Form Label",
  size: "massive"
};
const SizeHuge = Template.bind({});
exports.SizeHuge = SizeHuge;
SizeHuge.args = {
  label: "Form Label",
  size: "huge"
};
const SizeXLarge = Template.bind({});
exports.SizeXLarge = SizeXLarge;
SizeXLarge.args = {
  label: "Form Label",
  size: "xlarge"
};
const SizeLarge = Template.bind({});
exports.SizeLarge = SizeLarge;
SizeLarge.args = {
  label: "Form Label",
  size: "large"
};
const SizeMedium = Template.bind({});
exports.SizeMedium = SizeMedium;
SizeMedium.args = {
  label: "Form Label",
  size: "medium"
};
const SizeSmall = Template.bind({});
exports.SizeSmall = SizeSmall;
SizeSmall.args = {
  label: "Form Label",
  size: "small"
};