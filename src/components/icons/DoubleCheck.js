import React from "react";
import PropTypes from "prop-types";

const DoubleCheckComponent = ({
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
        d="M7.6041 12.417L12.0211 16.834L20.8551 8M9.71899 14.532L16.251 8M3 12.417L7.417 16.834"
        stroke={smartColor || stroke}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLineCap}
        strokeLinejoin={strokeLineJoin}
      />
    </>
  );
};

const DoubleCheck = {
  component: DoubleCheckComponent,
  viewBox: "0 0 24 24",
  fill: "none",
};

DoubleCheckComponent.propTypes = {
  fill: PropTypes.string,
  stroke: PropTypes.string,
  strokeWidth: PropTypes.string,
  strokeLineCap: PropTypes.string,
  strokeLineJoin: PropTypes.string,
  smartColor: PropTypes.string,
};

DoubleCheckComponent.defaultProps = {
  stroke: "black",
  strokeWidth: "1.5",
  strokeLineCap: "round",
  strokeLineJoin: "round",
};

export default DoubleCheck;
