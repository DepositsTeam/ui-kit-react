import React from "react";
import PropTypes from "prop-types";

const ChevronFilledRightComponent = ({
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
        d="M9.65718 7.11118L14.8872 12.2335C15.0376 12.3807 15.0376 12.6194 14.8872 12.7667L9.65718 17.8888C9.41466 18.1263 9 17.9582 9 17.6223V7.37779C9 7.04189 9.41467 6.87367 9.65718 7.11118Z"
        fill={smartColor || fill}
      />
    </>
  );
};

const ChevronFilledRight = {
  component: ChevronFilledRightComponent,
  viewBox: "0 0 24 24",
  fill: "none",
};

ChevronFilledRightComponent.propTypes = {
  fill: PropTypes.string,
  stroke: PropTypes.string,
  strokeWidth: PropTypes.string,
  strokeLineCap: PropTypes.string,
  strokeLineJoin: PropTypes.string,
  smartColor: PropTypes.string,
};

ChevronFilledRightComponent.defaultProps = {
  stroke: "black",
  strokeWidth: "1.5",
  strokeLineCap: "round",
  strokeLineJoin: "round",
};

export default ChevronFilledRight;
