import React from "react";
import PropTypes from "prop-types";

const ChartComponent = ({
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
        d="M20.855 4L13.0278 11.8271L10.042 8.84131L3 15.8833M20.855 4H15.7128M20.855 4L20.8559 9.14307M8.03198 4H3.00293V19.3931H20.8579V16.2271"
        stroke={smartColor || stroke}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLineCap}
        strokeLinejoin={strokeLineJoin}
      />
    </>
  );
};

const Chart = {
  component: ChartComponent,
  viewBox: "0 0 24 24",
  fill: "none",
};

ChartComponent.propTypes = {
  fill: PropTypes.string,
  stroke: PropTypes.string,
  strokeWidth: PropTypes.string,
  strokeLineCap: PropTypes.string,
  strokeLineJoin: PropTypes.string,
  smartColor: PropTypes.string,
};

ChartComponent.defaultProps = {
  stroke: "black",
  strokeWidth: "1.5",
  strokeLineCap: "round",
  strokeLineJoin: "round",
};

export default Chart;
