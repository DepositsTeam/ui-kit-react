import React from "react";
import PropTypes from "prop-types";

const StarComponent = ({
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
        d="M12.1741 17.5499L17.845 20.5499L16.762 14.2019L21.3499 9.7019L15.01 8.776L12.175 3L9.34009 8.776L3 9.7019L7.58789 14.2019L6.50488 20.5499L12.1741 17.5499Z"
        stroke={smartColor || stroke}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLineCap}
        strokeLinejoin={strokeLineJoin}
      />
    </>
  );
};

const Star = {
  component: StarComponent,
  viewBox: "0 0 24 24",
  fill: "none",
};

StarComponent.propTypes = {
  fill: PropTypes.string,
  stroke: PropTypes.string,
  strokeWidth: PropTypes.string,
  strokeLineCap: PropTypes.string,
  strokeLineJoin: PropTypes.string,
  smartColor: PropTypes.string,
};

StarComponent.defaultProps = {
  stroke: "black",
  strokeWidth: "1.5",
  strokeLineCap: "round",
  strokeLineJoin: "round",
};

export default Star;
