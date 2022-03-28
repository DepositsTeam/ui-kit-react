import React from "react";
import PropTypes from "prop-types";

const ShieldComponent = ({
  fill,
  stroke,
  smartColor,
  strokeWidth,
  strokeLineCap,
  strokeLineJoin,
  ...props
}) => {
  return (
    <>
      <path
        d="M15.4601 9.38818L11.3591 13.4892L9.09308 11.4232M9.45518 4.021L12.13 3L19.2601 5.72021V11.2783C19.2598 13.4293 18.566 15.5226 17.2816 17.248C15.9972 18.9735 14.1905 20.2386 12.13 20.856C10.0695 20.2386 8.26294 18.9725 6.97852 17.2471C5.6941 15.5217 5.00028 13.4284 5 11.2774V5.71926L6.97412 4.96633"
        stroke={smartColor || stroke}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLineCap}
        strokeLinejoin={strokeLineJoin}
      />
    </>
  );
};

const Shield = {
  component: ShieldComponent,
  viewBox: "0 0 24 24",
  fill: "none",
};

ShieldComponent.propTypes = {
  fill: PropTypes.string,
  stroke: PropTypes.string,
  strokeWidth: PropTypes.string,
  strokeLineCap: PropTypes.string,
  strokeLineJoin: PropTypes.string,
  smartColor: PropTypes.string,
};

ShieldComponent.defaultProps = {
  stroke: "black",
  strokeWidth: "1.5",
  strokeLineCap: "round",
  strokeLineJoin: "round",
};

export default Shield;
