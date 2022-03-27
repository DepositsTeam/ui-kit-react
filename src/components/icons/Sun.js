import React from "react";
import PropTypes from "prop-types";

const SunComponent = ({
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
        d="M11.928 3V4.994M11.928 18.861V20.855M3 11.927H4.994M18.861 11.927H20.855M18.24 5.61499L16.83 7.02499M7.02501 16.83L5.61501 18.24M5.61501 5.61499L7.02501 7.02499M16.83 16.83L18.24 18.24M15.751 11.928C15.751 14.0394 14.0394 15.751 11.928 15.751C9.81661 15.751 8.105 14.0394 8.105 11.928C8.105 9.8166 9.81661 8.10498 11.928 8.10498C14.0394 8.10498 15.751 9.8166 15.751 11.928Z"
        stroke={smartColor || stroke}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLineCap}
        strokeLinejoin={strokeLineJoin}
      />
    </>
  );
};

const Sun = {
  component: SunComponent,
  viewBox: "0 0 24 24",
  fill: "none",
};

SunComponent.propTypes = {
  fill: PropTypes.string,
  stroke: PropTypes.string,
  strokeWidth: PropTypes.string,
  strokeLineCap: PropTypes.string,
  strokeLineJoin: PropTypes.string,
  smartColor: PropTypes.string,
};

SunComponent.defaultProps = {
  stroke: "black",
  strokeWidth: "1.5",
  strokeLineCap: "round",
  strokeLineJoin: "round",
};

export default Sun;
