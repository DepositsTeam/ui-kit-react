import React from "react";
import PropTypes from "prop-types";

const AddItemComponent = ({
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
        d="M17.3604 12.016V18.2315C17.3604 18.7006 17.1729 19.1504 16.8395 19.4821C16.506 19.8138 16.0539 20.0003 15.5824 20.0003H5.77742C5.3059 20.0003 4.85376 19.8138 4.52035 19.4821C4.18694 19.1504 3.99945 18.7006 3.99945 18.2315V8.47685C3.99945 8.00775 4.18694 7.55771 4.52035 7.22601C4.85376 6.89431 5.3059 6.70801 5.77742 6.70801H11.9543"
        stroke={smartColor || stroke}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLineCap}
        strokeLinejoin={strokeLineJoin}
      />
      <path
        d="M17.3597 3.99976V9.32732"
        stroke={smartColor || stroke}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLineCap}
        strokeLinejoin={strokeLineJoin}
      />
      <path
        d="M14.7207 6.66357H19.9996"
        stroke={smartColor || stroke}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLineCap}
        strokeLinejoin={strokeLineJoin}
      />
    </>
  );
};

const AddItem = {
  component: AddItemComponent,
  viewBox: "0 0 24 24",
  fill: "none",
};

AddItemComponent.propTypes = {
  fill: PropTypes.string,
  stroke: PropTypes.string,
  strokeWidth: PropTypes.string,
  strokeLineCap: PropTypes.string,
  strokeLineJoin: PropTypes.string,
  smartColor: PropTypes.string,
};

AddItemComponent.defaultProps = {
  stroke: "black",
  strokeWidth: "1.5",
  strokeLineCap: "round",
  strokeLineJoin: "round",
};

export default AddItem;
