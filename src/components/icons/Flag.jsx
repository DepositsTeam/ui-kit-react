import React from "react";
import PropTypes from "prop-types";

const FlagComponent = ({
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
        d="M5 20.856V5.97607C5 5.18679 5.31347 4.42969 5.87158 3.87158C6.42969 3.31347 7.18655 3 7.97583 3H18.614L16.2349 8.01514L18.614 13.0308H8.72388"
        stroke={smartColor || stroke}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLineCap}
        strokeLinejoin={strokeLineJoin}
      />
    </>
  );
};

const Flag = {
  component: FlagComponent,
  viewBox: "0 0 24 24",
  fill: "none",
};

FlagComponent.propTypes = {
  fill: PropTypes.string,
  stroke: PropTypes.string,
  strokeWidth: PropTypes.string,
  strokeLineCap: PropTypes.string,
  strokeLineJoin: PropTypes.string,
  smartColor: PropTypes.string,
};

FlagComponent.defaultProps = {
  stroke: "black",
  strokeWidth: "1.5",
  strokeLineCap: "round",
  strokeLineJoin: "round",
};

export default Flag;
