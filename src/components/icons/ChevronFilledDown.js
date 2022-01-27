import React from "react";
import PropTypes from "prop-types";

const ChevronFilledDownComponent = ({
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
        d="M7.10108 9.65718L11.7577 14.8872C11.8915 15.0376 12.1086 15.0376 12.2424 14.8872L16.8989 9.65718C17.1148 9.41466 16.962 9 16.6565 9H7.34344C7.03808 9 6.88516 9.41467 7.10108 9.65718Z"
        fill={smartColor || fill}
      />
    </>
  );
};

ChevronFilledDownComponent.propTypes = {
  fill: PropTypes.string,
  stroke: PropTypes.string,
  strokeWidth: PropTypes.string,
  strokeLineCap: PropTypes.string,
  strokeLineJoin: PropTypes.string,
  smartColor: PropTypes.string,
};

ChevronFilledDownComponent.defaultProps = {
  fill: "#094357",
};

const ChevronFilledDown = {
  component: ChevronFilledDownComponent,
  viewBox: "0 0 24 24",
  fill: "none",
};

export default ChevronFilledDown;
