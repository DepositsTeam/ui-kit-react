import React from "react";
import PropTypes from "prop-types";

const MapComponent = ({
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
        d="M8.95215 17.8818V4L3 5.16406V19.0459L8.95215 17.8818ZM8.95215 17.8818L14.9042 19.0459V5.16895L8.95203 4.00488M14.904 19.041V5.16406L20.8561 4V17.8818L14.904 19.041Z"
        stroke={smartColor || stroke}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLineCap}
        strokeLinejoin={strokeLineJoin}
      />
    </>
  );
};

const Map = {
  component: MapComponent,
  viewBox: "0 0 24 24",
  fill: "none",
};

MapComponent.propTypes = {
  fill: PropTypes.string,
  stroke: PropTypes.string,
  strokeWidth: PropTypes.string,
  strokeLineCap: PropTypes.string,
  strokeLineJoin: PropTypes.string,
  smartColor: PropTypes.string,
};

MapComponent.defaultProps = {
  stroke: "black",
  strokeWidth: "1.5",
  strokeLineCap: "round",
  strokeLineJoin: "round",
};

export default Map;
