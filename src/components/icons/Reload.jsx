import React from "react";
import PropTypes from "prop-types";

const ReloadComponent = ({
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
        d="M19.95 11C19.6971 9.07074 18.7498 7.29978 17.2853 6.01862C15.8209 4.73747 13.9397 4.03395 11.9939 4.03977C10.0482 4.04559 8.17123 4.76034 6.71446 6.05023C5.25769 7.34012 4.32096 9.11672 4.07962 11.0475C3.83828 12.9782 4.30887 14.9307 5.4033 16.5395C6.49774 18.1483 8.14098 19.3031 10.0254 19.7877C11.9099 20.2723 13.9064 20.0534 15.6411 19.1722C17.3759 18.2909 18.73 16.8077 19.45 15M19.95 20V15H14.95"
        stroke={smartColor || stroke}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLineCap}
        strokeLinejoin={strokeLineJoin}
      />
      <path
        d="M15.1222 10.0612C15.6801 10.0612 16.1324 9.60889 16.1324 9.05097C16.1324 8.49305 15.6801 8.04077 15.1222 8.04077C14.5643 8.04077 14.112 8.49305 14.112 9.05097C14.112 9.60889 14.5643 10.0612 15.1222 10.0612Z"
        stroke={smartColor || stroke}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLineCap}
        strokeLinejoin={strokeLineJoin}
      />
    </>
  );
};

const Reload = {
  component: ReloadComponent,
  viewBox: "0 0 24 24",
  fill: "none",
};

ReloadComponent.propTypes = {
  fill: PropTypes.string,
  stroke: PropTypes.string,
  strokeWidth: PropTypes.string,
  strokeLineCap: PropTypes.string,
  strokeLineJoin: PropTypes.string,
  smartColor: PropTypes.string,
};

ReloadComponent.defaultProps = {
  stroke: "black",
  strokeWidth: "1.5",
  strokeLineCap: "round",
  strokeLineJoin: "round",
};

export default Reload;
