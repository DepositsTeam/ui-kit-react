import React from "react";
import PropTypes from "prop-types";

const GemComponent = ({
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
        d="M3.43091 6.82202L2 9.21509L12.116 20.8552C12.146 20.7642 15.0828 9.21631 15.0828 9.21631L13.1219 3.00024M4.79999 4.53223L5.716 3H18.5159L22.2329 9.21631L12.117 20.856M12.4969 9.21606H22.0739M9.41089 9.21606H9.99689"
        stroke={smartColor || stroke}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLineCap}
        strokeLinejoin={strokeLineJoin}
      />
    </>
  );
};

const Gem = {
  component: GemComponent,
  viewBox: "0 0 24 24",
  fill: "none",
};

GemComponent.propTypes = {
  fill: PropTypes.string,
  stroke: PropTypes.string,
  strokeWidth: PropTypes.string,
  strokeLineCap: PropTypes.string,
  strokeLineJoin: PropTypes.string,
  smartColor: PropTypes.string,
};

GemComponent.defaultProps = {
  stroke: "black",
  strokeWidth: "1.5",
  strokeLineCap: "round",
  strokeLineJoin: "round",
};

export default Gem;
