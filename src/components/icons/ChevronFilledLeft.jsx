import React from "react";
import PropTypes from "prop-types";

const ChevronFilledLeftComponent = ({
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
        d="M14.3598 6.64019L9.26517 11.7349C9.11873 11.8814 9.11873 12.1188 9.26517 12.2652L14.3598 17.3598C14.5961 17.5961 15 17.4288 15 17.0948V6.90536C15 6.57126 14.5961 6.40395 14.3598 6.64019Z"
        fill={smartColor || fill}
      />
    </>
  );
};

const ChevronFilledLeft = {
  component: ChevronFilledLeftComponent,
  viewBox: "0 0 24 24",
  fill: "none",
};

ChevronFilledLeftComponent.propTypes = {
  fill: PropTypes.string,
  stroke: PropTypes.string,
  strokeWidth: PropTypes.string,
  strokeLineCap: PropTypes.string,
  strokeLineJoin: PropTypes.string,
  smartColor: PropTypes.string,
};

ChevronFilledLeftComponent.defaultProps = {
  stroke: "black",
  strokeWidth: "1.5",
  strokeLineCap: "round",
  strokeLineJoin: "round",
};

export default ChevronFilledLeft;
