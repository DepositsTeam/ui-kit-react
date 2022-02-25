import React from 'react'
import PropTypes from "prop-types";


const ChevronArrowRightComponent = ({
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
        d="M1 1L7 7L1 13"
        fill={smartColor || fill}
      />
    </>  )
}

ChevronArrowRightComponent.propTypes = {
    fill: PropTypes.string,
    stroke: PropTypes.string,
    strokeWidth: PropTypes.string,
    strokeLineCap: PropTypes.string,
    strokeLineJoin: PropTypes.string,
    smartColor: PropTypes.string,
  };
  
  ChevronArrowRightComponent.defaultProps = {
    fill: "#094357",
  };
  
  const ChevronArrowRight = {
    component: ChevronArrowRightComponent,
    viewBox: "0 0 24 24",
    fill: "none",
  };

export default ChevronArrowRight;