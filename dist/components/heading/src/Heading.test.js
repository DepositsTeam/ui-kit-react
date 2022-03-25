"use strict";

var _react = _interopRequireDefault(require("react"));

var _heading = _interopRequireDefault(require("./heading"));

var _react2 = require("@testing-library/react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Heading testing', () => {
  afterEach(_react2.cleanup);
  it("Test to see if heading renders", () => {
    const {
      getByTestId
    } = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_heading.default, null));
    expect(getByTestId("heading").innerHTML).toBeTruthy();
  });
  it("Test to see if heading renders correctly", () => {
    const {
      getByTestId
    } = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_heading.default, null, "Anything"));
    expect(getByTestId("heading").innerHTML).toBe('Anything');
  });
  it("Test to see if classNames are added", () => {
    const classTest = 'section-heading';
    const {
      getByTestId
    } = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_heading.default, {
      className: classTest
    }, "anything"));
    expect(getByTestId("heading").className).toContain(classTest);
  });
  it("Test to see if heading is uppercase", () => {
    const {
      getByTestId
    } = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_heading.default, {
      uppercase: true
    }, "anything"));
    expect(getByTestId("heading").className).toContain('uppercase');
  });
  it("Test to see if heading is equal in line height", () => {
    const {
      getByTestId
    } = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_heading.default, {
      equalLineHeight: true
    }, "anything"));
    expect(getByTestId("heading").className).toContain('equal-line-height');
  });
  it("Test to see if default heading component is h2", () => {
    const {
      getByTestId
    } = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_heading.default, null));
    expect(getByTestId("heading").tagName).toBe('H2');
  });
  it("Test to see if heading is correct component", () => {
    const {
      getByTestId
    } = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_heading.default, {
      is: "h5"
    }));
    expect(getByTestId("heading").tagName).toBe('H5');
  });
});