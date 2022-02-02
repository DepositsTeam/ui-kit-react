import React from "react";
import PropTypes from "prop-types";

const WarningComponent = ({
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
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.0001 2.24172C11.0768 2.24172 10.4033 2.79754 9.82709 3.52159C9.26349 4.22979 8.66372 5.26581 7.92199 6.54703L7.88928 6.60352L3.82707 13.6201L3.79433 13.6766L3.79432 13.6766C3.04978 14.9626 2.44788 16.0022 2.11333 16.8461C1.77141 17.7086 1.62431 18.5718 2.08656 19.3736C2.5488 20.1753 3.36953 20.4805 4.28727 20.6167C5.18526 20.75 6.38653 20.75 7.8725 20.75H7.93784H16.0623H16.1276C17.6136 20.75 18.8148 20.75 19.7128 20.6167C20.6306 20.4805 21.4513 20.1753 21.9136 19.3736C22.3758 18.5718 22.2287 17.7086 21.8868 16.8461C21.5522 16.0022 20.9504 14.9627 20.2059 13.6767L20.2058 13.6766L20.173 13.6201L16.1108 6.60353L16.0781 6.54702C15.3364 5.2658 14.7366 4.22979 14.173 3.52159C13.5968 2.79755 12.9233 2.24172 12.0001 2.24172ZM12.75 9.00002C12.75 8.58581 12.4143 8.25002 12 8.25002C11.5858 8.25002 11.25 8.58581 11.25 9.00002V13C11.25 13.4142 11.5858 13.75 12 13.75C12.4143 13.75 12.75 13.4142 12.75 13V9.00002ZM13.0001 16C13.0001 16.5523 12.5523 17 12.0001 17C11.4478 17 11.0001 16.5523 11.0001 16C11.0001 15.4477 11.4478 15 12.0001 15C12.5523 15 13.0001 15.4477 13.0001 16Z"
        fill={smartColor || fill}
      />
    </>
  );
};

WarningComponent.propTypes = {
  fill: PropTypes.string,
  stroke: PropTypes.string,
  strokeWidth: PropTypes.string,
  strokeLineCap: PropTypes.string,
  strokeLineJoin: PropTypes.string,
  smartColor: PropTypes.string,
};

WarningComponent.defaultProps = {
  fill: "#212934",
};

const Warning = {
  component: WarningComponent,
  viewBox: "0 0 24 24",
  fill: "none",
};

export default Warning;
