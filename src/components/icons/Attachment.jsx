import React from "react";
import PropTypes from "prop-types";

const AttachmentComponent = ({
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
        d="M18.4709 13.1455L11.9509 19.6465C11.0813 20.5132 9.9022 21 8.6727 21C7.44319 21 6.26382 20.5132 5.39428 19.6465V19.6465C4.50139 18.7562 4 17.5487 4 16.2896C4 15.0306 4.50139 13.823 5.39428 12.9328L14.3952 3.95861C15.011 3.3449 15.846 3 16.7166 3C17.5873 3 18.4225 3.3449 19.0383 3.95861C19.3432 4.26264 19.5851 4.62339 19.7501 5.02062C19.9152 5.41786 20 5.8437 20 6.27367C20 6.70363 19.9152 7.12947 19.7501 7.52671C19.5851 7.92395 19.3432 8.28469 19.0383 8.58872L10.4509 17.1508C10.2775 17.3238 10.0716 17.4608 9.845 17.5545C9.61837 17.6482 9.37554 17.6963 9.13021 17.6963C8.88488 17.6963 8.64205 17.6482 8.41542 17.5545C8.18879 17.4608 7.9829 17.3238 7.80951 17.1508V17.1508C7.45923 16.8015 7.26237 16.3276 7.26237 15.8337C7.26237 15.3398 7.45923 14.8659 7.80951 14.5167L13.8239 8.52028"
        stroke={smartColor || stroke}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLineCap}
        strokeLinejoin={strokeLineJoin}
      />
    </>
  );
};

const Attachment = {
  component: AttachmentComponent,
  viewBox: "0 0 24 24",
  fill: "none",
};

AttachmentComponent.propTypes = {
  fill: PropTypes.string,
  stroke: PropTypes.string,
  strokeWidth: PropTypes.string,
  strokeLineCap: PropTypes.string,
  strokeLineJoin: PropTypes.string,
  smartColor: PropTypes.string,
};

AttachmentComponent.defaultProps = {
  stroke: "black",
  strokeWidth: "1.5",
  strokeLineCap: "round",
  strokeLineJoin: "round",
};

export default Attachment;
