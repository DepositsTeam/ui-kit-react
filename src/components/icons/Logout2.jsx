import React from "react";
import PropTypes from "prop-types";

const Logout2Component = ({
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
        d="M11.9031 20.3669H4.48804C4.09339 20.3669 3.71485 20.2102 3.43579 19.9312C3.15674 19.6521 3 19.2735 3 18.8789V5.48792C3 5.09327 3.15674 4.71485 3.43579 4.43579C3.71485 4.15674 4.09339 4 4.48804 4H11.9031M15.9191 17.833L10.269 12.183L15.9191 6.53296M20.9411 12.1829H10.5091"
        stroke={smartColor || stroke}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLineCap}
        strokeLinejoin={strokeLineJoin}
      />
    </>
  );
};

const Logout2 = {
  component: Logout2Component,
  viewBox: "0 0 24 24",
  fill: "none",
};

Logout2Component.propTypes = {
  fill: PropTypes.string,
  stroke: PropTypes.string,
  strokeWidth: PropTypes.string,
  strokeLineCap: PropTypes.string,
  strokeLineJoin: PropTypes.string,
  smartColor: PropTypes.string,
};

Logout2Component.defaultProps = {
  stroke: "black",
  strokeWidth: "1.5",
  strokeLineCap: "round",
  strokeLineJoin: "round",
};

export default Logout2;
