"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.symbol.description.js");

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

require("./Banner.css");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _box = _interopRequireDefault(require("../../box"));

var _text = _interopRequireDefault(require("../../text"));

var _icon = _interopRequireDefault(require("../../icon"));

var _Info = _interopRequireDefault(require("../../icons/Info"));

var _Warning = _interopRequireDefault(require("../../icons/Warning"));

var _Error = _interopRequireDefault(require("../../icons/Error"));

var _Check = _interopRequireDefault(require("../../icons/Check"));

var _Close = _interopRequireDefault(require("../../icons/Close"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const Banner = _ref => {
  let {
    onClick,
    colorScheme,
    title,
    description,
    removable
  } = _ref;
  const [visible, setVisible] = (0, _react.useState)(true);
  const schemeIcons = {
    info: _Info.default,
    warning: _Warning.default,
    error: _Error.default,
    success: _Check.default
  };

  const remove = () => {
    if (onClick && typeof onClick === "function") {
      onClick();
    }

    setVisible(false);
  };

  return visible ? /*#__PURE__*/_react.default.createElement(_box.default, {
    className: "color-scheme__".concat(colorScheme, " ui-banner")
  }, /*#__PURE__*/_react.default.createElement(_box.default, {
    className: "text-content"
  }, colorScheme !== "default" && /*#__PURE__*/_react.default.createElement(_icon.default, {
    className: "ui-banner-icon",
    icon: schemeIcons[colorScheme]
  }), /*#__PURE__*/_react.default.createElement(_text.default, {
    scale: "subhead",
    className: "ui-banner__title text-gray-700",
    "font-face": "circularSTD"
  }, title), /*#__PURE__*/_react.default.createElement(_text.default, {
    scale: "subhead",
    className: "ui-banner__description text-gray-600",
    "font-face": "circularSTD"
  }, /*#__PURE__*/_react.default.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: description
    }
  }))), removable && /*#__PURE__*/_react.default.createElement(_icon.default, {
    icon: _Close.default,
    onClick: remove,
    className: "ui-banner_close-icon",
    "smart-color": "currentcolor"
  })) : /*#__PURE__*/_react.default.createElement("div", null);
};

var _default = Banner;
exports.default = _default;
Banner.defaultProps = {
  colorScheme: "default"
};
Banner.propTypes = {
  title: _propTypes.default.string,
  description: _propTypes.default.string,
  colorScheme: _propTypes.default.oneOf(["default", "info", "warning", "error", "success"]),
  removable: _propTypes.default.bool,
  onClick: _propTypes.default.func
};