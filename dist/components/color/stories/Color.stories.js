"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Red900 = exports.Red800 = exports.Red700 = exports.Red600 = exports.Red500 = exports.Red400 = exports.Red300 = exports.Red200 = exports.Red100 = exports.Red = exports.Orange900 = exports.Orange800 = exports.Orange700 = exports.Orange600 = exports.Orange500 = exports.Orange400 = exports.Orange300 = exports.Orange200 = exports.Orange100 = exports.Orange = exports.Green900 = exports.Green800 = exports.Green700 = exports.Green600 = exports.Green500 = exports.Green400 = exports.Green300 = exports.Green200 = exports.Green100 = exports.Green = exports.Cyan900 = exports.Cyan800 = exports.Cyan700 = exports.Cyan600 = exports.Cyan500 = exports.Cyan400 = exports.Cyan300 = exports.Cyan200 = exports.Cyan100 = exports.Cyan = exports.Blue900 = exports.Blue800 = exports.Blue700 = exports.Blue600 = exports.Blue500 = exports.Blue400 = exports.Blue300 = exports.Blue200 = exports.Blue100 = exports.Blue = void 0;

var _Color = _interopRequireDefault(require("../src/Color"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: "Color",
  component: _Color.default
};
exports.default = _default;

const Template = args => /*#__PURE__*/React.createElement(_Color.default, args);

const Cyan = Template.bind({});
exports.Cyan = Cyan;
Cyan.args = {
  colors: [{
    colorName: "Cyan 100",
    colorCode: "#F2FAFC"
  }, {
    colorName: "Cyan 200",
    colorCode: "#BDF3FC"
  }, {
    colorName: "Cyan 300",
    colorCode: "#75E2FA"
  }, {
    colorName: "Cyan 400",
    colorCode: "#43D2FA"
  }, {
    colorName: "Cyan 500",
    colorCode: "#0DB9E9"
  }, {
    colorName: "Cyan 600",
    colorCode: "#0C9CCC"
  }, {
    colorName: "Cyan 700",
    colorCode: "#0B87B0",
    textColor: "white"
  }, {
    colorName: "Cyan 800",
    colorCode: "#085E7A",
    textColor: "white"
  }, {
    colorName: "Cyan 900",
    colorCode: "#094357",
    textColor: "white"
  }]
};
const Green = Template.bind({});
exports.Green = Green;
Green.args = {
  colors: [{
    colorName: "Green 100",
    colorCode: "#EDFFF9"
  }, {
    colorName: "Green 200",
    colorCode: "#C4EFDF"
  }, {
    colorName: "Green 300",
    colorCode: "#9BDFC4"
  }, {
    colorName: "Green 400",
    colorCode: "#71D0A7"
  }, {
    colorName: "Green 500",
    colorCode: "#27C079"
  }, {
    colorName: "Green 600",
    colorCode: "#00B058"
  }, {
    colorName: "Green 700",
    colorCode: "#158957"
  }, {
    colorName: "Green 800",
    colorCode: "#1F624A",
    textColor: "white"
  }, {
    colorName: "Green 900",
    colorCode: "#1D3B32",
    textColor: "white"
  }]
};
const Orange = Template.bind({});
exports.Orange = Orange;
Orange.args = {
  colors: [{
    colorName: "Orange 100",
    colorCode: "#FFF8F0"
  }, {
    colorName: "Orange 200",
    colorCode: "#FFF0DB"
  }, {
    colorName: "Orange 300",
    colorCode: "#FFE5C2"
  }, {
    colorName: "Orange 400",
    colorCode: "#FFD49B"
  }, {
    colorName: "Orange 500",
    colorCode: "#FFB44F"
  }, {
    colorName: "Orange 600",
    colorCode: "#FF9505"
  }, {
    colorName: "Orange 700",
    colorCode: "#E08304"
  }, {
    colorName: "Orange 800",
    colorCode: "#995A06",
    textColor: "white"
  }, {
    colorName: "Orange 900",
    colorCode: "#573302",
    textColor: "white"
  }]
};
const Red = Template.bind({});
exports.Red = Red;
Red.args = {
  colors: [{
    colorName: "Red 100",
    colorCode: "#FFF0F2"
  }, {
    colorName: "Red 200",
    colorCode: "#FCC5CE"
  }, {
    colorName: "Red 300",
    colorCode: "#F99BAB"
  }, {
    colorName: "Red 400",
    colorCode: "#E85E75"
  }, {
    colorName: "Red 500",
    colorCode: "#D62F4B",
    textColor: "white"
  }, {
    colorName: "Red 600",
    colorCode: "#AD283D",
    textColor: "white"
  }, {
    colorName: "Red 700",
    colorCode: "#842432",
    textColor: "white"
  }, {
    colorName: "Red 800",
    colorCode: "#5C1E27",
    textColor: "white"
  }, {
    colorName: "Red 900",
    colorCode: "#331418",
    textColor: "white"
  }]
};
const Blue = Template.bind({});
exports.Blue = Blue;
Blue.args = {
  colors: [{
    colorName: "Blue 100",
    colorCode: "#F7FBFF"
  }, {
    colorName: "Blue 200",
    colorCode: "#DDEFFF"
  }, {
    colorName: "Blue 300",
    colorCode: "#ACD7FF"
  }, {
    colorName: "Blue 400",
    colorCode: "#62B2FD"
  }, {
    colorName: "Blue 500",
    colorCode: "#0D7FE9"
  }, {
    colorName: "Blue 600",
    colorCode: "#0059AC",
    textColor: "white"
  }, {
    colorName: "Blue 700",
    colorCode: "#003F79",
    textColor: "white"
  }, {
    colorName: "Blue 800",
    colorCode: "#022A50",
    textColor: "white"
  }, {
    colorName: "Blue 900",
    colorCode: "#051B30",
    textColor: "white"
  }]
};
const Cyan100 = Template.bind({});
exports.Cyan100 = Cyan100;
Cyan100.args = {
  colorName: "Cyan 100",
  colorCode: "#F2FAFC"
};
Cyan100.storyName = "Cyan 100";
const Cyan200 = Template.bind({});
exports.Cyan200 = Cyan200;
Cyan200.args = {
  colorName: "Cyan 200",
  colorCode: "#BDF3FC"
};
Cyan200.storyName = "Cyan 200";
const Cyan300 = Template.bind({});
exports.Cyan300 = Cyan300;
Cyan300.args = {
  colorName: "Cyan 300",
  colorCode: "#75E2FA"
};
Cyan300.storyName = "Cyan 300";
const Cyan400 = Template.bind({});
exports.Cyan400 = Cyan400;
Cyan400.args = {
  colorName: "Cyan 400",
  colorCode: "#43D2FA"
};
Cyan400.storyName = "Cyan 400";
const Cyan500 = Template.bind({});
exports.Cyan500 = Cyan500;
Cyan500.args = {
  colorName: "Cyan 500",
  colorCode: "#0DB9E9"
};
Cyan500.storyName = "Cyan 500";
const Cyan600 = Template.bind({});
exports.Cyan600 = Cyan600;
Cyan600.args = {
  colorName: "Cyan 600",
  colorCode: "#0C9CCC"
};
Cyan600.storyName = "Cyan 600";
const Cyan700 = Template.bind({});
exports.Cyan700 = Cyan700;
Cyan700.args = {
  colorName: "Cyan 700",
  colorCode: "#0B87B0",
  textColor: "white"
};
Cyan700.storyName = "Cyan 700";
const Cyan800 = Template.bind({});
exports.Cyan800 = Cyan800;
Cyan800.args = {
  colorName: "Cyan 800",
  colorCode: "#085E7A",
  textColor: "white"
};
Cyan800.storyName = "Cyan 800";
const Cyan900 = Template.bind({});
exports.Cyan900 = Cyan900;
Cyan900.args = {
  colorName: "Cyan 900",
  colorCode: "#094357",
  textColor: "white"
};
Cyan900.storyName = "Cyan 900";
const Green100 = Template.bind({});
exports.Green100 = Green100;
Green100.args = {
  colorName: "Green 100",
  colorCode: "#EDFFF9"
};
Green100.storyName = "Green 100";
const Green200 = Template.bind({});
exports.Green200 = Green200;
Green200.args = {
  colorName: "Green 200",
  colorCode: "#C4EFDF"
};
Green200.storyName = "Green 200";
const Green300 = Template.bind({});
exports.Green300 = Green300;
Green300.args = {
  colorName: "Green 300",
  colorCode: "#9BDFC4"
};
Green300.storyName = "Green 300";
const Green400 = Template.bind({});
exports.Green400 = Green400;
Green400.args = {
  colorName: "Green 400",
  colorCode: "#71D0A7"
};
Green400.storyName = "Green 400";
const Green500 = Template.bind({});
exports.Green500 = Green500;
Green500.args = {
  colorName: "Green 500",
  colorCode: "#27C079"
};
Green500.storyName = "Green 500";
const Green600 = Template.bind({});
exports.Green600 = Green600;
Green600.args = {
  colorName: "Green 600",
  colorCode: "#00B058"
};
Green600.storyName = "Green 600";
const Green700 = Template.bind({});
exports.Green700 = Green700;
Green700.args = {
  colorName: "Green 700",
  colorCode: "#158957"
};
Green700.storyName = "Green 700";
const Green800 = Template.bind({});
exports.Green800 = Green800;
Green800.args = {
  colorName: "Green 800",
  colorCode: "#1F624A",
  textColor: "white"
};
Green800.storyName = "Green 800";
const Green900 = Template.bind({});
exports.Green900 = Green900;
Green900.args = {
  colorName: "Green 900",
  colorCode: "#1D3B32",
  textColor: "white"
};
Green900.storyName = "Green 900";
const Orange100 = Template.bind({});
exports.Orange100 = Orange100;
Orange100.args = {
  colorName: "Orange 100",
  colorCode: "#FFF8F0"
};
Orange100.storyName = "Orange 100";
const Orange200 = Template.bind({});
exports.Orange200 = Orange200;
Orange200.args = {
  colorName: "Orange 200",
  colorCode: "#FFF0DB"
};
Orange200.storyName = "Orange 200";
const Orange300 = Template.bind({});
exports.Orange300 = Orange300;
Orange300.args = {
  colorName: "Orange 300",
  colorCode: "#FFE5C2"
};
Orange300.storyName = "Orange 300";
const Orange400 = Template.bind({});
exports.Orange400 = Orange400;
Orange400.args = {
  colorName: "Orange 400",
  colorCode: "#FFD49B"
};
Orange400.storyName = "Orange 400";
const Orange500 = Template.bind({});
exports.Orange500 = Orange500;
Orange500.args = {
  colorName: "Orange 500",
  colorCode: "#FFB44F"
};
Orange500.storyName = "Orange 500";
const Orange600 = Template.bind({});
exports.Orange600 = Orange600;
Orange600.args = {
  colorName: "Orange 600",
  colorCode: "#FF9505"
};
Orange600.storyName = "Orange 600";
const Orange700 = Template.bind({});
exports.Orange700 = Orange700;
Orange700.args = {
  colorName: "Orange 700",
  colorCode: "#E08304"
};
Orange700.storyName = "Orange 700";
const Orange800 = Template.bind({});
exports.Orange800 = Orange800;
Orange800.args = {
  colorName: "Orange 800",
  colorCode: "#995A06",
  textColor: "white"
};
Orange800.storyName = "Orange 800";
const Orange900 = Template.bind({});
exports.Orange900 = Orange900;
Orange900.args = {
  colorName: "Orange 900",
  colorCode: "#573302",
  textColor: "white"
};
Orange900.storyName = "Orange 900";
const Red100 = Template.bind({});
exports.Red100 = Red100;
Red100.args = {
  colorName: "Red 100",
  colorCode: "#FFF0F2"
};
Red100.storyName = "Red 100";
const Red200 = Template.bind({});
exports.Red200 = Red200;
Red200.args = {
  colorName: "Red 200",
  colorCode: "#FCC5CE"
};
Red200.storyName = "Red 200";
const Red300 = Template.bind({});
exports.Red300 = Red300;
Red300.args = {
  colorName: "Red 300",
  colorCode: "#F99BAB"
};
Red300.storyName = "Red 300";
const Red400 = Template.bind({});
exports.Red400 = Red400;
Red400.args = {
  colorName: "Red 400",
  colorCode: "#E85E75"
};
Red400.storyName = "Red 400";
const Red500 = Template.bind({});
exports.Red500 = Red500;
Red500.args = {
  colorName: "Red 500",
  colorCode: "#D62F4B",
  textColor: "white"
};
Red500.storyName = "Red 500";
const Red600 = Template.bind({});
exports.Red600 = Red600;
Red600.args = {
  colorName: "Red 600",
  colorCode: "#AD283D",
  textColor: "white"
};
Red600.storyName = "Red 600";
const Red700 = Template.bind({});
exports.Red700 = Red700;
Red700.args = {
  colorName: "Red 700",
  colorCode: "#842432",
  textColor: "white"
};
Red700.storyName = "Red 700";
const Red800 = Template.bind({});
exports.Red800 = Red800;
Red800.args = {
  colorName: "Red 800",
  colorCode: "#5C1E27",
  textColor: "white"
};
Red800.storyName = "Red 800";
const Red900 = Template.bind({});
exports.Red900 = Red900;
Red900.args = {
  colorName: "Red 900",
  colorCode: "#331418",
  textColor: "white"
};
Red900.storyName = "Red 900";
const Blue100 = Template.bind({});
exports.Blue100 = Blue100;
Blue100.args = {
  colorName: "Blue 100",
  colorCode: "#F7FBFF"
};
Blue100.storyName = "Blue 100";
const Blue200 = Template.bind({});
exports.Blue200 = Blue200;
Blue200.args = {
  colorName: "Blue 200",
  colorCode: "#DDEFFF"
};
Blue200.storyName = "Blue 200";
const Blue300 = Template.bind({});
exports.Blue300 = Blue300;
Blue300.args = {
  colorName: "Blue 300",
  colorCode: "#ACD7FF"
};
Blue300.storyName = "Blue 300";
const Blue400 = Template.bind({});
exports.Blue400 = Blue400;
Blue400.args = {
  colorName: "Blue 400",
  colorCode: "#62B2FD"
};
Blue400.storyName = "Blue 400";
const Blue500 = Template.bind({});
exports.Blue500 = Blue500;
Blue500.args = {
  colorName: "Blue 500",
  colorCode: "#0D7FE9"
};
Blue500.storyName = "Blue 500";
const Blue600 = Template.bind({});
exports.Blue600 = Blue600;
Blue600.args = {
  colorName: "Blue 600",
  colorCode: "#0059AC",
  textColor: "white"
};
Blue600.storyName = "Blue 600";
const Blue700 = Template.bind({});
exports.Blue700 = Blue700;
Blue700.args = {
  colorName: "Blue 700",
  colorCode: "#003F79",
  textColor: "white"
};
Blue700.storyName = "Blue 700";
const Blue800 = Template.bind({});
exports.Blue800 = Blue800;
Blue800.args = {
  colorName: "Blue 800",
  colorCode: "#022A50",
  textColor: "white"
};
Blue800.storyName = "Blue 800";
const Blue900 = Template.bind({});
exports.Blue900 = Blue900;
Blue900.args = {
  colorName: "Blue 900",
  colorCode: "#051B30",
  textColor: "white"
};
Blue900.storyName = "Blue 900";