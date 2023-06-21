import React from "react";
import PropTypes from "prop-types";

const TimeComponent = ({
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
        d="M11.928 20.856C16.8588 20.856 20.856 16.8588 20.856 11.928C20.856 6.9972 16.8588 3 11.928 3C6.9972 3 3 6.9972 3 11.928C3 16.8588 6.9972 20.856 11.928 20.856Z"
        stroke={smartColor || stroke}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLineCap}
        strokeLinejoin={strokeLineJoin}
      />
      <path
        d="M11.9238 6.89587V11.9271H16.6289"
        stroke={smartColor || stroke}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLineCap}
        strokeLinejoin={strokeLineJoin}
      />
    </>
  );
};

const Time = {
  component: TimeComponent,
  viewBox: "0 0 24 24",
  fill: "none",
};

TimeComponent.propTypes = {
  fill: PropTypes.string,
  stroke: PropTypes.string,
  strokeWidth: PropTypes.string,
  strokeLineCap: PropTypes.string,
  strokeLineJoin: PropTypes.string,
  smartColor: PropTypes.string,
};

TimeComponent.defaultProps = {
  stroke: "black",
  strokeWidth: "1.5",
  strokeLineCap: "round",
  strokeLineJoin: "round",
};

export default Time;
