"use strict";

require("core-js/modules/es.object.assign.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pushToast = exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireDefault(require("react"));

var _useToast = _interopRequireDefault(require("./useToast"));

require("./toast.css");

var _box = _interopRequireDefault(require("../../box"));

var _alert = _interopRequireDefault(require("../../alert"));

var _keyGen = _interopRequireDefault(require("../../../utils/keyGen"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classNames = _interopRequireDefault(require("../../../utils/classNames"));

const _excluded = ["position"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

let pushToast;
exports.pushToast = pushToast;

const Toast = _ref => {
  let {
    position
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const [toasts, setToasts, setCountUp] = (0, _useToast.default)(props);

  exports.pushToast = pushToast = toast => {
    if (toasts.length === 0) {
      setCountUp(-1);
    }

    setToasts(toasts => {
      toasts.push(toast);
      return toasts;
    });
  };

  const removeToastItem = index => {
    let holderArray = [...toasts];
    holderArray.splice(index, 1);
    setToasts(holderArray);

    if (index === 0) {
      setCountUp(c => 0);
    }
  };

  const toastWrapperClassName = (0, _classNames.default)({
    "ui-toast__wrapper": true,
    ["position__".concat(position)]: true
  });
  let renderedToasts = toasts.map((toast, index) => /*#__PURE__*/_react.default.createElement(_alert.default, _extends({}, toast, {
    onClick: () => removeToastItem(index),
    key: (0, _keyGen.default)(),
    closable: true
  })));
  return /*#__PURE__*/_react.default.createElement("div", {
    className: toastWrapperClassName
  }, /*#__PURE__*/_react.default.createElement(_box.default, {
    className: "ui-toast__column"
  }, /*#__PURE__*/_react.default.createElement(_alert.default, {
    colorScheme: "info",
    closable: true,
    description: "I'm here to stay... unless you close me :)"
  }), renderedToasts));
};

var _default = Toast;
exports.default = _default;
Toast.propTypes = {
  autoClose: _propTypes.default.number,
  position: _propTypes.default.oneOf(["top-right", "top-left", "bottom-left", "bottom-right"])
};
Toast.defaultProps = {
  autoClose: 5000,
  position: "top-right"
};