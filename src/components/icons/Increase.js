import React from "react";
import PropTypes from "prop-types";

const IncreaseComponent = ({
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
        d="M19.9999 19H15.9246C15.1723 18.9999 14.4275 18.8515 13.7326 18.5637C13.0377 18.2759 12.4061 17.8543 11.8745 17.3227C11.3428 16.791 10.9212 16.1598 10.6338 15.4653C10.3464 14.7708 10.1988 14.0264 10.1995 13.2749L10.2096 4.00195"
        stroke={smartColor || stroke}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLineCap}
        strokeLinejoin={strokeLineJoin}
      />
      <path
        d="M5 9.20708L10.2128 4L15.4255 9.20708"
        stroke={smartColor || stroke}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLineCap}
        strokeLinejoin={strokeLineJoin}
      />
    </>
  );
};

const Increase = {
  component: IncreaseComponent,
  viewBox: "0 0 24 24",
  fill: "none",
};

IncreaseComponent.propTypes = {
  fill: PropTypes.string,
  stroke: PropTypes.string,
  strokeWidth: PropTypes.string,
  strokeLineCap: PropTypes.string,
  strokeLineJoin: PropTypes.string,
  smartColor: PropTypes.string,
};

IncreaseComponent.defaultProps = {
  stroke: "black",
  strokeWidth: "1.5",
  strokeLineCap: "round",
  strokeLineJoin: "round",
};

export default Increase;
