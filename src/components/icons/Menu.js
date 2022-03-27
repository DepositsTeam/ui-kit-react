import React from "react";
import PropTypes from "prop-types";

const MenuComponent = ({
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
        d="M3 5H20.359M3 18.186H20.359M3 11.592H20.359"
        stroke={smartColor || stroke}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLineCap}
        strokeLinejoin={strokeLineJoin}
      />
    </>
  );
};

const Menu = {
  component: MenuComponent,
  viewBox: "0 0 24 24",
  fill: "none",
};

MenuComponent.propTypes = {
  fill: PropTypes.string,
  stroke: PropTypes.string,
  strokeWidth: PropTypes.string,
  strokeLineCap: PropTypes.string,
  strokeLineJoin: PropTypes.string,
  smartColor: PropTypes.string,
};

MenuComponent.defaultProps = {
  stroke: "black",
  strokeWidth: "1.5",
  strokeLineCap: "round",
  strokeLineJoin: "round",
};

export default Menu;
