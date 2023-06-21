import React from "react";
import PropTypes from "prop-types";

const MenuVComponent = ({
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
        d="M11.75 5.5C12.1642 5.5 12.5 5.16421 12.5 4.75C12.5 4.33579 12.1642 4 11.75 4C11.3358 4 11 4.33579 11 4.75C11 5.16421 11.3358 5.5 11.75 5.5Z"
        stroke={smartColor || stroke}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLineCap}
        strokeLinejoin={strokeLineJoin}
      />
      <path
        d="M11.75 13.194C12.1642 13.194 12.5 12.8582 12.5 12.444C12.5 12.0298 12.1642 11.694 11.75 11.694C11.3358 11.694 11 12.0298 11 12.444C11 12.8582 11.3358 13.194 11.75 13.194Z"
        stroke={smartColor || stroke}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLineCap}
        strokeLinejoin={strokeLineJoin}
      />
      <path
        d="M11.75 20.889C12.1642 20.889 12.5 20.5532 12.5 20.139C12.5 19.7248 12.1642 19.389 11.75 19.389C11.3358 19.389 11 19.7248 11 20.139C11 20.5532 11.3358 20.889 11.75 20.889Z"
        stroke={smartColor || stroke}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLineCap}
        strokeLinejoin={strokeLineJoin}
      />
    </>
  );
};

const MenuV = {
  component: MenuVComponent,
  viewBox: "0 0 24 24",
  fill: "none",
};

MenuVComponent.propTypes = {
  fill: PropTypes.string,
  stroke: PropTypes.string,
  strokeWidth: PropTypes.string,
  strokeLineCap: PropTypes.string,
  strokeLineJoin: PropTypes.string,
  smartColor: PropTypes.string,
};

MenuVComponent.defaultProps = {
  stroke: "black",
  strokeWidth: "1.5",
  strokeLineCap: "round",
  strokeLineJoin: "round",
};

export default MenuV;
