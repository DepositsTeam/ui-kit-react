"use strict";

var _react = _interopRequireDefault(require("react"));

var _Text = _interopRequireDefault(require("./Text"));

var _react2 = require("@testing-library/react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Text testing', () => {
  afterEach(_react2.cleanup); // it("Test if text would render", () => {
  //     const div = document.createElement('div')
  //     reactDom.render(<Text />, div)
  // })

  it("Test to see if text renders", () => {
    const {
      getByTestId
    } = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_Text.default, null));
    expect(getByTestId("text")).toBeTruthy();
  });
  it("Test to see if text renders correctly", () => {
    const {
      getByTestId
    } = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_Text.default, null, "Anything"));
    expect(getByTestId("text").innerHTML).toBe('Anything');
  });
  it("Test to see if classNames are added", () => {
    const text = 'header-text';
    const {
      getByTestId
    } = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_Text.default, {
      className: text
    }, "anything"));
    expect(getByTestId("text").className).toContain(text);
  });
  it("Test to see if text is uppercase", () => {
    const {
      getByTestId
    } = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_Text.default, {
      uppercase: true
    }, "anything"));
    expect(getByTestId("text").className).toContain('uppercase');
  });
  it("Test to see if text is equal in line height", () => {
    const {
      getByTestId
    } = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_Text.default, {
      equalLineHeight: true
    }, "anything"));
    expect(getByTestId("text").className).toContain('equal-line-height');
  });
});