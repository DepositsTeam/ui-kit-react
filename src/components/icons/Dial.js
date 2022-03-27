import React from "react";
import PropTypes from "prop-types";

const DialComponent = ({
  fill,
  stroke,
  smartColor,
  strokeWidth,
  strokeLineCap,
  strokeLineJoin,
  props,
}) => {
  return (
    <>
      <path
        d="M20.2585 15.7603L18.8804 14.3823C18.692 14.1939 18.4686 14.0444 18.2224 13.9424C17.9763 13.8404 17.7125 13.7881 17.446 13.7881C17.1796 13.7881 16.9158 13.8404 16.6697 13.9424C16.4235 14.0444 16.1998 14.1939 16.0115 14.3823L15.2654 15.1274C14.7898 15.6029 14.1449 15.8701 13.4724 15.8701C12.7999 15.8701 12.155 15.6029 11.6794 15.1274L8.72534 12.1743C8.48977 11.9388 8.30303 11.6593 8.17554 11.3516C8.04804 11.0438 7.98242 10.714 7.98242 10.3809C7.98242 10.0478 8.04804 9.71789 8.17554 9.41016C8.30303 9.10242 8.48977 8.8229 8.72534 8.5874L9.47144 7.84131C9.6599 7.65297 9.80937 7.42924 9.91138 7.18311C10.0134 6.93697 10.0659 6.67318 10.0659 6.40674C10.0659 6.1403 10.0134 5.87651 9.91138 5.63037C9.80937 5.38423 9.6599 5.1605 9.47144 4.97217L8.09351 3.59424C7.90517 3.40577 7.68144 3.2563 7.4353 3.1543C7.18916 3.05229 6.92537 3 6.65894 3C6.3925 3 6.12871 3.05229 5.88257 3.1543C5.63643 3.2563 5.4127 3.40577 5.22437 3.59424V3.59424C3.80001 5.01939 3 6.95189 3 8.9668C3 10.9817 3.80001 12.9142 5.22437 14.3394L9.5144 18.6294C10.9396 20.0537 12.8721 20.854 14.887 20.854C16.9019 20.854 18.8344 20.0537 20.2595 18.6294C20.6398 18.2488 20.8532 17.7328 20.853 17.1948C20.8528 16.6568 20.6391 16.1406 20.2585 15.7603V15.7603Z"
        stroke={smartColor || stroke}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLineCap}
        strokeLinejoin={strokeLineJoin}
      />
    </>
  );
};

const Dial = {
  component: DialComponent,
  viewBox: "0 0 24 24",
  fill: "none",
};

DialComponent.propTypes = {
  fill: PropTypes.string,
  stroke: PropTypes.string,
  strokeWidth: PropTypes.string,
  strokeLineCap: PropTypes.string,
  strokeLineJoin: PropTypes.string,
  smartColor: PropTypes.string,
};

DialComponent.defaultProps = {
  stroke: "black",
  strokeWidth: "1.5",
  strokeLineCap: "round",
  strokeLineJoin: "round",
};

export default Dial;
