import React from "react";
import PropTypes from "prop-types";

const ChevronFilledUpComponent = ({
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
        d="M6.64017 14.3598L11.7349 9.26517C11.8813 9.11872 12.1188 9.11872 12.2652 9.26517L17.3598 14.3598C17.596 14.5961 17.4288 15 17.0946 15H6.90534C6.57125 15 6.40394 14.5961 6.64017 14.3598Z"
        fill={smartColor || fill}
      />
    </>
  );
};

const ChevronFilledUp = {
  component: ChevronFilledUpComponent,
  viewBox: "0 0 24 24",
  fill: "none",
};

ChevronFilledUpComponent.propTypes = {
  fill: PropTypes.string,
  stroke: PropTypes.string,
  strokeWidth: PropTypes.string,
  strokeLineCap: PropTypes.string,
  strokeLineJoin: PropTypes.string,
  smartColor: PropTypes.string,
};

ChevronFilledUpComponent.defaultProps = {
  stroke: "black",
  strokeWidth: "1.5",
  strokeLineCap: "round",
  strokeLineJoin: "round",
};

export default ChevronFilledUp;
