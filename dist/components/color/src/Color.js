"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.string.split.js");

var _react = _interopRequireDefault(require("react"));

var _box = _interopRequireDefault(require("../../box"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classNames = _interopRequireDefault(require("../../../utils/classNames"));

var _keyGen = _interopRequireDefault(require("../../../utils/keyGen"));

require("./color.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Color = _ref => {
  let {
    colorName,
    colorCode,
    textColor,
    colors
  } = _ref;

  const getProperColorName = colorName => {
    const colorNameArray = colorName.split(" ");
    return "".concat(colorNameArray[0].toLowerCase(), "-").concat(colorNameArray[1]);
  };

  const generatedClassName = (0, _classNames.default)({
    "ui-color": true,
    ["bg-".concat(getProperColorName(colorName))]: colorName,
    ["text-".concat(textColor)]: colorName
  });
  const generatedColors = colors !== null && colors !== void 0 && colors.length ? colors.map((color, index) => /*#__PURE__*/_react.default.createElement("div", {
    key: "ui-color__".concat((0, _keyGen.default)()),
    className: "ui-color__container bg-".concat(getProperColorName(color.colorName), " text-").concat(color.textColor)
  }, /*#__PURE__*/_react.default.createElement("p", null, color.colorName), /*#__PURE__*/_react.default.createElement("p", null, color.colorCode))) : /*#__PURE__*/_react.default.createElement("div", {
    className: "ui-color__container"
  }, /*#__PURE__*/_react.default.createElement("p", null, colorName), /*#__PURE__*/_react.default.createElement("p", null, colorCode));
  return /*#__PURE__*/_react.default.createElement(_box.default, {
    is: "div",
    className: generatedClassName
  }, generatedColors);
};

Color.propTypes = {
  colorName: _propTypes.default.string.isRequired,
  colorCode: _propTypes.default.string.isRequired,
  textColor: _propTypes.default.string,
  colors: _propTypes.default.array
};
Color.defaultProps = {
  colorName: "Cyan 100",
  colorCode: "#F2FAFC"
};
var _default = Color;
exports.default = _default;