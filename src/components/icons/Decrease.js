import React from "react";
import PropTypes from "prop-types";

const DecreaseComponent = ({
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
        d="M5 4H9.07462C9.82658 4 10.5711 4.14811 11.2658 4.43587C11.9604 4.72362 12.5914 5.1454 13.1229 5.67705C13.6544 6.2087 14.0758 6.84013 14.3631 7.53465C14.6504 8.22917 14.7981 8.97327 14.7975 9.7248L14.7874 19"
        stroke={smartColor || stroke}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLineCap}
        strokeLinejoin={strokeLineJoin}
      />
      <path
        d="M20 13.7922L14.7893 19L9.57866 13.7922"
        stroke={smartColor || stroke}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLineCap}
        strokeLinejoin={strokeLineJoin}
      />
    </>
  );
};

const Decrease = {
  component: DecreaseComponent,
  viewBox: "0 0 24 24",
  fill: "none",
};

DecreaseComponent.propTypes = {
  fill: PropTypes.string,
  stroke: PropTypes.string,
  strokeWidth: PropTypes.string,
  strokeLineCap: PropTypes.string,
  strokeLineJoin: PropTypes.string,
  smartColor: PropTypes.string,
};

DecreaseComponent.defaultProps = {
  stroke: "black",
  strokeWidth: "1.5",
  strokeLineCap: "round",
  strokeLineJoin: "round",
};

export default Decrease;
