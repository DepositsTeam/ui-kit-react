import React from "react";
import PropTypes from "prop-types";

const BendLeftComponent = ({
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
        d="M18.8879 4V8.04102C18.8879 8.78703 18.7407 9.52569 18.4551 10.2148C18.1694 10.904 17.7507 11.5301 17.2229 12.0574C16.6951 12.5846 16.0686 13.0027 15.3792 13.2876C14.6897 13.5725 13.9509 13.7188 13.2048 13.718L4.00488 13.709M9.16895 18.8799L4 13.7109L9.16895 8.54199"
        stroke={smartColor || stroke}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLineCap}
        strokeLinejoin={strokeLineJoin}
      />
    </>
  );
};

const BendLeft = {
  component: BendLeftComponent,
  viewBox: "0 0 24 24",
  fill: "none",
};

BendLeftComponent.propTypes = {
  fill: PropTypes.string,
  stroke: PropTypes.string,
  strokeWidth: PropTypes.string,
  strokeLineCap: PropTypes.string,
  strokeLineJoin: PropTypes.string,
  smartColor: PropTypes.string,
};

BendLeftComponent.defaultProps = {
  stroke: "black",
  strokeWidth: "1.5",
  strokeLineCap: "round",
  strokeLineJoin: "round",
};

export default BendLeft;
