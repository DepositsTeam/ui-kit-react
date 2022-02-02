import { useState, useEffect } from "react";

export default function useToast(props) {
    const [, setCountUp] = useState(0);

    const [toasts, setToasts] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (toasts.length) {
                let holdingCountUp = 0;
                setCountUp((countUp) => {
                    holdingCountUp = countUp;
                    return countUp;
                });
                let currentToast = toasts[0];
                const timeToClose = currentToast.autoClose || props.autoClose;
                if (holdingCountUp >= timeToClose) {
                    let holderArray = [...toasts];
                    holderArray.shift();
                    setToasts(holderArray);
                    setCountUp((c) => 0);
                }
                setCountUp((countUp) => countUp + 1);
            } else {
                setCountUp(-1);
            }
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [toasts]);

    return [toasts, setToasts, setCountUp, ]
}
