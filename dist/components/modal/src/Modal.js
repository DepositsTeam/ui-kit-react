"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./modal.css");

var _icon = _interopRequireDefault(require("../../icon"));

var _Close = _interopRequireDefault(require("../../icons/Close"));

var _heading = _interopRequireDefault(require("../../heading"));

var _classNames = _interopRequireDefault(require("../../../utils/classNames"));

var _box = _interopRequireDefault(require("../../box"));

const _excluded = ["greyContent", "show", "requestClose", "modalWidth"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

const Modal = _ref => {
  let {
    greyContent,
    show,
    requestClose,
    modalWidth
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const generatedClassNames = (0, _classNames.default)({
    greyContent,
    "ui-modal": true,
    "ui-modal__closerr": true
  });

  const handleCloseClicks = e => {
    if (e.target.classList.contains("ui-modal__closerr")) {
      requestClose();
    }
  };

  return show ? /*#__PURE__*/_react.default.createElement(_box.default, {
    onClick: handleCloseClicks,
    className: generatedClassNames
  }, /*#__PURE__*/_react.default.createElement(_box.default, {
    className: "ui-modal__content"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "ui-modal__heading"
  }, /*#__PURE__*/_react.default.createElement(_heading.default, {
    marginTop: 0,
    marginBottom: 0,
    is: "h5"
  }, props.heading), /*#__PURE__*/_react.default.createElement(_icon.default, {
    height: "20px",
    width: "20px",
    smartColor: "#8895A7",
    icon: _Close.default,
    className: "ui-modal__closerr",
    onClick: handleCloseClicks,
    cursor: "pointer"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "ui-modal__body"
  }, props.children))) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null);
};

var _default = Modal;
exports.default = _default;
Modal.defaultProps = {};
Modal.propTypes = {
  show: _propTypes.default.bool,
  greyContent: _propTypes.default.bool,
  requestClose: _propTypes.default.func,
  modalWidth: _propTypes.default.string
};