import React from "react";
import PropTypes from "prop-types";

const MicComponent = ({
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
        d="M18.7729 12.2128C18.7729 13.9065 18.1002 15.5311 16.9026 16.7289C15.705 17.9266 14.0807 18.5997 12.387 18.6C10.693 18.6 9.0684 17.9272 7.87061 16.7294C6.67281 15.5316 6 13.9067 6 12.2128M12.3859 20.855V18.599M12.3859 3C13.8832 3 15.0969 4.21376 15.0969 5.711V12.176C15.0969 13.6732 13.8832 14.887 12.3859 14.887C10.8887 14.887 9.67493 13.6732 9.67493 12.176V5.711C9.67493 4.21376 10.8887 3 12.3859 3Z"
        stroke={smartColor || stroke}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLineCap}
        strokeLinejoin={strokeLineJoin}
      />
    </>
  );
};

const Mic = {
  component: MicComponent,
  viewBox: "0 0 24 24",
  fill: "none",
};

MicComponent.propTypes = {
  fill: PropTypes.string,
  stroke: PropTypes.string,
  strokeWidth: PropTypes.string,
  strokeLineCap: PropTypes.string,
  strokeLineJoin: PropTypes.string,
  smartColor: PropTypes.string,
};

MicComponent.defaultProps = {
  stroke: "black",
  strokeWidth: "1.5",
  strokeLineCap: "round",
  strokeLineJoin: "round",
};

export default Mic;
