"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const VideoComponent = _ref => {
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
    d: "M4.98413 6.00195C4.45794 6.00195 3.95313 6.21094 3.58105 6.58301C3.20898 6.95508 3 7.45965 3 7.98584V16.0068C3 16.533 3.20898 17.0376 3.58105 17.4097C3.95313 17.7817 4.45794 17.9907 4.98413 17.9907H13.0051C13.5313 17.9907 14.0359 17.7817 14.408 17.4097C14.78 17.0376 14.989 16.533 14.989 16.0068V14.2158L19.4121 16.479C19.5633 16.5564 19.7318 16.5933 19.9016 16.5869C20.0714 16.5805 20.2367 16.5305 20.3816 16.4419C20.5265 16.3533 20.6462 16.2292 20.7292 16.0811C20.8123 15.9329 20.856 15.7656 20.856 15.5957V8.396C20.856 8.22611 20.8123 8.05883 20.7292 7.91064C20.6462 7.76246 20.5265 7.63794 20.3816 7.54932C20.2367 7.46069 20.0714 7.41122 19.9016 7.40479C19.7318 7.39835 19.5633 7.43529 19.4121 7.5127L14.989 9.77588V7.98389C14.989 7.4577 14.78 6.95313 14.408 6.58105C14.0359 6.20898 13.5313 6 13.0051 6H7.46313",
    stroke: smartColor || stroke,
    strokeWidth: strokeWidth,
    strokeLinecap: strokeLineCap,
    strokeLinejoin: strokeLineJoin
  }));
};

const Video = {
  component: VideoComponent,
  viewBox: "0 0 24 24",
  fill: "none"
};
VideoComponent.propTypes = {
  fill: _propTypes.default.string,
  stroke: _propTypes.default.string,
  strokeWidth: _propTypes.default.string,
  strokeLineCap: _propTypes.default.string,
  strokeLineJoin: _propTypes.default.string,
  smartColor: _propTypes.default.string
};
VideoComponent.defaultProps = {
  stroke: "black",
  strokeWidth: "1.5",
  strokeLineCap: "round",
  strokeLineJoin: "round"
};
var _default = Video;
exports.default = _default;