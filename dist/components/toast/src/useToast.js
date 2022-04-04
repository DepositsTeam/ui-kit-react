"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useToast;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = require("react");

function useToast(props) {
  const [, setCountUp] = (0, _react.useState)(0);
  const [toasts, setToasts] = (0, _react.useState)([]);
  (0, _react.useEffect)(() => {
    const interval = setInterval(() => {
      if (toasts.length) {
        let holdingCountUp = 0;
        setCountUp(countUp => {
          holdingCountUp = countUp;
          return countUp;
        });
        let currentToast = toasts[0];
        const timeToClose = currentToast.autoClose || props.autoClose;

        if (holdingCountUp >= timeToClose) {
          let holderArray = [...toasts];
          holderArray.shift();
          setToasts(holderArray);
          setCountUp(c => 0);
        }

        setCountUp(countUp => countUp + 1);
      } else {
        setCountUp(-1);
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  });
  return [toasts, setToasts, setCountUp];
}