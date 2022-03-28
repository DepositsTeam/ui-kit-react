import React from "react";
import PropTypes from "prop-types";

const InfoOutlineComponent = ({
  fill,
  stroke,
  smartColor,
  strokeWidth,
  strokeLineCap,
  strokeLineJoin,
  fillRule,
  clipRule,
  props,
}) => {
  return (
    <>
      <path
        d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z"
        stroke={smartColor || stroke}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLineCap}
        strokeLinejoin={strokeLineJoin}
      />
      <path
        d="M11.8646 11.0753V15.5834"
        stroke={smartColor || stroke}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLineCap}
        strokeLinejoin={strokeLineJoin}
      />
      <path
        d="M11.8557 9.43359C12.3506 9.43359 12.7517 9.03242 12.7517 8.53754C12.7517 8.04266 12.3506 7.64148 11.8557 7.64148C11.3608 7.64148 10.9596 8.04266 10.9596 8.53754C10.9596 9.03242 11.3608 9.43359 11.8557 9.43359Z"
        fill={smartColor || fill}
      />
    </>
  );
};

const InfoOutline = {
  component: InfoOutlineComponent,
  viewBox: "0 0 24 24",
  fill: "none",
};

InfoOutlineComponent.propTypes = {
  fill: PropTypes.string,
  stroke: PropTypes.string,
  strokeWidth: PropTypes.string,
  strokeLineCap: PropTypes.string,
  strokeLineJoin: PropTypes.string,
  smartColor: PropTypes.string,
  fillRule: PropTypes.string,
  clipRule: PropTypes.string,
};

InfoOutlineComponent.defaultProps = {
  stroke: "black",
  strokeWidth: "1.5",
  strokeLineCap: "round",
  strokeLineJoin: "round",
  fillRule: "evenodd",
  clipRule: "evenodd",
};

export default InfoOutline;
