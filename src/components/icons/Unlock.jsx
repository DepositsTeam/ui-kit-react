import React from "react";
import PropTypes from "prop-types";

const UnlockComponent = ({
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
        d="M15.0996 8.1153H9.90036C7.19397 8.1153 5 10.3703 5 13.1519V15.9633C5 18.745 7.19397 21 9.90036 21H15.0996C17.806 21 20 18.745 20 15.9633V13.1519C20 10.3703 17.806 8.1153 15.0996 8.1153Z"
        stroke={smartColor || stroke}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLineCap}
        strokeLinejoin={strokeLineJoin}
      />
      <path
        d="M8.77323 8.11628L8.73016 8.00266C8.58106 7.5228 8.52535 7.01726 8.56626 6.51529C8.60717 6.01331 8.74402 5.52477 8.96872 5.0771C9.19342 4.62942 9.50154 4.23121 9.87581 3.90599C10.2501 3.58077 10.6831 3.33473 11.15 3.18148C11.8987 2.93598 12.7037 2.93969 13.4503 3.19181C14.197 3.44394 14.8474 3.93167 15.3086 4.58573"
        stroke={smartColor || stroke}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLineCap}
        strokeLinejoin={strokeLineJoin}
      />
      <path
        d="M11.0953 14.5581H13.9081"
        stroke={smartColor || stroke}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLineCap}
        strokeLinejoin={strokeLineJoin}
      />
    </>
  );
};

const Unlock = {
  component: UnlockComponent,
  viewBox: "0 0 24 24",
  fill: "none",
};

UnlockComponent.propTypes = {
  fill: PropTypes.string,
  stroke: PropTypes.string,
  strokeWidth: PropTypes.string,
  strokeLineCap: PropTypes.string,
  strokeLineJoin: PropTypes.string,
  smartColor: PropTypes.string,
};

UnlockComponent.defaultProps = {
  stroke: "black",
  strokeWidth: "1.5",
  strokeLineCap: "round",
  strokeLineJoin: "round",
};

export default Unlock;
