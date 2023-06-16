import React from "react";
import PropTypes from "prop-types";

const BoltComponent = ({
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
        d="M10.5781 20.855L12.1531 13.4224H5L9.08301 3M14.4871 8.85791H19.3751L10.5281 20.8579M9.05219 3H16.5661L14.506 8.8584"
        stroke={smartColor || stroke}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLineCap}
        strokeLinejoin={strokeLineJoin}
      />
    </>
  );
};

const Bolt = {
  component: BoltComponent,
  viewBox: "0 0 24 24",
  fill: "none",
};

BoltComponent.propTypes = {
  fill: PropTypes.string,
  stroke: PropTypes.string,
  strokeWidth: PropTypes.string,
  strokeLineCap: PropTypes.string,
  strokeLineJoin: PropTypes.string,
  smartColor: PropTypes.string,
};

BoltComponent.defaultProps = {
  stroke: "black",
  strokeWidth: "1.5",
  strokeLineCap: "round",
  strokeLineJoin: "round",
};

export default Bolt;
