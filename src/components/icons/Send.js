import React from "react";
import PropTypes from "prop-types";

const SendComponent = ({
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
        d="M10 14L21 3"
        stroke={smartColor || stroke}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLineCap}
        strokeLinejoin={strokeLineJoin}
      />
      <path
        d="M20 4L14.3234 19.7198C14.2851 19.8034 14.2236 19.8742 14.1462 19.9239C14.0688 19.9736 13.9787 20 13.8868 20C13.7948 20 13.7047 19.9736 13.6273 19.9239C13.5499 19.8742 13.4884 19.8034 13.4501 19.7198L10.3935 13.6065L4.28022 10.5499C4.19661 10.5116 4.12576 10.4501 4.07608 10.3727C4.02641 10.2953 4 10.2052 4 10.1132C4 10.0213 4.02641 9.93123 4.07608 9.85383C4.12576 9.77642 4.19661 9.7149 4.28022 9.67659L20 4Z"
        stroke={smartColor || stroke}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLineCap}
        strokeLinejoin={strokeLineJoin}
      />
    </>
  );
};

const Send = {
  component: SendComponent,
  viewBox: "0 0 24 24",
  fill: "none",
};

SendComponent.propTypes = {
  fill: PropTypes.string,
  stroke: PropTypes.string,
  strokeWidth: PropTypes.string,
  strokeLineCap: PropTypes.string,
  strokeLineJoin: PropTypes.string,
  smartColor: PropTypes.string,
};

SendComponent.defaultProps = {
  stroke: "black",
  strokeWidth: "1.5",
  strokeLineCap: "round",
  strokeLineJoin: "round",
};

export default Send;
