"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Portal = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Portal = _ref => {
  let {
    children,
    className = "root-portal",
    el = "div"
  } = _ref;

  const [container] = _react.default.useState(() => {
    // This will be executed only on the initial render
    // https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
    return document.createElement(el);
  });

  _react.default.useEffect(() => {
    container.classList.add(className);
    document.body.appendChild(container);
    console.log(container);
    document.body.insertAdjacentElement("beforeend", container);
    return () => {
      document.body.removeChild(container);
    };
  }, []);

  return /*#__PURE__*/_reactDom.default.createPortal(children, container);
};

exports.Portal = Portal;