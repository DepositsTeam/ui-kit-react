import React from "react";
import PropTypes from "prop-types";

const CardComponent = ({
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
        d="M21 12.7707V15.9881C21 16.5216 20.7893 17.0333 20.4143 17.4106C20.0392 17.7879 19.5306 18 19.0001 18H4.99995C4.46951 18 3.96087 17.7879 3.5858 17.4106C3.21073 17.0333 3.00006 16.5216 3.00006 15.9881V7.01176C3.00006 6.47819 3.21073 5.96653 3.5858 5.58924C3.96087 5.21195 4.46951 5.00003 4.99995 5.00003H19.0001C19.5306 5.00003 20.0392 5.21195 20.4143 5.58924C20.7893 5.96653 21 6.47819 21 7.01176V9.84096"
        fill={fill || "white"}
      />
      <path
        d="M21 12.7707V15.9881C21 16.5216 20.7893 17.0333 20.4143 17.4106C20.0392 17.7879 19.5306 18 19.0001 18H4.99995C4.46951 18 3.96087 17.7879 3.5858 17.4106C3.21073 17.0333 3.00006 16.5216 3.00006 15.9881V7.01176C3.00006 6.47819 3.21073 5.96653 3.5858 5.58924C3.96087 5.21195 4.46951 5.00003 4.99995 5.00003H19.0001C19.5306 5.00003 20.0392 5.21195 20.4143 5.58924C20.7893 5.96653 21 6.47819 21 7.01176V9.84096"
        stroke={smartColor || stroke}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLineCap}
        strokeLinejoin={strokeLineJoin}
      />
      <path
        d="M3 9.83994H20.999"
        stroke={smartColor || stroke}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLineCap}
        strokeLinejoin={strokeLineJoin}
      />
      <path
        d="M6.67441 13.9935H10.7178"
        stroke={smartColor || stroke}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLineCap}
        strokeLinejoin={strokeLineJoin}
      />
    </>
  );
};

CardComponent.propTypes = {
  fill: PropTypes.string,
  stroke: PropTypes.string,
  strokeWidth: PropTypes.string,
  strokeLineCap: PropTypes.string,
  strokeLineJoin: PropTypes.string,
  smartColor: PropTypes.string,
};

CardComponent.defaultProps = {
  fill: "#fff",
  smartColor: "#8895A7",
  strokeWidth: "1.5",
  strokeLineCap: "round",
  strokeLineJoin: "round",
};

const Card = {
  component: CardComponent,
  viewBox: "0 0 24 24",
  fill: "none",
};

export default Card;
