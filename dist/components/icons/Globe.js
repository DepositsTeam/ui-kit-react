"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

const _excluded = ["fill", "stroke", "smartColor", "strokeWidth", "strokeLineCap", "strokeLineJoin", "fillRule", "clipRule"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

const GlobeComponent = _ref => {
  let {
    fill,
    stroke,
    smartColor,
    strokeWidth,
    strokeLineCap,
    strokeLineJoin,
    fillRule,
    clipRule
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("path", {
    fillRule: fillRule,
    clipRule: clipRule,
    fill: smartColor || fill,
    d: "M4.73565 11.1562H7.81049C7.97274 8.82285 8.78426 6.9305 9.58899 5.58928C9.72198 5.36763 9.85504 5.16056 9.98535 4.96855C7.18785 5.76859 5.0761 8.19301 4.73565 11.1562ZM7.8105 12.8438H4.73565C5.0761 15.807 7.1879 18.2315 9.98545 19.0315C9.85512 18.8394 9.72201 18.6323 9.58899 18.4106C8.78427 17.0694 7.97276 15.1771 7.8105 12.8438ZM9.50279 12.8438H14.4972C14.3391 14.7962 13.6548 16.391 12.964 17.5424C12.6195 18.1166 12.2756 18.5764 12 18.91C11.7244 18.5764 11.3805 18.1166 11.036 17.5424C10.3452 16.391 9.66089 14.7962 9.50279 12.8438ZM14.4973 11.1562H9.50278C9.66087 9.20377 10.3452 7.60887 11.036 6.45748C11.3805 5.88327 11.7244 5.42342 12 5.08991C12.2756 5.42342 12.6195 5.88327 12.964 6.45748C13.6548 7.60887 14.3391 9.20377 14.4973 11.1562ZM16.1895 12.8438C16.0273 15.1771 15.2157 17.0694 14.411 18.4106C14.278 18.6323 14.1449 18.8394 14.0145 19.0315C16.8121 18.2315 18.9239 15.807 19.2644 12.8438H16.1895ZM19.2644 11.1562H16.1895C16.0273 8.82285 15.2157 6.9305 14.411 5.58928C14.278 5.36763 14.1449 5.16056 14.0147 4.96854C16.8122 5.76858 18.9239 8.19301 19.2644 11.1562ZM12 3C7.02943 3 3 7.02943 3 12C3 16.9706 7.02943 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02943 16.9706 3 12 3Z"
  }));
};

const Globe = {
  component: GlobeComponent,
  viewBox: "0 0 24 24",
  fill: "none"
};
GlobeComponent.propTypes = {
  fill: _propTypes.default.string,
  stroke: _propTypes.default.string,
  strokeWidth: _propTypes.default.string,
  strokeLineCap: _propTypes.default.string,
  strokeLineJoin: _propTypes.default.string,
  smartColor: _propTypes.default.string,
  fillRule: _propTypes.default.string,
  clipRule: _propTypes.default.string
};
GlobeComponent.defaultProps = {
  stroke: "black",
  strokeWidth: "1.5",
  strokeLineCap: "round",
  strokeLineJoin: "round",
  fillRule: "evenodd",
  clipRule: "evenodd"
};
var _default = Globe;
exports.default = _default;