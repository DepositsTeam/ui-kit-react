import React, { useState, useEffect } from "react";
import useToast from "./useToast";
import "./toast.css";
import Box from "../../box";
import Alert from "../../e-alert";
import keyGen from "../../../utils/keyGen";
import PropTypes from "prop-types";

export let pushToast;

const Toast = (props) => {
  const [toasts, setToasts, setCountUp] = useToast(props);

  pushToast = (toast) => {
    if (toasts.length === 0) {
      setCountUp(-1);
    }
    setToasts((toasts) => {
      toasts.push(toast);
      return toasts;
    });
  };

  const removeToastItem = (index) => {
    let holderArray = [...toasts];
    holderArray.splice(index, 1);
    setToasts(holderArray);
    if (index === 0) {
      setCountUp((c) => 0);
    }
  };

  let renderedToasts = toasts.map((toast, index) => (
    <Alert
      {...toast}
      onClick={() => removeToastItem(index)}
      key={keyGen()}
      closable
    />
  ));
  return (
    <div className={"ui-toast__wrapper position__top-right"}>
      <Box className={"ui-toast__column"}>
        <Alert
          colorScheme={"info"}
          closable
          description={"I'm here to stay... unless you close me :)"}
        />
        {renderedToasts}
      </Box>
    </div>
  );
};

export default Toast;

Toast.propTypes = {
  autoClose: PropTypes.number,
};

Toast.defaultProps = {
  autoClose: 5000,
};
