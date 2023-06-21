import React from "react";
import PropTypes from "prop-types";

const PowerComponent = ({
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
            d="M16.5844 5.01849C17.9661 6.01285 19.0072 7.43129 19.5591 9.07088C20.1111 10.7105 20.1457 12.4875 19.6578 14.1484C19.17 15.8094 18.1847 17.2694 16.8428 18.3199C15.5008 19.3703 13.8708 19.9576 12.1853 19.9978C10.4997 20.038 8.84482 19.5288 7.45704 18.5435C6.06926 17.5581 5.01944 16.1466 4.45744 14.5106C3.89543 12.8747 3.85018 11.0981 4.32779 9.43399C4.80539 7.76986 5.78161 6.30357 7.1171 5.24445"
            stroke={smartColor || stroke}
            strokeWidth={strokeWidth}
            strokeLinecap={strokeLineCap}
            strokeLinejoin={strokeLineJoin}
        />
        <path
            d="M12.0001 10.4775V3"
            stroke={smartColor || stroke}
            strokeWidth={strokeWidth}
            strokeLinecap={strokeLineCap}
            strokeLinejoin={strokeLineJoin}
        />
      </>
  );
};

const Power = {
  component: PowerComponent,
  viewBox: "0 0 24 24",
  fill: "none",
};

PowerComponent.propTypes = {
  fill: PropTypes.string,
  stroke: PropTypes.string,
  strokeWidth: PropTypes.string,
  strokeLineCap: PropTypes.string,
  strokeLineJoin: PropTypes.string,
  smartColor: PropTypes.string,
};

PowerComponent.defaultProps = {
  stroke: "black",
  strokeWidth: "1.5",
  strokeLineCap: "round",
  strokeLineJoin: "round",
};

export default Power;
