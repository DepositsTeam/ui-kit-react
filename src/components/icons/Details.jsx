import React from "react";
import PropTypes from "prop-types";

const DetailsComponent = ({
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
        d="M4 20.8549V4.98376C4 4.45758 4.20923 3.953 4.5813 3.58093C4.95337 3.20886 5.45794 2.99988 5.98413 2.99988H18.884C19.4102 2.99988 19.9148 3.20886 20.2869 3.58093C20.6589 3.953 20.8682 4.45758 20.8682 4.98376V18.871C20.8682 19.3972 20.6589 19.9017 20.2869 20.2738C19.9148 20.6459 19.4102 20.8549 18.884 20.8549H7.43115"
        stroke={smartColor || stroke}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLineCap}
        strokeLinejoin={strokeLineJoin}
      />
      <path
        d="M8.7832 15.374H11.3072"
        stroke={smartColor || stroke}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLineCap}
        strokeLinejoin={strokeLineJoin}
      />
      <path
        d="M8.7832 11.927H15.9552"
        stroke={smartColor || stroke}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLineCap}
        strokeLinejoin={strokeLineJoin}
      />
      <path
        d="M8.7832 8.48102H16.0812"
        stroke={smartColor || stroke}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLineCap}
        strokeLinejoin={strokeLineJoin}
      />
    </>
  );
};

const Details = {
  component: DetailsComponent,
  viewBox: "0 0 24 24",
  fill: "none",
};

DetailsComponent.propTypes = {
  fill: PropTypes.string,
  stroke: PropTypes.string,
  strokeWidth: PropTypes.string,
  strokeLineCap: PropTypes.string,
  strokeLineJoin: PropTypes.string,
  smartColor: PropTypes.string,
};

DetailsComponent.defaultProps = {
  stroke: "black",
  strokeWidth: "1.5",
  strokeLineCap: "round",
  strokeLineJoin: "round",
};

export default Details;
