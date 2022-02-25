import React from "react";
import PropTypes from "prop-types";

const ArrowRightComponent = ({
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
        d="M6 4L10 8L6 12"
        stroke={smartColor || stroke}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLineCap}
        strokeLinejoin={strokeLineJoin}
      />
      x
    </>
  );
};

ArrowRightComponent.propTypes = {
  fill: PropTypes.string,
  stroke: PropTypes.string,
  strokeWidth: PropTypes.string,
  strokeLineCap: PropTypes.string,
  strokeLineJoin: PropTypes.string,
  smartColor: PropTypes.string,
};

ArrowRightComponent.defaultProps = {
  strokeWidth: "1.5",
  strokeLineCap: "round",
  strokeLineJoin: "round",
};

const ArrowRight = {
  component: ArrowRightComponent,
  viewBox: "0 0 24 24",
  fill: "none",
};

export default ArrowRight;
