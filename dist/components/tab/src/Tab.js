"use strict";

require("core-js/modules/es.object.assign.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./Tab.css");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _box = _interopRequireDefault(require("../../box"));

var _keyGen = _interopRequireDefault(require("../../../utils/keyGen"));

var _text = _interopRequireDefault(require("../../text"));

var _classNames = _interopRequireDefault(require("../../../utils/classNames"));

const _excluded = ["is", "text", "tabs", "horizontal", "spacing"],
      _excluded2 = ["text", "is"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

const Tab = _ref => {
  let {
    is,
    text,
    tabs,
    horizontal,
    spacing
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const wrapperClassNames = (0, _classNames.default)({
    "ui-tabs": true,
    horizontal
  });

  const generateSpacing = index => {
    if (index < tabs.length - 1) {
      if (horizontal) {
        return {
          marginRight: spacing || 0
        };
      } else {
        return {
          marginBottom: spacing || 0
        };
      }
    } else {
      return {};
    }
  };

  const mappedTabs = tabs.map((_ref2, index) => {
    let {
      text,
      is
    } = _ref2,
        tab = _objectWithoutProperties(_ref2, _excluded2);

    const spacing = generateSpacing(index);
    return /*#__PURE__*/_react.default.createElement(_box.default, _extends({
      is: is ? is : "a"
    }, spacing, tab, {
      key: (0, _keyGen.default)(),
      className: "ui-tab"
    }), /*#__PURE__*/_react.default.createElement(_text.default, {
      is: "span",
      scale: "subhead"
    }, text));
  });
  return /*#__PURE__*/_react.default.createElement("div", {
    className: wrapperClassNames
  }, mappedTabs);
};

var _default = Tab;
exports.default = _default;
Tab.propTypes = {
  tabs: _propTypes.default.array,
  horizontal: _propTypes.default.bool,
  spacing: _propTypes.default.string
};
Tab.defaultProps = {};