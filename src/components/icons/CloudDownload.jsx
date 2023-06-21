import React from "react";
import PropTypes from "prop-types";

const CloudDownloadComponent = ({
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
        d="M14.7234 15.8873H17.6333C18.4281 15.8874 19.195 15.5941 19.7864 15.0631C20.3778 14.5321 20.7519 13.801 20.8372 13.0108C20.9224 12.2206 20.7126 11.4272 20.248 10.7823C19.7835 10.1375 19.0968 9.68704 18.3203 9.51768C18.5564 8.11058 18.2458 6.66609 17.4519 5.48057C16.658 4.29506 15.441 3.45779 14.05 3.14024C12.6591 2.82268 11.1994 3.04902 9.96973 3.77256C8.74003 4.49611 7.83325 5.66218 7.4353 7.03233H7.42749C6.25324 7.03233 5.12695 7.49889 4.29663 8.3292C3.46631 9.15952 3 10.2858 3 11.4601C3 12.6343 3.46631 13.7606 4.29663 14.5909C5.12695 15.4212 6.25324 15.8873 7.42749 15.8873H11.6753M14.5953 18.1384L11.9263 20.8074M11.9263 20.8074L9.2574 18.1384M11.9263 20.8074L11.9264 11.6244"
        stroke={smartColor || stroke}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLineCap}
        strokeLinejoin={strokeLineJoin}
      />
    </>
  );
};

const CloudDownload = {
  component: CloudDownloadComponent,
  viewBox: "0 0 24 24",
  fill: "none",
};

CloudDownloadComponent.propTypes = {
  fill: PropTypes.string,
  stroke: PropTypes.string,
  strokeWidth: PropTypes.string,
  strokeLineCap: PropTypes.string,
  strokeLineJoin: PropTypes.string,
  smartColor: PropTypes.string,
};

CloudDownloadComponent.defaultProps = {
  stroke: "black",
  strokeWidth: "1.5",
  strokeLineCap: "round",
  strokeLineJoin: "round",
};

export default CloudDownload;
