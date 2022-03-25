"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.InlineWarning = exports.InlineSuccess = exports.InlineInfo = exports.InlineError = exports.FlatWarningDescriptionButton = exports.FlatWarningDescription = exports.FlatWarningButton = exports.FlatWarning = exports.FlatSuccessDescriptionButton = exports.FlatSuccessDescription = exports.FlatSuccessButton = exports.FlatSuccess = exports.FlatInfoDescriptionButton = exports.FlatInfoDescription = exports.FlatInfoButton = exports.FlatInfo = exports.FlatErrorDescriptionButton = exports.FlatErrorDescription = exports.FlatErrorButton = exports.FlatError = exports.FlatDefaultDescriptionButton = exports.FlatDefaultDescription = exports.FlatDefaultButton = exports.FlatDefault = exports.FilledWarningDescriptionButton = exports.FilledWarningDescription = exports.FilledWarningButton = exports.FilledWarning = exports.FilledSuccessDescriptionButton = exports.FilledSuccessDescription = exports.FilledSuccessButton = exports.FilledSuccess = exports.FilledInfoDescriptionButton = exports.FilledInfoDescription = exports.FilledInfoButton = exports.FilledInfo = exports.FilledErrorDescriptionButton = exports.FilledErrorDescription = exports.FilledErrorButton = exports.FilledError = exports.FilledDefaultDescriptionButton = exports.FilledDefaultDescription = exports.FilledDefaultButton = exports.FilledDefault = void 0;

var _react = _interopRequireDefault(require("react"));

var _Alert = _interopRequireDefault(require("../src/Alert"));

const _excluded = ["children"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var _default = {
  title: "Alert",
  component: _Alert.default
};
exports.default = _default;

const Template = _ref => {
  let {
    children
  } = _ref,
      args = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/_react.default.createElement(_Alert.default, args);
};

const FlatDefault = Template.bind({});
exports.FlatDefault = FlatDefault;
const FlatSuccess = Template.bind({});
exports.FlatSuccess = FlatSuccess;
FlatSuccess.args = {
  colorScheme: "success"
};
const FlatWarning = Template.bind({});
exports.FlatWarning = FlatWarning;
FlatWarning.args = {
  colorScheme: "warning"
};
const FlatError = Template.bind({});
exports.FlatError = FlatError;
FlatError.args = {
  colorScheme: "error"
};
const FlatInfo = Template.bind({});
exports.FlatInfo = FlatInfo;
FlatInfo.args = {
  colorScheme: "info"
};
const FlatDefaultDescription = Template.bind({});
exports.FlatDefaultDescription = FlatDefaultDescription;
FlatDefaultDescription.args = {
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
};
const FlatSuccessDescription = Template.bind({});
exports.FlatSuccessDescription = FlatSuccessDescription;
FlatSuccessDescription.args = {
  colorScheme: "success",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
};
const FlatWarningDescription = Template.bind({});
exports.FlatWarningDescription = FlatWarningDescription;
FlatWarningDescription.args = {
  colorScheme: "warning",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
};
const FlatErrorDescription = Template.bind({});
exports.FlatErrorDescription = FlatErrorDescription;
FlatErrorDescription.args = {
  colorScheme: "error",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
};
const FlatInfoDescription = Template.bind({});
exports.FlatInfoDescription = FlatInfoDescription;
FlatInfoDescription.args = {
  colorScheme: "info",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
};
const FlatDefaultButton = Template.bind({});
exports.FlatDefaultButton = FlatDefaultButton;
FlatDefaultButton.args = {
  button: {
    text: "Default Button"
  }
};
const FlatSuccessButton = Template.bind({});
exports.FlatSuccessButton = FlatSuccessButton;
FlatSuccessButton.args = {
  colorScheme: "success",
  button: {
    text: "Default Button"
  }
};
const FlatWarningButton = Template.bind({});
exports.FlatWarningButton = FlatWarningButton;
FlatWarningButton.args = {
  colorScheme: "warning",
  button: {
    text: "Default Button"
  }
};
const FlatErrorButton = Template.bind({});
exports.FlatErrorButton = FlatErrorButton;
FlatErrorButton.args = {
  colorScheme: "error",
  button: {
    text: "Default Button"
  }
};
const FlatInfoButton = Template.bind({});
exports.FlatInfoButton = FlatInfoButton;
FlatInfoButton.args = {
  colorScheme: "info",
  button: {
    text: "Default Button"
  }
};
const FlatDefaultDescriptionButton = Template.bind({});
exports.FlatDefaultDescriptionButton = FlatDefaultDescriptionButton;
FlatDefaultDescriptionButton.args = {
  button: {
    text: "Default Button"
  },
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
};
const FlatSuccessDescriptionButton = Template.bind({});
exports.FlatSuccessDescriptionButton = FlatSuccessDescriptionButton;
FlatSuccessDescriptionButton.args = {
  colorScheme: "success",
  button: {
    text: "Default Button"
  },
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
};
const FlatWarningDescriptionButton = Template.bind({});
exports.FlatWarningDescriptionButton = FlatWarningDescriptionButton;
FlatWarningDescriptionButton.args = {
  colorScheme: "warning",
  button: {
    text: "Default Button"
  },
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
};
const FlatErrorDescriptionButton = Template.bind({});
exports.FlatErrorDescriptionButton = FlatErrorDescriptionButton;
FlatErrorDescriptionButton.args = {
  button: {
    text: "Default Button"
  },
  colorScheme: "error",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
};
const FlatInfoDescriptionButton = Template.bind({});
exports.FlatInfoDescriptionButton = FlatInfoDescriptionButton;
FlatInfoDescriptionButton.args = {
  button: {
    text: "Default Button"
  },
  colorScheme: "info",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
};
const FilledDefault = Template.bind({});
exports.FilledDefault = FilledDefault;
FilledDefault.args = {
  theme: "filled"
};
const FilledSuccess = Template.bind({});
exports.FilledSuccess = FilledSuccess;
FilledSuccess.args = {
  theme: "filled",
  colorScheme: "success"
};
const FilledWarning = Template.bind({});
exports.FilledWarning = FilledWarning;
FilledWarning.args = {
  theme: "filled",
  colorScheme: "warning"
};
const FilledError = Template.bind({});
exports.FilledError = FilledError;
FilledError.args = {
  theme: "filled",
  colorScheme: "error"
};
const FilledInfo = Template.bind({});
exports.FilledInfo = FilledInfo;
FilledInfo.args = {
  theme: "filled",
  colorScheme: "info"
};
const FilledDefaultDescription = Template.bind({});
exports.FilledDefaultDescription = FilledDefaultDescription;
FilledDefaultDescription.args = {
  theme: "filled",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
};
const FilledSuccessDescription = Template.bind({});
exports.FilledSuccessDescription = FilledSuccessDescription;
FilledSuccessDescription.args = {
  theme: "filled",
  colorScheme: "success",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
};
const FilledWarningDescription = Template.bind({});
exports.FilledWarningDescription = FilledWarningDescription;
FilledWarningDescription.args = {
  theme: "filled",
  colorScheme: "warning",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
};
const FilledErrorDescription = Template.bind({});
exports.FilledErrorDescription = FilledErrorDescription;
FilledErrorDescription.args = {
  theme: "filled",
  colorScheme: "error",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
};
const FilledInfoDescription = Template.bind({});
exports.FilledInfoDescription = FilledInfoDescription;
FilledInfoDescription.args = {
  theme: "filled",
  colorScheme: "info",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
};
const FilledDefaultButton = Template.bind({});
exports.FilledDefaultButton = FilledDefaultButton;
FilledDefaultButton.args = {
  theme: "filled",
  button: {
    text: "Default Button"
  }
};
const FilledSuccessButton = Template.bind({});
exports.FilledSuccessButton = FilledSuccessButton;
FilledSuccessButton.args = {
  theme: "filled",
  colorScheme: "success",
  button: {
    text: "Default Button"
  }
};
const FilledWarningButton = Template.bind({});
exports.FilledWarningButton = FilledWarningButton;
FilledWarningButton.args = {
  theme: "filled",
  colorScheme: "warning",
  button: {
    text: "Default Button"
  }
};
const FilledErrorButton = Template.bind({});
exports.FilledErrorButton = FilledErrorButton;
FilledErrorButton.args = {
  theme: "filled",
  colorScheme: "error",
  button: {
    text: "Default Button"
  }
};
const FilledInfoButton = Template.bind({});
exports.FilledInfoButton = FilledInfoButton;
FilledInfoButton.args = {
  theme: "filled",
  colorScheme: "info",
  button: {
    text: "Default Button"
  }
};
const FilledDefaultDescriptionButton = Template.bind({});
exports.FilledDefaultDescriptionButton = FilledDefaultDescriptionButton;
FilledDefaultDescriptionButton.args = {
  theme: "filled",
  button: {
    text: "Default Button"
  },
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
};
const FilledSuccessDescriptionButton = Template.bind({});
exports.FilledSuccessDescriptionButton = FilledSuccessDescriptionButton;
FilledSuccessDescriptionButton.args = {
  theme: "filled",
  colorScheme: "success",
  button: {
    text: "Default Button"
  },
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
};
const FilledWarningDescriptionButton = Template.bind({});
exports.FilledWarningDescriptionButton = FilledWarningDescriptionButton;
FilledWarningDescriptionButton.args = {
  theme: "filled",
  colorScheme: "warning",
  button: {
    text: "Default Button"
  },
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
};
const FilledErrorDescriptionButton = Template.bind({});
exports.FilledErrorDescriptionButton = FilledErrorDescriptionButton;
FilledErrorDescriptionButton.args = {
  theme: "filled",
  button: {
    text: "Default Button"
  },
  colorScheme: "error",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
};
const FilledInfoDescriptionButton = Template.bind({});
exports.FilledInfoDescriptionButton = FilledInfoDescriptionButton;
FilledInfoDescriptionButton.args = {
  theme: "filled",
  button: {
    text: "Default Button"
  },
  colorScheme: "info",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
};
const InlineSuccess = Template.bind({});
exports.InlineSuccess = InlineSuccess;
InlineSuccess.args = {
  colorScheme: "success",
  theme: "inline"
};
const InlineWarning = Template.bind({});
exports.InlineWarning = InlineWarning;
InlineWarning.args = {
  colorScheme: "warning",
  theme: "inline"
};
const InlineError = Template.bind({});
exports.InlineError = InlineError;
InlineError.args = {
  colorScheme: "error",
  theme: "inline"
};
const InlineInfo = Template.bind({});
exports.InlineInfo = InlineInfo;
InlineInfo.args = {
  colorScheme: "info",
  theme: "inline"
};