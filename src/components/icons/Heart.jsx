import React from "react";
import PropTypes from "prop-types";

const HeartComponent = ({
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
        d="M11.9136 6.81458C9.4276 2.40958 3.74856 3.56169 3.07156 7.60169C2.33356 12.0097 7.4446 16.7266 11.9136 19.3696C16.3816 16.7266 21.6534 12.0297 20.7544 7.60169C19.9394 3.58769 14.3996 2.40958 11.9136 6.81458Z"
        stroke={smartColor || stroke}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLineCap}
        strokeLinejoin={strokeLineJoin}
      />
    </>
  );
};

const Heart = {
  component: HeartComponent,
  viewBox: "0 0 24 24",
  fill: "none",
};

HeartComponent.propTypes = {
  fill: PropTypes.string,
  stroke: PropTypes.string,
  strokeWidth: PropTypes.string,
  strokeLineCap: PropTypes.string,
  strokeLineJoin: PropTypes.string,
  smartColor: PropTypes.string,
};

HeartComponent.defaultProps = {
  stroke: "black",
  strokeWidth: "1.5",
  strokeLineCap: "round",
  strokeLineJoin: "round",
};

export default Heart;
