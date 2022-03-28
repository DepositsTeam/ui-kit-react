import React from "react";
import PropTypes from "prop-types";

const CutComponent = ({
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
        d="M20.768 4.15405L9.10901 15.9361M13.056 11.7989L9.33002 8.03394M20.768 19.593L15.049 13.814M9.88 17.9161C9.88 19.5398 8.56372 20.8561 6.94 20.8561C5.31628 20.8561 4 19.5398 4 17.9161C4 16.2924 5.31628 14.9761 6.94 14.9761C8.56372 14.9761 9.88 16.2924 9.88 17.9161ZM9.88 5.94C9.88 7.56372 8.56372 8.88 6.94 8.88C5.31628 8.88 4 7.56372 4 5.94C4 4.31628 5.31628 3 6.94 3C8.56372 3 9.88 4.31628 9.88 5.94Z"
        stroke={smartColor || stroke}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLineCap}
        strokeLinejoin={strokeLineJoin}
      />
    </>
  );
};

const Cut = {
  component: CutComponent,
  viewBox: "0 0 24 24",
  fill: "none",
};

CutComponent.propTypes = {
  fill: PropTypes.string,
  stroke: PropTypes.string,
  strokeWidth: PropTypes.string,
  strokeLineCap: PropTypes.string,
  strokeLineJoin: PropTypes.string,
  smartColor: PropTypes.string,
};

CutComponent.defaultProps = {
  stroke: "black",
  strokeWidth: "1.5",
  strokeLineCap: "round",
  strokeLineJoin: "round",
};

export default Cut;
