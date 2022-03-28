import React from "react";
import PropTypes from "prop-types";

const Location2Component = ({
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
        d="M21 3L14.5 21C14.4561 21.0957 14.3857 21.1769 14.2971 21.2338C14.2084 21.2906 14.1053 21.3209 14 21.3209C13.8947 21.3209 13.7916 21.2906 13.703 21.2338C13.6143 21.1769 13.5439 21.0957 13.5 21L10 14L3 10.5C2.90426 10.4561 2.82313 10.3857 2.76625 10.2971C2.70937 10.2084 2.67913 10.1053 2.67913 10C2.67913 9.89468 2.70937 9.79158 2.76625 9.70295C2.82313 9.61431 2.90426 9.54387 3 9.5L21 3Z"
        stroke={smartColor || stroke}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLineCap}
        strokeLinejoin={strokeLineJoin}
      />
    </>
  );
};

const Location2 = {
  component: Location2Component,
  viewBox: "0 0 24 24",
  fill: "none",
};

Location2Component.propTypes = {
  fill: PropTypes.string,
  stroke: PropTypes.string,
  strokeWidth: PropTypes.string,
  strokeLineCap: PropTypes.string,
  strokeLineJoin: PropTypes.string,
  smartColor: PropTypes.string,
};

Location2Component.defaultProps = {
  stroke: "black",
  strokeWidth: "1.5",
  strokeLineCap: "round",
  strokeLineJoin: "round",
};

export default Location2;
