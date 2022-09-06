import React from "react";
import PropTypes from "prop-types";

const CopyFilledComponent = ({
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
        d="M12 9.675V12.825C12 15.45 10.95 16.5 8.325 16.5H5.175C2.55 16.5 1.5 15.45 1.5 12.825V9.675C1.5 7.05 2.55 6 5.175 6H8.325C10.95 6 12 7.05 12 9.675Z"
        fill={smartColor || fill}
      />
      <path
        d="M12.8248 1.5H9.67482C7.46239 1.5 6.37403 2.25121 6.08624 4.05369C5.99844 4.60363 6.46232 5.0625 7.01923 5.0625H8.32482C11.4748 5.0625 12.9373 6.525 12.9373 9.675V10.9806C12.9373 11.5375 13.3962 12.0014 13.9461 11.9136C15.7486 11.6258 16.4998 10.5374 16.4998 8.325V5.175C16.4998 2.55 15.4498 1.5 12.8248 1.5Z"
        fill={smartColor || fill}
      />
    </>
  );
};

const Component = {
  component: CopyFilledComponent,
  viewBox: "0 0 24 24",
  fill: "none",
};

CopyFilledComponent.propTypes = {
  fill: PropTypes.string,
  stroke: PropTypes.string,
  strokeWidth: PropTypes.string,
  strokeLineCap: PropTypes.string,
  strokeLineJoin: PropTypes.string,
  smartColor: PropTypes.string,
};

CopyFilledComponent.defaultProps = {
  stroke: "black",
  strokeWidth: "1.5",
  strokeLineCap: "round",
  strokeLineJoin: "round",
};

export default Component;
