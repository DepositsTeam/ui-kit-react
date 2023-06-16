import { useContext } from "react";
import { ToastContext } from "../../components/providers/ToastProvider.jsx";
import uniqueRandomString from "../uniqueRandomString";

export const usePushToast = () => {
  const { setToasts } = useContext(ToastContext);

  const pushToast = (toast) => {
    const newToastID = uniqueRandomString(30, 8);

    const currentToast = {
      ...toast,
      uuuuid: newToastID,
      autoclose: toast.autoclose ? toast.autoclose : 3,
    };
    setToasts((toasts) => [...toasts, currentToast]);
    setTimeout(() => {
      setToasts((toasts) =>
        toasts.filter((toast) => toast.uuuuid !== newToastID)
      );
    }, currentToast.autoclose * 1000);
  };
  return { pushToast };
};
