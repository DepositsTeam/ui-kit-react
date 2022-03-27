import React from "react";
import PropTypes from "prop-types";

const CloudComponent = ({
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
        d="M10.0569 18.8937H17.6321C18.4262 18.8929 19.1919 18.5993 19.7825 18.0685C20.3731 17.5377 20.747 16.8072 20.8323 16.0177C20.9176 15.2282 20.7083 14.4353 20.2446 13.7907C19.781 13.146 19.0957 12.6954 18.3201 12.525C18.5586 11.117 18.2494 9.67075 17.4558 8.48352C16.6622 7.29629 15.4442 6.45813 14.052 6.14026C12.6598 5.82239 11.1987 6.04939 9.96851 6.77454C8.73827 7.49969 7.83218 8.66767 7.43604 10.0397H7.427C6.25289 10.0397 5.12685 10.5063 4.29663 11.3366C3.46641 12.1668 3 13.2928 3 14.4669C3 15.641 3.46641 16.7671 4.29663 17.5973C5.12685 18.4275 6.25289 18.8937 7.427 18.8937"
        stroke={smartColor || stroke}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLineCap}
        strokeLinejoin={strokeLineJoin}
      />
    </>
  );
};

const Cloud = {
  component: CloudComponent,
  viewBox: "0 0 24 24",
  fill: "none",
};

CloudComponent.propTypes = {
  fill: PropTypes.string,
  stroke: PropTypes.string,
  strokeWidth: PropTypes.string,
  strokeLineCap: PropTypes.string,
  strokeLineJoin: PropTypes.string,
  smartColor: PropTypes.string,
};

CloudComponent.defaultProps = {
  stroke: "black",
  strokeWidth: "1.5",
  strokeLineCap: "round",
  strokeLineJoin: "round",
};

export default Cloud;
