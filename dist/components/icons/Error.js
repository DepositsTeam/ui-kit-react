"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ErrorComponent = _ref => {
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
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M7.89749 2.01923C7.69858 2.01923 7.50781 2.09825 7.36716 2.2389L2.23896 7.36711C2.0983 7.50776 2.01929 7.69852 2.01929 7.89744V16.1026C2.01929 16.3015 2.0983 16.4922 2.23896 16.6329L7.36716 21.7611C7.50781 21.9018 7.69858 21.9808 7.89749 21.9808H16.1026C16.3015 21.9808 16.4923 21.9018 16.6329 21.7611L21.7612 16.6329C21.9018 16.4922 21.9808 16.3015 21.9808 16.1026V7.89744C21.9808 7.69852 21.9018 7.50776 21.7612 7.36711L16.6329 2.2389C16.4923 2.09825 16.3015 2.01923 16.1026 2.01923H7.89749ZM12.7501 7.89743C12.7501 7.48322 12.4143 7.14743 12.0001 7.14743C11.5858 7.14743 11.2501 7.48322 11.2501 7.89743V13.0256C11.2501 13.4399 11.5858 13.7756 12.0001 13.7756C12.4143 13.7756 12.7501 13.4399 12.7501 13.0256V7.89743ZM13.0257 16.1026C13.0257 16.669 12.5665 17.1282 12.0001 17.1282C11.4336 17.1282 10.9744 16.669 10.9744 16.1026C10.9744 15.5361 11.4336 15.0769 12.0001 15.0769C12.5665 15.0769 13.0257 15.5361 13.0257 16.1026Z",
    fill: smartColor || fill
  }));
};

ErrorComponent.propTypes = {
  fill: _propTypes.default.string,
  stroke: _propTypes.default.string,
  strokeWidth: _propTypes.default.string,
  strokeLineCap: _propTypes.default.string,
  strokeLineJoin: _propTypes.default.string,
  smartColor: _propTypes.default.string
};
ErrorComponent.defaultProps = {
  fill: "#212934"
};
const Error = {
  component: ErrorComponent,
  viewBox: "0 0 24 24",
  fill: "none"
};
var _default = Error;
exports.default = _default;