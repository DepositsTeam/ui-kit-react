import React from "react";
import PropTypes from "prop-types";


const ChevronArrowLeftComponent = ({
	fill,
	stroke,
    smartColor,
	strokeWidth,
	strokeLinecap,
	strokeLinejoin,
	props,
}) => {
	return (
		<>
			<path d="M7 1L1 7L7 13" fill={smartColor || fill} />
		</>
	);
};


ChevronArrowLeftComponent.propTypes = {
    fill: PropTypes.string,
    stroke: PropTypes.string,
    strokeWidth: PropTypes.string,
    strokeLineCap: PropTypes.string,
    strokeLineJoin: PropTypes.string,
    smartColor: PropTypes.string,
};

ChevronArrowLeftComponent.defaultProps = {
    fill: "#094357",
  };
  
  const ChevronArrowLeft = {
    component: ChevronArrowLeftComponent,
    viewBox: "0 0 24 24",
    fill: "none",
  };

export default ChevronArrowLeft;
