import React from "react";
import PropTypes from "prop-types";

const Increase2Component = ({
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
        d="M5 19.887H9.04102C9.78695 19.887 10.5255 19.74 11.2146 19.4543C11.9037 19.1687 12.5297 18.7501 13.0569 18.2224C13.5841 17.6947 14.0024 17.0682 14.2874 16.3789C14.5724 15.6896 14.7187 14.951 14.718 14.2051L14.708 5.00488M19.8789 10.1689L14.71 5L9.54102 10.1689"
        stroke={smartColor || stroke}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLineCap}
        strokeLinejoin={strokeLineJoin}
      />
    </>
  );
};

const Increase2 = {
  component: Increase2Component,
  viewBox: "0 0 24 24",
  fill: "none",
};

Increase2Component.propTypes = {
  fill: PropTypes.string,
  stroke: PropTypes.string,
  strokeWidth: PropTypes.string,
  strokeLineCap: PropTypes.string,
  strokeLineJoin: PropTypes.string,
  smartColor: PropTypes.string,
};

Increase2Component.defaultProps = {
  stroke: "black",
  strokeWidth: "1.5",
  strokeLineCap: "round",
  strokeLineJoin: "round",
};

export default Increase2;
