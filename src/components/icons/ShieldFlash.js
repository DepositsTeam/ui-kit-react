import React from "react";
import PropTypes from "prop-types";

const ShieldFlashComponent = ({
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
        d="M12.13 20.855C14.1905 20.2377 15.9971 18.9725 17.2816 17.2471C18.566 15.5217 19.2598 13.4279 19.2601 11.2769V5.71979L12.13 3.00006L9.4549 4.02008"
        stroke={smartColor || stroke}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLineCap}
        strokeLinejoin={strokeLineJoin}
      />
      <path
        d="M6.97507 4.96594L4.99997 5.71887V11.277C5.00025 13.428 5.69406 15.5218 6.97849 17.2472C8.26291 18.9726 10.0696 20.2378 12.1301 20.8551"
        stroke={smartColor || stroke}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLineCap}
        strokeLinejoin={strokeLineJoin}
      />
      <path
        d="M12.1301 7.53906L9.80811 11.0981H14.4519L12.1301 14.9272"
        stroke={smartColor || stroke}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLineCap}
        strokeLinejoin={strokeLineJoin}
      />
    </>
  );
};

const ShieldFlash = {
  component: ShieldFlashComponent,
  viewBox: "0 0 24 24",
  fill: "none",
};

ShieldFlashComponent.propTypes = {
  fill: PropTypes.string,
  stroke: PropTypes.string,
  strokeWidth: PropTypes.string,
  strokeLineCap: PropTypes.string,
  strokeLineJoin: PropTypes.string,
  smartColor: PropTypes.string,
};

ShieldFlashComponent.defaultProps = {
  stroke: "black",
  strokeWidth: "1.5",
  strokeLineCap: "round",
  strokeLineJoin: "round",
};

export default ShieldFlash;
