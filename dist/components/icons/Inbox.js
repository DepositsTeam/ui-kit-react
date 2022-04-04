"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const InboxComponent = _ref => {
  let {
    fill,
    stroke,
    smartColor,
    strokeWidth,
    strokeLineCap,
    strokeLineJoin,
    props
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("path", {
    d: "M3 14.2369V17.3199C3 17.8461 3.20898 18.3507 3.58105 18.7228C3.95313 19.0949 4.45794 19.304 4.98413 19.304H19.3669C19.8931 19.304 20.3979 19.0949 20.77 18.7228C21.1421 18.3507 21.3511 17.8461 21.3511 17.3199V11.1499H15.7571C15.5737 11.9629 15.1192 12.6894 14.4683 13.2098C13.8173 13.7303 13.0085 14.0139 12.175 14.0139C11.3416 14.0139 10.5328 13.7303 9.88184 13.2098C9.23087 12.6894 8.77642 11.9629 8.59302 11.1499H3M12.185 14.212C13.0181 14.2117 13.8263 13.9284 14.4772 13.4083C15.1281 12.8883 15.5829 12.1625 15.767 11.35H21.361L18.4401 4H5.93007L3.00918 11.35H8.60317C8.78746 12.1624 9.24214 12.8881 9.89296 13.4081C10.5438 13.9281 11.3519 14.2115 12.185 14.212Z",
    stroke: smartColor || stroke,
    strokeWidth: strokeWidth,
    strokeLinecap: strokeLineCap,
    strokeLinejoin: strokeLineJoin
  }));
};

const Inbox = {
  component: InboxComponent,
  viewBox: "0 0 24 24",
  fill: "none"
};
InboxComponent.propTypes = {
  fill: _propTypes.default.string,
  stroke: _propTypes.default.string,
  strokeWidth: _propTypes.default.string,
  strokeLineCap: _propTypes.default.string,
  strokeLineJoin: _propTypes.default.string,
  smartColor: _propTypes.default.string
};
InboxComponent.defaultProps = {
  stroke: "black",
  strokeWidth: "1.5",
  strokeLineCap: "round",
  strokeLineJoin: "round"
};
var _default = Inbox;
exports.default = _default;