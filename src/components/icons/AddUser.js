import React from "react";
import PropTypes from "prop-types";

const AddUserComponent = ({
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
        d="M9.99277 13.6949C11.8712 13.6949 13.394 12.1364 13.394 10.2139C13.394 8.2914 11.8712 6.73291 9.99277 6.73291C8.11431 6.73291 6.59152 8.2914 6.59152 10.2139C6.59152 12.1364 8.11431 13.6949 9.99277 13.6949Z"
        stroke={smartColor || stroke}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLineCap}
        strokeLinejoin={strokeLineJoin}
      />
      <path
        d="M4 19.0001C4 17.5937 4.54588 16.245 5.51754 15.2506C6.4892 14.2561 7.80705 13.6974 9.18119 13.6974H10.8017C12.1758 13.6974 13.4937 14.2561 14.4653 15.2506C15.437 16.245 15.9829 17.5937 15.9829 19.0001"
        stroke={smartColor || stroke}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLineCap}
        strokeLinejoin={strokeLineJoin}
      />
      <path
        d="M18.4231 4V9.46579"
        stroke={smartColor || stroke}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLineCap}
        strokeLinejoin={strokeLineJoin}
      />
      <path
        d="M15.7351 6.73291H21"
        stroke={smartColor || stroke}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLineCap}
        strokeLinejoin={strokeLineJoin}
      />
    </>
  );
};

const AddUser = {
  component: AddUserComponent,
  viewBox: "0 0 24 24",
  fill: "none",
};

AddUserComponent.propTypes = {
  fill: PropTypes.string,
  stroke: PropTypes.string,
  strokeWidth: PropTypes.string,
  strokeLineCap: PropTypes.string,
  strokeLineJoin: PropTypes.string,
  smartColor: PropTypes.string,
};

AddUserComponent.defaultProps = {
  stroke: "black",
  strokeWidth: "1.5",
  strokeLineCap: "round",
  strokeLineJoin: "round",
};

export default AddUser;
