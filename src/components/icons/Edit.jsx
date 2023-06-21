import React from "react";
import PropTypes from "prop-types";

const EditComponent = ({
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
        d="M4.30656 14.913L3 20.2908L8.37781 18.9842L19.452 7.90982C19.9909 7.37006 20.2938 6.63862 20.2938 5.87584C20.2938 5.11307 19.9909 4.38139 19.452 3.84164V3.84164C18.9122 3.30266 18.1808 3 17.418 3C16.6552 3 15.9235 3.30266 15.3838 3.84164L4.30656 14.913Z"
        stroke={smartColor || stroke}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLineCap}
        strokeLinejoin={strokeLineJoin}
      />
      <path
        d="M15.1781 6.46466L17.3953 8.68184"
        stroke={smartColor || stroke}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLineCap}
        strokeLinejoin={strokeLineJoin}
      />
      <path
        d="M3.49881 18.2422L5.04377 19.794"
        stroke={smartColor || stroke}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLineCap}
        strokeLinejoin={strokeLineJoin}
      />
      <path
        d="M10.1871 20.2899H20.2947"
        stroke={smartColor || stroke}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLineCap}
        strokeLinejoin={strokeLineJoin}
      />
    </>
  );
};

const Edit = {
  component: EditComponent,
  viewBox: "0 0 24 24",
  fill: "none",
};

EditComponent.propTypes = {
  fill: PropTypes.string,
  stroke: PropTypes.string,
  strokeWidth: PropTypes.string,
  strokeLineCap: PropTypes.string,
  strokeLineJoin: PropTypes.string,
  smartColor: PropTypes.string,
};

EditComponent.defaultProps = {
  stroke: "black",
  strokeWidth: "1.5",
  strokeLineCap: "round",
  strokeLineJoin: "round",
};

export default Edit;
