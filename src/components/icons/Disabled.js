import React from "react";
import PropTypes from "prop-types";

const DisabledComponent = ({
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
        d="M5.621 18.235L18.235 5.621M20.856 11.928C20.856 16.8588 16.8588 20.856 11.928 20.856C6.9972 20.856 3 16.8588 3 11.928C3 6.9972 6.9972 3 11.928 3C16.8588 3 20.856 6.9972 20.856 11.928Z"
        stroke={smartColor || stroke}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLineCap}
        strokeLinejoin={strokeLineJoin}
      />
    </>
  );
};

const Disabled = {
  component: DisabledComponent,
  viewBox: "0 0 24 24",
  fill: "none",
};

DisabledComponent.propTypes = {
  fill: PropTypes.string,
  stroke: PropTypes.string,
  strokeWidth: PropTypes.string,
  strokeLineCap: PropTypes.string,
  strokeLineJoin: PropTypes.string,
  smartColor: PropTypes.string,
};

DisabledComponent.defaultProps = {
  stroke: "black",
  strokeWidth: "1.5",
  strokeLineCap: "round",
  strokeLineJoin: "round",
};

export default Disabled;
