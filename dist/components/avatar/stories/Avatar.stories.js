"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.SubtleSmallAvatars = exports.SubtleRed = exports.SubtleOrange = exports.SubtleMediumAvatars = exports.SubtleLargeAvatars = exports.SubtleGreen = exports.SubtleGray = exports.SubtleCyan = exports.SubtleBlue = exports.Red = exports.Orange = exports.ImageAvatarStatus = exports.ImageAvatar = exports.Green = exports.Gray = exports.CyanStatusOrange = exports.CyanStatusGreen = exports.CyanStatusGray = exports.Cyan = exports.Blue = void 0;

var _react = _interopRequireDefault(require("react"));

var _Avatar = _interopRequireDefault(require("../src/Avatar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: "Avatar",
  component: _Avatar.default
};
exports.default = _default;

const Template = args => /*#__PURE__*/_react.default.createElement(_Avatar.default, args);

const SubtleLargeAvatars = Template.bind({});
exports.SubtleLargeAvatars = SubtleLargeAvatars;
SubtleLargeAvatars.args = {
  subtle: true,
  avatars: [{
    status: "green",
    name: "Charles Babbage"
  }, {
    status: "green",
    name: "Charles Babbage"
  }, {
    status: "green",
    name: "Charles Babbage"
  }, {
    status: "green",
    name: "Charles Babbage"
  }, {
    status: "green",
    name: "Charles Babbage"
  }, {
    status: "green",
    name: "Charles Babbage"
  }, {
    status: "green",
    name: "Charles Babbage",
    imgURL: "https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/242107088_4173627519426881_5983806533700593233_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=fCYdyTSZ2O0AX-cL--J&_nc_ht=scontent-los2-1.xx&oh=00_AT_B0QyvGgFgYNygC16ovQYHLjLMfcpLc_gY6k_xS_rrvA&oe=61F72E6C"
  }]
};
const SubtleMediumAvatars = Template.bind({});
exports.SubtleMediumAvatars = SubtleMediumAvatars;
SubtleMediumAvatars.args = {
  subtle: true,
  size: "medium",
  avatars: [{
    status: "green",
    name: "Charles Babbage"
  }, {
    status: "green",
    name: "Charles Babbage"
  }, {
    status: "green",
    name: "Charles Babbage"
  }, {
    status: "green",
    name: "Charles Babbage"
  }, {
    status: "green",
    name: "Charles Babbage"
  }, {
    status: "green",
    name: "Charles Babbage"
  }, {
    status: "green",
    name: "Charles Babbage",
    imgURL: "https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/242107088_4173627519426881_5983806533700593233_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=fCYdyTSZ2O0AX-cL--J&_nc_ht=scontent-los2-1.xx&oh=00_AT_B0QyvGgFgYNygC16ovQYHLjLMfcpLc_gY6k_xS_rrvA&oe=61F72E6C"
  }]
};
const SubtleSmallAvatars = Template.bind({});
exports.SubtleSmallAvatars = SubtleSmallAvatars;
SubtleSmallAvatars.args = {
  subtle: true,
  size: "small",
  avatars: [{
    status: "green",
    name: "Charles Babbage"
  }, {
    status: "green",
    name: "Charles Babbage"
  }, {
    status: "green",
    name: "Charles Babbage"
  }, {
    status: "green",
    name: "Charles Babbage"
  }, {
    status: "green",
    name: "Charles Babbage"
  }, {
    status: "green",
    name: "Charles Babbage"
  }, {
    status: "green",
    name: "Charles Babbage",
    imgURL: "https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/242107088_4173627519426881_5983806533700593233_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=fCYdyTSZ2O0AX-cL--J&_nc_ht=scontent-los2-1.xx&oh=00_AT_B0QyvGgFgYNygC16ovQYHLjLMfcpLc_gY6k_xS_rrvA&oe=61F72E6C"
  }]
};
const SubtleCyan = Template.bind({});
exports.SubtleCyan = SubtleCyan;
SubtleCyan.args = {
  subtle: true,
  avatar: {
    colorScheme: "cyan",
    name: "Charles Ukpe"
  }
};
SubtleCyan.storyName = "Subtle Cyan";
const SubtleGreen = Template.bind({});
exports.SubtleGreen = SubtleGreen;
SubtleGreen.args = {
  subtle: true,
  avatar: {
    colorScheme: "green",
    name: "Steven Taliban"
  }
};
SubtleGreen.storyName = "Subtle Green";
const SubtleOrange = Template.bind({});
exports.SubtleOrange = SubtleOrange;
SubtleOrange.args = {
  subtle: true,
  avatar: {
    colorScheme: "orange",
    name: "John Doe"
  }
};
SubtleOrange.storyName = "Subtle Orange";
const SubtleRed = Template.bind({});
exports.SubtleRed = SubtleRed;
SubtleRed.args = {
  subtle: true,
  avatar: {
    colorScheme: "red",
    name: "Cynthia Karen"
  }
};
SubtleRed.storyName = "Subtle Red";
const SubtleGray = Template.bind({});
exports.SubtleGray = SubtleGray;
SubtleGray.args = {
  subtle: true,
  avatar: {
    colorScheme: "gray",
    name: "Yasmine Belle Deuce"
  }
};
SubtleGray.storyName = "Subtle Gray";
const SubtleBlue = Template.bind({});
exports.SubtleBlue = SubtleBlue;
SubtleBlue.args = {
  subtle: true,
  avatar: {
    colorScheme: "blue",
    name: "Steven Taliban"
  }
};
SubtleBlue.storyName = "Subtle Blue";
const Cyan = Template.bind({});
exports.Cyan = Cyan;
Cyan.args = {
  avatar: {
    colorScheme: "cyan",
    name: "Charles Ukpe"
  }
};
Cyan.storyName = "Solid Cyan";
const Green = Template.bind({});
exports.Green = Green;
Green.args = {
  avatar: {
    colorScheme: "green",
    name: "Steven Taliban"
  }
};
Green.storyName = "Solid Green";
const Orange = Template.bind({});
exports.Orange = Orange;
Orange.args = {
  avatar: {
    colorScheme: "orange",
    name: "John Doe"
  }
};
Orange.storyName = "Solid Orange";
const Red = Template.bind({});
exports.Red = Red;
Red.args = {
  avatar: {
    colorScheme: "orange",
    name: "Cynthia Karen"
  }
};
Red.storyName = "Solid Red";
const Gray = Template.bind({});
exports.Gray = Gray;
Gray.args = {
  avatar: {
    colorScheme: "gray",
    name: "Yasmine Belle Deuce"
  }
};
Gray.storyName = "Solid Gray";
const Blue = Template.bind({});
exports.Blue = Blue;
Blue.args = {
  avatar: {
    colorScheme: "blue",
    name: "Steven Taliban"
  }
};
Blue.storyName = "Solid Blue";
const CyanStatusGreen = Template.bind({});
exports.CyanStatusGreen = CyanStatusGreen;
CyanStatusGreen.args = {
  avatar: {
    colorScheme: "cyan",
    name: "Charles Ukpe",
    status: "green"
  }
};
const CyanStatusOrange = Template.bind({});
exports.CyanStatusOrange = CyanStatusOrange;
CyanStatusOrange.args = {
  avatar: {
    colorScheme: "cyan",
    name: "Charles Ukpe",
    status: "orange"
  }
};
const CyanStatusGray = Template.bind({});
exports.CyanStatusGray = CyanStatusGray;
CyanStatusGray.args = {
  avatar: {
    colorScheme: "cyan",
    name: "Charles Ukpe",
    status: "gray"
  }
};
const ImageAvatar = Template.bind({});
exports.ImageAvatar = ImageAvatar;
ImageAvatar.args = {
  avatar: {
    imgURL: "https://assets.deposits.com/img/ui-kit-demo/avatar/lady1.png"
  }
};
const ImageAvatarStatus = Template.bind({});
exports.ImageAvatarStatus = ImageAvatarStatus;
ImageAvatarStatus.args = {
  avatar: {
    imgURL: "https://assets.deposits.com/img/ui-kit-demo/avatar/lady1.png",
    status: "green"
  }
};