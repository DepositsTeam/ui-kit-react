import React from "react";
import PropTypes from "prop-types";

const DropComponent = ({
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
        d="M12.0025 20.854C12.9383 20.8526 13.8644 20.6637 14.7261 20.2988C15.5879 19.934 16.368 19.4005 17.0203 18.7295C17.6727 18.0585 18.184 17.2638 18.5245 16.3921C18.8649 15.5204 19.0275 14.5893 19.0025 13.6538C18.7385 7.29081 12.0025 3 12.0025 3C9.2862 4.82059 7.12041 7.34943 5.74042 10.314C5.63242 10.5813 5.53447 10.8545 5.44647 11.1338M12.0025 20.8552C11.0667 20.8537 10.1408 20.6645 9.27908 20.2996C8.41738 19.9347 7.63744 19.4012 6.98513 18.7302C6.33282 18.0593 5.82122 17.2645 5.48074 16.3928C5.14026 15.5212 4.97765 14.5905 5.00247 13.655"
        stroke={smartColor || stroke}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLineCap}
        strokeLinejoin={strokeLineJoin}
      />
    </>
  );
};

const Drop = {
  component: DropComponent,
  viewBox: "0 0 24 24",
  fill: "none",
};

DropComponent.propTypes = {
  fill: PropTypes.string,
  stroke: PropTypes.string,
  strokeWidth: PropTypes.string,
  strokeLineCap: PropTypes.string,
  strokeLineJoin: PropTypes.string,
  smartColor: PropTypes.string,
};

DropComponent.defaultProps = {
  stroke: "black",
  strokeWidth: "1.5",
  strokeLineCap: "round",
  strokeLineJoin: "round",
};

export default Drop;
