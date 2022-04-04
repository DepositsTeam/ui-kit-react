"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.SizeXLarge = exports.SizeSmall = exports.SizeMedium = exports.SizeMassive = exports.SizeLarge = exports.SizeHuge = exports.ExampleTagInputStory = void 0;

var _react = _interopRequireDefault(require("react"));

var _TagInput = _interopRequireDefault(require("../src/TagInput"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: "Tag-Input",
  component: _TagInput.default
};
exports.default = _default;

const Template = props => /*#__PURE__*/_react.default.createElement(_TagInput.default, props);

const ExampleTagInputStory = args => {
  // const [input, setInput] = useState();
  const input = ["Option one", "Option 2", "Option 3"];
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