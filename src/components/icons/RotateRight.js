import React from "react";
import PropTypes from "prop-types";

const RotateRightComponent = ({
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
        d="M5 19.8799V15.8428C5 15.0968 5.14695 14.3581 5.43262 13.6689C5.71829 12.9798 6.137 12.3537 6.66479 11.8264C7.19259 11.2992 7.81909 10.8811 8.50854 10.5962C9.198 10.3113 9.93684 10.165 10.6829 10.1658L19.8828 10.1748M14.718 5L19.887 10.1689L14.718 15.3379"
        stroke={smartColor || stroke}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLineCap}
        strokeLinejoin={strokeLineJoin}
      />
    </>
  );
};

const RotateRight = {
  component: RotateRightComponent,
  viewBox: "0 0 24 24",
  fill: "none",
};

RotateRightComponent.propTypes = {
  fill: PropTypes.string,
  stroke: PropTypes.string,
  strokeWidth: PropTypes.string,
  strokeLineCap: PropTypes.string,
  strokeLineJoin: PropTypes.string,
  smartColor: PropTypes.string,
};

RotateRightComponent.defaultProps = {
  stroke: "black",
  strokeWidth: "1.5",
  strokeLineCap: "round",
  strokeLineJoin: "round",
};

export default RotateRight;
