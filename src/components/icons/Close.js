import React from "react";
import PropTypes from "prop-types";

const CloseComponent = ({
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
        d="M6 6L18 18M6 18L18 6L6 18Z"
        stroke={smartColor || stroke}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLineCap}
        strokeLinejoin={strokeLineJoin}
      />
    </>
  );
};

CloseComponent.propTypes = {
  fill: PropTypes.string,
  stroke: PropTypes.string,
  strokeWidth: PropTypes.string,
  strokeLineCap: PropTypes.string,
  strokeLineJoin: PropTypes.string,
  smartColor: PropTypes.string,
};

CloseComponent.defaultProps = {
  stroke: "black",
  strokeLineCap: "round",
  strokeLineJoin: "round",
  strokeWidth: "1.5",
};

const Close = {
  component: CloseComponent,
  viewBox: "0 0 24 24",
  fill: "none",
};

export default Close;
