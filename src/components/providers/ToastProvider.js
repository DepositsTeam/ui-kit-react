import React, { createContext, useState } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import Box from "../box";
import classNames from "../../utils/classNames";
import Alert from "../alert";
import "./ToastProvider.css";

export const ToastContext = createContext({});
const body = document.getElementsByTagName("body")[0];

const DomPortal = ({ children, ...props }) =>
  ReactDOM.createPortal(children, body);

const ToastProvider = ({ children, position, ...props }) => {
  const [toasts, setToasts] = useState([]);

  const removeToast = (removedToast) => {
    setToasts((toasts) =>
      toasts.filter((toast) => toast.uuuuid !== removedToast.uuuuid)
    );
  };
  const renderedToasts = toasts.map((toast, index) => (
    <Alert
      key={`toast-_${index}`}
      {...toast}
      closable
      onClose={() => removeToast(toast)}
    />
  ));
  const initialValue = {
    toasts,
    setToasts,
  };
  return (
    <ToastContext.Provider value={initialValue}>
      {children}
      <DomPortal>
        <Box
          className={classNames(["ui-toast__wrapper", `position__${position}`])}
        >
          <Box className={"ui-toast__column"}>{renderedToasts}</Box>
        </Box>
      </DomPortal>
    </ToastContext.Provider>
  );
};

export default ToastProvider;

ToastProvider.propTypes = {
  position: PropTypes.oneOf([
    "top-right",
    "top-left",
    "bottom-left",
    "bottom-right",
  ]),
};

ToastProvider.defaultProps = {
  position: "top-right",
};
