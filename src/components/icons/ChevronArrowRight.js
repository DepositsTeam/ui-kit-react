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
        d="M9 6L15 12L9 18"
        stroke={smartColor || stroke}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLineCap}
        strokeLinejoin={strokeLineJoin}
      />
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

const ChevronArrowRight = {
  component: ArrowRightComponent,
  viewBox: "0 0 24 24",
  fill: "none",
};

export default ChevronArrowRight;
