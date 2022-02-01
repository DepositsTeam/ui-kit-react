import React from "react";
import useToast from "./useToast";
import "./toast.css";
import Box from "../../box";
import Alert from "../../alert";
import keyGen from "../../../utils/keyGen";
import PropTypes from "prop-types";
import classNames from "../../../utils/classNames";

export let pushToast;

const Toast = ({ position, ...props }) => {
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

  const toastWrapperClassName = classNames({
    "ui-toast__wrapper": true,
    [`position__${position}`]: true,
  });

  let renderedToasts = toasts.map((toast, index) => (
    <Alert
      {...toast}
      onClick={() => removeToastItem(index)}
      key={keyGen()}
      closable
    />
  ));
  return (
    <div className={toastWrapperClassName}>
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
  position: PropTypes.oneOf([
    "top-right",
    "top-left",
    "bottom-left",
    "bottom-right",
  ]),
};

Toast.defaultProps = {
  autoClose: 5000,
  position: "top-right",
};
